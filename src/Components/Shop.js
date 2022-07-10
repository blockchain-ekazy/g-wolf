import React from "react";

import NavImg from "./Imgs/NavImg.png";
import Opensea from "./Imgs/Opensea.png";
import twitter from "./Imgs/twitter.png";
import discord from "./Imgs/Dis.png";

import ShopTxt from "./Imgs/ShopTxt.png";
import coin from "./Imgs/Shops/coin.png";

import S1 from "./Imgs/Shops/S1.png";
import S2 from "./Imgs/Shops/S2.png";
import S3 from "./Imgs/Shops/S3.png";
import S4 from "./Imgs/Shops/S4.png";

import Ss1 from "./Imgs/Shops/ss1.png";
import Ss2 from "./Imgs/Shops/ss2.png";
import Ss3 from "./Imgs/Shops/ss3.png";
import Ss4 from "./Imgs/Shops/ss4.png";

import Sss1 from "./Imgs/Shops/sss1.png";
import Sss2 from "./Imgs/Shops/sss2.png";
import Sss3 from "./Imgs/Shops/sss3.png";
import Sss4 from "./Imgs/Shops/sss4.png";

import Ssss1 from "./Imgs/Shops/ssss1.png";
import Ssss2 from "./Imgs/Shops/ssss2.png";

export default function Shop() {
  return (
    <div className="Sara">
      <nav class="navbar navbar-expand-lg navbar-light ">
      <a href="/">

<img className="w-25 Img" src={NavImg}></img>
</a>        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/mint">
                Mint
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shop">
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/roadmap">
                RoadMap
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a href="https://opensea.io/WFGStudio">
              <img
                className="w-"
                style={{ cursor: "pointer" }}
                src={Opensea}
              ></img>
            </a>
            <a href="https://discord.com/invite/HWRTA8MCpu">
              <img
                className="mx-3"
                style={{ cursor: "pointer" }}
                src={twitter}
              ></img>
            </a>
            <a href="https://twitter.com/wolfgangtwit">
              <img
                className="w-"
                style={{ cursor: "pointer" }}
                src={discord}
              ></img>
            </a>
          </form>
        </div>
      </nav>

      <div className="container-fluid ">
        <img className="d-block mx-auto w-50" src={ShopTxt}></img>
        <div className="row">
          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={S1}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                product 10$ Steam Giftcard
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>5,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <div className="SimgDiv">

              <img className="ImgShop" src={S2}></img>
              </div>
              <p className=" text-center mx-5 txtShop pt-2">
                Nitro Classic- 1 Month{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <div className="SimgDiv">

                <img className="Coin pr-2 " src={coin}></img>5,500 points
                </div>
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={S3}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Nintendo Switch Raffle Entry
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>8,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={S4}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Oculus Quest 2 Raffle Entry{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>9,000 points
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Ss1}></img>
              <p className=" text-center mx-5 txtShop pt-2">Reserved </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>10,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Ss2}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Glorious Stitch Cloth MousePad{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>11,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Ss3}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Vertagear Gaming Chair Raffle Entry{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>12,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Ss4}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Playstation 5 Raffle Entry{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>13,000 points
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Sss1}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Logitech Mechanical Keyboard{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>14,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Sss2}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                product Elgato Stream Deck Raffle Entry{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>15,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Sss3}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Kreepy Club NFT #6759{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>20,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Sss4}></img>
              <p className=" text-center mx-5 txtShop pt-2">Nanoleaf Kit </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>20,000 points
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Ssss1}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                WolfGang™ Official Hoodie{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>25,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className=" mx-5 pb-5">
              <img className="ImgShop" src={Ssss2}></img>
              <p className=" text-center mx-5 txtShop pt-2">
                Gaming Pc Raffle{" "}
              </p>
              <button className="btn d-block mx-auto ShopBtn">
                <img className="Coin pr-2 " src={coin}></img>35,000 points
              </button>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}
