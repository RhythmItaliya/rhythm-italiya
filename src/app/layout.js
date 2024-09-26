import "./globals.css";
import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";
import Head from "next/head";
export const metadata = {
  title: "Rhythm Italiya",
  description: "Rhythm Italiya - Full Stack Developer specializing in modern web technologies and creating dynamic, user-friendly applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/og.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:site_name" content="Rhythm Italiya Portfolio" />
        <meta property="og:url" content="https://rhythmitaliya.com" />

        {/* General Meta Tags */}
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>

      <body className="min-h-screen bg-[#082231]">
        <ScrollAnim />
        {children}
      </body>
    </html>
  );
}
