import { EventList } from "@/components/events";
import { getFilteredEvents } from "@/helpers/api-util";
import Head from "next/head";
import { useRouter } from "next/router";

const FilteredEventsPage: React.FC<{ events: any }> = ({ events }) => {
    const router = useRouter();

    if (!events) {
        return <p className="center">Loading</p>;
    }

    return (
        <div>
            <Head>
                <title>Filtered Events</title>
                <meta
                    name="description"
                    content={`Filtered events: ${events}`}
                />
            </Head>
            <EventList events={events} />
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const { params } = context;

    const slug = params.slug;

    const year = +slug[0];
    const month = +slug[1];

    if (isNaN(year) || isNaN(month)) {
        return { notFound: true };
    }

    const events = await getFilteredEvents({ year, month });

    return { props: { events } };
}

export default FilteredEventsPage;
