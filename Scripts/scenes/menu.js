var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.Start = function () {
            this._menuLabel = new objects.Label("MENU SCENE", "60px", "Consolas", "#000000", 320, 240, true);
            this.addChild(this._menuLabel);
            this._startButton = new objects.Button("startButton", 320, 420, true);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            core.stage.addChild(this);
        };
        Menu.prototype.Update = function () {
        };
        Menu.prototype._startButtonClick = function (event) {
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map