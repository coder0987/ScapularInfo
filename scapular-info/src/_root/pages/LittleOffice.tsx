import ScapularTopDesktop from "@/components/shared/ScapularTopDesktop";
import ScapularTopMobile from "@/components/shared/ScapularTopMobile";
import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";
import { littleOfficeMenu } from "@/constants";
import { Outlet } from "react-router-dom";


const LittleOffice = () => {
  return (
    <div className="flex-1 flex-col flex w-full">
        <ScapularTopMobile menu={littleOfficeMenu} />
        <ScapularTopDesktop menu={littleOfficeMenu} />

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

LittleOffice.History = () => {
  return (
    <div className="flex flex-col gap-6 m-2 p-5 flex-1">
        <h2 className="title">The Little Office of the Blessed Virgin Mary</h2>
        <div className="flex flex-col">
            
            <p>The Little Office is available online <a target="_blank" rel="noopener noreferrer" className="text-sky-500" href="https://www.liturgies.net/Liturgies/Catholic/LittleOffice1.pdf">here</a></p>
        </div>
    </div>
  );
};

LittleOffice.Blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 p-5 flex-1">
        <h2 className="title">The Little Office of the Blessed Virgin Mary</h2>
        <div className="flex">
            <p>The Little Office is available online <a target="_blank" rel="noopener noreferrer" className="text-sky-500" href="https://www.liturgies.net/Liturgies/Catholic/LittleOffice1.pdf">here</a></p>
        </div>
    </div>
  );
};

LittleOffice.Rubrics = () => {
  return (
    <div className="flex flex-col gap-6 m-2 p-5 flex-1">
        <h2 className="title">The Little Office of the Blessed Virgin Mary</h2>
        <div className="flex flex-col">
            <p className="caption">This page is intended for those who pray the Little Office in private (or small groups).</p>
            <p className="caption">Anyone praying in a church or oratory should follow the official rubrics.</p>
            <p>The Little Office is available online <a target="_blank" rel="noopener noreferrer" className="text-sky-500" href="https://www.liturgies.net/Liturgies/Catholic/LittleOffice1.pdf">here</a></p>
        </div>
    </div>
  );
};
  

export default LittleOffice;