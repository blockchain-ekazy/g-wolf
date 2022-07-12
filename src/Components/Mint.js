import NavImg from "./Imgs/NavImg.png";
import Mintgif from "./Imgs/Mint.gif";
import MintTxt from "./Imgs/MintTxt.png";

import React, { useEffect, useState } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import { white } from "./whitelist.js";
import { free } from "./free.js";

const leaf = white.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaf, keccak256, { sortPairs: true });
const leafFree = free.map((addr) => keccak256(addr));
const merkleTreeFree = new MerkleTree(leafFree, keccak256, { sortPairs: true });

export default function Mint() {
  const REACT_APP_CONTRACT_ADDRESS =
    "0xdf6430F19446b01a9C024766790f9a3d2ebc529D";
  const SELECTEDNETWORK = "1";
  const SELECTEDNETWORKNAME = "Ethereum";
  const [quantity, setQuantity] = useState(1);
  const [walletConnected, setWalletConnected] = useState(false);
  const [minted, setMinted] = useState(0);
  const [max, setMax] = useState(10);

  function checkWhitelistFree(a) {
    const check = keccak256(a);
    const proof = merkleTreeFree.getHexProof(check);
    const root = merkleTreeFree.getRoot();

    return merkleTreeFree.verify(proof, check, root);
  }
  function checkWhitelistWL(a) {
    const check = keccak256(a);
    const proof = merkleTreeFree.getHexProof(check);
    const root = merkleTreeFree.getRoot();

    return merkleTreeFree.verify(proof, check, root);
  }
  function getProofFree(a) {
    const check = keccak256(a);
    return merkleTreeFree.getHexProof(check);
  }
  function getProofWL(a) {
    const check = keccak256(a);
    return merkleTree.getHexProof(check);
  }
  const loadweb3 = async () => {
    window.web3 = new Web3(window.ethereum);
    let web3 = window.web3;

    await window.ethereum.enable();
    let m = await web3.eth.getAccounts();
    m = m[0];

    let ct = new web3.eth.Contract(abi, REACT_APP_CONTRACT_ADDRESS);
    let status = await ct.methods.status().call();

    if (status == 1) {
      if (
        Number(await ct.methods.numberMinted(m).call()) + Number(quantity) <=
        10
      )
        await toast.promise(
          ct.methods.freeMint(quantity, getProofFree(m)).send({ from: m }),
          {
            pending: "Mint in Progress!!",
            success: "Mint Success!!",
            error: "Mint Failed!!",
          }
        );
      else toast.error("Max 10 mints allowed in Free, select less quantity!!");
    } else if (status == 2) {
      if (
        Number(await ct.methods.numberMinted(m).call()) + Number(quantity) <=
        10
      ) {
        let p = await ct.methods.PRICE().call();
        await toast.promise(
          ct.methods
            .whitelistMint(quantity, getProofWL(m))
            .send({ from: m, value: p * quantity }),
          {
            pending: "Mint in Progress!!",
            success: "Mint Success!!",
            error: "Mint Failed!!",
          }
        );
      } else
        toast.error("Max 10 mints allowed in Free, select less quantity!!");
    } else if (status == 3) {
      if (
        Number(await ct.methods.numberMinted(m).call()) + Number(quantity) <=
        10
      ) {
        let p = await ct.methods.PRICE().call();
        await toast.promise(
          ct.methods.mint(quantity).send({ from: m, value: p * quantity }),
          {
            pending: "Mint in Progress!!",
            success: "Mint Success!!",
            error: "Mint Failed!!",
          }
        );
      } else
        toast.error("Max 10 mints allowed in Free, select less quantity!!");
    }
  };

  const connectWallet = async () => {
    console.log(merkleTree.getHexRoot());
    window.web3 = new Web3(window.ethereum);
    let web3 = window.web3;

    await window.ethereum.enable();
    let m = await web3.eth.getAccounts();
    m = m[0];

    if ((await web3.eth.net.getId()) != SELECTEDNETWORK) {
      toast.error('Enable "' + SELECTEDNETWORKNAME + '" network!');
      return false;
    }

    let ct = new web3.eth.Contract(abi, REACT_APP_CONTRACT_ADDRESS);
    let status = await ct.methods.status().call();

    if (status == 0) {
      toast.error("Sale not Active!!");
    } else if (
      (checkWhitelistFree(m) && status == 1) ||
      (status == 2 && checkWhitelistWL(m)) ||
      status == 3
    ) {
      setMinted(await ct.methods.totalSupply().call());
      setWalletConnected(true);
    } else toast.error("Not Whitelisted!!");
  };

  return (
    <div>
      <div className="Sara mainbg2">
        <nav className="sc-bdvvtL hWudry">
          <div className="nav-logo">
            <img className="img-fluid" alt="" src={NavImg} />
          </div>
          <div className="nav-link-container" style={{ height: "0px" }}>
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
              <li className="social-media-icon">
                <a href="https://discord.com/invite/HWRTA8MCpu" target="_blank">
                  <img
                    className="img-fluid"
                    alt="Discord"
                    src="./discord.png"
                  />
                </a>
                <a href="https://twitter.com/wolfgangtwit" target="_blank">
                  <img
                    className="img-fluid"
                    alt="twitter"
                    src="./twitter.png"
                  />
                </a>
                <a href="https://opensea.io/collection/wfg" target="_blank">
                  <img className="img-fluid" alt="sea" src="./os.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--uim"
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

        <div className="container main">
          <div className="row align-items-center MainRow">
            <img className="d-block mx-auto w-75" src={MintTxt}></img>
          </div>
          {walletConnected ? (
            <>
              <div className="quantityselector d-flex justify-content-center justify-content-lg-start align-items-center my-4">
                <button
                  className="count ConnectBtn btn mr-4 ml-0"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="count ConnectBtn btn mx-3 "
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity == max}
                >
                  +
                </button>
                <button className="ConnectBtn btn" onClick={loadweb3}>
                  MINT
                </button>
              </div>
              <span className="text-white">{minted} / 5555</span>
            </>
          ) : (
            <button
              className="d-block my-4 mx-auto btn ConnectBtn"
              onClick={connectWallet}
            >
              Connect
            </button>
          )}
          <p className="text-center text-white">
            Connect to the Ethereum network
          </p>
          <img
            className="d-none d-md-block mx-auto w-75 pb-5"
            src={Mintgif}
          ></img>
        </div>
      </div>
    </div>
  );
}
