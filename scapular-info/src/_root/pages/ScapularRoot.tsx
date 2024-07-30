import ScapularTopMobile from "@/components/shared/ScapularTopMobile";
import ScapularTopDesktop from "@/components/shared/ScapularTopDesktop";

import { Outlet } from "react-router-dom";

import {
  FootnotesProvider,
  Footnotes,
} from 'react-a11y-footnotes'

import 'react-a11y-footnotes/dist/styles.css'

const ScapularRoot = ({ children }) => {
    return (
        <div className="flex-col flex w-full">
            <ScapularTopMobile />
            <ScapularTopDesktop />

            <FootnotesProvider>
                <div>
                  <Outlet />
                  <Footnotes />
                </div>
            </FootnotesProvider>
        </div>
  );
};

export default ScapularRoot;