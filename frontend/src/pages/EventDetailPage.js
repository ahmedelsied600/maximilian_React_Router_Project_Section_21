import React from "react";
import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const params = useParams();
  // console.log();
  return <EventItem event={params.eventId} />;
}

export default EventDetailPage;
export const Loader = async ({ request, params }) => {
  const data = await fetch("http://localhost:8080/events/" + params.eventId);
  // console.log(await data.json());
  console.log(json(data));
  return "ahmed";
};
