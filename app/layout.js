import "./globals.css";

export const metadata = {
  title: "VORN AI",
  description: "VORN AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
