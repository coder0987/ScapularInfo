import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";

import { Outlet } from "react-router-dom";

const HoursRoot = () => {
    return (
        <div className="flex-1 flex-col flex w-full md:max-w-3xl">
            <div className="px-4">
                <SourcesProvider>
                        <div className="">
                            <Outlet />
                            <Sources />
                        </div>
                </SourcesProvider>
            </div>
        </div>
  );
};

export default HoursRoot;