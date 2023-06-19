import styles from "./event-summary.module.css";

const EventSummary: React.FC<{ title: string }> = ({ title }) => {
    return (
        <section className={styles.summary}>
            <h1>{title}</h1>
        </section>
    );
};

export { EventSummary };
