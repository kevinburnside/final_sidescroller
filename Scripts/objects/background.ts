module objects {
  export class Background extends createjs.Bitmap {
          // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
          private _dx:number;

          constructor(imageString: string) {
              super(core.assets.getResult(imageString));

              this.start();
          }

          private _reset():void {
              this.x = 0;
          }

          private _checkBounds():void {
              if(this.x <= -960) {
                  this._reset();
              }
          }

          // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

          public start():void {
              this._reset();
              this._dx = -2; // 2px per frame left
          }

          public update():void {
              this.x += this._dx;
              this._checkBounds();
          }
      }
}
