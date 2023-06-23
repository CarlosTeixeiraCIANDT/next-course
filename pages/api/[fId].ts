import { NextApiRequest, NextApiResponse } from "next";
import { filePathGen, extractFeedback } from "./feedback";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const feedbackId = req.query.fId;

    const path = filePathGen();
    const data = extractFeedback(path);

    const filtered = data.find((feedback: any) => feedback.id === feedbackId);

    res.status(200).json({ feedback: filtered });
};

export default handler;
