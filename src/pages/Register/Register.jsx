import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import NavBar from "../Shared/NavBar/NavBar";


const Register = () => {

    const { isDark, createUser, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = e.target;
        const terms = form.terms.checked;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, terms, email, password);

        // reset error & success
        setRegisterError('');
        setSuccess('');

        // validition of password and term
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer!');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/
            .test(password)) {
            setRegisterError('Your password should have at least one uppercase and one special character!');
            return;
        }
        else if (!terms) {
            setRegisterError('Please Accept Our Terms and Condition!');
            return;
        }

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')
                const user = { name, email, password };
                fetch('https://digital-dynamo-jihad-24.vercel.app/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('User Added in DataBase')
                            // success alert
                            Swal.fire({
                                icon: 'success',
                                title: 'User Created Successfully'
                            })
                        }
                    })

                // navigate after register
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                setRegisterError(error.message)
                //  error alert
                Swal.fire({
                    icon: 'error',
                    title: `${error.message}`
                })
            })
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
                const email = result?.user?.email;
                const displayName = result?.user?.displayName;
                const user = { email, displayName }

                fetch('https://digital-dynamo-jihad-24.vercel.app/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('User Added in DataBase')
                            // success alert
                            Swal.fire({
                                icon: 'success',
                                title: 'User Login Successfull'
                            })
                        }
                    })

                // navigate after login
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                // error alert
                Swal.fire({
                    icon: 'error',
                    title: `${error.message}`
                })
            })
    }
    console.log(navigate);

    return (
        <div className={`pb-24 ${isDark ? "bg-black text-white" : "bg-white text-black"}`} >
            <NavBar></NavBar>
            <div className="">
                <h1 className="text-4xl mt-10 font-bold text-center" data-aos="fade-down">Register your account!</h1>
                <form
                    onSubmit={handleRegister}
                    className={`card-body md:w-3/4 lg:w-1/2 mx-auto ${isDark && "text-black"}`}
                >
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-700">{success}</p>
                    }
                    <div className="form-control " data-aos="fade-left">
                        <label className="label">
                            <span className={`label-text ${isDark && "text-white"}`}>Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered bg-slate-200" required />
                    </div>
                    <div className="form-control " data-aos="fade-right">
                        <label className="label">
                            <span className={`label-text ${isDark && "text-white"}`}>Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            className="input input-bordered bg-slate-200" required />
                    </div>
                    <div className="form-control relative" data-aos="fade-left">
                        <label className="label">
                            <span className={`label-text ${isDark && "text-white"}`}>Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Your Password"
                            className="input input-bordered bg-slate-200" required />
                        <span className="absolute top-[3.2rem] right-3" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className="flex" >
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms"><a href="#" className={`${isDark && "text-white"}`}>Acceept our Terms and Condition</a></label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                        <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-6">Login With Google</button>
                    </div>

                </form>
                <p className="text-center text-[#706F6F] font-medium">Already Have An Account ?
                    <Link to={"/login"} className="text-[#F75B5F] font-bold">  Login Now!</Link> </p>

            </div>
        </div>
    );
};

export default Register;