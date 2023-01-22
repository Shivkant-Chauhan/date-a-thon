import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>LoveLink</h1>
      <div className="hero">
        <h2>Name1 - Name2: keeping your mermories forever</h2>

        <div className="pages-link">
          <Link exact="true" to="/send_message" className="btn-page">
            Send Message
          </Link>
          <Link exact="true" to="/gallery" className="btn-page">
            Gallery
          </Link>
          <Link exact="true" to="/memory" className="btn-page">
            Memory
          </Link>
          <Link exact="true" to="/bucketlist" className="btn-page">
            Bucket List
          </Link>
          <Link exact="true" to="/budgettracker" className="btn-page">
            Budget Tracker
          </Link>
          <Link exact="true" to="/comingSoon" className="btn-page">
            Gallery
          </Link>
          <Link exact="true" to="/comingSoon" className="btn-page">
            Calendar
          </Link>
          <Link exact="true" to="/comingSoon" className="btn-page">
            Text Memories!
          </Link>
          <Link exact="true" to="/comingSoon" className="btn-page">
            Order Gifts
          </Link>
          <Link exact="true" to="/comingSoon" className="btn-page">
            Mutual Songs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
