import { LogisticsItem } from "./logistics-item";

import styles from "./event-logistics.module.css";
import { AddressIcon, DateIcon } from "@/components/icons";
import Image from "next/image";

const EventLogistics: React.FC<{ event: any }> = ({ event }) => {
    const { date, location, image, title } = event;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const addressText = location.replace(", ", "\n");

    return (
        <section className={styles.logistics}>
            <div className={styles.image}>
                <Image src={`/${image}`} alt={title} height={400} width={400} />
            </div>
            <ul className={styles.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
};

export { EventLogistics };
