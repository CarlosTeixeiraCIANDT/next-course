import { EventList } from "@/components/events";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";

const HomePage: React.FC<{ featuredEvents: any }> = ({ featuredEvents }) => {
    return (
        <div>
            <Head>
                <title>NextJs Events</title>
                <meta name="description" content="description content" />
            </Head>
            <EventList events={featuredEvents}></EventList>
        </div>
    );
};

export default HomePage;

export async function getStaticProps(context: any) {
    const featuredEvents = await getFeaturedEvents();

    return { props: { featuredEvents }, revalidate: 1800 };
}
