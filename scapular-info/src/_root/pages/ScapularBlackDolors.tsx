import CompiledNotice from "@/components/shared/CompiledNotice";
import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularBlack = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular of the Seven Dolors of Mary</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              In 1255, Pope Alexander IV instituted the Order of the Servites of Mary.
              The Black Scapular of the Seven Dolors (Sorrows) of Mary was worn by members of this order.
              Our Lady appeared to seven young Florentine noblemen, inviting them to follow Christ through the evangelical counsels.
              She gave them a black habit, telling them that "these garments shall be to you a perpetual memory of the sufferings of my heart."
            </p>
            <p className="pr">
              In 1611, Pope Paul V granted indulgences to thsoe who continually wear the Black Scapular
              <SourcesCite source="blackScapularMaryPages" className="">
                Marypages
              </SourcesCite>.
            </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularBlack.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>A share in all of their works and prayers of the Servite order</li>
                <li>An opportunity to deepen one's understanding of the life of Christ and His mother</li>
            </ol>
            <p className="pr">There are also many indulgences associated with wearing the black scapular</p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularBlack.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>Two pieces of black wool</li>
                <li>Wool cord (any color) or some other material</li>
                <li>Front is usually Our Lady of Sorrows but no images are required</li>
                <li>May be encased in plastic</li>
            </ol>
            <p className="pr">
              Further details can be found <Link to="/scapulars/construction" className="text-sky-500">here</Link>
            </p>
            <p className="pr">
              After investment, any number of small scapulars may be replaced by a single properly made <Link to="/scapulars/medal" className="text-sky-500">medal</Link>, although a proper wool scapular is generally preferable
            </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularBlack.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the black scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
            <li>Live chastely</li>
            <li>Wear the scapular</li>
            <li>Be Catholic</li>
            <li>Live in a state of grace</li>
            <li>Support and pray for the corresponding confraternity (The Servite Order)</li>
            <li>Be invested in the scapular by a qualified Catholic Priest (A member of the Servites, or, if commuted, any Catholic Priest)</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the black scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>Pray 15 minutes daily for the Servite order and the Church (the Chaplet of the Seven Sorrows is recommended)</li>
            <li>Must include at least one Hail Mary and one Hail Holy Queen</li>
            <li>If possible, perform some work of mercy towards those suffering either bodily, spiritually, or mentally</li>
          </ol>
          <p className="pr">
            Proper use of the scapular demands that these requirements should not be treated like checkboxes which, when completed, guarantee salvation.
            The scapular is a sacramental, a visible sign of an invisible grace.
            These requirements are meant to act as guidelines to grow your faith and relationship with the Blessed Virgin Mary.
          </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

export default ScapularBlack;