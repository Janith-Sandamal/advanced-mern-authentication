import React from 'react';
import './Header.scss';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {GrSecure} from 'react-icons/gr';
import { NavLink,Link, useNavigate } from 'react-router-dom';


// function to check if the link is active
const activeLink = ({isActive}) => (isActive ? 'active' : '');

const Header = () => {

    // function to go to home page
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };

  return (
    <div>
        <header className='header'>
            <nav >
                <div className='logo' onClick={goHome}>

                <GrSecure size={35}/>
                <span>PROTECT 🥷</span>

                </div>

                <ul className='home-links'>

                    <li className='--flex-center'>
                        <HiOutlineUserCircle size={20}/>
                        <p className='--color-white'>Hi! Janith </p>
                    </li>

                    <li >
                        <button className='--btn --btn-primary'>
                            <Link to="/login">Login</Link>
                        </button>
                    </li>

                    <li>
                        <NavLink to="/profile" className={activeLink}>
                            Profile
                        </NavLink>
                    </li>

                    <li >
                        <button className='--btn --btn-secondary'>
                            Logout
                        </button>
                    </li>

                </ul>

            </nav>
        </header>
    </div>
  )
}

export default Header