import styles from "./event-content.module.css";

const EventContent: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <section className={styles.content}>{children}</section>;
};

export { EventContent };
