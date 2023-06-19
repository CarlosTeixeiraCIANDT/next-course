import { useRouter } from "next/router";

const ClientProjects = () => {
    const router = useRouter();

    const clickHandler = () => {
        // you function here
        // router.push("/clients/you/1");
        router.push({
            pathname: "/clients/[id]/[clientId]",
            query: { id: "you", clientId: "1" },
        });
    };

    return (
        <div>
            <h1>projects for this cliente</h1>
            <button onClick={clickHandler}>Load a project</button>
        </div>
    );
};

export default ClientProjects;
