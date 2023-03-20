import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../UI/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const entredTitle = titleInputRef.current.value;
    const entredImage = imageInputRef.current.value;
    const entredAddress = addressInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: entredTitle,
      image: entredImage,
      address: entredAddress,
      description: entredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="descripton">Meetup Description</label>
          <textarea
            rows={5}
            id="description"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
