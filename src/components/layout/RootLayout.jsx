import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GitHubProvider from "../../contexts/github/GithubContext";
import AlertProvider from "../../contexts/alert/AlertContext";
import Alert from "../shared/Alert/Alert";

export default function RootLayout() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <div className="flex flex-col justify-between h-screen">
          {/* Navbar */}
          <Navbar />
          {/* Main */}
          <Alert />
          <main className="container mx-auto px-3 pb-12 flex-grow">
            <Outlet />
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </AlertProvider>
    </GitHubProvider>
  );
}
