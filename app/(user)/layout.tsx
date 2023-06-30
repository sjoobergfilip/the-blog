import Footer from "@/components/Footer";
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
                {children}
                <Footer />
            </body>
        </html>
    );
}
