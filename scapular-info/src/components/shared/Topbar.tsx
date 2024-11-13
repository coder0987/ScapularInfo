import { Link } from "react-router-dom";

const Topbar = () => {

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/brownscapular.jpg"
            alt="logo"
            width="50px"
            height="50px"
            className="rounded"
          />
          <span className="topbar-title">
            Scapular Info
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Topbar;