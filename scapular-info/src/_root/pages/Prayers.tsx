import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import { prayers } from "@/constants";

const Prayers = () => {
  return (
    <div className="p-5 md:px-4 lg:p-6 flex-1 flex flex-col gap-6">
        <h2 className="title">Prayers</h2>
        <Row label="prayer" content={prayers} />
    </div>
  );
};

export default Prayers;