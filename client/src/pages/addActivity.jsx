import styles from "../styles/TripForm.module.css";

const AddActivity = () => {
  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>
        What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
      </p>
      <form className={styles.tripForm}>
      </form>
    </div>
  );
};

export default AddActivity;
