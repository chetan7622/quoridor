
// You can write more code here

/* START OF COMPILED CODE */

class Level2 extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.image(405, 308, "bg");
		bg.scaleX = 3.5490082758116555;
		bg.scaleY = 2.687510778501957;
		bg.alpha = 0.1;
		bg.alphaTopLeft = 0.1;
		bg.alphaTopRight = 0.1;
		bg.alphaBottomLeft = 0.1;
		bg.alphaBottomRight = 0.1;

		// xx2
		const xx2 = this.add.image(413, 139, "xx2");
		xx2.scaleX = 0.5;

		// play
		const play = this.add.image(402, 361, "—Pngtree—new play button 2d and_5522122");
		play.scaleX = 0.5;
		play.scaleY = 0.5;

		this.bg = bg;
		this.play = play;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg;
	/** @type {Phaser.GameObjects.Image} */
	play;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.play.setInteractive()
			.on('pointerdown', function () {
				this.scene.start("Level");
			}, this)
 	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
