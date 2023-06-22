import { EventList } from "@/components/events";
import { getFeaturedEvents } from "@/helpers/api-util";

const HomePage: React.FC<{ featuredEvents: any }> = ({ featuredEvents }) => {
    return (
        <div>
            <EventList events={featuredEvents}></EventList>
        </div>
    );
};

export default HomePage;

export async function getStaticProps(context: any) {
    const featuredEvents = await getFeaturedEvents();

    return { props: { featuredEvents }, revalidate: 1800 };
}
