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
  goldenStrategyHandler(hostElement, strategyName) {
    const node = document.createElement('li');
    node.innerHTML = `using ${strategyName}`;
    hostElement.appendChild(node);
  },

  silverStrategyHandler(hostElement, strategyName) {
    const node = document.createElement('li');
    node.innerHTML = `using ${strategyName}`;
    hostElement.appendChild(node);
  },

  bronzeStrategyHandler(hostElement, strategyName) {
    const node = document.createElement('li');
    node.innerHTML = `using ${strategyName}`;
    hostElement.appendChild(node);
  },

// Context/Client
  demo(hostElement) {
    const strategyManager = new StrategyManager();

    const goldenStrategy = new Strategy('golden strategy', this.goldenStrategyHandler, hostElement);
    const silverStrategy = new Strategy('silver strategy', this.silverStrategyHandler, hostElement);
    const bronzeStrategy = new Strategy('bronze strategy', this.bronzeStrategyHandler, hostElement);

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
