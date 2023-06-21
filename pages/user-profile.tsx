const UserProfilePage: React.FC<{ username: string }> = ({ username }) => {
    return <h1>{username}</h1>;
};

export default UserProfilePage;

export async function getServerSideProps(context: any) {
    const { params, req, res } = context;

    return { props: { username: "You" } };
}
