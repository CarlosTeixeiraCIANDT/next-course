import {
    EventContent,
    EventLogistics,
    EventSummary,
} from "@/components/events";
import {
    getAllEvents,
    getEventById,
    getFeaturedEvents,
} from "@/helpers/api-util";
import Head from "next/head";
import { useRouter } from "next/router";

const EventPage: React.FC<{ event: any }> = ({ event }) => {
    const pageHead = (
        <Head>
            <title>{event.title || "No Event Found"}</title>
            <meta
                name="description"
                content={event.description || "No Event found"}
            />
        </Head>
    );

    if (!event) {
        return (
            <>
                {pageHead}
                <div className="center">
                    <p> No event found</p>
                </div>
            </>
        );
    }

    return (
        <>
            {pageHead}
            <EventSummary title={event.title} />
            <EventLogistics event={event} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventPage;

export async function getStaticProps(context: any) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return { props: { event }, revalidate: 30 };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();

    const paths = events.map((event: any) => ({
        params: { eventId: event.id },
    }));
    return { paths: paths, fallback: true };
}
