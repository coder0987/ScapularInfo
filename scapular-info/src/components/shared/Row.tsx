import Thumbnail from "@/components/shared/Thumbnail";
import { ScapularType } from "@/types";

const Row = ({ className, label, content }: { className: string, label: string, content: ScapularType[] }) => {
  const combinedClasses = `flex flex-wrap md:flex-row flex-col items-center md:items-start ${className}`;
  return (
      <div className={combinedClasses}>
        {
            content && (
              content.map((i: any) => {
                  return (
                    <Thumbnail className="md:mr-6 my-2" link={i.route} key={label+i.label} >
                      <Thumbnail.Image src={i.imgURL} />
                      <Thumbnail.Header>{i.label}</Thumbnail.Header>
                    </Thumbnail>
                )
              })
            )
        }
      </div>
  );
};

export default Row;