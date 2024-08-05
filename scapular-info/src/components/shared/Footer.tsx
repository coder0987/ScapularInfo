import { Link } from "react-router-dom";

import { Button } from "../ui/button";

const Footer = () => {

  return (
    <section className="block bg-off-white">
      <div className="flex-between flex-col py-4 px-5">
        <Link to="/license" className="flex items-center">
          <span className="text-center items-center">
            <img
              src="/assets/icons/public-domain.svg"
              alt="Creative Commons no copyright symbol"
              width="12px"
              height="12px"
              className="rounded inline-block align-middle pb-1"
            />
            <span className=""> 2024 Samuel Mach. No rights reserved. </span>
            <span className="underline">View the License</span>
          </span>
        </Link>
        <Link to="/fair-use" className="flex gap-3 items-center">
            <span className="text-center">
              External content may be used for educational purposes. <span className="underline">Learn more</span>
            </span>

        </Link>
      </div>
    </section>
  );
};

export default Footer;