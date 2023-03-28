/*
    - Create a bird class that extends pets.
    - Provide it a new key property called "flies" that will hold a boolean value.
    - Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such:
        If so: "{pet} takes to the skies!"
        If not: "{pet} can only gaze upward..."
    - Create a new bird. (give whatever values to its attributes)
        - hint: make sure it is "true" that it can fly.
    - Within a console.log(), check the fly method of the new bird and add another after creating new dog and cat classes to see if they can fly.
*/

class Pet {
	constructor(name, color) {
		this.name = name;
		this.coloration = color;
	}

	speak() {
		return `${this.name} says, ${this.voice}`;
	}
}

class Bird extends Pet {
	constructor(name, color, flies) {
		super(name, color);
		this.flies = true;
	}

	static void fly() {
		if (this.flies == true) {
			console.log(`${this.name} takes to the skies!`);
		} else {
            console.log(`${this.name} can only gaze upward...`);
        }
	}
}
    let Polly = new Bird("Polly", "Rainbow", "true");
    let Tobey = new Pet("Tobey", "Brown", "false");
    console.log(Tobey);
    console.log(Polly.fly());

/* 
      - Create a Dog class that extends Pet
      - Provide it a new key property called good that will hold a boolean value.
      - Create a method within the child class of Dog called isGood that checks to see if it's a good or bad dog...
          If so: "{Pets Name} is a good dog!"
          If not: "{Pets Name} is being a naughty pupper..."
      - Be sure to console.log both a new instance of Dog and the isGood method!
  */
class Dog extends Pet {
    constructor(name, color, good) {
        super(name, color);
        this.good = true;
    }
}
/* 
      - Create a Cat class that extends Pet
      - Provide it a new key property called mood that will hold a string value.
      - Create a method within the child class of Cat called isInAMood that prints a message to the console of "{Pet Name} is feeling {pet mood} today!"
      - Be sure to console.log both a new instance of Cat and the isInAMood method!
      - Extra challenge: change isInAMood to not just print a message but be a conditional that prints messages for a variety of moods.
  */
