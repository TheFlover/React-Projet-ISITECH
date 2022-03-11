import styles from '../module/Card.module.css'; // Import css modules as styles

const Card = (props) => {
  return (
    <div className={styles.card}>
      <a href={props.link}>
        <div className={styles["card-image"]}><img src={props.image} alt="" /></div>
        <div className={styles["card-body"]}>
          <div className={styles["card-date"]}>
            <time>{props.date}</time>
          </div>
          <div className={styles["card-title"]}>
            <h3>{props.title}</h3>
          </div>
          <div className={styles["card-description"]}>
            <p>{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;