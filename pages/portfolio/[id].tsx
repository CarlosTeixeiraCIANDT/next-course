import { useRouter } from "next/router";

const PortfolioItemPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    /** add request here to fetch data with the id from query */

    return (
        <div>
            <h1>Item {router.query.id?.toString()}</h1>
        </div>
    );
};

export default PortfolioItemPage;
