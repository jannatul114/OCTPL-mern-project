import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const handlesignOut = () => {
        signOut(auth);
    }

    console.log(user);
    return (
        <div>
            <div class="navbar bg-base-100 px-5 py-2">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Carrer</a></li>
                            <li><a>services</a></li>
                            <li><div class="avatar block">
                                <div class="w-12 rounded-full">
                                    {
                                        user && user?.photoURL !== null ? <img src={user?.photoURL} alt="" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" />
                                    }
                                </div>
                            </div></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">OCTPL</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-4 ">
                        <li className='hover:bg-primary hover:text-white'><Link to="/home">Home</Link></li>
                        <li className='hover:bg-primary hover:text-white'><a>About</a></li>
                        <li className='hover:bg-primary hover:text-white'><a>Contact</a></li>
                        <li className='hover:bg-primary hover:text-white'><a>Carrer</a></li>
                        <li className='hover:bg-primary hover:text-white'><a>services</a></li>

                    </ul>
                </div>
                {
                    user ? <div class="navbar-end gap-3">
                        <p>  <button onClick={handlesignOut} class="btn btn-outline btn-primary text-white rounded-none">sign out</button></p>
                    </div> :
                        <div class="navbar-end gap-3">
                            <Link to={'/login'}>  <button class="btn btn-outline btn-primary text-white rounded-none">Login</button></Link>
                        </div>
                }
                <Link to={'/profile'}>
                    <div class="w-14 rounded-full">
                        <div class="lg:ml-4 avatar lg:block hidden">
                            {
                                user && user ? <img src={user?.photoURL} alt="" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" />
                            }
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;