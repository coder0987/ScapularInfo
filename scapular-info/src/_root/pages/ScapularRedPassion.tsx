import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularRed = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Red Scapular of the Passion</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              On July 26, 1846, Jesus and Mary appeared to Sister Appoline Andriveau - of the Daughters of Charity of St. Vincent de Paul - and revealed the red scapular to her.
              They promised that those who wear the scapular faithfully and contemplate the Passion of Jesus Christ will be granted a great increase of Faith, Hope, and Charity every Friday.
            </p>
            <p className="pr">
              Unlike the other scapulars, the red scapular of the passion is not associated with any confraternity.
              Instead, wearers of the red scapular are "clad in the livery of Christ's passion"
              <SourcesCite source="redScapularMaryPages" className="">
                Red Scapular of the Passion
              </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularRed.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Red Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>A great increase in Faith, Hope, and Charity every Friday</li>
                <li>Spiritual armor against infernal attacks</li>
            </ol>
            <p className="pr">The red scapular "will prove to us a strong armor against infernal assaults, an impenetrable buckler against the arrows of our spiritual enemies and, according to the testimony of Jesus Christ, to all who wear it with faith and piety it will be a pledge of pardon, a source of grace. "</p>
            <p className="pr">There are also indulgences associated with the red scapular</p>
        </div>
    </div>
  );
};

ScapularRed.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Red Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>Red wool</li>
                <li>Red wool cord (must be red and made of wool) - described as a "red woollen braid"</li>
                <li>Images of Jesus on the Cross on one side and the Sacred and Immaculate hearts on the other</li>
                <li>May be encased in plastic</li>
            </ol>
            <p className="pr">
                Of all the scapulars, the red scapular of the passion has the most specific requirements for how it must be made.
                It is the only scapular which requires specific images and the only scapular which requires a specific color and material for the cord.
            </p>
            <p className="pr">
                The image on the front must be Jesus on the Cross and the implements of the passion. It should be surrounded by the prayer "Holy Passion of Our Lord Jesus Christ, save us."
            </p>
            <p className="pr">
                The image on the back must be the Sacred Hearst of Jesus and Mary, the one surrounded with thorns and the other pierced by a sword, and both surrounded by a cross. They should be surrounded by the prayer "Sacred Hearts of Jesus and Mary, protect Us."
            </p>
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

ScapularRed.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Red Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the red scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
            <li>Live chastely</li>
            <li>Wear the scapular</li>
            <li>Be Catholic</li>
            <li>Live in a state of grace</li>
            <li className="line-through">Support and pray for the corresponding confraternity</li>
            <li>Be invested in the scapular by any Catholic priest</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the red scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>Wear it on Friday with devotion </li>
            <li>Recommended to meditate on the passion on Fridays</li>
          </ol>
          <p className="pr">Jesus said to sister Appoline, "The world is drawing down ruin upon itself because it never thinks of the Passion of Jesus Christ. Do your utmost to bring it to meditate thereon, to bring about its salvation"</p>
          <p className="pr">
            Proper use of the scapular demands that these requirements should not be treated like checkboxes which, when completed, guarantee salvation.
            The scapular is a sacramental, a visible sign of an invisible grace.
            These requirements are meant to act as guidelines to grow your faith and relationship with the Blessed Virgin Mary.
          </p>
        </div>
    </div>
  );
};

export default ScapularRed;