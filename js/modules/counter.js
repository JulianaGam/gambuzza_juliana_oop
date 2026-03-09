export class Counter {

    constructor(selector, initialValue = 0){
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount(){
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");

        // add buttons, decrement, reset
        //this.decrement 
        //this.reset 


        // set button text 
        this.button.textContent = "Increment";

        //this.decrement...

        //this.reset...

        //Append display and button into the container 
        container.appendChild(this.display);
        container.appendChild(this.button);

        //container.appendChild(this.decrement);
        
        //container.appendChild(this.reset);


        //add Event listener 
        this.button.addEventListener("click", () => {
            this.increment();
        });

        //add new event listeners for decrement and reset


        // when this first gets mounted update the display 
        this.update();

    }

    //state methods
    increment(){
        this.count++;
        this.update();
    }

    update(){
        //set initial display content 
        this.display.textContent = `count: ${this.count}`;
        //pseudo code for decrement and reset update methods

        //classList.toggle() this.count===0



    }

    // add decrement method
    decrement(){
        //if statement neeeded to prevent count from going below 0
        if(this.count > 0){
            this.count--;
            this.update();
        }
        this.count--;
        this.update();
    }
    
    // add reset method

    // reset method should set count back to 0 and update the display
    reset(){

    this.count = 0;
    this.update();      
}


// counter is super class 
//stepCounter is sub class 

}

class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1){
        super(selector, initialValue);
        // add step property 
        // this.stet=step
        this.step = step;
    }

    //need to redefine the increment method to use the step property instead of just adding 1
    increment(){
        this.count += this.step;
        this.update();
    }

     //need to redefine the decrement method to use the step property instead of just subtracting 1
     decrement(){
        if(this.count > 0){
            this.count -= this.step;
            this.update();
        }
    }
}

