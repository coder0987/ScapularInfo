import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Thumbnail = ({ children, link, className }) => {
  return (
      <Link className={className} to={link}>
          <Card className="w-64 h-40 border divide-y-2 divide-black border-black cursor-pointer">
            {children}
          </Card>
      </Link>
  );
};

const Header = ({ children }) => {
  return (
      <CardHeader className="h-12 flex-center">
       <CardTitle className="thumbnail-header select-none">{children}</CardTitle>
      </CardHeader>
  );
};

const Image = ({ src }) => {
  return (
      <CardContent className="p-0">
        <img src={src} className="fill w-full rounded-t-lg cover max-w-64 h-24"/>
      </CardContent>
  );
};

Thumbnail.Header = Header;
Thumbnail.Image = Image;

export default Thumbnail;