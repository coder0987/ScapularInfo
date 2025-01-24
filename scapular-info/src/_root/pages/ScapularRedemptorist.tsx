import CompiledNotice from "@/components/shared/CompiledNotice";
import PlenaryIndulgence from "@/components/shared/PlenaryIndulgence";
import SourcesCite from "@/components/shared/SourcesCite";
import { Link } from "react-router-dom";

const ScapularRedemptorist = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Five-Fold Scapular</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">The Five-Fold Scapular, also known as the Redemptorist Scapular, is a combination of five of the most popular scapulars approved by the Holy See which dates back to the 18th century
                <SourcesCite source="fiveScapulars" className="italic">
                    The Five Scapulars
                </SourcesCite>.
            </p>
            <p className="pr">
              The Five-Fold (Redemptorist) scapular is composed of the
              <Link to="/scapulars/red-scapular" className="text-sky-500"> red scapular of the passion</Link>, the 
              <Link to="/scapulars/blue-scapular" className="text-sky-500"> blue scapular of the Immaculate Conception</Link>, the 
              <Link to="/scapulars/brown-scapular" className="text-sky-500"> brown scapular of Our Lady of Mt. Carmel</Link>, the 
              <Link to="/scapulars/black-scapular" className="text-sky-500"> black scapular of the Seven Dolors of Mary</Link>, and the 
              <Link to="/scapulars/white-scapular" className="text-sky-500"> white scapular of the Trinity</Link>.
            </p>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularRedemptorist.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Five-Fold Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              The wearer receives all of the blessings from each of the constituent scapulars, plus some indulgences associated with the Redemptorist scapular:
            </p>
            <p className="pr">
              From the Red Scapular of the Passion
            </p>
            <ol className="list-decimal pr pl-6">
                <li>A great increase in Faith, Hope, and Charity every Friday</li>
                <li>Spiritual armor against infernal attacks</li>
            </ol>
            <p className="pr">
              From the Blue Scapular of the Immaculate Conception
            </p>
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
            <p className="pr">
              From the Brown Scapular
            </p>
            <ol className="list-decimal pr pl-6">
              <li> Protection from death while not in a state of grace</li>
              <li> Mary will come the Saturday after death and move you from purgatory straight to Heaven</li>
              <li> The scapular creates a close bond between your heart and Mary's, which encourages virtues and the hatred of sin</li>
              <li> If the requirements are not met, instead the wearer will receive some graces simply through the act of wearing it. Conversions are a common effect and protection from death may still occur, as no one can die in a state of sin while wearing the scapular</li>
            </ol>
            <p className="pr">
              From the Black Scapular of Seven Dolors of Mary
            </p>
            <ol className="list-decimal pr pl-6">
                <li>A share in all of their works and prayers of the Servite order</li>
                <li>An opportunity to deepen one's understanding of the life of Christ and His mother</li>
            </ol>
            <p className="pr">
              From the White Scapular of the Trinity
            </p>
            <p className="pr">There are no special graces from wearing the white scapular</p>
            <PlenaryIndulgence />
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

ScapularRedemptorist.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Five-Fold Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              The Five-Fold scapular contains each of the five scapulars together on one string.
              Each scapular must follow all of its requirements.
            </p>
            <ol className="list-decimal pr pl-6">
                <li>Red wool, blue wool, brown wool, black wool, and white wool</li>
                <li>Red wool cord (must be red and made of wool) - described as a "red woollen braid"</li>
                <li>On the red wool: images of Jesus on the Cross on one side and the Sacred and Immaculate hearts on the other</li>
                <li>On the white wool: the symbol of the Trinitarians</li>
                <li>Each other scapular may have the associated images, though they are not required and will not be easily visible</li>
                <li>(Discouraged) May be encased in plastic</li>
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

ScapularRedemptorist.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Five-Fold Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              Altogether, wearers of the Five-Fold scapular must follow of the requirements for each scapular.
            </p>
            <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
          <li>Live chastely</li>
          <li>Wear the scapular</li>
          <li>Be Catholic</li>
          <li>Live in a state of grace</li>
          <li>Support and pray for the corresponding confraternity (The Theatines, the Carmelites, the Servites, and the Trinitarians)</li>
          <li>Be invested in EACH scapular by any qualified Catholic priest - all five investments must be performed separately</li>
          </ol>
          <p className="pr">From the red scapular</p>
          <ol className="list-decimal pr pl-6">
            <li>Wear it on Friday with devotion </li>
            <li>Recommended to meditate on the passion on Fridays</li>
          </ol>
          <p className="pr">From the blue scapular</p>
          <ol className="list-decimal pr pl-6">
            <li>Observe chastity</li>
          </ol>
          <p className="pr">From the brown scapular</p>
          <ol className="list-decimal pr pl-6">
            <li>Pray daily the Little Office of the Blessed Virgin Mary or another form of the Divine Office</li>
            <li>Or abstain from meat on Wednesdays, Fridays, and Saturdays</li>
            <li>Or have a priest commute the requirement to another one, such as praying the rosary daily</li>
            <li>Observe with great chastity the 6th and 9th commandments</li>
          </ol>
          <p className="pr">From the black scapular</p>
          <ol className="list-decimal pr pl-6">
            <li>Pray 15 minutes daily for the Servite order and the Church (the Chaplet of the Seven Sorrows is recommended)</li>
            <li>Must include at least one Hail Mary and one Hail Holy Queen</li>
            <li>If possible, perform some work of mercy towards those suffering either bodily, spiritually, or mentally</li>
          </ol>
          <p className="pr">From the white scapular</p>
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

export default ScapularRedemptorist;