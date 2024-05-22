import React, { useState } from "react";
import "./header.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="site-header">
                <div className="left-menu">
                    <nav>
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/collection'>Collection</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="right-menu">
                    <nav>
                        <ul>
                            <li><Link to='/shops'>Shops</Link></li>
                            <li><Link to='/accounts'>Accounts</Link></li>
                            <li><a href="#"><IoSearchOutline /></a></li>
                            <li className={`login-dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}><a href="#"><FaRegCircleUser /></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#"><CiUser /> Profile</a></li>
                                    <li><a href="#"><LuSettings2 /> Preferences</a></li>
                                    <li className="help"><a href="#"><IoMdHelpCircleOutline /> Help & Support</a></li>
                                    <li><a href="#"><CiLogin /> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div >
            </header >
        </>
    )
}

export default Header;
