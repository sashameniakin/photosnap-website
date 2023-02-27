import { Link } from "react-router-dom";
import Button from "../button/button";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center my-7">
      <div>
        <Link to="/">
          <img src="./images/home/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex  gap-[37px]">
        <Link to="/stories" className="text-h4 hover:text-lightGrey">
          STORIES
        </Link>
        <Link to="/features" className="text-h4 hover:text-lightGrey">
          FEATURES
        </Link>
        <Link to="/pricing" className="text-h4 hover:text-lightGrey">
          PRICING
        </Link>
      </div>
      <Button />
    </div>
  );
}
