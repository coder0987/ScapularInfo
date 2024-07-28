import { Link, NavLink, useLocation } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";
import { Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  const { pathname } = useLocation();


  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11 flex-center">
        <Link to="/" className="flex gap-3 items-center flex-col">
          <img
            src="/brownscapular.jpg"
            alt="logo"
            width={170}
            height={36}
            className="rounded"
          />
          <span className="topbar-title">
            Scapular Info
          </span>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = link.route === '/' ? pathname === '/' : pathname.includes(link.route);

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4">
                  <img
                      src={link.imgURL}
                      alt={link.label}
                      height="40px"
                      width="40px"
                      className="invert-white"
                    />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

    </nav>
  );
};

export default LeftSidebar;