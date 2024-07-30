import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import { scapulars, prayers, resources } from "@/constants";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 home-container items-center md:items-start">
        <h2 className="title">Scapulars</h2>
        <Row label="scapular" content={scapulars} />
        <h2 className="title">Prayers</h2>
        <Row label="prayer" content={prayers} />
        <h2 className="title">Resources</h2>
        <Row label="resource" content={resources} />
    </div>
  );
};

export default Home;