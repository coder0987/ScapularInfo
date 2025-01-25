import Row from "@/components/shared/Row";
import SourcesCite from "@/components/shared/SourcesCite";
import Sources from "@/components/shared/Sources";
import SourcesProvider from "@/components/shared/SourcesProvider";
import { hours } from "@/constants";
import CompiledNotice from "@/components/shared/CompiledNotice";

const Hours = () => {
  return (
    <SourcesProvider>
        <div className="p-5 md:px-4 lg:p-6 flex-1 flex flex-col gap-6">
            <h2 className="title">Hours</h2>

            <p className="prose md:px-8">
                The daily hours of the Little Office
            </p>

            <Row label="hours" content={hours} />
            <Sources />
            <CompiledNotice author="Samuel Mach" date="Jan. 2025" />
        </div>
    </SourcesProvider>
  );
};

export default Hours;