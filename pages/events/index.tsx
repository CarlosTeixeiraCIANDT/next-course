import { EventList, EventsSearch } from "@/components/events";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };
    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList events={events} />
        </>
    );
};

export default EventsPage;
