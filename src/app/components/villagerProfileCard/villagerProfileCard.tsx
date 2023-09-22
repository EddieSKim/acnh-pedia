import React from "react";
import styles from "./villagerProfileCard.module.css";
import { villagerInterface } from "../../villagerType";
import Image from "next/image";

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
                        <div className={styles.profileBanner}>
                            <img
                                className={styles.bannerImg}
                                style={{width: "350px"}}
                                src={villager.nh_details.house_interior_url}
                                alt="villagerHouse"
                            />
                        </div>
                        <img
                            className={styles.profileImg}
                            src={villager.nh_details.photo_url}
                            loading="lazy"
                            alt="profile photo" />
                        {/* <span className={styles.villagerName}>
                            {villager.name}
                        </span> */}
                        {/* <div>
                            <img
                                className={styles.villagerIcon}
                                src={villager.nh_details.icon_url}
                                alt="villagerIcon"/>
                            <div className={styles.villagerInfoWrapper}>
                                <div className={styles.label}>Birthday</div>
                                <div className={styles.information}>{villager.birthday_month} {villager.birthday_day}</div>
                            </div>
                            <div className={styles.villagerInfoWrapper}>
                                <div className={styles.label}>Personality</div>
                                <div className={styles.information}>
                                    {villager.personality}({villager.nh_details["sub-personality"]})
                                </div>
                            </div>
                            <div className={styles.villagerInfoWrapper}>
                                <div className={styles.label}>Species</div>
                                <div className={styles.information}>{villager.species}</div>
                            </div>
                            <div className={styles.villagerInfoWrapper}>
                                <div className={styles.label}>Phrase</div>
                                <div className={styles.information}>
                                    <span style={{ textTransform: "uppercase" }}>
                                        {villager.phrase}
                                    </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VillagerProfileCard;