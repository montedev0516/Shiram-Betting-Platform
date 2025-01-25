import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from './LogoutButton'; // Import LogoutButton
import { display, width } from '@mui/system';
// Import LogoutButton

const Navbar = () => {

    useEffect(() => {
        console.log("auth", auth);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [auth, setIsAuth] = useState(false);
    const [text, setSearchText] = useState("");
    const [email, setEmailText] = useState("");
    const [password, setPasswordText] = useState("");

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const handleSearch = () => {
        console.log("search text", text);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openLogin, setLoginOpen] = React.useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const navItems = [
        { path: "/", title: "Start a Search" },
        { path: "/my-job", title: "My Jobs" },
        { path: "/salary", title: "Salary Estimate" },
        { path: "/post-job", title: "Post a Job" },
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        overflow: 'hidden'
    };

    const style_login = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '52vh',
        height: '99vh',
        bgcolor: 'background.paper',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        overflow: 'hidden',
        backgroundImage: 'url("./images/login-back-1.jpg")',
        backgroundSize: 'cover',
        display: 'flex',
        gap: '4px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <header
            className='w-full px-4 border-t-[28px] border-b-[40px] border-[#202020]'
            style={{
                background: 'transparent linear-gradient(94deg, #2d8ab6, #8daceb 55%, #2d8ab6)',
            }}
        >
            <nav className="flex justify-between items-center py-6">
                <a href="/" className="flex items-center gap-2 text-2xl text-black">
                    <img src={"./images/logo.png"} className="w-[160px] h-[40px]" />
                </a>

                {/* {NAV ITEMS FOR LARGE DEVICES} */}
                <ul className={`hidden gap-12 ${auth ? "md:flex" : "md:hidden"}`}>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className="text-base text-primary">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* SIGNUP AND LOGIN BUTTON */}
                <div className="text-base text-primary font-medium hidden h-9 lg:flex items-center w-fit gap-1">
                    <button className='py-[12px] px-[15px] text-[15px] font-semibold border-[1px] rounded-full h-full flex items-center hover:bg-gray-100 duration-500' onClick={handleOpen}>RULES</button>
                    <div className="search-box h-full text-center relative">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className='w-[14px] h-[14px] text-[#0078b1]'
                            style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '5%' }}
                        />
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search Events"
                            className="pr-[8px] pl-[30px] border h-full text-xs text-white w-[300px] focus:outline-none bg-inherit rounded-full"
                        />
                    </div>
                    <button className='py-1 px-[15px] border rounded-full text-white h-full text-base flex items-center hover:text-[#0078b1] hover:bg-gray-100 duration-500' onClick={handleLoginOpen}>LOGIN</button>
                    <Link to="/sign-up" className='py-1 px-[15px] border rounded-full text-white h-full text-base flex items-center hover:text-[#0078b1] hover:bg-gray-100 duration-500'>REGISTER</Link>
                    {/* <Link to = "/LogoutButton" className='py-2 px-5 border rounded bg-blue text-white'>Logout</Link> */}
                </div>

                {/* MOBILE MENU */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />
                        }
                    </button>
                </div>
            </nav>

            {/* NAV ITEMS FOR MOBILE */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul className="">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-white first:text-white py-1">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                    }
                    <li className="py-1 px-5 border rounded-full"><Link to="/login">Login</Link></li>
                    <li className="py-1 px-5 border rounded-full"><Link to="/login">Logout</Link></li>
                </ul>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={style}>
                    <p className="text-sm text-gray-700 w-full bg-gray-200 p-4">Rules</p>
                </div>

            </Modal>

            <Modal
                open={openLogin}
                onClose={handleLoginClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={style_login} className='ease-in-out'>
                    <button className='black text-xl absolute translate(-50%, -50) right-5 top-5' onClick={handleLoginClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <img src='./images/logo.png' className='height-[50px] w-[215px] mb-4' />
                    <input
                        onChange={(e) => setEmailText(e.target.value)}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Username"
                        className="py-2 pl-3 border rounded-sm text-xs focus-within:ring-indigo-600 lg:w-7/12 w-3/4"
                        style={{ // Inline style to set focus ring color
                            outlineColor: '#4F46E5',
                        }}
                    />
                    <input
                        onChange={(e) => setPasswordText(e.target.value)}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Password"
                        className="py-2 pl-3 border rounded-sm text-xs focus-within:ring-indigo-600 lg:w-7/12 w-3/4"
                        style={{ // Inline style to set focus ring color
                            outlineColor: '#4F46E5',
                        }}
                    />
                    <button className='py-2 pl-3 rounded-sm text-[14px] text-white bg-[#0078b1] focus-within:ring-indigo-600 lg:w-7/12 w-3/4 mt-6'>LOGIN</button>
                    <button className='py-2 pl-3 rounded-sm text-[14px] text-white bg-[#0078b1] focus-within:ring-indigo-600 lg:w-7/12 w-3/4 mt-[3px]'>LOGIN WITH DEMO ID</button>
                    <button className='py-2 pl-3 rounded-sm text-[14px] text-black bg-[#0078b1] focus-within:ring-indigo-600 lg:w-7/12 w-3/4 mt-[3px] underline'>Forget Password?</button>
                </div>
            </Modal>

        </header>
    )
}

export default Navbar;
