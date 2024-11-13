import SourcesCite from "@/components/shared/SourcesCite";

const ScapularRedemptorist = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Five-Fold Scapular</h2>
        <div className="flex flex-center">
            <p>The Five-Fold Scapular, also known as the Redemptorist Scapular, is a combination of five of the most popular scapulars approved by the Holy See which dates back to the 18th century
                <SourcesCite source="fiveScapulars" className="italic">
                    The Five Scapulars
                </SourcesCite>.
            </p>
        </div>
    </div>
  );
};

ScapularRedemptorist.blessings = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Five-Fold Scapular Blessings</h2>
        <div className="flex flex-center">
            <p></p>
        </div>
    </div>
  );
};

ScapularRedemptorist.construction = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Five-Fold Scapular Construction</h2>
        <div className="flex flex-center">
            <p></p>
        </div>
    </div>
  );
};

ScapularRedemptorist.requirements = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Five-Fold Scapular Requirements</h2>
        <div className="flex flex-center">
            <p></p>
        </div>
    </div>
  );
};

export default ScapularRedemptorist;