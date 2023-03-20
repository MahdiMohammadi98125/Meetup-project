import MeetupList from "../component/meetup/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    fetch(
      `https://react-getting-started-d1863-default-rtdb.firebaseio.com/meetups.json`
    )
      .then((Response) => Response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  }, [isLoading]);

  if (isLoading) {
    return (
      <section>
        <div>Loading...</div>
      </section>
    );
  }
  return (
    <section>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
}
export default AllMeetupPages;
