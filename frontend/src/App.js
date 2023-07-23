// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component Imports
import MainNavigation from "./components/MainNavigation";
import EventsNavigation from "./components/EventsNavigation";
// page Imports
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
// Loader Imports from Pages
import { Loader as EventsLoader } from "./pages/EventsPage";
import { Loader as EventDetailLoader } from "./pages/EventDetailPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        {
          path: "/",
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "events",
              element: <EventsNavigation />,
              children: [
                {
                  index: true,
                  loader: EventsLoader,
                  element: <EventsPage />,
                },
                { path: "new", element: <NewEventPage /> },
                {
                  path: ":eventId",
                  children: [
                    {
                      index: true,
                      element: <EventDetailPage />,
                      loader: EventDetailLoader,
                    },
                    { path: "edit", element: <EditEventPage /> },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
