import PlenaryIndulgence from "@/components/shared/PlenaryIndulgence";
import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularBlue = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Blue Scapular of the Immaculate Conception</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              On February 2nd, 1617, Our Lady of the Immaculate Conception appeared to Venerable Ursula Benincasa clothed in white and azure blue. She held in her arms the Infant Jesus.
              Surrounded by many others, all similarly attired, Our Lady said to Venerable Ursula, "Cease weeping, Ursula, and turn your sighs into heartfelt joy. Listen closely to what Jesus, whom I am holding in my lap, will say to you."
              The Infant Jesus revealed to Ursula that she should found a convent. He said that her nuns would wear the same attire as Our Lady and live a life of solitude and seclusion.
              He promised that special graces and spiritual gifts would be given to those who zealously follow this way of life.
            </p>
            <p className="pr">
              Venerable Ursula Benincasa prayed that these favors would also be given to those laity who observe chastity and wear a small blue scapular.
              Jesus responded by showing her a vision of many angels distributing the scapulars throughout the world
              <SourcesCite source="blueScapularPadriMariani" className="">
                Scapular of the Immaculate Conception
              </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularBlue.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Blue Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">Those who wear the Scapular of the Immaculate Conception and belong to the Marian Fathers Confraternity can receive a Plenary Indulgence for the Faithful Departed under the usual conditions* on the following days:</p>
            <ul className="list-disc pr pl-6">
                <li>The day of investiture with the Scapular of the Immaculate Conception</li>
                <li>The solemnity of the Immaculate Conception of the Blessed Virgin Mary, December 8</li>
                <li>The solemnity of the Assumption of the Blessed Virgin Mary, August 15</li>
                <li>Christmas Day, December 25</li>
                <li>Presentation of the Lord, February 2</li>
                <li>Easter Sunday</li>
                <li>The solemnity of the Ascension of the Lord</li>
                <li>The feast of St. Stanislaus Papczynski  (the founder of the Marian Fathers), May 18</li>
                <li>The feast of St. Cajetan (the founder of the Theatine Order), August 7</li>
            </ul>
            <PlenaryIndulgence />
        </div>
    </div>
  );
};

ScapularBlue.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Blue Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>Blue wool</li>
                <li>Wool, or some other material, cord (usually red but color doesn't matter)</li>
                <li>Pictures are usually of pregnant Mary or the Immaculate Conception on one side and Mary's name on the other but aren't required</li>
                <li>May be encased in plastic</li>
            </ol>
            <p className="pr">
              Further details can be found <Link to="/scapulars/construction" className="text-sky-500">here</Link>
            </p>
            <p className="pr">
              After investment, any number of small scapulars may be replaced by a single properly made <Link to="/scapulars/medal" className="text-sky-500">medal</Link>, although a proper wool scapular is generally preferable
            </p>
        </div>
    </div>
  );
};

ScapularBlue.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Blue Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the blue scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
          <li>Live chastely</li>
          <li>Wear the scapular</li>
          <li>Be Catholic</li>
          <li>Live in a state of grace</li>
          <li>Support and pray for the corresponding confraternity (The Theatines)</li>
          <li>Be invested in the scapular by a qualified Catholic priest (A member of the Theatines, or, if commuted, any Catholic Priest)</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the blue scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>Observe chastity</li>
          </ol>
        </div>
    </div>
  );
};

export default ScapularBlue;