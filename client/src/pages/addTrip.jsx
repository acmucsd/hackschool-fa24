import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
  /*  Activity 1: Add the useState hooks for 
    destination, 
    startDate, 
    endDate, 
    entry
  */
  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
        <label htmlFor="destination">Destination:</label>
        <input type="text" className="destination" name="destination" required />

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" className="startDate" name="startDate" required />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" className="endDate" name="endDate" required />

        <label htmlFor="entry">Journal Entry:</label>
        <textarea className="entry" name="entry" required></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  )
};

export default AddTrip;