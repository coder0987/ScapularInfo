import {
  FootnoteRef as Ref,
} from "react-a11y-footnotes";

const ScapularBrown = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Brown Scapular</h2>
        <div className="flex flex-center md:flex-start">
            <p>The Brown Scapular was given to St. Simon Stock by Our Lady of Mt. Carmel</p>
        </div>
    </div>
  );
};

ScapularBrown.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Brown Scapular Blessings</h2>
        <div className="flex flex-center md:flex-start">
            <p>The Brown Scapular has many blessings and indulgences</p>
        </div>
    </div>
  );
};

ScapularBrown.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Brown Scapular Construction</h2>
        <div className="flex flex-center md:flex-start">
            <p>The Brown Scapular must be made of 100% woven wool</p>
        </div>
    </div>
  );
};

ScapularBrown.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Brown Scapular Requirements</h2>
        <div className="flex flex-center md:flex-start">
            <p>Certain requirements must be met to receive the blessings and indulgences associated with the brown scapular</p>
        </div>
    </div>
  );
};

export default ScapularBrown;