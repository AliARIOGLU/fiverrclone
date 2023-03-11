import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h2>Hmm... böyle bir sayfa yok. Başka bir şey aramayı dene.</h2>
      <button>
        <Link className="link" to="/">
          Home
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
