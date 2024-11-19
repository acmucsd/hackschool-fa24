import TripCard from "@/components/TripCard";
import ActivityCard from "@/components/ActivityCard";
import styles from "@/styles/Home.module.css";

const Home = () => {
  /* Activity 1: Add the useState hooks for 
    trips, 
    activities
  */

  return (
    <div className={styles.main}>
      <div className={styles.tripContainer}>
        <div className={styles.tripBox}>
          <h3>Trips</h3>
          <TripCard destination="Paris" journalEntry="Had an amazing time visiting the Eiffel Tower!"
          startDate="2024-09-01T00:00:00.000Z" endDate="2024-09-10T00:00:00.000Z"/>
        </div>
        <div className={styles.tripBox}>
          <h3>Activities</h3>
          <ActivityCard trip="Paris" activitySpot="Louvre Museum" rating="4" review="Visiting the Louvre Museum was a breathtaking experience! From the moment I entered, I was captivated by the sheer grandeur of the building itself—it's like stepping into a world where art and history come alive."/>
        </div>
      </div>
    </div>
  );
};

export default Home;