import "./globals.css";
import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";

export const metadata = {
  title: "Rhythm Italiya",
  description: "Rhythm Italiya - Full Stack Developer specializing in modern web technologies and creating dynamic, user-friendly applications.",
  url: "https://rhythmitaliya.com",
  image: "https://res.cloudinary.com/ds9ufpxom/image/upload/v1727323304/Img/nruph7xbowtmlxslzacv.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </head>

      <body className="min-h-screen bg-[#082231]">
        <ScrollAnim />
        {children}
      </body>
    </html>
  );
}
