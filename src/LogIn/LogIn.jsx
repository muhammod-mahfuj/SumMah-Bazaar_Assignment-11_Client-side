import  { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContexts/AuthContext';
import SocialLogIn from '../Shared/SocialLogIn';

const LogIn = () => {
    const {signInUser} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("log IN",location)
    const from = location.state || "/";

    const HandleSignIn = (e) => {
       e.preventDefault();
       const form = e.target;
       const email= form.email.value;
       const password = form.password.value;

       console.log(email,password)

       signInUser(email, password)
       .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return (
        <div>
            <div className="card bg-base-100 w-full my-28  mx-auto max-w-sm shrink-0 shadow-2xl">
                
                <form onSubmit={HandleSignIn} className="card-body space-y-3">
                    <h1 className='font-extrabold mx-auto text-3xl my-2'>LogIn</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control text-center mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                    <div className='text-center my-5'>
                                    <SocialLogIn></SocialLogIn>
                    </div>
                <div className='p-5 pt-0 text-center'>Don't Have a Account? <Link to="/register" className='text-orange-800 font-bold'>Register</Link></div>
            </div>
        </div>
    );
};

export default LogIn;