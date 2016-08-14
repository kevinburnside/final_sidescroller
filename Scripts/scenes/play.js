var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        /**
         *
         */
        Play.prototype.Start = function () {
            // Add Menu Label
            this._playLabel = new objects.Label("PLAY SCENE", "60px", "Consolas", "#000000", 320, 240);
            this.addChild(this._playLabel);
            // add the start button
            this._nextButton = new objects.Button("nextButton", 320, 420, true);
            this.addChild(this._nextButton);
            // Start button event listener
            this._nextButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map