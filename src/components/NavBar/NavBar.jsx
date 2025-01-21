import styles from "./navbar.module.css";
import { useState } from "react";
import {  NavLink } from "react-router";
import Logo from "../Logo/Logo";


const NavBar = () => {
    const [active, setActive] = useState(false);

    const onBurgerMenuBtnClick = () => {
        setActive((prev) => !prev);
    };

    const navList = [
        { name: "Home", path: "/" },
        { name: "Ophold", path: "stays" },
        { name: "Kontakt", path: "kontakt" },
        { name: "Aktiviteter", path: "aktiviteter" },
        { name: "Min liste", path: "my-list" },
    ];

    return (
        <header className={styles.header}>
            <Logo/>
            <button
                onClick={onBurgerMenuBtnClick}
                type="button"
                className={`${styles.navBarBtn} ${active ? styles.active : ""}`}
            >
                <span></span>
            </button>
            <nav className={`${styles.nav} ${active ? styles.activeNav : ""}`}>
                <ul>
                    {navList.map((item) => {
                        return (
                            <li key={item.name}>
                                <NavLink
                                    onClick={onBurgerMenuBtnClick}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.activeLink
                                            : styles.link
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
