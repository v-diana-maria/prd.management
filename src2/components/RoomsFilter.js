import React, { useContext } from 'react';
import { RoomContext } from '../context/Context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // used context
  const context = useContext(RoomContext);
  const {
    handelChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    szűrő1,
    Szűrő2
  } = context;
  //   get unique types
  let types = getUnique(rooms, 'type');
  //   add all to types
  types = ['all', ...types];
  //   map it to jsx
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  let guests = getUnique(rooms, 'capacity');
  guests = guests.map((guest, i) => {
    return (
      <option value={guest} key={i}>
        {guest}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handelChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">teszt_számokkal</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handelChange}
          >
            {guests}
          </select>
        </div>
        {/* end of guest */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">product price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handelChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handelChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handelChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="szűrő1"
              id="szűrő1"
              checked={szűrő1}
              onChange={handelChange}
            />
            <label htmlFor="szűrő1">szűrő1</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="Szűrő2"
              id="Szűrő2"
              checked={Szűrő2}
              onChange={handelChange}
            />
            <label htmlFor="Szűrő2">Szűrő2</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
