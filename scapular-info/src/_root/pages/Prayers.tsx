import Thumbnail from "@/components/shared/Thumbnail";

const Prayers = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Prayers</h2>
        <div className="flex">
            <div>
                <Thumbnail link="/prayers/seven-dolours">
                  <Thumbnail.Image src="brownscapular.jpg" />
                  <Thumbnail.Header>Seven Dolours</Thumbnail.Header>
                </Thumbnail>
            </div>
        </div>
    </div>
  );
};

export default Prayers;