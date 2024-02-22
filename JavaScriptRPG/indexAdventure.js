class Character {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attackWeapon = '';

        switch (this.type) {
            case "Guerreiro":
                this.attackWeapon = "espada";
                break;

            case "Mago":
                this.attackWeapon = "mágica";
                break;

            case "Atirador":
                this.attackWeapon = "arco e flecha";
                break;

            case "Assassino":
                this.attackWeapon = "adaga";
                break;

            default:
                this.attackWeapon = "sem arma";
                break;
        }
    }

    attack() {
        console.log(`O ${this.type} ${this.name} atacou usando sua ${this.attackWeapon}`);
    }
}

// Tipos de Heróis: "Guerreiro", "Mago", "Atirador", "Assassino"
let infoHero = new Character("Henrique", "19", "Guerreiro");

infoHero.attack();