import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import SourcesCite from "@/components/shared/SourcesCite";
import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";
import { scapulars } from "@/constants";

const Scapulars = () => {
  return (
    <SourcesProvider>
        <div className="p-5 md:px-4 lg:p-6 flex-1 flex flex-col gap-6">
            <h2 className="title">Scapulars</h2>
            <h3>What is a Scapular?</h3>

            <p className="prose md:px-8">
                A scapular is two small segments of cloth, connected by two cords which, when laid over the shoulders, places one segment on the chest and the other on the back
                <SourcesCite source="catholicEncyclopediaScapular" className="italic">
                    Catholic Encyclopedia: Scapular
                </SourcesCite>.
                The word scapular comes from the Latin word scapula, meaning shoulder blade
                <SourcesCite source="scapularPrayerBook" className="italic">
                    Scapular Prayer Book
                </SourcesCite>.
            </p>

            <Row label="scapular" content={scapulars} />
            <Sources />
        </div>
    </SourcesProvider>
  );
};

export default Scapulars;