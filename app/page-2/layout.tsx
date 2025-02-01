
import "./page-2.css";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`antialiased`}
        >
            {children}
        </div>
    );
}
