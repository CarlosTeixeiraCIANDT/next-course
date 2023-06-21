import fs from "fs/promises";
import Link from "next/link";
import path from "path";

const HomePage: React.FC<{ products: any }> = ({ products }) => {
    return (
        <ul>
            {products.map((product: any) => (
                <li key={product.id}>
                    <Link href={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export async function getStaticProps() {
    console.log("Regenerating ...");

    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    return {
        props: {
            products: data.products,
            revalidate: 2,
            notFound: true,
            redirect: { destination: "/" },
        },
    };
}

export default HomePage;
