import fs from "fs/promises";
import path from "path";

const ProductDetailPAge: React.FC<{ loadedProduct: any }> = ({
    loadedProduct,
}) => {
    if (!loadedProduct) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    );
};

const getData = async () => {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    return data;
};

export async function getStaticProps(context: any) {
    const { params } = context;

    const productId = params.pid;

    const data = await getData();

    const product = data.products.find(
        (product: any) => product.id === productId
    );

    if (!product) {
        return { notFound: true };
    }
    return { props: { loadedProduct: product } };
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map((product: any) => product.id);

    const params = ids.map((id: any) => ({ params: { pid: id } }));

    return {
        paths: params,
        fallback: true,
    };
}

export default ProductDetailPAge;
