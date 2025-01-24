import CompiledNotice from "@/components/shared/CompiledNotice";
import PlenaryIndulgence from "@/components/shared/PlenaryIndulgence";
import ScapularTopDesktop from "@/components/shared/ScapularTopDesktop";
import ScapularTopMobile from "@/components/shared/ScapularTopMobile";
import Sources from "@/components/shared/Sources";
import SourcesCite from "@/components/shared/SourcesCite";
import SourcesProvider from "@/components/shared/SourcesProvider";
import { littleOfficeMenu } from "@/constants";
import { Link, Outlet } from "react-router-dom";


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
        <h2 className="title">History of The Little Office of the Blessed Virgin Mary</h2>
        <div className="flex flex-col gap-y-4">
            <p className="pr">
              An ancient devotion dating back to around the 8th century, the Little Office of the Blessed Virgin Mary is a simplified form of the larger Divine Office.
              Around the 10th century, the Little Office's popularity exploded and it was, from the 14th to 16th centuries, an obligation for all the clergy
              <SourcesCite source="catholicEncyclopediaLittleOffice" className="pr">Catholic Encyclopedia</SourcesCite>.
            </p>
            <p className="pr">
              Often prayed in addition to, or in lieu of, the Divine Office, the Little Office is similarly composed of prayers- primarily psalms -
               which are meant to be prayed throughout the day, at certain specified hours. The Little Office, specifically, is nearly entirely Marian in character
               <SourcesCite source="littleOfficeUDayton" className="pr">University of Dayton</SourcesCite>.
            </p>
            <p className="pr">
              Historically, there have been many variations of the Little Office, but modern use primarily sees only two.
              The first repeats the same cycle of prayers daily, with some variation during Lent, Easter, Advent, and Christmas.
              The second repeats a weekly cycle for Prime and Vespers as well.
            </p>
            <p className="pr">
              The first form is available, in full, <Link target="_blank" rel="noopener noreferrer" className="link" to="https://udayton.edu/imri/mary/l/little-office-of-the-blessed-virgin-mary.php">here</Link>. <br />
              The second, <Link target="_blank" rel="noopener noreferrer" className="link" to="https://www.liturgies.net/Liturgies/Catholic/LittleOffice.htm">here</Link>.
            </p>
            <p className="pr">
              The hours of the Little Office are as follows:
              <ul className="list-disc pl-5 pr">
                <li>Matins - 2 AM - Sometimes replaced with silent meditation</li>
                <li>Lauds - On rising</li>
                <li>Prime - 6 AM</li>
                <li>Sext - 12 Noon</li>
                <li>Terce - 3 PM</li>
                <li>Vespers - 6 PM</li>
                <li>Compline - Before going to bed</li>
              </ul>
              Outside a monastic context, there is a great deal of leniency with when each hour is prayed.
              Additionally, Matins - sometimes called Vigils - can be prayed with Lauds or anticipated the night before with Compline <SourcesCite source="littleOfficeAngelusPress" className="pr">Angelus Press</SourcesCite>.
            </p>
            <p className="pr">
              Because the Little Office is, properly, part of the Divine Liturgy, it is prayed on behalf of the Church.
              For an excellent introduction to the Little Office, along with an explanation of what this means, see the 
              <Link target="_blank" rel="noopener noreferrer" className="link" to="https://www.lobvm.com/introduction/"> 1915 Benzinger Brothers introduction</Link>.
            </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Jan. 2025" />
    </div>
  );
};

LittleOffice.Blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 p-5 flex-1">
        <h2 className="title">Blessing from The Little Office of the Blessed Virgin Mary</h2>
        <div className="flex flex-col gap-y-4">
            <p className="pr">
              In 1887, Pope Leo XIII granted the following indulgences:
            </p>
            <ul className="pr list-disc pl-5">
              <li>Monthly, a plenary indulgence under the usual conditions* to those who recite the whole office</li>
              <li>Daily, a partial indulgence to those who recite the whole office</li>
              <li>Daily, a smaller partial indulgence to those who Matins and Lauds only, Vespers and Compline only, and for each hour</li>
            </ul>
            <SourcesCite source="littleOfficeCatholicWay" className="pr">Catholic Way</SourcesCite>
            <PlenaryIndulgence />
        </div>
        <CompiledNotice author="Samuel Mach" date="Jan. 2025" />
    </div>
  );
};

LittleOffice.Rubrics = () => {
  return (
    <div className="flex flex-col gap-6 m-2 p-5 flex-1">
        <h2 className="title">How to Pray The Little Office of the Blessed Virgin Mary</h2>
        <div className="flex flex-col">
            <p className="caption">This page is intended for those who pray the Little Office in private (or small groups).</p>
            <p className="caption">Anyone praying in a church or oratory should follow the official rubrics.</p>
            <p className="pr">
              Oops! You seem to have caught us before we finished this part of the site. for now, you can refer to the following resource:
              <Link target="_blank" rel="noopener noreferrer" className="link" to="https://www.lobvm.com/how-to/"> LOBVM.com</Link>.
            </p>
            <p className="pr">
              Rest assured, clear, concise instructions are comming (hopefully) soon.
            </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Jan. 2025" />
    </div>
  );
};
  

export default LittleOffice;