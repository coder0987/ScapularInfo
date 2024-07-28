import Thumbnail from "@/components/shared/Thumbnail";

const Resources = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Resources</h2>
        <div className="flex">
            <div>
                <Thumbnail link="/resources/little-office">
                  <Thumbnail.Image src="brownscapular.jpg" />
                  <Thumbnail.Header>The Little Office</Thumbnail.Header>
                </Thumbnail>
            </div>
        </div>
    </div>
  );
};

export default Resources;