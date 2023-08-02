'use client'
import React, { useState, useEffect } from "react";
import VillagerBlock from "@components/villagerBlock";
import styles from "./villagers.module.css";
import Loader from "@components/loader/loader";

// https://wallpapers-clan.com/app-icons/animal-crossing/

interface villagerInterface {
    birthday: string,
    "birthday-string": string,
    "bubble-color": string,
    "catch-phrase": string,
    "catch-translations": {
        "catch-KRko": string,
        "catch-USen": string,
    },
    "file-name": string,
    gender: string,
    hobby: string,
    icon_uri: string,
    id: number,
    image_uri: string,
    name: {
        "name-KRko": string,
        "name-USen": string,
    },
    personality: string,
    saying: string,
    species: string,
    subtype: string,
    "text-color": string,
}

interface villagersBySpecies {
    identifier: string,
    list: villagerInterface[],
}

const villagersList: villagersBySpecies[] = [
    {
        identifier: "Alligator",
        list: [],
    },
    {
        identifier: "Anteater",
        list: [],
    },
    {
        identifier: "Bear",
        list: [],
    },
    {
        identifier: "Bird",
        list: [],
    },
    {
        identifier: "Bull",
        list: [],
    },
    {
        identifier: "Cat",
        list: [],
    },
    {
        identifier: "Chicken",
        list: [],
    },
    {
        identifier: "Cow",
        list: [],
    },
    {
        identifier: "Cub",
        list: [],
    },
    {
        identifier: "Deer",
        list: [],
    },
    {
        identifier: "Dog",
        list: [],
    },
    {
        identifier: "Duck",
        list: [],
    },
    {
        identifier: "Eagle",
        list: [],
    },
    {
        identifier: "Elephant",
        list: [],
    },
    {
        identifier: "Frog",
        list: [],
    },
    {
        identifier: "Goat",
        list: [],
    },
    {
        identifier: "Gorilla",
        list: [],
    },
    {
        identifier: "Hamster",
        list: [],
    },
    {
        identifier: "Hippo",
        list: [],
    },
    {
        identifier: "Horse",
        list: [],
    },
    {
        identifier: "Kangaroo",
        list: [],
    },
    {
        identifier: "Koala",
        list: [],
    },
    {
        identifier: "Lion",
        list: [],
    },
    {
        identifier: "Monkey",
        list: [],
    },
    {
        identifier: "Mouse",
        list: [],
    },
    {
        identifier: "Octopus",
        list: [],
    },
    {
        identifier: "Ostrich",
        list: [],
    },
    {
        identifier: "Penguin",
        list: [],
    },
    {
        identifier: "Pig",
        list: [],
    },
    {
        identifier: "Rabbit",
        list: [],
    },
    {
        identifier: "Rhino",
        list: [],
    },
    {
        identifier: "Sheep",
        list: [],
    },
    {
        identifier: "Squirrel",
        list: [],
    },
    {
        identifier: "Tiger",
        list: [],
    },
    {
        identifier: "Wolf",
        list: [],
    },
];

function Villagers() {
    const defaultLang = "USen";
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState<Array<villagersBySpecies>>();

    useEffect(() => {
        setIsLoading(true);
        fetch("http://acnhapi.com/v1/villagers", { method: "GET" })
            .then(res => {
                return res.json();
            })
            .then(data => {
                // setVillagers(Object.values(data) as villagerInterface[]);
                return Object.values(data) as villagerInterface[];
            })
            .then(list => {
                villagersList.map((item) => {
                    item.list = list.filter((villager) => villager?.species === item.identifier)
                });
                setList(villagersList);
            })
        setIsLoading(false);
    }, [])

    return (
        <>
            <div className={styles.pageConatiner}>
                <div className={styles.wrapper}>
                    {
                        list && list.map((item) => {
                            return (
                                <div className={styles.blockWrapper}>
                                    <span className={styles.title}>
                                    {item.identifier}
                                    </span>
                                    {
                                        item.list && !isLoading ? (
                                            <VillagerBlock villagers={item.list} />
                                        ) : (
                                            <Loader />
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Villagers;