import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="w-full flex-col md:flex-row flex h-screen">
        <Topbar className="flex" />
        <LeftSidebar />

        <section className="flex flex-1 pb-[50px] md:pb-0">
            <Outlet />
        </section>

        <Bottombar className="flex" />
    </div>
  );
};

export default RootLayout;