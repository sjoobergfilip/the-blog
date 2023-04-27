import Banner from "@/components/Banner";
import Header from "@/components/Header";
import "../../styles/globals.css";
import "../../styles/Home.module.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <Header />
                <Banner />
                {children}
            </body>
        </html>
    );
}
