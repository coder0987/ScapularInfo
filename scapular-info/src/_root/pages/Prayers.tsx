import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import { prayers } from "@/constants";

const Prayers = () => {
  return (
    <div className="flex flex-col gap-6 home-container">
        <h2 className="title">Prayers</h2>
        <Row label="prayer" content={prayers} />
    </div>
  );
};

export default Prayers;