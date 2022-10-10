import React from 'react'
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign in</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header