var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Obstacle = (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(Obstacle.prototype, "spawn", {
            get: function () {
                return this.isSpawned;
            },
            set: function (spawned) {
                this.isSpawned = spawned;
            },
            enumerable: true,
            configurable: true
        });
        Obstacle.prototype._reset = function () {
            this._dx = Math.floor((Math.random() * -6) - 3);
            this.x = 640 + Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
            this.isSpawned = false;
        };
        Obstacle.prototype._checkBounds = function () {
            if (this.x <= -20) {
                this._reset();
            }
        };
        Obstacle.prototype.start = function () {
            console.log(this.halfHeight);
            this.y = 436 - this.halfHeight;
            console.log(this.y);
            this._reset();
            this.isSpawned = true;
        };
        Obstacle.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x += this._dx;
            this._checkBounds();
        };
        return Obstacle;
    }(objects.GameObject));
    objects.Obstacle = Obstacle;
})(objects || (objects = {}));
//# sourceMappingURL=obstacle.js.map