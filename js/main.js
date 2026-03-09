import { Counter } from './modules/counter.js';

const counter1 = new Counter("#counter-container1", 10);
const counter2 = new Counter("#counter-container2", 5);
const newCounter = new Counter("#counterCon", 0);
const newCounter2 = new Counter("#counterCon2", 0);


// const step10 = new StepCounter("#step10", 0, 10);
// const step5 = new StepCounter("id", starting number, step);