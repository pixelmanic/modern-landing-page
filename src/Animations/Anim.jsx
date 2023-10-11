import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

const hometl = gsap.timeline({ defaults: { opacity: 1, duration: 1 } });

export const homeAnim = () => {
  hometl
    .fromTo("nav", { y: -100 }, { y: 0, opacity: 1, ease: "back(2)" })
    .fromTo(
      ".content-box",
      { x: -100 },
      { x: 0, opacity: 1, ease: "back(2)" },
      "<"
    )
    .to(".card-box", { opacity: 1, duration: 1 });
};

const cardtl = gsap.timeline({ repeat: -1, delay: 2 });

export const cardAnimation = () => {
  cardtl
    .to(".card-box", {
      keyframes: {
        "0%": { rotationY: 180 },
        "5%": { rotationX: 0, rotationZ: -3, skewX: -3, skewY: -3 },
        "10%": { rotationY: 10 },
        "30%": { y:10 },
        "40%": { y:-10 },
        "50%": { y: 10 },
        "60%": { y:-10 },
        "70%": { y: 10 },
        "80%": { y:-10 },
        "90%": { rotationY: 30 },
        "95%": { rotationX: 0, rotationZ: 0, skewX: 0, skewY: 0 },
        "100%": { rotationY: 180 },
      },
      duration: 5,
    })
    .to(
      ".category-box",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .staggerFromTo(
      [".category-title", ".category-count"],
      1, // duration
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0,},
      0.2, // Stagger delay
      "<"
    )
    .to(
      ".watchlist-box",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .staggerFromTo(
      [".watchlist-title", ".watchlist-count", ".watchlist-para"],
      0.7, // duration
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0,},
      0.2, // Stagger delay
      "<"
    )
    .to(
      ".leaf",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .to( 
      ".groove",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .to( 
      ".add-icon",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .to( 
      ".approved-icon",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .to( 
      ".circle",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .to( 
      ".watchnow-btn",
      {
        keyframes: {
          "10%": { scale: 1 },
          "93%": { scale: 1 },
          "94%": { scale: 0 },
        },
        duration: 5,
      },
      "<"
    )
    .to(".watchnow-btn",{
      delay:0.5,
      text:"watch now"
    },"<")
    .to(".card-box", { duration: 1, display: "block" });
};
