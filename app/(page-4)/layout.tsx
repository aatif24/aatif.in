import "./page.css";
import Image from "next/image";
import Script from "next/script";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`antialiased`}
        >
            <Script src="https://uptime.betterstack.com/widgets/announcement.js" data-id="166520" async={true}
                    type="text/javascript" strategy="lazyOnload"/>
            {children}
            <a target="_blank" className="absolute bottom-0" href="https://uptime.betterstack.com">
                <picture>
                    <source srcSet={"https://uptime.betterstack.com/assets/static_assets/badges/light.png"}
                            media="(prefers-color-scheme: light)"/>
                    <Image width={130} height={52} alt="Better Stack Website Monitoring"
                           src="https://uptime.betterstack.com/assets/static_assets/badges/light.png"/>
                </picture>
            </a>
        </div>
    );
}
