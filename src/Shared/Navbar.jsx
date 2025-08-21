import { useContext } from 'react';
import logo from '../assets/sm_logo.jpeg';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../contexts/AuthContexts/AuthContext';

const Navbar = () => {

    const {users , signOutUser} =useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then( () => {
            console.log("signOut The user")
        })
        .catch(error => {
           console.log("failed to sign out")
        })
    }

    const links = <>
                   <li><NavLink to='/' className='mr-5 font-bold text-lg'>Home </NavLink></li> 
                    <li><NavLink to='/queries' className='mr-5 font-bold text-lg'>Queries </NavLink></li>
                    <li><NavLink to='/recommendationForMe' className='mr-5 font-bold text-lg'>Recommendations For Me </NavLink></li>
                   <li> <NavLink to='/myQueries' className='mr-5 font-bold text-lg'>My Queries </NavLink></li>
                   <li><NavLink to='/myrecommendations' className='mr-5 font-bold text-lg'>My Recommendations </NavLink></li> 
              </>
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="logo" className='w-12 h-9' />SumMah Bazaar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ?<>
                         <div className='mr-5'>{users?.displayName} </div>
                         <div className='mr-5'>{users?.email} </div>
                         <button onClick={handleSignOut}  className='btn btn-warning font-bold text-xl'>Sign Out</button>
                    </> 
                    
                    : <Link to ='/login' className="btn btn-primary">LogIn</Link>
                }
                
            </div>
            </div>
        </div>
    );
};

export default Navbar;