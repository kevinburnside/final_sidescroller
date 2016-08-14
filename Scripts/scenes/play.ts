module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;
        private background: objects.Background;
        private player: objects.Player;
        private obstacle1: objects.Obstacle;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            if (core.score >= core.highScore) {
                core.highScore = core.score;
            }
        }

        private changeObstacle()/*: string*/ {
            if (!this.obstacle1.spawn) {
                switch (Math.floor((Math.random() * 2))) {
                    case 0:
                        this.obstacle1.spawn = false;
                        this.obstacle1 = new objects.Obstacle("obstacle1");
                        this.addChild(this.obstacle1);
                        core.stage.addChild(this);
                        core.score += 100;
                        break;
                    case 1:
                        this.obstacle1.spawn = false;
                        this.obstacle1 = new objects.Obstacle("obstacle2");
                        this.addChild(this.obstacle1);
                        core.stage.addChild(this);
                        core.score += 100;
                        break;
                }
            }
        }

        /**
         *
         */
        public Start(): void {
            this.background = new objects.Background("background");
            this.addChild(this.background);

            this.obstacle1 = new objects.Obstacle("obstacle1");
            this.addChild(this.obstacle1);

            this.player = new objects.Player("player");
            this.addChild(this.player);

            core.stage.on("click", this.clickMove, this);

            // include a collision managers
            this._collision = new managers.Collision();

            this._livesLabel = new objects.Label("Lives: " + core.lives, "30px", "Consolas", "#000000", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "30px", "Consolas", "#000000", 450, 5, false);
            this.addChild(this._scoreLabel);

            core.stage.addChild(this);
        }

        public Update(): void {
            // scene updates happen here...
            this.background.update();
            this.obstacle1.update();
            this.player.update();
            this._collision.check(this.player, this.obstacle1);
            this._updateScoreBoard();
            this.changeObstacle();
        }

        // EVENT HANDLERS ++++++++++++++++

        private clickMove(event: createjs.MouseEvent): void {
            this.player.changeY();
        }

        // private _startButtonClick(event:createjs.MouseEvent):void {
        //     // Switch the scene
        //     core.scene = config.Scene.OVER;
        //     core.changeScene();
        // }

    }
}
