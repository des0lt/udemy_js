
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Petrychenko'

    get surname() {
        return this.#surname;
    }

    set surname(name) {
        this.#surname = name
    }
}

const roman = new User('Roman', 23);

console.log(roman.surname);
roman.surname = 'Kravtsov'
console.log(roman.surname);