module objects {
    export class Obstacle extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy:number;
        private _dx:number;
        private isSpawned:boolean;

        get spawn(): boolean {
            return this.isSpawned;
        }

        set spawn(spawned: boolean) {
            this.isSpawned = spawned;
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);

            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset():void {
            this._dx = Math.floor((Math.random() * -6) - 3); // horizontal drift

            // get a random x location
            this.x = 640 + Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));

            this.isSpawned = false;
        }

        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            if(this.x <= -20) {
                this._reset();
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        public start():void {
            console.log(this.halfHeight);
            this.y = 436 - this.halfHeight;
            console.log(this.y);
            this._reset();
            this.isSpawned = true;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        public update():void {
            this.position = new Vector2(this.x, this.y);
            this.x += this._dx;
            this._checkBounds();
        }
    }
}
