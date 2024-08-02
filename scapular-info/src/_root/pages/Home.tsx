import Thumbnail from "@/components/shared/Thumbnail";
import Row from "@/components/shared/Row";
import QuoteBox from "@/components/shared/QuoteBox";
import { scapulars, prayers, resources } from "@/constants";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 home-container items-center md:items-start">
        <QuoteBox className="italic">
            <div className="flex-row w-full flex">
                <p className="flex text-2xl md:text-4xl">"One day,</p>
            </div>
            <div className="w-full flex">
                <p className="flex not-italic">through the Rosary and the Scapular,</p>
            </div>
            <div className="flex-row-reverse w-full flex">
                <p className="flex text-2xl md:text-4xl">Mary will save the world."</p>
            </div>
            <div className="flex-row-reverse w-full flex">
                <p className="flex not-italic">-St. Dominic</p>
            </div>
        </QuoteBox>
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