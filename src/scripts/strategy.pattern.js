import { setElement } from "./addElement";

/**
 * Strategy Pattern DEMO
 * ------------------------
 * Article: https://medium.com/better-programming/design-patterns-using-the-strategy-pattern-in-javascript-3c12af58fd8a
 */

// Interface
class StrategyManager {
  constructor() {
    this._strategies = [];
  }
  addStrategy(strategy) {
    this._strategies = [...this._strategies, strategy];
  }
  getStrategy(name) {
    return this._strategies.find(strategy => strategy._name === name);
  }
}

class Strategy {
  constructor(name, handler, hostElement) {
    this._name = name;
    this._handler = handler;
    this._hostElement = hostElement;
  }
  use() {
    this._handler(this._hostElement, this._name);
  }
}

const strategyPattern = {
  goldenStrategyHandler(node, strategyName) {
    node.innerHTML = `using ${strategyName}`;
  },

  silverStrategyHandler(node, strategyName) {
    node.innerHTML = `using ${strategyName}`;
  },

  bronzeStrategyHandler(node, strategyName) {
    node.innerHTML = `using ${strategyName}`;
  },

// Context/Client
  demo(listParentElement) {
    const strategyManager = new StrategyManager();

    const golderStrategyElement = setElement(listParentElement, 'li');
    const silverStrategyElement = setElement(listParentElement, 'li');
    const bronzeStrategyElement = setElement(listParentElement, 'li');

    const goldenStrategy = new Strategy('golden strategy', this.goldenStrategyHandler, golderStrategyElement);
    const silverStrategy = new Strategy('silver strategy', this.silverStrategyHandler, silverStrategyElement);
    const bronzeStrategy = new Strategy('bronze strategy', this.bronzeStrategyHandler, bronzeStrategyElement);

    strategyManager.addStrategy(goldenStrategy);
    strategyManager.addStrategy(silverStrategy);
    strategyManager.addStrategy(bronzeStrategy);

    const goldenStrategyImplementation = strategyManager.getStrategy('golden strategy');
    const silverStrategyImplementation = strategyManager.getStrategy('silver strategy');
    const bronzeStrategyImplementation = strategyManager.getStrategy('bronze strategy');

    goldenStrategyImplementation.use();
    silverStrategyImplementation.use();
    bronzeStrategyImplementation.use();
  }
};

export default strategyPattern;
