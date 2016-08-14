var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        function Over() {
            _super.call(this);
        }
        Over.prototype.Start = function () {
            this._gameOverLabel = new objects.Label("GAME OVER", "60px", "Consolas", "#000000", 320, 240, true);
            this.addChild(this._gameOverLabel);
            this._restartButton = new objects.Button("restartButton", 320, 400, true);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this._restartButtonClick, this);
            if (core.highScore <= core.score) {
                this._highScore = new objects.Label("High Score: " + core.score, "60px", "Consolas", "#000000", 320, 100, true);
            }
            else {
                console.log("true!");
                this._highScore = new objects.Label("High Score: " + core.highScore, "60px", "Consolas", "#000000", 320, 100, true);
            }
            this.addChild(this._highScore);
            core.stage.addChild(this);
        };
        Over.prototype.Update = function () {
        };
        Over.prototype._restartButtonClick = function (event) {
            core.score = 0;
            core.lives = 5;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map