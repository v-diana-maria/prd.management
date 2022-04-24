import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaParking } from 'react-icons/fa';
import Title from '../components/Title';
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Étterem, konyha',
        info:
          "Stay cohesive. Development in english language is important ~"
      },
      {
        icon: <FaHiking />,
        title: 'Recepció',
        info:
          "Our decisions are too different in certain situations. More team-talk is involved. Also need to develop english skills"
      },
      {
        icon: <FaShuttleVan />,
        title: 'Marketing',
        info:
          'Will she have enough energy and attention at full house events without enough protein? :)) Seriously, I think some assistance is needed in that'
      },
      {
        icon: <FaParking />,
        title: 'Menedzsment, könyvelés',
        info:
          'More study is needed, paying attention'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Teendők" />
        <div className="services-center">
          {this.state.services.map((service, i) => {
            return (
              <article key={i} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p> {service.info} </p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
