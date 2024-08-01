import ScapularTopMobile from "@/components/shared/ScapularTopMobile";
import ScapularTopDesktop from "@/components/shared/ScapularTopDesktop";
import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";

import { Outlet } from "react-router-dom";

import 'react-a11y-footnotes/dist/styles.css'

const ScapularRoot = ({ children }) => {
    return (
        <div className="flex-col flex w-full">
            <ScapularTopMobile />
            <ScapularTopDesktop />

            <SourcesProvider>
                <div>
                  <Outlet />
                  <Sources />
                </div>
            </SourcesProvider>
        </div>
  );
};

export default ScapularRoot;