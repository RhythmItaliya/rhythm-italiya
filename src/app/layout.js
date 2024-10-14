import "./globals.css";
import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";

export const metadata = {
  title: "Rhythm Italiya",
  description: "Rhythm Italiya - Full Stack Developer specializing in modern web technologies and creating dynamic, user-friendly applications.",

  url: "https://rhythmitaliya.com",
  image: "https://res.cloudinary.com/ds9ufpxom/image/upload/v1727323304/Img/nruph7xbowtmlxslzacv.png",
  siteName: "Rhythm Italiya Portfolio",
  twitterHandle: "@rhythmitaliya",
  instagram: "https://instagram.com/rhythmitaliya",
  twitter: "https://x.com/rhythmitaliya",
  github: "https://github.com/rhythmitaliya",
  linkedin: "https://linkedin.com/in/rhythmitaliya"
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
        <meta property="og:site_name" content={metadata.siteName} />

        <meta property="og:twitter" content={metadata.twitter} />
        <meta property="og:instagram" content={metadata.instagram} />
        <meta property="og:github" content={metadata.github} />
        <meta property="og:linkedin" content={metadata.linkedin} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rhythm Italiya",
          "url": "https://rhythmitaliya.com",
          "image": "https://res.cloudinary.com/ds9ufpxom/image/upload/v1727323304/Img/nruph7xbowtmlxslzacv.png",
          "sameAs": [
            "https://instagram.com/rhythmitaliya",
            "https://x.com/rhythmitaliya",
            "https://github.com/rhythmitaliya",
            "https://linkedin.com/in/rhythmitaliya"
          ],
          "description": "Full Stack Developer specializing in modern web technologies and creating dynamic, user-friendly applications."
        }
        `}
        </script>
      </head>

      <body className="min-h-screen bg-[#082231]">
        <ScrollAnim />
        {children}
      </body>
    </html>
  );
}