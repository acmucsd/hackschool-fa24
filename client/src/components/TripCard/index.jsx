import Image from "next/image";
import styles from "./style.module.css";

// Add the props inside ()
const TripCard = () => {
  // Function to format the date into this format: August 31, 2024
  const formatDate = (date) => {
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Remember to use the props using {} inside the <p> tags
  return (
    <div className={styles.card}>
      <Image src="/travel_placeholder.jpg" width={550} height={300}/>
      <p className={styles.cardContent}>
        <strong>Destination: </strong>
      </p>
      <p className={styles.cardContent}>
        <strong>Start Date:</strong>
      </p>
      <p className={styles.cardContent}>
        <strong>End Date:</strong>
      </p>
      <p className={styles.cardContent}>
        <strong>Journal Entry:</strong> </p>
    </div>
  );
};

export default TripCard;