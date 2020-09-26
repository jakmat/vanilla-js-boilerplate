import strategyPattern from "./scripts/strategy.pattern";
import factoryPattern from "./scripts/factory.pattern";
import './styles/style.css';
import './styles/style.scss';
import './styles/style.sass';

const [strategyPatternDemo] = document.getElementsByClassName('strategy-pattern');
const [factoryPatternDemo] = document.getElementsByClassName('factory-pattern');

strategyPattern.demo(strategyPatternDemo);
factoryPattern.demo(factoryPatternDemo);
