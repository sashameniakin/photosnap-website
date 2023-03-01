import { Link } from "react-router-dom";
import ArrowButton from "../button/button-arrow";

export default function Footer() {
  return (
    <div className="bg-pureBlack">
      <div className="flex flex-col justify-center items-center bg-pureBlack w-3/4 mx-auto py-16 desktop:justify-between desktop:items-stretch desktop:flex-row tablet:flex-row tablet:justify-between tablet:items-stretch tablet:w-[90%] tablet:mx-auto">
        <div className="flex flex-col justify-between">
          <Link to="/">
            <img src="./images/home/logo-white.svg" alt="logo" />
          </Link>
          <div className="hidden desktop:hidden tablet:flex text-pureWhite w-[50%] gap-[19px] pt-8 pb-[72px]">
            <p className="text-h4 hover:opacity-30 cursor-pointer">HOME</p>
            <p className="text-h4 hover:opacity-30 cursor-pointer">STORIES</p>
            <p className="text-h4 hover:opacity-30 cursor-pointer">FEATURES</p>
            <p className="text-h4 hover:opacity-30 cursor-pointer">PRICING</p>
          </div>
          <div className="flex justify-center pb-[49px] pt-8 gap-[13.33px] tablet:pb-0 tablet:pt-0 desktop:pb-0 desktop:pt-0 tablet:justify-start desktop:justify-start">
            <img
              src="./images/home/FooterIcons/facebook-white.svg"
              alt="facebook"
              onMouseOver={(e) =>
                (e.currentTarget.src = "./images/home/FooterIcons/facebook.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/facebook-white.svg")
              }
              className="hover: cursor-pointer"
            />
            <img
              src="./images/home/FooterIcons/youtube-white.svg"
              alt="youtube"
              onMouseOver={(e) =>
                (e.currentTarget.src = "./images/home/FooterIcons/youtube.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/youtube-white.svg")
              }
              className="hover: cursor-pointer"
            />
            <img
              src="./images/home/FooterIcons/twitter-white.svg"
              alt="twitter"
              onMouseOver={(e) =>
                (e.currentTarget.src = "./images/home/FooterIcons/twitter.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/twitter-white.svg")
              }
              className="hover: cursor-pointer"
            />
            <img
              src="./images/home/FooterIcons/pinterest-white.svg"
              alt="pinterest"
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/pinterest.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/pinterest-white.svg")
              }
              className="hover: cursor-pointer"
            />
            <img
              src="./images/home/FooterIcons/instagram-white.svg"
              alt="instagram"
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/instagram.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "./images/home/FooterIcons/instagram-white.svg")
              }
              className="hover: cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-[119px] text-pureWhite w-[50%] gap-[19px] desktop:flex desktop:flex-col desktop:pb-0 desktop:items-stretch tablet:hidden ">
          <p className="text-h4 hover:opacity-30 cursor-pointer">HOME</p>
          <p className="text-h4 hover:opacity-30 cursor-pointer">STORIES</p>
          <p className="text-h4 hover:opacity-30 cursor-pointer">FEATURES</p>
          <p className="text-h4 hover:opacity-30 cursor-pointer">PRICING</p>
        </div>
        <div className="flex flex-col items-center text-pureWhite desktop:justify-between desktop:items-end tablet:justify-between tablet:items-end">
          <ArrowButton name={"GET AN INVITE"} src={"./images/home/arrow.svg"} />
          <p className="text-body opacity-50 pt-8 desktop:pt-0 tablet:pt-0">
            Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
