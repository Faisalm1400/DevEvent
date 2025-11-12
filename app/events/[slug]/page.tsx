import { events } from "@/lib/constants";
import { notFound } from "next/navigation";



type Props = {
    params: { slug: string };
};

const EvenDetails = async ({ params }: Props) => {
    const { slug } = await params;
    const event = await events.find((e) => e.slug === slug);
    console.log(event)
    if (!event) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
            <p className="text-gray-600">{event.date} • {event.location}</p>
            <img src={event.image} alt={event.title} className="my-6 rounded-lg" />
            <p className="mb-6 whitespace-pre-line">{event.overview}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Event Details</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Venue:</strong> {event.eventDetails.venue}</li>
                    <li><strong>Capacity:</strong> {event.eventDetails.capacity}</li>
                    <li><strong>Format:</strong> {event.eventDetails.format}</li>
                    <li><strong>Fee:</strong> {event.eventDetails.registrationFee}</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Agenda</h2>
                <ul className="space-y-1">
                    {event.agenda.map((item, idx) => (
                        <li key={idx} className="text-gray-700">
                            <strong>{item.time}:</strong> {item.topic}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About the Organizer</h2>
                <p><strong>{event.organizer.name}</strong></p>
                <p className="text-gray-700">{event.organizer.bio}</p>
                <p className="text-gray-700 mt-1"><strong>Contact:</strong> {event.organizer.contact}</p>
            </section>

            <div className="flex flex-wrap gap-2">
                {event.tags.map(tag => (
                    <span key={tag} className="bg-dark-100 text-sm px-5 py-2.5 rounded-xl">{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default EvenDetails