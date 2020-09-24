class StrategyManager {
  constructor() {
    this._strategy = null;
  }
  set strategy(strategy) {
    this._strategy = strategy;
  }
  get strategy() {
    return this._strategy;
  }
  use() {
    this._strategy.use();
  }
}

class GoldenStrategy {
  use() {
    console.log('use Golden strategy');
  }
}

class SilverStrategy {
  use() {
    console.log('use Silver strategy');
  }
}


class BronzeStrategy {
  use() {
    console.log('use Bronze strategy');
  }
}

const strategyPattern = {


  demo() {
    let strategyManager = new StrategyManager();
    const golden = new GoldenStrategy();
    const silver = new SilverStrategy();
    const bronze = new BronzeStrategy();
    // setting at runtime
    console.log('selecting first strategy...');
    strategyManager = bronze;
    strategyManager.use();
    console.log('changing strategy at runtime...');
    strategyManager = silver;
    strategyManager.use();
    console.log('changing strategy at runtime...');
    strategyManager = golden;
    strategyManager.use();
  }
};

export default strategyPattern;
