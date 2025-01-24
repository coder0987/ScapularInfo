import CompiledNotice from "@/components/shared/CompiledNotice";
import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularWhite = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">White Scapular of the Most Blessed Trinity</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              On January 28, 1198, an angel appeared to Fr. John of Matha.
              The angel was wearing a white robe with a blue and red cross on his chest, with a red vertical beam and a blue cross beam.
              After this, the Trinitarians used this garment as their habit.
            </p>
            <p className="pr">
              Laity who wish to associate themselves with the Trinitarians can wear the White Scapular of the Most Blessed Trinity.
            </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularWhite.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">White Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">There are some indulgences associated with wearing the white scapular</p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularWhite.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">White Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
              <li>Two pieces of 100% woven white wool</li>
              <li>A cord (any color) of wool or some other material</li>
              <li>The front cloth must have the emblem of the Trinitarians (A cross with a red vertical beam and blue cross beam). Usually the back cloth also has it, but that is not required.</li>
              <li>May be wrapped in plastic</li>
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

ScapularWhite.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">White Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the white scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
          <li>Live chastely</li>
          <li>Wear the scapular</li>
          <li>Be Catholic</li>
          <li>Live in a state of grace</li>
          <li>Support and pray for the corresponding confraternity (The Trinitarians)</li>
          <li>Be invested in the scapular by any qualified Catholic priest (A Trinitarian or, if commuted, any Catholic priest)</li>
          </ol>
          <p className="pr">There are no specific requirements for the white scapular</p>
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

export default ScapularWhite;