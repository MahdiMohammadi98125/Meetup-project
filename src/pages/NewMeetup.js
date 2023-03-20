import NewMeetupForm from "../component/meetup/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(MeetupData) {
    fetch(
      `https://react-getting-started-d1863-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(MeetupData),
        headers: {
          "Content-Type": "appliction/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetup;
