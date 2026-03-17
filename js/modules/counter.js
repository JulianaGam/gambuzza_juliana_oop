export class Counter {

    constructor(selector, initialValue = 0){
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount(){
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.display.classList.add("counter-display");
        this.button = document.createElement("button");

        // add buttons, decrement, reset
        this.decrementButton = document.createElement("button");
        this.resetButton = document.createElement("button");

        // set button text 
        this.button.textContent = "Increment";
        this.decrementButton.textContent = "Decrement";
        this.resetButton.textContent = "Reset";

        //Append display and button into the container 
        container.appendChild(this.display);
        container.appendChild(this.button);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);

        //add Event listener 
        this.button.addEventListener("click", () => {
            this.increment();
        });

        this.decrementButton.addEventListener("click", () => {
            this.decrement();
        });

        this.resetButton.addEventListener("click", () => {
            this.reset();
        });

        // when this first gets mounted update the display 
        this.update();
        this.checkButtonStatus();
    }

    checkButtonStatus(){
        if(this.count === 0){
            this.decrementButton.classList.add("inactive");
            this.resetButton.classList.add("inactive");
            this.decrementButton.disabled = true;
            this.resetButton.disabled = true;
        } else {
            this.decrementButton.classList.remove("inactive");
            this.resetButton.classList.remove("inactive");
            this.decrementButton.disabled = false;
            this.resetButton.disabled = false;
        }
    }

    //state methods
    increment(){
        this.count++;
        this.update();
        this.checkButtonStatus();
    }

    // add decrement method
    decrement(){
        if(this.count > 0){
            this.count--;
            this.update();
            this.checkButtonStatus();
        }
    }

    // add reset method
    reset(){
        this.count = 0;
        console.log("Reset activated!!");
        this.update();
        this.checkButtonStatus();
    }

    update(){
        //set initial display content 
        this.display.textContent = `count: ${this.count}`;
    }

}

// counter is main class 
//stepCounter is sub class 

export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1){
        super(selector, initialValue);
        this.step = step;
    }

    increment(){
        this.count = this.count + this.step;
        this.update();
        this.checkButtonStatus();
    }

    decrement(){
        if(this.count > 0){
            this.count = this.count - this.step;

            if(this.count < 0){
                this.count = 0;
            }

            this.update();
            this.checkButtonStatus();
        }
    }
}