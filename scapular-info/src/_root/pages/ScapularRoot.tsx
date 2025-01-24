import ScapularTopMobile from "@/components/shared/ScapularTopMobile";
import ScapularTopDesktop from "@/components/shared/ScapularTopDesktop";
import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";
import { scapularMenu } from "@/constants";

import { Outlet } from "react-router-dom";

const ScapularRoot = () => {
    return (
        <div className="flex-1 flex-col flex w-full">
            <ScapularTopMobile menu={scapularMenu} />
            <ScapularTopDesktop menu={scapularMenu} />

            <div className="px-4">
                <SourcesProvider>
                    <div>
                      <Outlet />
                      <Sources />
                    </div>
                </SourcesProvider>
            </div>
        </div>
  );
};

export default ScapularRoot;