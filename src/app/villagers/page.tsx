'use client'
import React, { useState, useEffect } from "react";
import VillagerBlock from "@components/villagerBlock/villagerBlock";
import styles from "./villagers.module.css";
import Loader from "@components/loader/loader";
import { villagerInterface } from "../villagerType";

// https://wallpapers-clan.com/app-icons/animal-crossing/
// https://nookipedia.com/wiki/Category:New_Horizons_inventory_icons

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
        identifier: "Bear cub",
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
        identifier: "Rhinoceros",
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
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState<Array<villagersBySpecies>>();
    const apiKey : string = process.env.NEXT_PUBLIC_KEY!;
    const version : string = process.env.NEXT_VERSION!;

    useEffect(() => {
        setIsLoading(true);
        fetch("https://api.nookipedia.com/villagers?game=NH&nhdetails=true",  {
            method: "GET",
            headers: {
                "X-API-KEY": apiKey,
                "Version": version,
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return Object.values(data) as villagerInterface[];
        })
        .then((list) => {
            console.log(list)
            villagersList.map((entry) => {
                if(entry.identifier === "Cub") {
                    list.map((villager) => {
                        if(villager?.species == "Cub") {
                            console.log("HELLO")
                        }
                    } )
                }
                entry.list = list.filter((villager) => 
                villager?.species === entry.identifier)
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
                                            <VillagerBlock key={item.identifier} villagers={item.list} />
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