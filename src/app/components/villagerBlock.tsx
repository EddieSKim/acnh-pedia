import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./villagerBlock.module.css";
import VillagerProfileCard from "./villagerProfileCard";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

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

type blockProps = {
    villagers: villagerInterface[];
};

function VillagerBlock({ villagers }: blockProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVillager, setSelectedVillager] = useState<villagerInterface>();
    // const [isOverFlow, setIsOverFlow] = useState(false);

    const useOverflow = (elementRef: any) => {
        const [isOverflow, setIsOverflow] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                const { scrollWidth, clientWidth } = elementRef.current;
                setIsOverflow(scrollWidth > clientWidth);
            };

            handleResize();
            window.addEventListener("resize", handleResize);
            return window.removeEventListener("resize", handleResize);
        }, [elementRef]);

        return isOverflow;
    }

    const blockRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const isOverFlow = useOverflow(sliderRef);

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     if (slider) {
    //         setIsOverFlow(slider.scrollWidth > slider.clientWidth);
    //     }
    // })

    const openVillagerCard = (event: any) => {
        villagers.map((villager: any) => {
            if (event.target.id === villager.id.toString()) {
                setSelectedVillager(villager);
            }
        })
        setIsOpen(true);
    }

    const closeVillagerCard = () => {
        setIsOpen(false);
        setSelectedVillager(undefined);
    }

    const slideRight = () => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 200;
        }

    }

    const slideLeft = () => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 200;
        }
    }

    return (
        <>
            <div className={styles.blockContainer}>
                {
                    <BiSolidLeftArrow
                        size={24}
                        onClick={slideLeft}
                        className={styles.arrowBtn} />
                }
                <div
                    className={styles.block}
                    ref={sliderRef}
                    id='slider'>
                    {villagers.map((villager: villagerInterface) => (
                        <div
                            key={villager.id}
                            id={villager.id.toString()}
                            className={styles.profile}
                            onClick={openVillagerCard}>
                            <img
                                src={villager.image_uri}
                                style={{ width: "100px", height: "auto" }}
                                id={villager.id.toString()} />
                            <span id={villager.id.toString()}>{villager.name["name-USen"]}</span>
                        </div>
                    ))}
                </div>
                {
                    <BiSolidRightArrow
                        size={24}
                        onClick={slideRight}
                        className={styles.arrowBtn} />
                }
            </div>
            {isOpen && selectedVillager ?
                <VillagerProfileCard
                    villager={selectedVillager}
                    closeCard={closeVillagerCard} />
                : null}
        </>
    );
}

export default VillagerBlock;
