var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Player.prototype.start = function () {
            this.y = 411;
            this.x = 40;
        };
        Player.prototype._checkBounds = function () {
            if (this.y >= 411) {
                this.y = 411;
            }
        };
        Player.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += 4;
            this._checkBounds();
        };
        Player.prototype.changeY = function () {
            if (this.y == 411) {
                this.y -= 200;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map