import React, { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, useNavigation } from "react-router-dom";
function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;
export const Loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  const data = await response.json();
  // console.log(data.events);
  return data.events;
};
