class Dog {
    makeSound(): void {
        console.log("Gâu gâu!");
    }
}

class Cat {
    makeSound(): void {
        console.log("Meo meo!");
    }
}

class SoundService {
    private cat: Cat;
    private dog: Dog;

    constructor() {
        this.cat = new Cat();
        this.dog = new Dog();
    }

    playCatSound(): void {
        this.cat.makeSound();
    }

    playDogSound(): void {
        this.dog.makeSound();
    }
}

const soundService = new SoundService();
soundService.playCatSound();
soundService.playDogSound();

//to avoid same name class error
export {};
