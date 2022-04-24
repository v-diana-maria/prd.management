import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="H.E.P.P.I." subtitle="hatékonyabb együttműködésért projekt pontos infóhálózata :)">
          <Link to="/rooms" className="btn-primary">
            tovább a naptárhoz
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  );
};

export default Home;
