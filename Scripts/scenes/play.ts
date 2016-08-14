module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;

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
        public Start():void {
            // Add Menu Label
            this._playLabel = new objects.Label(
                "PLAY SCENE", "60px","Consolas", "#000000",
                320, 240
                );
            this.addChild(this._playLabel);

            // add the start button
            this._nextButton = new objects.Button(
                "nextButton", 320, 420, true
            )
            this.addChild(this._nextButton);

            // Start button event listener
            this._nextButton.on("click", this._startButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}