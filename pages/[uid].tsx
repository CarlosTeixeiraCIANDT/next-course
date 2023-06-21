const UserIdPage = () => {
    return <></>;
};

export default UserIdPage;

export async function getServerSidePRops(context: any) {
    console.log("Server side log");

    const { params } = context;

    const userId = params.uid;

    return {
        props: { id: "userid-" + userId },
    };
}
