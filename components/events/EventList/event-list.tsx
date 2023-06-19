import { EventItem } from "../EventItem/event-item";

import styles from "./event-list.module.css";

const EventList: React.FC<{ events: any }> = ({ events }) => {
    return (
        <ul className={styles.list}>
            {events.map((event: any) => (
                <EventItem key={event.id} event={event}></EventItem>
            ))}
        </ul>
    );
};

export { EventList };
