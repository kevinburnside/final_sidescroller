module scenes {
    export class Over extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _highScore: objects.Label;

        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start(): void {
            // Add Menu Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER", "60px", "Consolas", "#000000",
                320, 240, true
            );
            this.addChild(this._gameOverLabel);

            // add the start button
            this._restartButton = new objects.Button(
                "restartButton", 320, 400, true
            )
            this.addChild(this._restartButton);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            if (core.highScore <= core.score) {
                this._highScore = new objects.Label("High Score: " + core.score, "60px", "Consolas", "#000000", 320, 100, true);
            } else {
              console.log("true!");
                this._highScore = new objects.Label("High Score: " + core.highScore, "60px", "Consolas", "#000000", 320, 100, true);

            }
            this.addChild(this._highScore);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {

        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.score = 0;
            core.lives = 5;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}
