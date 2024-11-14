import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularBenedict = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Benedictine Scapular</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              The scapular of St. Benedict is the first scapular used in any religious order.
              St. Benedict himself used the scapular, originally as an apron to cover the habit during manual labor.
            </p>
            <p className="pr">
              Part of the prayer for conferring the Benedictine scapular is this: "Receive the sweet yoke of Christ, and His burden which is light."
            </p>
            <p className="pr">
              The scapular of St. Benedict is conferred on those who charitably contribute to the Order of St. Benedict and lead virtuous lives
              <SourcesCite source="manualOfDevotions" className="italics">
                A Manual of Devotions
              </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularBenedict.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Benedictine Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
              <li>A daily indulgence of a year and forty days when the requirements are fulfilled</li>
              <li>A plenary indulgence once monthly under the normal conditions*</li>
              <li>A plenary indulgence at the hour of death by devoutly pronouncing (or, if not possible, by mentally considering) the Sacred Name of Jesus</li>
            </ol>
            <p className="pr">*To gain a plenary indulgence, one must:</p>
            <ul className="list-disc pr pl-6">
                <li>Be in the state of grace and free from all attachment to sin, even venial sin</li>
                <li>Have a general intention to gain the indulgence</li>
                <li>Perform acts to obtain the indulgence</li>
                <li>Receive the Sacrament of Reconciliation and Holy Eucharist</li>
                <li>Pray for the intentions of the Holy Father.</li>
            </ul>
        </div>
    </div>
  );
};

ScapularBenedict.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Benedictine Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
              <li>Two pieces of brown or black wool</li>
              <li>A cord (any color, usually black) of wool or some other material</li>
              <li>Pictures are unnecessary, but usually the two sides of the benedictine medal or an image of St. Benedict</li>
              <li>May be wrapped in plastic</li>
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

ScapularBenedict.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Benedictine Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the benedictine scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
          <li>Live chastely</li>
          <li>Wear the scapular</li>
          <li>Be Catholic</li>
          <li>Live in a state of grace</li>
          <li>Support and pray for the corresponding confraternity (The Benedictines)</li>
          <li>Be invested in the scapular by a qualified priest (A Benedictine, or, if it is commuted, any Catholic priest) after approaching the Sacrament of Penance and, if convenient, taking Holy Communion</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the benedictine scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>To wear a small scapular, properly blessed</li>
            <li>Every night, to make an examination of conscience and put oneself in the disposition of mind and affection, in which, by God's grace, one no longer fears death</li>
            <li>To say every night 3 Our Fathers, 3 Hail Marys, and one Creed for the exaltation and happy success of the Catholic, Apostolic, and Roman Church</li>
          </ol>
          <p className="pr">
            Proper use of the scapular demands that these requirements should not be treated like checkboxes which, when completed, guarantee salvation.
            The scapular is a sacramental, a visible sign of an invisible grace.
            These requirements are meant to act as guidelines to grow your faith and relationship with the Blessed Virgin Mary.
          </p>
        </div>
    </div>
  );
};

export default ScapularBenedict;