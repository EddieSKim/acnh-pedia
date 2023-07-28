import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {

    return (
        <>
            <div className={styles.container}>
                <span>LOGO</span>
                <div className={styles.navMenu}>
                    <Link href="/" className={styles.navBtn}>
                        <span>Menu</span>
                    </Link>
                    <Link href="/villagers" className={styles.navBtn}>
                        <span>Villagers</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
