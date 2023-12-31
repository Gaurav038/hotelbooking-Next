
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({ subsets: ["latin"] });
export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Your Boooking",
  description: "Generated by Your Booking App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider />
        <SearchModal />
        <Navbar currentUser={currentUser}/>
        <LoginModal />
        <RegisterModal />
        <RentModal />
      </ClientOnly>

        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
