import React from "react";
import styles from "./villagerProfileCard.module.css";

const mockVillager = {
    birthday: "9/2",
    "birthday-string": "February 9th",
    "bubble-color": "#ff6183",
    "catch-phrase": "pinky",
    "catch-translations": {
        "catch-KRko": "밍고밍고",
        "catch-USen": "pinky",
    },
    "file-name": "ost09",
    gender: "Female",
    hobby: "Play",
    icon_uri: "https://acnhapi.com/v1/icons/villagers/278",
    id: 278,
    image_uri: "https://acnhapi.com/v1/images/villagers/278",
    name: {
        "name-KRko": "플라라",
        "name-USen": "Flora",
    },
    personality: "Peppy",
    saying: "Pink is the new black.",
    species: "Ostrich",
    subtype: "A",
    "text-color": "#fffce9",
}

interface villagerInterface {
    birthday: string;
    "birthday-string": string;
    "bubble-color": string;
    "catch-phrase": string;
    "catch-translations": {
        "catch-KRko": string;
        "catch-USen": string;
    };
    "file-name": string;
    gender: string;
    hobby: string;
    icon_uri: string;
    id: number;
    image_uri: string;
    name: {
        "name-KRko": string;
        "name-USen": string;
    };
    personality: string;
    saying: string;
    species: string;
    subtype: string;
    "text-color": string;
}

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
                        <span>{villager.name["name-USen"]}</span>
                        <img className={styles.profileImg} src={villager.image_uri} alt="profile photo" />
                        <span>{villager["birthday-string"]}</span>
                        <span>{villager.personality}({villager.subtype})</span>
                        <span>{villager["catch-translations"]["catch-USen"]}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VillagerProfileCard;