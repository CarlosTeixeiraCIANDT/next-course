import { Button } from "@/components/UI";

import styles from "./events-search.module.css";
import { useRef } from "react";

const EventsSearch: React.FC<{ onSearch: any }> = ({ onSearch }) => {
    const yearInputRef = useRef<any>(null);
    const monthInputRef = useRef<any>(null);
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        onSearch(selectedYear, selectedMonth);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">July</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
};

export { EventsSearch };
