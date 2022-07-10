import React from "react";

import NavImg from "./Imgs/NavImg.png";
import Opensea from "./Imgs/Opensea.png";
import twitter from "./Imgs/twitter.png";
import discord from "./Imgs/Dis.png";

import RD from "./Imgs/RD.png";

export default function RoadMap() {
  return (
    <div>
      <div className="Sara">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a href="/">
            <img className="w-25 Img" src={NavImg}></img>
          </a>{" "}
          <button
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
                <a class="nav-link" href="#">
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
        <img className="d-block mx-auto w-100 " src={RD}></img>

        <div className="container-fluid px-5 pb-4">
          <div className="row RowA">
            <div className=" mx-auto">
              <h6 className="text-center TxtA pb-3 FontAre">
                First stage of building purely relevant and extremely connected
                community that would engage and
                <br />
                collaborate to make the platform full of passion would go down
                like this:
              </h6>
            </div>

            <div className="col-md-6">
              <ul>
                <li>Twitter and Discord Propagation</li>
                <ul className="pt-3">
                  <li className="FontAre">
                    Giveaways (Free NFTs/Whitelist Spots/Amazing Items).
                  </li>
                  <li className="FontAre">
                    Community building & whitelisting 1000 members for
                    pre-launch minting.
                  </li>
                  <li className="FontAre">
                    Parties & games for the community (WL spots / Free NFTs).
                  </li>
                </ul>
              </ul>

              <ul>
                <li>
                  Shop is already up and running, the more you're active the
                  more you gain points. points can be used to redeem amazing
                  items on website shop!
                </li>
                <li>Whitelist Minting</li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    The early whitelisted members will have a 7hrs window before
                    the public mint, every participant will have a limit of 10
                    wolves to mint for a price of 0.01 ETH
                  </li>
                </ul>
              </ul>
            </div>

            <div class="phaseTextPosition"><h2>PHASE I</h2></div>

            <div className="col-md-6">
              <ul>
                <li>Public Minting </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    After successful minting of the wolves to whitelist members,
                    the whole collection will be opened for the public with a
                    limit of 7 wolves and at the same price of 0.01 ETH
                  </li>
                  <li className="FontAre">
                    Public mint will start based on first come first serve basis
                    until mint out.
                  </li>
                </ul>
              </ul>

              <ul>
                <li>Celebratory Meetup of the Holders (Virtual) </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    An online event will be conducted for all the wolves across
                    the world where we will celebrate minting out, and the
                    community would share their thoughts and expectations from
                    the project!
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="row RowA my-5">
            <div className=" mx-auto">
              <h6 className="text-center TxtA pb-3 FontAre">
                After the gang is built, it would be time for them to rise and
                shine, this is the period where wolves would be
                <br />
                exposed to amazing features of the project.
              </h6>
            </div>

            <div className="col-md-6">
              <ul>
                <ul className="pt-3">
                  <li className="FontAre">
                    Revealing the Store and the points system, the more active
                    you are the more points you get. Points are used to purchase
                    items from the Wolves Store!{" "}
                  </li>
                  <li className="FontAre">
                    Virtual Experience based WolfGang™ environment would be
                    finally revealed to the holders
                  </li>
                  <li className="FontAre">
                    Wolves would be able to interact with other users and start
                    their virtual WolfGang experience.{" "}
                  </li>
                </ul>
              </ul>

              <ul>
                <li>
                  Wolfgang™ (CAVE™) will be integrated in the gang website.
                </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    A Place where wolves meetup, chill and have a nice time •
                  </li>
                  <li className="FontAre">
                    {" "}
                    Holders only meetings will be held in the (CAVE™).{" "}
                  </li>
                </ul>
              </ul>
            </div>


            <div class="phaseTextPositionB"><h2>PHASE II</h2></div>

            <div className="col-md-6">
              <ul>
                <li>Merch Store! </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    Gang will vote for merch, what to add and what not to!
                    (Hoodies/Beanies/Shirts/Wolf Masks..etc)
                  </li>
                </ul>
              </ul>

              <ul>
                <li>Devs will begin developing game after minting out. </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    Game based on wolves, caves & hunting!
                  </li>
                  <li className="FontAre">
                    {" "}
                    Web based/Mobile (IOS & Android) for holders members.{" "}
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="row RowA my-5">
            <div className=" mx-auto">
              <h6 className="text-center TxtA pb-3 FontAre">
                The WolfGang™ would have risen and made their mark in the wild,
                this is where the new chapter begins.
              </h6>
            </div>

            <div className="col-md-6">
              <ul>
                <li>WOLFGANG™ ECOSYSTEM</li>
                <ul className="pt-3">
                  <li className="FontAre">
                    The ecosystem of the platform would consist of conceptual
                    places would be built for virtual experience and
                    interactions along with the objects to make the environment
                    engaging for the Wolfgang™. Important components of this
                    Ecosystem would be:
                  </li>
                </ul>
              </ul>

              <ul>
                <li>(CAVE™) </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    The e-hangout place for the gang members, by entering the
                    (CAVE™) you would enter the meetups, parties, giveaways &
                    more inside.{" "}
                  </li>
                </ul>
              </ul>
              <ul>
                <li>ALPHAS</li>
                <ul className="pt-3">
                  <li className="FontAre"> No really, ALPHAS.</li>
                </ul>
              </ul>
              <ul>
                <li>STAKING?</li>
                <ul className="pt-3">
                  <li className="FontAre"> 😏</li>
                </ul>
              </ul>
            </div>
            <div class="phaseTextPositionC"><h2>PHASE III</h2></div>

            <div className="col-md-6">
              <ul>
                <li>PHYSICAL REWARDS</li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    The holder and members will receive physical accessories and
                    merchandise sponsored by the WolfGang™ with the help of
                    treasury obtained through NFT sales, don’t miss the chance
                    to enjoy IRL gifts through our unique activity based points
                    system.
                  </li>
                </ul>
              </ul>

              <ul>
                <li>WOLFGANG™ MERCH </li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    shine and be proud of your gang where ever you go,
                    hoodies/beanies/hats..etc all will be voted from our gang
                  </li>
                </ul>
              </ul>

              <ul>
                <li>$WOOF? </li>
                <ul className="pt-3">
                  <li className="FontAre"> Hmm... </li>
                </ul>
              </ul>

              <ul>
                <li style={{fontSize:"17px"}}>BREEDING/MUTATION/HUMANS?!</li>
                <ul className="pt-3">
                  <li className="FontAre">
                    {" "}
                    Good things comes to those who wait..{" "}
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
