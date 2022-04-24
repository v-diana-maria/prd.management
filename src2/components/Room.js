import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import defaultImg from '../images/room-1.jpeg';

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>0{price}</h6>
          <p></p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Részletek
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    price: propTypes.number.isRequired
  })
};
