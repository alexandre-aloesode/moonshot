import React, { useEffect, useState } from "react";
import { IonContent, IonModal } from "@ionic/react";
import EventCard from "./components/EventCard";
import { getEvents } from "../../libs/api/event";
import EventFocus from "./EventFocus";

const EventList: React.FC = () => {
  const [allEvents, setAllEvents] = React.useState([]);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [offset, setOffset] = React.useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(0);

  const loadEvents = async () => {
    await getEvents({
      limit: 10,
      offset: offset,
    }).then((response) => {
      setAllEvents(allEvents.concat(response.data));
      setOffset(offset + 10);
      setScrollDown(scrollDown + 4000);
    });
  };

  useEffect(() => {
    if (allEvents.length === 0) loadEvents();
  }, [allEvents]);

  return (
    <IonContent
    scrollEvents={true}
    onIonScroll={(e) => {     
      if(e.detail.scrollTop > scrollDown) {
        loadEvents();
      }
    }}
    >
      {allEvents?.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          onButtonClick={() => {
            setSelectedEvent(event.id);
            setIsOpen(true);
          }}
        />
      ))}
      <IonModal isOpen={isOpen}>
        <EventFocus event_id={selectedEvent} previousView={setIsOpen} />
      </IonModal>
    </IonContent>
  );
};

export default EventList;
