var Game;
(function (Game) {
    (function (SwordQuality) {
        SwordQuality[SwordQuality["Janky"] = 0] = "Janky";
        SwordQuality[SwordQuality["Decent"] = 1] = "Decent";
        SwordQuality[SwordQuality["Awesome"] = 2] = "Awesome";
    })(Game.SwordQuality || (Game.SwordQuality = {}));
    var SwordQuality = Game.SwordQuality;
    var Sword = (function () {
        function Sword(_name, _description, _quality) {
            this.name = _name;
            this.description = _description;
        }
        Sword.prototype.getDamage = function () {
            var bonus = 0;
            switch (this.quality) {
                case SwordQuality.Janky:
                    bonus = 1;
                    break;
                case SwordQuality.Decent:
                    bonus = 2;
                    break;
                case SwordQuality.Awesome:
                    bonus = 5;
                    break;
            }
            return Math.floor((Math.random() * 10) + 1) + bonus;
        };
        Sword.prototype.attack = function (enemy) {
            return this.name + " slashes at the " + enemy;
        };
        return Sword;
    })();
    Game.Sword = Sword;
    var NinjaStar = (function () {
        function NinjaStar(_name, _description, _bonusDamage) {
            this.name = _name;
            this.description = _description;
            this.bonusDamage = _bonusDamage;
        }
        NinjaStar.prototype.getDamage = function () {
            return Math.floor((Math.random() * 4) + 1) * 2 + this.bonusDamage;
        };
        NinjaStar.prototype.attack = function (enemy) {
            return this.name + " slashes at the " + enemy;
        };
        return NinjaStar;
    })();
    Game.NinjaStar = NinjaStar;
    var Claws = (function () {
        function Claws(damage) {
            this.name = "Claws";
            this.description = "Sharp Claws";
            this.dmgFunction = damage;
        }
        Claws.prototype.getDamage = function () {
            return this.dmgFunction();
        };
        Claws.prototype.attack = function (enemy) {
            return this.name + " slashes at the " + enemy;
        };
        return Claws;
    })();
    Game.Claws = Claws;
})(Game || (Game = {}));
//# sourceMappingURL=weapons.js.map