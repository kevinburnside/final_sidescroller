var core;
(function (core) {
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton;
    core.score = 0;
    core.lives = 5;
    core.highScore = 0;
    var currentScene;
    var menu;
    var over;
    var play;
    var assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "nextButton", src: "../../Assets/images/nextButton.png" },
        { id: "exitButton", src: "../../Assets/images/exitButton.png" },
        { id: "background", src: "../../Assets/images/background.png" },
        { id: "player", src: "../../Assets/images/player.png" },
        { id: "obstacle1", src: "../../Assets/images/obstacle1.png" },
        { id: "obstacle2", src: "../../Assets/images/obstacle2.png" }
    ];
    function preload() {
        core.assets = new createjs.LoadQueue();
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    function init() {
        core.stage = new createjs.Stage(canvas);
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        core.scene = config.Scene.MENU;
        changeScene();
    }
    function gameLoop(event) {
        currentScene.Update();
        core.stage.update();
    }
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    function changeScene() {
        switch (core.scene) {
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map