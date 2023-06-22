import { EventList, EventsSearch } from "@/components/events";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";

const EventsPage: React.FC<{ events: any }> = ({ events }) => {
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

export async function getStaticProps(context: any) {
    const events = await getAllEvents();

    return {
        props: { events },
        revalidate: 60,
    };
}

export default EventsPage;
