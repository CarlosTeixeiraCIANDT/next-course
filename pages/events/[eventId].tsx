import {
    EventContent,
    EventLogistics,
    EventSummary,
} from "@/components/events";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const EventPage = () => {
    const router = useRouter();

    const event = getEventById(router.query.eventId);

    if (!event) {
        return <p> No event found</p>;
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics event={event} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventPage;
