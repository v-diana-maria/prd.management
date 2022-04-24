import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Eseménynapló">
          <Link to="/" className="btn-primary">
            vissza a főoldalra
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
