import React, { useEffect, useState } from "react";
import './menu.css';
import { useDispatch, useSelector } from "react-redux";
import { reducerToggleButton } from "./menu-slicer";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    {
        label: 'Home',
        link: '/',
        submenu: null,
    },
    {
        label: 'About',
        link: '/#about',
        submenu: [
            { label: 'Who we are', link: '/about/who-we-are' },
            { label: 'Our Team', link: '/about/our-team' },
            { label: 'Leadership', link: '/about/leadership' },
            { label: 'Organogram', link: '/about/organogram' },
            { label: 'Annual Reports', link: '/about/annual-reports' },
        ],
    },
    {
        label: 'Awards',
        link: '/#awards',
        submenu: [
            { label: 'Awards - 2023', link: '/awards/2023' },
            { label: 'Awards - 2024', link: '/awards/2024' },
        ],
    },
    {
        label: 'Replications',
        link: '/replications',
        submenu: null,
    },
    {
        label: 'Collaborations',
        link: '/collaborations',
        submenu: null,
    },
];

export default function WebMenu() {
    const location = useLocation();
    const [menu, setMenu] = useState('');
    const toggleMenu = useSelector((storeState: any) => storeState.store.stateToggleMnu);

    useEffect(() => {
        setMenu(toggleMenu);
    }, [toggleMenu]);

    const dispatch = useDispatch();

    const closeMenu = () => {
        dispatch(reducerToggleButton(''));
    }

    const preventDefault = (event: React.MouseEvent) => {
        event.preventDefault();
    }


    return (
        <>
            <nav id="menu" className={`transition duration-700 ease-in-out md:transition-discrete bg-red-600 text-white md:hidden lg:block xl:block 2xl:block ${menu} z-99`}>
                <button
                    onClick={closeMenu}
                    className="bg-red-700 size-20 closeMobileMenu hover:cursor-pointer hover:bg-red-900 hover:transition-all hover:duration-700 hover:ease-in-out p-4 text-2xl" title="Close Menu">
                    <i className="bi bi-x-lg"></i>
                </button>
                <ul className="w-11/12 m-auto">
                    <li>
                        <Link to="/"
                            className={`hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out ${(location.pathname === '/') ? 'bg-red-800': ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className="hover:[&>*]:block">
                        <Link to="/#about"
                            className="hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out"
                            onClick={preventDefault}
                        >
                            About
                        </Link>
                        <ul
                            className="bg-red-600 [&>*]:hover:hover:bg-red-800 [&>*]:hover:transition-all [&>*]:hover:duration-700 [&>*]:hover:ease-in-out z-99">
                            <li>
                                <Link to="/about/who-we-are" onClick={closeMenu} >
                                    Who we are
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/our-team" onClick={closeMenu}>
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/leadership" onClick={closeMenu}>
                                    Leadership
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/organogram" onClick={closeMenu}>
                                    Organogram
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/annual-reports" onClick={closeMenu}>
                                    Annual Reports
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className="hover:[&>*]:block">
                        <Link to="/#awards"
                            className="hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out"
                            onClick={preventDefault}>
                            Awarding Innovations
                        </Link>
                        <ul
                            className="bg-red-600 [&>*]:hover:hover:bg-red-800 [&>*]:hover:transition-all [&>*]:hover:duration-700 [&>*]:hover:ease-in-out z-99">
                            <li>
                                <Link to="/awards/2023" onClick={closeMenu}>
                                    Awards - 2023
                                </Link>
                            </li>
                            <li>
                                <Link to="/awards/2024" onClick={closeMenu}>
                                    Awards - 2024
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="hover:[&>*]:block">
                        <Link to="/#kb" className="hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out" onClick={closeMenu}>Knowledge Bank</Link>
                        <ul className="bg-red-600 [&>*]:hover:hover:bg-red-800 [&>*]:hover:transition-all [&>*]:hover:duration-700 [&>*]:hover:ease-in-out z-99">
                            <li>
                                <Link to="/knowledge-bank/innovative-practices"
                                    onClick={preventDefault}>
                                    Innovative Practices
                                </Link>
                            </li>
                            <li>
                                <Link to="/knowledge-bank/publications"
                                    onClick={closeMenu}>
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link to="/knowledge-bank/articles"
                                    onClick={closeMenu}>
                                    Articles
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="hover:[&>*]:block">
                        <Link to="/#projects"
                            className="hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out" onClick={preventDefault}>
                            Projects
                        </Link>
                        <ul
                            className="bg-red-600 [&>*]:hover:hover:bg-red-800 [&>*]:hover:transition-all [&>*]:hover:duration-700 [&>*]:hover:ease-in-out z-99">
                            <li>
                                <Link to="/projects/ongoing"
                                    onClick={closeMenu}>
                                    Ongoing
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects/completed"
                                    onClick={closeMenu}>
                                    Completed
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/replications"
                            className="hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out"
                            onClick={closeMenu}>
                            Replications
                        </Link>
                    </li>
                    <li>
                        <Link to="/collaborations"
                            className="hover:bg-red-800 hover:transition-all hover:duration-700 hover:ease-in-out"
                            onClick={closeMenu}>
                            Collaborations
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}