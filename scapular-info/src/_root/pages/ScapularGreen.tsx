import SourcesCite from "@/components/shared/SourcesCite";

const ScapularGreen = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Green Scapular</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">
              On September 8, 1840, Our Lady appeared to Sister Justine Bisqueyburo - a Daughter of Charity of St. Vincent de Paul - holding her Immaculate Heart in one hand and the green scapular in the other.
              Unlike the other scapulars, the green sacpular is not based on a religious habit
              <SourcesCite source="greenScapularCC" className="">
                Guide to the Green Scapular
              </SourcesCite>.
              Our Lady promised to Sister Justine that "When invoked under the the title of The Immaculate Heart and through this holy image Our Lady would obtain great favors from her Divine Son."
            </p>
            <p className="pr">
              The green scapular is very different from the other scapulars. Its primary focus is on conversions, especially for those who have fallen away from the faith.
              "She, who is the Refuge of Sinners, would especially obtain the conversion of those who had fallen away from the True Faith, or who had never possessed it." 
              It is not necessary for the green scapular to be worn. It suffices that it be blessed by a Catholic priest and worn by the one whom we desire to benefit by Our Lady's intercession.
              If, on the other hand, the person is unable, or even unwilling, to wear it or carry it, it may even be slipped, unknown to them, into their clothes, possessions, home or work environments, etc.
            </p>
            <p className="pr">
              Inscribed on one side of the scapular, around an image of the Immaculate Heart, is the prayer "Immaculate heart of Mary, pray for us now and at the hour of our death."
              The greatest graces are attached to the use of the Green Scapular; but these graces are more or less great in proportion to the degree of confidence of the person praying. This was the meaning of the different levels of brightness of the rays which fell from the Mother of God's hands during her last apparition
              <SourcesCite source="greenScapular" className="">
                Green Scapular Website
              </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularGreen.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Green Scapular Blessings</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
              <li>Healings, especially for those close to death</li>
              <li>Conversions, especially for those who have never known the faith</li>
              <li>Return to the faith for those who left</li>
            </ol>
            <p className="pr">
                "Our Lady would obtain great favors from her Divine Son—especially in the areas of physical health, peace of mind and spiritual conversion.
                She, who is the Refuge of Sinners, would especially obtain the conversion of those who had fallen away from the True Faith, or who had never possessed it” <SourcesCite source="greenScapularCC" className="">
                Guide to the Green Scapular
              </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularGreen.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Green Scapular Construction</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <ol className="list-decimal pr pl-6">
                <li>Two pieces of green wool</li>
                <li>A green wool cord</li>
                <li>Images of Our Lady on one side and the Immaculate Heart on the other. The Immaculate Heart should be surrounded by the prayer "Immaculate heart of Mary, pray for us now and at the hour of our death."</li>
                <li>May be wrapped in plastic</li>
            </ol>
        </div>
    </div>
  );
};

ScapularGreen.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2 md:m-6">
        <h2 className="title text-center md:text-left">Green Scapular Requirements</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="pr">
            Certain requirements must be met to receive the blessings and indulgences associated with the green scapular.
            Unlike the other scapulars, the General Requirements do not apply to the green scapular. 
            It should be noted that the graces received from the green scapular "are more or less great in proportion to the degree of confidence of the person praying"
          </p>
          <p className="pr">General Requirements (applies to all scapulars)</p>
          <ol className="list-decimal pr pl-6">
            <li className="line-through">Live chastely</li>
            <li className="line-through">Wear the scapular</li>
            <li className="line-through">Be Catholic</li>
            <li className="line-through">Live in a state of grace</li>
            <li className="line-through">Support and pray for the corresponding confraternity</li>
            <li className="line-through">Be invested in the scapular</li>
          </ol>
          <p className="pr">Specific Requirements (applies only to the green scapular)</p>
          <ol className="list-decimal pr pl-6">
            <li>Must be blessed by a priest (no enrollment necessary)</li>
            <li>Can be worn regularly or can be slipped into a pocket or amongst the belongings of anyone, even if they do not realize it</li>
            <li>Pray the prayer included daily: "Immaculate Heart of Mary, pray for us now and at the hour of our death. Amen." May be prayed on the wearer's behalf</li>
            <li>Must be worn by (or placed in the possesions of) the one whom is desired to benefit by Our Lady's intercession</li>
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

export default ScapularGreen;