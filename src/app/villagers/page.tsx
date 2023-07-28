'use client'
import React, { useState, useEffect } from "react";
import VillagerBlock from "../components/villagerBlock";
import styles from "./villagers.module.css";

/*
"name-CNzh"
"name-EUde"
"name-EUen"
"name-EUes"
"name-EUfr"
"name-EUit"
"name-EUnl"
"name-EUru"
"name-JPja"
"name-KRko"
"name-TWzh"
"name-USen"
"name-USes"
"name-USfr"
*/

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

function Villagers() {
    const defaultLang = "USen";
    const [isLoading, setIsLoading] = useState(false);
    const [alligatorList, setAlligatorList] = useState<Array<villagerInterface>>();
    const [anteaterList, setAntEaterList] = useState<Array<villagerInterface>>();
    const [bearList, setBearList] = useState<Array<villagerInterface>>();
    const [birdList, setBirdList] = useState<Array<villagerInterface>>();
    const [bullList, setBullList] = useState<Array<villagerInterface>>();
    const [catList, setCatList] = useState<Array<villagerInterface>>();
    const [chickenList, setChickenList] = useState<Array<villagerInterface>>();
    const [cowList, setCowList] = useState<Array<villagerInterface>>();
    const [cubList, setCubList] = useState<Array<villagerInterface>>();
    const [deerList, setDeerList] = useState<Array<villagerInterface>>();
    const [dogList, setDogList] = useState<Array<villagerInterface>>();
    const [duckList, setDuckList] = useState<Array<villagerInterface>>();
    const [eagleList, setEagleList] = useState<Array<villagerInterface>>();
    const [elephantList, setElephantList] = useState<Array<villagerInterface>>();
    const [frogList, setFrogList] = useState<Array<villagerInterface>>();
    const [goatList, setGoatList] = useState<Array<villagerInterface>>();
    const [gorillaList, setGorillaList] = useState<Array<villagerInterface>>();
    const [hamsterList, setHamsterList] = useState<Array<villagerInterface>>();
    const [hippoList, setHippoList] = useState<Array<villagerInterface>>();
    const [horseList, setHorseList] = useState<Array<villagerInterface>>();
    const [kangarooList, setKangarooList] = useState<Array<villagerInterface>>();
    const [koalaList, setKoalaList] = useState<Array<villagerInterface>>();
    const [lionList, setLionList] = useState<Array<villagerInterface>>();
    const [monkeyList, setMonkeyList] = useState<Array<villagerInterface>>();
    const [mouseList, setMouseList] = useState<Array<villagerInterface>>();
    const [octoList, setOctoList] = useState<Array<villagerInterface>>();
    const [ostrichList, setOstrichList] = useState<Array<villagerInterface>>();
    const [penguinList, setPenguinList] = useState<Array<villagerInterface>>();
    const [pigList, setPigList] = useState<Array<villagerInterface>>();
    const [rabbitList, setRabbitList] = useState<Array<villagerInterface>>();
    const [rhinoList, setRhinoList] = useState<Array<villagerInterface>>();
    const [sheepList, setSheepList] = useState<Array<villagerInterface>>();
    const [squirrelList, setSquirrelList] = useState<Array<villagerInterface>>();
    const [tigerList, setTigerList] = useState<Array<villagerInterface>>();
    const [wolfList, setWolfList] = useState<Array<villagerInterface>>();

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
                let filteredList = list.filter((villager) => villager?.species === "Alligator");
                setAlligatorList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Anteater");
                setAntEaterList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Bear");
                setBearList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Bird");
                setBirdList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Bull");
                setBullList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Cat");
                setCatList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Chicken");
                setChickenList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Cow");
                setCowList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Cub");
                setCubList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Deer");
                setDeerList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Dog");
                setDogList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Duck");
                setDuckList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Eagle");
                setEagleList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Elephant");
                setElephantList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Frog");
                setFrogList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Goat");
                setGoatList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Gorilla");
                setGorillaList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Hamster");
                setHamsterList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Hippo");
                setHippoList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Horse");
                setHorseList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Kangaroo");
                setKangarooList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Koala");
                setKoalaList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Lion");
                setLionList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Monkey");
                setMonkeyList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Mouse");
                setMonkeyList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Octopus");
                setOctoList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Ostrich");
                setOstrichList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Penguin");
                setPenguinList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Pig");
                setPigList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Rabbit");
                setRabbitList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Rhino");
                setRhinoList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Sheep");
                setSheepList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Squirrel");
                setSquirrelList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Tiger");
                setTigerList(filteredList);

                filteredList = list.filter((villager) => villager?.species === "Wolf");
                setWolfList(filteredList);
            })
            setIsLoading(false);
    }, [])

    return (
        <>
            <div className={styles.conatiner}>
                <div className={styles.wrapper}>
                    <div>
                        <span className={styles.title}>
                            Alligator
                        </span>
                        {
                            alligatorList ? (
                                <VillagerBlock villagers={alligatorList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Anteater
                        </span>
                        {
                            anteaterList ? (
                                <VillagerBlock villagers={anteaterList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Bear
                        </span>
                        {
                            bearList ? (
                                <VillagerBlock villagers={bearList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Bird
                        </span>
                        {
                            birdList ? (
                                <VillagerBlock villagers={birdList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Bull
                        </span>
                        {
                            bullList ? (
                                <VillagerBlock villagers={bullList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Cat
                        </span>
                        {
                            catList ? (
                                <VillagerBlock villagers={catList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Chicken
                        </span>
                        {
                            chickenList ? (
                                <VillagerBlock villagers={chickenList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Cow
                        </span>
                        {
                            cowList ? (
                                <VillagerBlock villagers={cowList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Cub
                        </span>
                        {
                            cubList ? (
                                <VillagerBlock villagers={cubList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Deer
                        </span>
                        {
                            deerList ? (
                                <VillagerBlock villagers={deerList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Dog
                        </span>
                        {
                            dogList ? (
                                <VillagerBlock villagers={dogList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Duck
                        </span>
                        {
                            duckList ? (
                                <VillagerBlock villagers={duckList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Eagle
                        </span>
                        {
                            eagleList ? (
                                <VillagerBlock villagers={eagleList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Elephant
                        </span>
                        {
                            elephantList ? (
                                <VillagerBlock villagers={elephantList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Frog
                        </span>
                        {
                            frogList ? (
                                <VillagerBlock villagers={frogList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Goat
                        </span>
                        {
                            goatList ? (
                                <VillagerBlock villagers={goatList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Gorilla
                        </span>
                        {
                            gorillaList ? (
                                <VillagerBlock villagers={gorillaList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Hamster
                        </span>
                        {
                            hamsterList ? (
                                <VillagerBlock villagers={hamsterList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Hippo
                        </span>
                        {
                            hippoList ? (
                                <VillagerBlock villagers={hippoList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Horse
                        </span>
                        {
                            horseList ? (
                                <VillagerBlock villagers={horseList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Kangaroo
                        </span>
                        {
                            kangarooList ? (
                                <VillagerBlock villagers={kangarooList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Koala
                        </span>
                        {
                            koalaList ? (
                                <VillagerBlock villagers={koalaList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Lion
                        </span>
                        {
                            lionList ? (
                                <VillagerBlock villagers={lionList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Monkey
                        </span>
                        {
                            monkeyList ? (
                                <VillagerBlock villagers={monkeyList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Mouse
                        </span>
                        {
                            mouseList ? (
                                <VillagerBlock villagers={mouseList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Octopus
                        </span>
                        {
                            octoList ? (
                                <VillagerBlock villagers={octoList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Ostrich
                        </span>
                        {
                            ostrichList ? (
                                <VillagerBlock villagers={ostrichList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Penguin
                        </span>
                        {
                            penguinList ? (
                                <VillagerBlock villagers={penguinList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Pig
                        </span>
                        {
                            pigList ? (
                                <VillagerBlock villagers={pigList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Rabbit
                        </span>
                        {
                            rabbitList ? (
                                <VillagerBlock villagers={rabbitList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Rhino
                        </span>
                        {
                            rhinoList ? (
                                <VillagerBlock villagers={rhinoList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Sheep
                        </span>
                        {
                            sheepList ? (
                                <VillagerBlock villagers={sheepList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Squirrel
                        </span>
                        {
                            squirrelList ? (
                                <VillagerBlock villagers={squirrelList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Tiger
                        </span>
                        {
                            tigerList ? (
                                <VillagerBlock villagers={tigerList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div>
                        <span>
                            Wolf
                        </span>
                        {
                            wolfList ? (
                                <VillagerBlock villagers={wolfList} />
                            ) : (
                                null
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Villagers;