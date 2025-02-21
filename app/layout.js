import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "VORN AI",
  description: "AI-powered platform revolutionizing decentralized intelligence",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
