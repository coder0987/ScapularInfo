import PlenaryIndulgence from "@/components/shared/PlenaryIndulgence";
import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularBlackPassion = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular of the Seven Dolors of Mary</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              In 1720, St. Paul of the Cross received a series of visions in which he saw himself, and later the Blessed Virgin, dressed in a black tunic.
              This tunic had on it a white cross and the most holy name of Jesus in white letters, along with a white heart, three nails, and the inscription <span className="italic">Jesu Christi Passio</span> (The Passion of Jesus Christ).
              Our Lady instructed St. Paul of the Cross that she was wearing this in mourning for Our Lord's Passion and that he should institute a religious order.
              This new order was to wear that habit of sorrow and continually mourn over the death of her Son.
            </p>
            <p className="pr">
              On June 24th, 1864, Pope Pius IX granted indulgences to thsoe who wear the Black Scapular of the Passion
              <SourcesCite source="blackScapularCatholicTelegraph" className="">
                The Catholic Telegraph
              </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularBlackPassion.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular of the Passion Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">Those who wear the Black Scapular of the Passion and are invested in the same can receive a Plenary Indulgence under the usual conditions* on the following days:</p>
            <ul className="list-disc pr pl-6">
                <li>The day of investiture with the scapular</li>
                <ul className="list-disc pr pl-6">
                    <li>Visit some church</li>
                    <li>Pray there for the peace of Christian Princes</li>
                    <li>And for the extripation of heresies</li>
                    <li>And for the exaltation of our holy mother, the Church</li>
                </ul>
                <li>At the hour of death, if the Holy Name of Jesus is invoked</li>
                <li>At the approach of death, along with Apostolic benediction, if the Holy Name of Jesus is invoked and death is patiently accepted from the hand of God as the penalty of sin</li>
                <li>On certain days, when visiting a church belonging to the Passionist Order or the Confraternity of the Passion on there praying:</li>
                <ul className="list-disc pr pl-6">
                    <li>For the peace of Christian Princes</li>
                    <li>And for the extripation of heresies</li>
                    <li>And for the exaltation of our holy mother, the Church</li>
                </ul>
            </ul>
            <p className="pr">These are the days:</p>
            <ul className="list-disc pr pl-6">
                <li>The first Tuesday after Sexagesima Sunday, feast of the solemn commemoration of the Passion of Our Lord Jesus Christ</li>
                <li>Friday after Passion Sunday, feast of the Seven Dolors of the Blessed Virgin Mary</li>
                <li>March 19, feast of St. Joseph, spouse of the Blessed Virgin Mary</li>
                <li>April 28, feast of St. Paul of the Cross, founder o fhte Congregation of the most Holy Cross and Passion of Our Lord Jesus Christ</li>
                <li>Third Sunday after Easter, feast of the Patronage of St. Joseph, spouse of the Immaculate Virgin Mary</li>
                <li>May 3, feast of the finding of the Holy Cross</li>
                <li>August 15, feast of the Assumption of the Blessed Virgin Mary</li>
                <li>September 14, feast of the Exaltation of the Holy Cross</li>
                <li>Third Sunday of September, feast of the Seven Dolors of Mary</li>
                <li>September 29, feast of St. Michael the Archangel</li>
            </ul>
            <p className="caption">Should such a church not exist, one may visit one's own parish church (or any other church or public oratory) on the prescribed day instead</p>
            
            <p className="pr">These indulgences may be gained on any day within the octave of the feast (the same day, or any of the following seven days).</p>
            <p className="pr">Those who wear and are invested in the Black Scapular may also receive a partial indulgence under the following conditions:</p>
            <ul className="list-disc pr pl-6">
                <li>Every time an act is performed, publicly or privately, of Divine worship, piety, or mortification</li>
                <li>Every time any work of spiritual or corporal work of mercy towards another is performed</li>
                <li>Every time attending an assembly with the purpose of commemorating the Passion of Our Lord Jesus Christ</li>
            </ul>
            <SourcesCite source="blackScapularCatholicTelegraph" className="pr">
                The Catholic Telegraph
            </SourcesCite>
            <PlenaryIndulgence />
        </div>
    </div>
  );
};

ScapularBlackPassion.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular of the Passion Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>Two pieces of black wool</li>
                <li>Wool cord (any color) or some other material</li>
                <li>TODO DESCRIBE IMAGE</li>
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

ScapularBlackPassion.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Black Scapular of the Passion Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">Certain requirements must be met to receive the blessings and indulgences associated with the black scapular</p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
            <li>Live chastely</li>
            <li>Wear the scapular</li>
            <li>Be Catholic</li>
            <li>Live in a state of grace</li>
            <li>Support and pray for the corresponding confraternity (The Congregation of the Holy Cross and Passion of Our Lord Jesus Christ)</li>
            <li>Be invested in the scapular by a qualified Catholic Priest (A priest who has been given these faculties by the General of the Passionists)</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the black scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>No special prayers or devotions are required, but the following are recommended</li>
            <li>Meditate for at least 15 minutes every day on the Sufferings of Our Lord</li>
            <li>As often as possible, to hear mass</li>
            <li>As often as possible, to read books treating on the Passion</li>
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

export default ScapularBlackPassion;