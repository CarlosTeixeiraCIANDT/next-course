import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePathGen = () => {
    return path.join(process.cwd(), "data", "feedback.json");
};

const extractFeedback = (filePath: string) => {
    return JSON.parse(fs.readFileSync(filePath).toString());
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const email = req.body.email;
        const feedback = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            feedback,
        };

        const filePath = filePathGen();

        const data = extractFeedback(filePath);

        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: "Success", feedback: newFeedback });
    } else {
        const filePath = filePathGen();

        const data = extractFeedback(filePath);

        res.status(200).json({ feedback: data });
    }
};

export { filePathGen, extractFeedback };

export default handler;
