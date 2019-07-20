class Fighter {
    constructor(name, damage, hp, agility) {
    let maxValue = 100;
    this.name = name,
    this.damage = damage,
    this.hp = hp,
    this.agility = agility,
        this.getName = () => {
            return this.name.name;
        };
        this.getDamage = () => {
            return this.name.damage;
        };
        this.getAgility = () => {
            return this.name.agility;
        };
        this.getHealth = () => {
            return this.name.hp;
        };
        this.heal = (heal) => {
            this.name.hp += heal;
            if (this.name.hp > maxValue) {
                this.name.hp = maxValue;
            }
        };
        this.dealDamage = (dealDamage) => {
            this.name.hp = this.getHealth() - dealDamage;
            if (this.getHealth() < 0) {
                this.name.hp = 0;
            }
        };
    let win = 0;
    let loss = 0;
        this.addWin = () => win++;
        this.addLoss = () => loss++;
        this.logCombatHistory = () => {
            return `Name: ${this.getName()}, Wins: ${win}, Losses: ${loss}`;
        }
        this.attack = (Fighter2) => {
            let dead = 0;
            let possibilityOfAttack = maxValue - Fighter2.getAgility();
            let chanceOfAtack = Math.floor(Math.random() * maxValue);
            if (possibilityOfAttack > chanceOfAtack) {
                Fighter2.name.hp = Fighter2.getHealth() - this.getDamage();
                console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + Fighter2.getName());
                if (Fighter2.getHealth() === dead) {
                    console.log(Fighter2.getName() + ' is dead');
                }
            } else {
                console.log(this.getName() + ' attack missed')
            }
        };
    }
}
function battle (fighter1, fighter2) {
    let attack = true;
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
    } else {
        while(fighter1.getHealth() && fighter2.getHealth()) {
            
            if (attack) {
                fighter1.attack(fighter2);
                attack = false;
            } else {
                fighter2.attack(fighter1);
                attack = true;
            }
        }
    }
    if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWin();
    } else {
        fighter1.addWin();
        fighter2.addLoss();
    }
}