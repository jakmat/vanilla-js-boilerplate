import { setElement } from "./addElement";

/**
 * Factory Pattern DEMO
 * ------------------------
 * Article: https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
 */
const planetTypes = {
  inner({ name, moons }) {
    this.name = name;
    this.moons = moons;
  },
  outer({ name, moons, rings }) {
    this.name = name;
    this.moons = moons;
    this.rings = rings;
  }
};

const planetFactory = {
  createPlanet(type, attributes) {
    const PlanetType = planetTypes[type];
    return new PlanetType(attributes);
  }
};

const factoryPattern = {
  planets: [
    planetFactory.createPlanet('inner', {
      name: 'Venus',
      moons: 0
    }),
    planetFactory.createPlanet('inner', {
      name: 'Mars',
      moons: 2
    }),
    planetFactory.createPlanet('outer', {
      name: 'Jupiter',
      moons: 79,
      rings: 4
    }),
    planetFactory.createPlanet('outer', {
      name: 'Saturn',
      moons: 82,
      rings: 14
    })
  ],
  // Context/Client
  demo(listParentElement) {
    this.planets.forEach((planet) => {
      const numberOfRings = planet.rings || 'no';
      const item = setElement(listParentElement, 'li');
      item.innerHTML = `${planet.name}: ${planet.moons} moons, ${numberOfRings} rings`;
    });
  }
};

export default factoryPattern;
