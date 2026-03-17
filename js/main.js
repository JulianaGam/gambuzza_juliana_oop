import { Counter, StepCounter } from './modules/counter.js';
import { ScrollAnimation } from './modules/ScrollAnimation.js';

const counter1 = new Counter("#counter-container1", 10);
const counter2 = new Counter("#counter-container2", 5);
const counter3 = new StepCounter("#counter-container3", 0, 3);
const counter4 = new StepCounter("#counter-container4", 0, 10);


ScrollAnimation();