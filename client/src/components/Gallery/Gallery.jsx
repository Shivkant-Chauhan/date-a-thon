import React from "react";
import "./Gallery.css";
import pho from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Gallery = () => {
  const Navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    Navigate(-1);
  };

  return (
    <div className="gallery">
      <div className="btn" onClick={back}>
        <BiArrowBack /> Go Back
      </div>
      <h1>Gallery</h1>
      <div className="gallery-photos">
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
        <img src={pho} alt="pho" />
      </div>
      <Link to="/photos" className="btn-primary">
        Add new photos
      </Link>
    </div>
  );
};

export default Gallery;
