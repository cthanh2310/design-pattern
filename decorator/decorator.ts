interface Sound {
    makeSound(): string;
}

class Cat implements Sound {
    makeSound(): string {
        return "Meo meo!";
    }
}

class Dog implements Sound {
    makeSound(): string {
        return "Gâu gâu!";
    }
}

// base decorator
abstract class AnimalSoundDecorator implements Sound {
    protected sound: Sound;

    constructor(sound: Sound) {
        this.sound = sound;
    }

    abstract makeSound(): string;
}

class ExtraSoundDecorator extends AnimalSoundDecorator {
    makeSound(): string {
        const originalSound = this.sound.makeSound();
        const extraSound = "hihihi i'm animal!";
        return `${originalSound} ${extraSound}`;
    }
}

const cat = new Cat();
const catWithExtraSound = new ExtraSoundDecorator(cat);
console.log(catWithExtraSound.makeSound());

const dog = new Dog();
const dogWithExtraSound = new ExtraSoundDecorator(dog);
console.log(dogWithExtraSound.makeSound());

export {};
