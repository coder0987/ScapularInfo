import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularBrown = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Brown Scapular</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              In July 1251, Our Lady of Mt. Carmel appeared to St. Simon Stock bearing a message and a gift.
              With her arms outstretched, she made him a promise: "This shall be the privilege for you and all Carmelites, that anyone dying with this habit shall not suffer eternal fire. It is the sign of salvation, a safeguard in dangers, a pledge of peace and of the covenant."
              This habit was none other than the original brown scapular of the Carmelites.
            </p>
            <p className="pr">
              The scapular is a symbol of dedication to Mary and participation in the Carmelite confraternity.
              Those who wear the scapular place themselves under Mary's protection.
              By investment in the scapular, the laity are able to join in the Carmelite order spiritually.
            </p>
            <p className="pr">
              The brown scapular, an incredible symbol of dedication and conduit of grace given to us by Our Lady of Mount Carmel, has been a blessing to countless laity and religious alike. It is a continual reminder of God's never-ending mercy, a spiritually grounding practice lauded universally by the Church.
            </p>
        </div>
    </div>
  );
};

ScapularBrown.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Brown Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
              <li> Protection from death while not in a state of grace</li>
              <li> Mary will come the Saturday after death and move you from purgatory straight to Heaven</li>
              <li> The scapular creates a close bond between your heart and Mary's, which encourages virtues and the hatred of sin</li>
              <li> If the requirements are not met, instead the wearer will receive some graces simply through the act of wearing it. Conversions are a common effect and protection from death may still occur, as no one can die in a state of sin while wearing the scapular</li>
            </ol>
            <p className="pr">There are also many indulgences associated with wearing the brown scapular</p>
        </div>
    </div>
  );
};

ScapularBrown.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Brown Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
              <li>Two pieces of 100% woven brown wool</li>
              <li>A cord (any color) of wool or some other material</li>
              <li>Pictures are unnecessary, but usually St. Simon Stock on one side and Our Lady of Mt. Carmel on the other</li>
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

ScapularBrown.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Brown Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the brown scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
          <li>Live chastely</li>
          <li>Wear the scapular</li>
          <li>Be Catholic</li>
          <li>Live in a state of grace</li>
          <li>Support and pray for the corresponding confraternity (The Carmelites)</li>
          <li>Be invested in the scapular by any Catholic priest</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the brown scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>Pray daily the Little Office of the Blessed Virgin Mary or another form of the Divine Office</li>
            <li>Or abstain from meat on Wednesdays, Fridays, and Saturdays</li>
            <li>Or have a priest commute the requirement to another one, such as praying the rosary daily</li>
            <li>Observe with great chastity the 6th and 9th commandments</li>
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

export default ScapularBrown;