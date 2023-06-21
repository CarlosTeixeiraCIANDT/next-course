import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage: React.FC<{ sales: any }> = ({ sales }) => {
    const [salesState, setSales] = useState<any>(sales);
    const [isLoading, setIsLoading] = useState<any>();

    const { data, error } = useSWR("url");

    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchData = async () => {
    //         const data = await fetch("url");
    //         setSales(data);
    //     };

    //     fetchData();
    //     setIsLoading(false);
    // }, []);

    useEffect(() => {
        // manipulation of data here
    }, [data]);

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (!sales) {
        return <p>No data yet</p>;
    }
    return <ul></ul>;
};
export default LastSalesPage;

export async function getStaticProps(context: any) {
    const resp = await fetch("url");
    const data = await resp.json();
    return { props: { sales: data }, revalidate: 10 };
}
