var Candy = {};
Candy.Boot = function (game) {
	//
};
Candy.Boot.prototype = {
	preload: function () {
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function () {
		this.game.input.maxPointers = 1;
		// this.game.stage.disablePauseScreen = true;

	    if (this.game.device.desktop)
	    {
		    this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		    this.game.stage.disableVisibilityChange = true;
		    this.game.stage.scale.minWidth = 320;
		    this.game.stage.scale.minHeight = 480;
		    this.game.stage.scale.maxWidth = 320;
		    this.game.stage.scale.maxHeight = 480;
		    this.game.stage.scale.forcePortrait = true;
		    this.game.stage.scale.pageAlignHorizontally = true;
		    this.game.stage.scale.setScreenSize(true);
	    }
	    else
	    {
		    this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		    this.game.stage.disableVisibilityChange = true;
		    this.game.stage.scale.minWidth = 480;
		    this.game.stage.scale.minHeight = 260;
		    this.game.stage.scale.maxWidth = 1024;
		    this.game.stage.scale.maxHeight = 768;
		    this.game.stage.scale.forcePortrait = true;
		    this.game.stage.scale.pageAlignHorizontally = true;
		    this.game.stage.scale.setScreenSize(true);
	    }
		this.game.state.start('Preloader');
	}
};