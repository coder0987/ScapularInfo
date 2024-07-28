import Thumbnail from "@/components/shared/Thumbnail";

const Scapulars = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Scapulars</h2>
        <div className="flex flex-center">
            <Thumbnail link="/scapulars/brown-scapular">
              <Thumbnail.Image src="brownscapular.jpg" />
              <Thumbnail.Header>Brown Scapular</Thumbnail.Header>
            </Thumbnail>
        </div>
    </div>
  );
};

export default Scapulars;