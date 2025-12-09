import styles from "./stats.module.css";
import data from "./data.json";

function StatsItem({ label, percentage }) {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
}

export default function Stats() {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {data.map((item) => (
          <li
            key={item.id}
            className={`${styles.statsItem} ${styles[item.label.slice(1)]}`}
          >
            <StatsItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
