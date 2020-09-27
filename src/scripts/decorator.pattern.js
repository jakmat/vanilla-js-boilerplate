import { setElement } from "./addElement";

/**
 * Decorator Pattern DEMO
 * ------------------------
 * Article: https://medium.com/javascript-in-plain-english/javascript-design-patterns-the-decorator-pattern-eaf6adc77cb7
 */
const route = (number, from, to) => {
  return { number, from, to };
};

const fullRoute = (route) => {
  return {
    route,
    getFullRoute: () => `[${route.number}] ${route.from} - ${route.to}`
  };

};

const routes = {
  eastWest: route(10, 'Retkinia', 'Widzew'),
  northSouth: route(11, 'Helenówek', 'Ikea'),
  studentLine: route(15, 'Kurczaki', 'Telefoniczna')
};

const decoratorPattern = {
  decoratedRoutes:  [
    fullRoute(routes.eastWest),
    fullRoute(routes.northSouth),
    fullRoute(routes.studentLine)
  ],
  demo(listParentElement) {
    const listItems = [];
    this.decoratedRoutes.forEach((route) => {
      const item = setElement(listParentElement, 'li');
      item.innerHTML = route.getFullRoute()
      listItems.push(item);
    });
  }
};

export default decoratorPattern;
