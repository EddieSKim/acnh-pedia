import React from "react";
import styles from "./loader.module.css";

function Loader() {
    return (
        <>
            <div className={styles.loaderWrapper}>
                <img
                    className={styles.iconLoader1}
                    src={"/Present_NH_Inv_Icon_Cropped.png"}
                    alt="icon" />
                <img
                    className={styles.iconLoader2}
                    src={"/Present_NH_Inv_Icon_Cropped.png"}
                    alt="icon" />
                <img
                    className={styles.iconLoader3}
                    src={"/Present_NH_Inv_Icon_Cropped.png"}
                    alt="icon" />
                <img
                    className={styles.iconLoader4}
                    src={"/Present_NH_Inv_Icon_Cropped.png"}
                    alt="icon" />
            </div>
        </>
    );
}

export default Loader;