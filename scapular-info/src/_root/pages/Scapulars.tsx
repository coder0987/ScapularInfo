import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import SourcesCite from "@/components/shared/SourcesCite";
import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";
import { scapulars } from "@/constants";

const Scapulars = () => {
  return (
    <SourcesProvider>
        <div className="flex flex-col gap-6 home-container">
            <h2 className="title">Scapulars</h2>
            <h3>What is a Scapular?</h3>

            <p classList="prose">
                The word scapular comes from the Latin word scapula, meaning shoulder blade.
                <SourcesCite source="scapularPrayerBook" className="italic">
                    Scapular Prayer Book
                </SourcesCite>
            </p>

            <Row label="scapular" content={scapulars} />
            <Sources />
        </div>
    </SourcesProvider>
  );
};

export default Scapulars;