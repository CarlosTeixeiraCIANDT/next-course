import Link from "next/link";

import styles from "./button.module.css";

const Button: React.FC<{
    link?: string;
    children: React.ReactNode;
    onclick?: any;
}> = ({ link, children, onclick }) => {
    if (link) {
        return (
            <>
                <Link href={link} className={styles.btn}>
                    {children}
                </Link>
            </>
        );
    }

    return (
        <button className={styles.btn} onClick={onclick}>
            {children}
        </button>
    );
};

export { Button };
