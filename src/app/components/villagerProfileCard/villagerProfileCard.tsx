import React from "react";
import styles from "./villagerProfileCard.module.css";
import { villagerInterface } from "../../villagerType";

type profileProps = {
    villager: villagerInterface;
    closeCard: () => void;
}

function VillagerProfileCard({ villager, closeCard }: profileProps) {

    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.cardFront}>
                    <button className={styles.exitBtn} onClick={closeCard}>CLOSE</button>
                    <div className={styles.contentWrapper}>
                        <span className={styles.villagerName}>{villager.name}</span>
                        <img className={styles.profileImg} src={villager.nh_details.photo_url} alt="profile photo" />
                        <div className={styles.villagerInfoWrapper}>
                            <div className={styles.label}>Birthday</div>
                            <div className={styles.information}>{villager.birthday_day}</div>
                        </div>
                        <div className={styles.villagerInfoWrapper}>
                            <div className={styles.label}>Personality</div>
                            <div className={styles.information}>{villager.personality}({villager.nh_details["sub-personality"]})</div>
                        </div>
                        <div className={styles.villagerInfoWrapper}>
                            <div className={styles.label}>Birthday</div>
                            <div className={styles.information}>{villager.nh_details.catchphrase}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VillagerProfileCard;