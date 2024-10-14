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
  github: "https://github.com/rhythmitaliya",
  linkedin: "https://linkedin.com/in/rhythmitaliya",
  keywords: "Rhythm Italiya, Full Stack Developer, Web Development, MERN Stack Developer,Node.js Developer, React.js Developer",
  robots: "index, follow",
  author: "Rhythm Italiya"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content={metadata.author} />

        <link rel="canonical" href={metadata.url} />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.siteName} />

        <meta property="og:instagram" content={metadata.instagram} />
        <meta property="og:github" content={metadata.github} />
        <meta property="og:linkedin" content={metadata.linkedin} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />


        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rhythm Italiya",
            "jobTitle": "Full Stack Developer",
            "url": metadata.url,
            "sameAs": [
              metadata.instagram,
              metadata.twitter,
              metadata.github,
              metadata.linkedin
            ],
            "description": metadata.description,
            "image": metadata.image
          })
        }} />
        
      </head>

      <body className="min-h-screen bg-[#082231]">
        <ScrollAnim />
        {children}
      </body>
    </html>
  );
}