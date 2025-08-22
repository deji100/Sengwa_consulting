import "./globals.css";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { GetStarted } from "./components/get-started";

export const metadata = {
  title: "Sengwa Consulting",
  description: "A Job Hunting Platform",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
          <GetStarted />
        </main>
        <Footer />
      </body>
    </html>
  );
}
