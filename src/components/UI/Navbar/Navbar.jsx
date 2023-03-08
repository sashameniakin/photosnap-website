import { Link } from "react-router-dom";
import Button from "../button/button";
import Menu from "../Menu/Menu";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="flex justify-around items-center mt-7 mb-8">
        <Link to="/">
          <img src="./images/home/logo.svg" alt="logo" />
        </Link>

        <div className="hidden gap-[37px] desktop:flex tablet:flex">
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
        <Button mobile="hidden" tablet="flex" desktop="flex" />

        {
          <button
            className="flex desktop:hidden tablet:hidden"
            onClick={() => setMenu(true)}
          >
            <img src="./images/home/mobile/menu.svg" alt="menu" />
          </button>
        }
      </div>
      {menu && (
        <Menu>
          <div className="flex justify-around mt-7 mb-[60px]">
            <Link to="/">
              <img src="./images/home/logo.svg" alt="logo" />
            </Link>

            <button onClick={() => setMenu(false)}>
              <img
                className="flex desktop:hidden tablet:hidden"
                src="./images/home/mobile/close.svg"
                alt="close"
              />
            </button>
          </div>
          <div className="flex flex-col items-center w-[80%] mx-auto gap-5 pb-5 border-b-[1px] border-pureBlack border-opacity-25">
            <Link to="/stories" className="text-menu hover:text-lightGrey">
              STORIES
            </Link>
            <Link to="/features" className="text-menu hover:text-lightGrey">
              FEATURES
            </Link>
            <Link to="/pricing" className="text-menu hover:text-lightGrey">
              PRICING
            </Link>
          </div>
          <button
            className={`mt-5 mb-8 w-[80%] mx-auto bg-pureBlack text-pureWhite text-h4 px-6 py-3 hover:bg-lightGrey hover:text-pureBlack `}
          >
            GET AN INVITE
          </button>
        </Menu>
      )}
    </>
  );
}
