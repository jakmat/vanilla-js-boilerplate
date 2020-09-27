import './styles/style.scss';
import strategyPattern from "./scripts/strategy.pattern";
import factoryPattern from "./scripts/factory.pattern";
import decoratorPattern from "./scripts/decorator.pattern";
import observerPattern from "./scripts/observer.pattern";

const [strategyPatternDemo] = document.getElementsByClassName('strategy-pattern');
const [factoryPatternDemo] = document.getElementsByClassName('factory-pattern');
const [decoratorPatternDemo] = document.getElementsByClassName('decorator-pattern');
const [observerPatternDemo] = document.getElementsByClassName('observer-pattern');

strategyPattern.demo(strategyPatternDemo);
factoryPattern.demo(factoryPatternDemo);
decoratorPattern.demo(decoratorPatternDemo);
observerPattern.demo(observerPatternDemo);
