import { MainHeader } from "./MainHeader/main-header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
        </>
    );
};

export { Layout };
