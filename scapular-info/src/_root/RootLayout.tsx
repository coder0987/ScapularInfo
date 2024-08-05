import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";

import Footer from "@/components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="w-full flex-col md:flex-row flex h-screen">
        <Topbar className="flex" />
        <LeftSidebar />

        <section className="flex flex-col flex-1 pb-[86px] md:pb-0 home-container">
            <Outlet />
            <Footer />
        </section>

        <Bottombar className="flex" />
    </div>
  );
};

export default RootLayout;