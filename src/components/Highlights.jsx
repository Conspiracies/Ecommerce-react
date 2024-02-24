import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./UI/Highlight";
import React from "react";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section___title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ books"
              para="Library has books in all your favourite categories"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on popular books for as low as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
