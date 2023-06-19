import { EventList } from "@/components/events";
import { getFeaturedEvents } from "../dummy-data";

const featuredEvents = getFeaturedEvents();

const HomePage = () => {
    return (
        <div>
            <EventList events={featuredEvents}></EventList>
        </div>
    );
};

export default HomePage;
