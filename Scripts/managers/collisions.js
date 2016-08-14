var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (player, other) {
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    console.log("collision with " + other.name);
                    other.isColliding = true;
                    if (other.name === "obstacle1" || other.name === "obstacle2") {
                        core.lives -= 1;
                        if (core.lives < 1) {
                            core.scene = config.Scene.OVER;
                            core.changeScene();
                        }
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collisions.js.map