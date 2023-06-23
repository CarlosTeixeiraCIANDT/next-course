import { useState } from "react";
import { filePathGen, extractFeedback } from "../api/feedback";

const FeedbackPage: React.FC<{ feedbackItems: any }> = ({ feedbackItems }) => {
    const [feedbacData, setFeedbackData] = useState<any>();

    const loadDetailHandler = async (id: any) => {
        const resp = await fetch(`/api/${id}`);
        const data = await resp.json();

        setFeedbackData(data.feedback);
    };

    return (
        <>
            {feedbacData && <p>{feedbacData.email}</p>}
            <ul>
                {feedbackItems.map((i: any) => (
                    <li key={i.id}>
                        {i.feedback}{" "}
                        <button onClick={loadDetailHandler.bind(null, i.id)}>
                            Show Details
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export async function getStaticProps() {
    const path = filePathGen();
    const data = extractFeedback(path);

    return {
        props: {
            feedbackItems: data,
        },
    };
}

export default FeedbackPage;
