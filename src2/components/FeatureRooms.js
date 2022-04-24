import React, { Component } from 'react';
import { RoomContext } from '../context/Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

class FeatureRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Visszajelzések" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeatureRooms;
