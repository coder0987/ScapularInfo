import Row from "@/components/shared/Row";
import QuoteBox from "@/components/shared/QuoteBox";
import { scapulars, prayers, resources, hours } from "@/constants";

const Home = ({ className }: { className?: string }) => {
  return (
    <div className={`py-10 px-5 md:px-4 lg:p-6 flex-1 flex flex-col gap-4 items-center md:items-start ${className}`}>
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
        <Row className="" label="scapular" content={scapulars} />
        <h2 className="title">Prayers</h2>
        <Row className="" label="prayer" content={prayers} />
        <h2 className="title">Resources</h2>
        <Row className="" label="resource" content={resources} />
        <h2 className="title">Hours</h2>
        <Row className="" label="resource" content={hours} />
    </div>
  );
};

export default Home;