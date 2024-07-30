import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import { scapulars } from "@/constants";

const Scapulars = () => {
  return (
    <div className="flex flex-col gap-6 home-container">
        <h2 className="title">Scapulars</h2>
        <Row label="scapular" content={scapulars} />
    </div>
  );
};

export default Scapulars;