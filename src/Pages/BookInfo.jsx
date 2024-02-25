import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/UI/Rating";
import Price from "../components/UI/Price";

const BookInfo = ({ books }) => {
const {id}= useParams();
console.log(id)
const book = books.find(book => +book.id === +id);
console.log(book)

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                />
              </figure>
              <div className="book__selected-description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <div className="bookk__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit at laborum earum minus distinctio in repudiandae,
                    quaerat voluptates laudantium facere omnis delectus! Placeat
                    minima sapiente ducimus, ratione dolores sequi itaque?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit at laborum earum minus distinctio in repudiandae,
                    quaerat voluptates laudantium facere omnis delectus! Placeat
                    minima sapiente ducimus, ratione dolores sequi itaque?
                  </p>
                </div>
                <button className="btw">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
          <div className="row">
            <div className="bookk__selected--top">
              <h2 className="book__selcted--title--top">Recommended Books</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
