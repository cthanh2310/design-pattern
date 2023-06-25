// Use Dipendency-Injection(DI)
interface Sound {
    makeSound(): void;
}

class Dog implements Sound {
    makeSound(): void {
        console.log("Gâu gâu!");
    }
}

class Cat implements Sound {
    makeSound(): void {
        console.log("Meo meo!");
    }
}

class SoundService {
    private sound: Sound;

    constructor(sound: Sound) {
        this.sound = sound;
    }

    playSound(): void {
        this.sound.makeSound();
    }
}

const cat = new Cat();
const dog = new Dog();

const catSoundService = new SoundService(cat);
const dogSoundService = new SoundService(dog);

catSoundService.playSound();
dogSoundService.playSound();
// Without Dipendency-Injection(DI)
