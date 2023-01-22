import React from "react";
import "./Memory.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import phot from "../assets/image.png";

const MemoryCard = ({ heading, img, date }) => {
  return (
    <div className="memorycard">
      <h3 className="heading">{heading}</h3>
      <div>
        <img src={img} alt="img" />
        <p className="memorycard-p">{date}</p>
      </div>
    </div>
  );
};

const Memory = () => {
  const Navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    Navigate(-1);
  };
  return (
    <div className="memory">
      <div className="btn" onClick={back}>
        <BiArrowBack />
      </div>
      <h1>Memories</h1>
      <div className="memory-container">
        <MemoryCard heading="Saw each other" img={phot} date="01 Apr, 2021" />
        <MemoryCard heading="Talked first time" img={phot} date="4 Apr, 2021" />
        <MemoryCard heading="First date" img={phot} date="31 May, 2021" />
        <MemoryCard heading="Confessed" img={phot} date="07 June, 2021" />
        <MemoryCard heading="First Hug" img={phot} date="11 June, 2021" />
        <MemoryCard heading="First Kiss" img={phot} date="15 July, 2021" />
        <MemoryCard heading="Make Love" img={phot} date="2 Feb, 2022" />
        <MemoryCard heading="Happy" img={phot} date="Forever" />
      </div>
      <Link exact="true" to="/" className="btn-primary">
        Add new memory
      </Link>
    </div>
  );
};

export default Memory;
