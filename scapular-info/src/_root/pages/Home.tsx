import Thumbnail from "@/components/shared/Thumbnail";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 m-2">
        <h2 className="title">Scapulars</h2>
        <div className="flex flex-center">
            <Thumbnail link="/scapulars/brown-scapular">
              <Thumbnail.Image src="brownscapular.jpg" />
              <Thumbnail.Header>Brown Scapular</Thumbnail.Header>
            </Thumbnail>
        </div>
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

export default Home;