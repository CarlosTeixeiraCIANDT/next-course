import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        { id: "you", name: "you" },
        { id: "someone", name: "someone" },
        { id: "other", name: "other" },
    ];

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: "/clients/[id]",
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsPage;
