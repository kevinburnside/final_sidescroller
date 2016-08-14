module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(player: objects.GameObject, other: objects.GameObject) {
            // check to see if object is colliding
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    console.log("collision with " + other.name);
                    other.isColliding = true;
                    if (other.name === "obstacle1" || other.name === "obstacle2") {
                        //createjs.Sound.play("crash");
                        core.lives -= 1;
                        if (core.lives < 1) {
                            core.scene = config.Scene.OVER;
                            core.changeScene();
                        }
                    }
                    // if (other.name === "coin") {
                    //     //createjs.Sound.play("coinSound");
                    //     core.score += 100;
                    // }
                }
            } else {
                other.isColliding = false;
            }
        }
    }
}
