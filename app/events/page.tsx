import EventCard from "@/components/EventCard"
import { events } from "@/lib/constants"

const Events = () => {
    return (
        <div className="space-y-7">
            <h1>All Events</h1>
            <ul className="events list-none">
                {events.map((event) => (
                    <li key={event.slug}><EventCard {...event} /></li>
                ))}
            </ul>
        </div>
    )
}

export default Events