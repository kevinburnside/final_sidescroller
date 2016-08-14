var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
        }
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            if (core.score >= core.highScore) {
                core.highScore = core.score;
            }
        };
        Play.prototype.changeObstacle = function () {
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
        };
        Play.prototype.Start = function () {
            this.background = new objects.Background("background");
            this.addChild(this.background);
            this.obstacle1 = new objects.Obstacle("obstacle1");
            this.addChild(this.obstacle1);
            this.player = new objects.Player("player");
            this.addChild(this.player);
            core.stage.on("click", this.clickMove, this);
            this._collision = new managers.Collision();
            this._livesLabel = new objects.Label("Lives: " + core.lives, "30px", "Consolas", "#000000", 10, 5, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + core.score, "30px", "Consolas", "#000000", 450, 5, false);
            this.addChild(this._scoreLabel);
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            this.background.update();
            this.obstacle1.update();
            this.player.update();
            this._collision.check(this.player, this.obstacle1);
            this._updateScoreBoard();
            this.changeObstacle();
        };
        Play.prototype.clickMove = function (event) {
            this.player.changeY();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map