
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/style.css';
import styled from 'styled-components';
import { BsJustify, BsListNested } from "react-icons/bs";

const Navbar = () => {

    const MobileNavToggle = styled.button`
        display: block;
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all .2s ease;
        

        &:hover {
            color: #bada55;
        }

        @media (min-width: 768px) {
            display: none;
            transition: all .2s ease;
        }
`;


    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const isActive = splitLocation[1]

    const [active, setActive] = React.useState(false);

    return (
        <div className="nav">
            <div className="container">
                <div className="wrapping-nav">
                    <h1 className='logo'>RezAl <span>portofolio</span></h1>
                    <MobileNavToggle onClick={() => setActive(!active)}>
                        {active ? <BsListNested /> : <BsJustify />}
                    </MobileNavToggle>
                    <div id='link' className={active ? 'link linkOpen ' : 'link linkClose'} >
                        <Link
                            to="/"
                            className={pathname === "/" ? "active" : "inactive"}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            className={isActive === "about" ? "active" : "inactive"}
                        >
                            About
                        </Link>
                        <Link
                            to="experience"
                            className={isActive === "experience" ? "active" : "inactive"}
                        >
                            Experience
                        </Link>
                        <Link
                            to="skills"
                            className={isActive === "skills" ? "active" : "inactive"}
                        >
                            Skills
                        </Link>
                        <Link
                            to="interest"
                            className={isActive === "interest" ? "active" : "inactive"}
                        >
                            Interest
                        </Link>
                        <Link
                            to="awards"
                            className={isActive === "awards" ? "active" : "inactive"}
                        >
                            Awards
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
