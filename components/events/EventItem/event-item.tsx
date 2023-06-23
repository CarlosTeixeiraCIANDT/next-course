import { Button } from "@/components/UI";

import styles from "./event-item.module.css";
import { DateIcon, ArrowRight, AddressIcon } from "@/components/icons";
import Image from "next/image";

const EventItem: React.FC<{ event: any }> = ({ event }) => {
    const { title, image, date, location, id } = event;

    const xformedDate = new Date(date).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <Image src={"/" + image} alt={title} width={250} height={160} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{xformedDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export { EventItem };
