import "./globals.css";
import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";

export const metadata = {
  title: "Rhythm Italiya",
  description: "Rhythm Italiya - Full Stack Developer specializing in modern web technologies and creating dynamic, user-friendly applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#082231]">
        <ScrollAnim />
        {children}
      </body>
    </html>
  );
}
