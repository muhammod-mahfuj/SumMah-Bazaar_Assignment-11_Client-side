
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContexts/AuthContext';
import SocialLogIn from '../Shared/SocialLogIn';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("register",location);
    const from = location.state || "/";


    const handleRegister = (e) => {
          e.preventDefault();
          const form = e.target;
          const name= form.name.value;
          const email= form.email.value;
          const password= form.password.value;
          const photo= form.photo.value;

          console.log(name, email, password, photo);

          //passsword validaton
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
            if(!passwordRegex.test(password)){
                 alert("Password must be at least 6 characters, include 1 uppercase, 1 lowercase, and 1 special character.");
            };

            createUser(email, password)
            .then((result) => {
                    const user = result.user;
                    console.log(user);
                    navigate(from);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                   console.log(errorMessage);
                });

    }
    return (
        <div>
             <div className="card bg-base-100 w-full my-28  mx-auto max-w-sm shrink-0 shadow-2xl">
                            
                            <form onSubmit={handleRegister} className="card-body space-y-3">
                                <h1 className='font-extrabold mx-auto text-3xl my-2'>Register</h1>
                                  <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
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
                                  <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="link" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control text-center mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                               <div className='text-center my-5'>
                                    <SocialLogIn></SocialLogIn>
                               </div>
                            <div className='p-5 pt-0 text-center'>Already Have a Account? <Link to="/login" className='text-orange-800 font-bold'>logIn</Link></div>
            </div>
         
        </div>
    );
};

export default Register;