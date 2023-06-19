import { EventList } from "@/components/events";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
    const router = useRouter();

    const slug = router.query.slug;

    if (!slug) {
        return <p className="center">Loading</p>;
    }

    const year = +slug[0];
    const month = +slug[1];

    if (isNaN(year) || isNaN(month)) {
        return <p>Invalid filter</p>;
    }

    const events = getFilteredEvents({ year, month });

    console.log(events);

    return (
        <div>
            <EventList events={events} />
        </div>
    );
};

export default FilteredEventsPage;
