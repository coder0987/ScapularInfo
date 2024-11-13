import Row from "@/components/shared/Row";
import { resources } from "@/constants";

const Resources = () => {
  return (
    <div className="p-5 md:px-4 lg:p-6 flex-1 flex flex-col gap-6">
        <h2 className="title">Resources</h2>
        <Row label="resource" content={resources} />
    </div>
  );
};

export default Resources;