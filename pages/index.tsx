import { useRef, useState } from "react";

const HomePage = () => {
    const [feedbackItems, setFeedbackitems] = useState([]);

    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const feedbackInputRef = useRef<HTMLTextAreaElement | null>(null);

    const submitFormHandler = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current!.value;
        const enteredFeedback = feedbackInputRef.current!.value;

        const reqBody = { email: enteredEmail, text: enteredFeedback };

        const resp = await fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    const getFeedbacmDataHandler = async () => {
        const resp = await fetch("/api/feedback");
        const data = await resp.json();
        console.log(data.data);

        setFeedbackitems(data.feedback);
    };

    return (
        <div>
            <h1>The Home Page</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        ref={emailInputRef}
                    />
                </div>
                <div>
                    <label htmlFor="feedback">Your feedback</label>
                    <textarea
                        name="feedback"
                        id="feedback"
                        rows={5}
                        ref={feedbackInputRef}
                    />
                </div>
                <button>Send feedback</button>
            </form>
            <hr />
            <button onClick={getFeedbacmDataHandler}>Get feedback data</button>
            <ul>
                {feedbackItems.map((i: any) => (
                    <li key={i.id}>{i.feedback}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
