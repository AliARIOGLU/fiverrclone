import React, { useState } from "react";
import "./Featured.scss";
import { Link, useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <Link className="link" to="/gigs?cat=design">
              <button>Web Design</button>
            </Link>
            <Link className="link" to="/gigs?cat=design">
              <button>WordPress</button>
            </Link>
            <Link className="link" to="/gigs?cat=logo-design">
              <button>Logo Design</button>
            </Link>
            <Link className="link" to="/gigs?cat=ai">
              <button>AI Services</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
