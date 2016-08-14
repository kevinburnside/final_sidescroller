module objects {
    export class Player extends objects.GameObject {

        constructor(imageString: string) {
            super(imageString);

            this.start();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        public start(): void {
            this.y = 411;
            this.x = 40;
        }

        private _checkBounds(): void {
            // checkbounds to stop player from going outside

            // check right bounds
            if (this.y >= 411) {
                this.y = 411;
            }
        }

        public update(): void {
            //this.x = core.stage.mouseX;
            //this.rotation = 45;
            this.position = new Vector2(this.x, this.y);
            this.y += 4;
            this._checkBounds();
        }

        public changeY(): void {
            if (this.y == 411) {
                this.y -= 200;
            }
        }

    }
}
