import React, { useEffect } from "react";
import "../Styles/Home.css";
import "../Styles/Content.css";
import logo from "../Images/logo name.png";
import cardImg from "../Images/Premium Vector _ Thinking girl_ beautiful face, doubts, problems, thoughts, emotions. curious woman (2).png";
import leaf from "../Images/leaf.png";
import { PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import { cardAnimation, homeAnim } from "../Animations/Anim";

export default function Home() {
  useEffect(()=>{
    homeAnim()
    cardAnimation()
  },[])
  return (
    <main className="main">
      <nav>
        <div className="logo-div">
          <img alt="logo" src={logo} />
          <button className="menu-button">menu</button>
        </div>
        <button className="nav-download">download</button>
      </nav>
      <section>
        <div className="content-box">
          <h1>
            don't know what <span>to watch?</span>
          </h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </h3>
          <button className="download-button">download now</button>
        </div>
        <div className="card-box">
          <div className="category-box">
            <h1 className="category-title">every category:</h1>
            <h1 className="category-count">70+</h1>
          </div>
          <div className="watchlist-box">
            <h1 className="watchlist-title">watch list:</h1>
            <span className="watchlist-count">34</span>
            <h1 className="watchlist-para">added</h1>
          </div>
          <img className="leaf" src={leaf} alt="leaf" />
          <div className="card">
            <img src={cardImg} alt="card" />
          </div>
          <span className="groove">groove</span>
          <div className="add-icon"><PlusOutlined /></div>
          <div className="approved-icon">approved</div>
          <div className="circle"></div>
          <div className="watchnow-btn"></div>
        </div>
      </section>
    </main>
  );
}
