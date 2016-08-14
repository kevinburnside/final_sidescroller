var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        function Background(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Background.prototype._reset = function () {
            this.x = 0;
        };
        Background.prototype._checkBounds = function () {
            if (this.x <= -960) {
                this._reset();
            }
        };
        Background.prototype.start = function () {
            this._reset();
            this._dx = -2;
        };
        Background.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map