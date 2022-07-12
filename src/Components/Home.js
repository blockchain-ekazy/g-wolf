import React from "react";

import "./Home.css";

import MainImg from "./Imgs/Main Img.gif";
import Text from "./Imgs/Wolf Gang off.png";
import Ftr from "./Imgs/Ftr.png";
import NavImg from "./Imgs/NavImg.png";
import Opensea from "./Imgs/Opensea.png";
import twitter from "./Imgs/twitter.png";
import discord from "./Imgs/Dis.png";

export default function Home() {
  return (
    <div className="Sara mainbg">
      <nav class="sc-bdvvtL hWudry">
        <div class="nav-logo">
          <img class="img-fluid" alt="" src={NavImg} />
        </div>
        <div class="nav-link-container" style={{ height: "0px" }}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/mint">Mint</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/roadmap">Roadmap</a>
            </li>
            <li class="social-media-icon">
              <a href="https://discord.com/invite/HWRTA8MCpu" target="_blank">
                <img class="img-fluid" alt="Discord" src="./discord.png" />
              </a>
              <a href="https://twitter.com/wolfgangtwit" target="_blank">
                <img class="img-fluid" alt="twitter" src="./twitter.png" />
              </a>
              <a href="https://opensea.io/collection/wfg" target="_blank">
                <img class="img-fluid" alt="sea" src="./os.png" />
              </a>
            </li>
          </ul>
        </div>
        <div class="mobile-menu">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="iconify iconify--uim"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0-10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row align-items-center MainRow">
          <div className="col-md-6">
            <img className="mx-auto d-block MainImg" src={MainImg}></img>
          </div>
          <div className="col-md-6 text-center">
            <img className="Txt" src={Text}></img>
            <p className="text-white FontAre">
              Digital gang with member-only benefits, we are here to
              <br />
              show how its done.
              <br />
              we don't follow, we LEAD.. WOOF!
            </p>
          </div>
        </div>
      </div>
      {/* <img className="w-100" src={Ftr}></img> */}
    </div>
  );
}
