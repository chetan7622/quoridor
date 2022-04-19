
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle
		const rectangle = this.add.rectangle(685, 281, 128, 128);
		rectangle.scaleX = 1.4290068101049478;
		rectangle.scaleY = 3.1006587341864718;
		rectangle.isFilled = true;

		// fls
		const fls = this.add.image(734, 306, "false");
		fls.scaleX = 0.01;
		fls.scaleY = 0.01;
		fls.visible = false;

		// tru
		const tru = this.add.image(660, 305, "true");
		tru.scaleX = 0.01;
		tru.scaleY = 0.01;
		tru.visible = false;

		// exit
		const exit = this.add.image(688, 398, "exit");
		exit.scaleX = 0.5;
		exit.scaleY = 0.5;

		// next_icon__1_
		const next_icon__1_ = this.add.image(685, 156, "Next-icon (1)");
		next_icon__1_.scaleX = 0.5;
		next_icon__1_.scaleY = 0.5;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(688, 156, 128, 128);
		rectangle_1.scaleX = 1.1849561350311937;
		rectangle_1.scaleY = 0.28472479419471647;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 16313123;

		// walls
		const walls = this.add.text(605, 137, "", {});
		walls.text = "Walls:10";
		walls.setStyle({ "backgroundColor": "#f8eb23ff", "color": "#191616ff", "fontSize": "34px" });

		// text
		const text = this.add.text(609, 313, "", {});
		text.visible = false;
		text.text = "Walls is over !!!";
		text.setStyle({ "color": "#1b1919ff", "fontStyle": "bold" });

		this.fls = fls;
		this.tru = tru;
		this.exit = exit;
		this.walls = walls;
		this.text = text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	fls;
	/** @type {Phaser.GameObjects.Image} */
	tru;
	/** @type {Phaser.GameObjects.Image} */
	exit;
	/** @type {Phaser.GameObjects.Text} */
	walls;
	/** @type {Phaser.GameObjects.Text} */
	text;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		var x = 6;
		var y = 6;
		this.point = true;
		this.ply_x_1 = 0;
		this.ply_1_y = 0;
		this.block = [];
		this.po = [];
		this.gameArray = [];
		this.moue = true;
		this.x = [0, 1, , 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, , 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, , 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
		this.i = 0;
		this.ply_x_2 = 5;
		this.ply_2_y = 5;
		this.isMovable = true;
		this.position_y = [];
		this.position_x = [];
		this.isMovable2 = true;
		this.pl_frist = true;
		this.a = 0;
		this.isMovable_py2_y = true;
		this.isMovable_py2_x = true;
		this.walls_final = 10;
		this.p = true;
		this.wall = true;
		 		this.sound.add("done");

		this.isMovable_py2 = true;



		this.final_posi_x_1 = 1500 / x / 2 + this.ply_x_1 * 400 / x;
		this.final_posi_x_2 = 1500 / x / 2 + this.ply_x_2 * 400 / x;
		this.final_posi_y_1 = 1500 / x / 2 + this.ply_1_y * 400 / x;
		this.final_posi_y_2 = 1500 / x / 2 + this.ply_2_y * 400 / x;

		this.exit.setInteractive()
			.on('pointerdown', function () {
				this.scene.start("Level2");
			}, this)

		// add box
		for (var i = 0; i < x; i++) {
			for (var j = 0; j < y; j++) {
				this.rect_ij = this.add.rectangle(1500 / x / 2 + i * 400 / x, 1500 / y / 2 + j * 400 / y, 40, 40);
				this.rect_ij.isFilled = true;
			}
		}
		this.player1 = this.add.image(this.final_posi_x_1, this.final_posi_y_1, "player1").setInteractive();
		this.player1.scaleY = 0.05;
		this.player1.scaleX = 0.05;
		this.player2 = this.add.image(this.final_posi_x_2, this.final_posi_y_2, "player2").setInteractive();
		this.player2.scaleY = 0.05;
		this.player2.scaleX = 0.05;
		// add block 

		for (var i = 1; i < x; i++) {
			this.gameArray[i] = [];
			for (var j = 1; j < y; j++) {
				this.mouseCircle_ij = this.add.rectangle(1150 / x / 2 + i * 395 / x, 1150 / y / 2 + j * 395 / y, 128, 128).setInteractive();
				this.mouseCircle_ij.scaleX = 0.85;
				this.mouseCircle_ij.scaleY = 0.05;
				this.mouseCircle_ij.isFilled = true;
				this.mouseCircle_ij.fillColor = 6287806;
				this.mouseCircle_ij.visible = false;

				this.vertical_ij = this.add.rectangle(1150 / x / 2 + i * 395 / x, 1150 / y / 2 + j * 395 / y, 128, 128).setInteractive();
				this.vertical_ij.scaleX = 0.05;
				this.vertical_ij.scaleY = 0.85;
				this.vertical_ij.isFilled = true;
				this.vertical_ij.fillColor = 6287806;
				this.vertical_ij.visible = false;
				this.gameArray[i][j] = {
					x: this.mouseCircle_ij,
					y: this.vertical_ij
				}
			}
		}

		if (this.wall == false) {

		}
		else {
			this.input.on('pointerdown', function (pointer) {
				this.updaterow(pointer.x, pointer.y);

			}, this);
		}



		this.drow();
		this.tru.on('pointerdown', function () {
			this.tru.visible = false;
			this.fls.visible = false;
			//	this.p = false;
			this.bolckpl2();

			this.updatescore();
		}, this)

	}

	// add player-1 nearest position
	updatepoi() {
		var x = 6;
		this.rect1 = this.add.rectangle(1500 / x / 2 + (this.ply_x_1 - 1) * 400 / x, 1500 / x / 2 + this.ply_1_y * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.3).setInteractive();
		this.rect2 = this.add.rectangle(1500 / x / 2 + (this.ply_x_1 + 1) * 400 / x, 1500 / x / 2 + this.ply_1_y * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.3).setInteractive();
		this.rect3 = this.add.rectangle(1500 / x / 2 + this.ply_x_1 * 400 / x, 1500 / x / 2 + (this.ply_1_y + 1) * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.5).setInteractive();
		this.rect4 = this.add.rectangle(1500 / x / 2 + this.ply_x_1 * 400 / x, 1500 / x / 2 + (this.ply_1_y - 1) * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.5).setInteractive();

	}


	setcolors() {
		this.rect1.visible = false;
		this.rect2.visible = false;
		this.rect3.visible = false;
		this.rect4.visible = false;

		this.bolckpl2();
		if (this.ply_2_y == -1 || this.ply_1_y == 5) {
			this.scene.start("Level2");
		}


	}

	//player-y block
	bolckpl2() {
		this.sound.play("done");

		if (this.isMovable_py2_x == true && this.isMovable_py2_y == true) {
			this.updatepl2y();
			this.isMovable_py2_x =false;
		}
		else if (this.isMovable_py2_x == false && this.isMovable_py2 == true) {
			this.updatepl2x();
			this.isMovable_py2_x = true;
			console.log("move-x");


		}

		else if (this.isMovable_py2 == false &&this.isMovable_py2_x == false) {
			this.updatepl2xx();
			//	if (this.ply_x_2 == 4) {
			this.isMovable_py2 = true;
			console.log("move");

			//}

		}
		else {
			this.updatepl2y();
			this.isMovable_py2_y = true;
			console.log("move-y");

		}


	}

	// point to nearest bolck to click visible

	updaterow(valuesx, valuesy) {
		if (this.wall == true) {

			this.valuesx = valuesx;
			this.valuesy = valuesy;

			for (var i = 1; i < 6; i++) {
				for (var j = 1; j < 6; j++) {
					this.dist = Phaser.Math.Distance.Between(this.valuesx, this.valuesy, this.gameArray[i][j].y.x, this.gameArray[i][j].y.y);
					if (this.dist < 25) {
						this.fls.visible = true;
						this.tru.visible = true;

						if (this.x[this.i] == 0) {
							this.storevalues(this.gameArray[i][j].y);
							console.log(i, j);
							if (j > 1) {
								if (this.gameArray[i][j - 1].y.visible == true) {
									this.gameArray[i][j].y.visible = false;
									//this.gameArray[i][j].x.visible = false;
								}
								else {
									if (this.gameArray[i][j].y.visible == true) {

										this.gameArray[i][j].y.visible = true;
										this.gameArray[i][j].x.visible = false;
										//console.log("not1");
										//	this.storevalues(this.gameArray[i][j].y);


									}
									else {
										if (this.gameArray[i][j].y.visible == true) {
											this.gameArray[i][j].y.visible = true;

											this.gameArray[i][j].x.visible = false;
											//	console.log(j);
											//this.storevalues(this.gameArray[i][j].y);



										}
										else {
											if (this.gameArray[i][3].y.visible == true) {
												this.gameArray[i][j].y.visible = false;
												this.gameArray[i][j].x.visible = false;
												//console.log(j);
											}
											else {
												this.gameArray[i][j].y.visible = true;
												this.gameArray[i][j].x.visible = false;
												//	this.storevalues(this.gameArray[i][j].y);
											}
										}
									}
								}

							}
							else {
								if (this.gameArray[i][j].y.visible == false) {
									this.gameArray[i][j].y.visible = true;
									this.gameArray[i][j].x.visible = false;
									//	this.storevalues(this.gameArray[i][j].y);
								}
								else {
									if (this.gameArray[i][j].x.visible == false) {
										this.gameArray[i][j].y.visible = false;
										this.gameArray[i][j].x.visible = false;
									} else {

										this.gameArray[i][j].y.visible = true;
										this.gameArray[i][j].x.visible = false;

									}
								}
							}
						}
						if (this.x[this.i] == 1) {

							this.storevalues(this.gameArray[i][j].x);


							if (i > 1) {
								if (this.gameArray[i - 1][j].x.visible == true && this.gameArray[i - 1][j].x.visible == true) {
									this.gameArray[i][j].y.visible = false;
									this.gameArray[i][j].x.visible = false;
									this.gameArray[i][j].x.visible = false;

								}
								else {
									this.gameArray[i][j].y.visible = false;
									this.gameArray[i][j].x.visible = true;
									//	this.storevalues(this.gameArray[i][j].x);


								}

							}
							else {
								if (this.gameArray[i][j].y.visible == false) {
									this.gameArray[i][j].y.visible = false;
									this.gameArray[i][j].x.visible = true;
									//this.storevalues(this.gameArray[i][j]);

									console.log(j);
								}
								else {
									this.gameArray[i][j].y.visible = false;
									this.gameArray[i][j].x.visible = true;
									//this.storevalues(this.gameArray[i][j]);
								}
							}
						}
					}
				}
			}

			this.i++;
		}
		else {
			this.text.visible = true;
		}
	}
	// to check nearestblock:
	update() {

		for (var i = 1; i < 6; i++) {
			for (var j = 1; j < 6; j++) {

				this.dist_ply = Phaser.Math.Distance.Between(this.player1.x, this.player1.y, this.gameArray[i][j].y.x, this.gameArray[i][j].y.y);
				this.dist_ply2 = Phaser.Math.Distance.Between(this.player2.x, this.player2.y, this.gameArray[i][j].y.x, this.gameArray[i][j].y.y);

				if (this.gameArray[i][j].y.visible == true) {
					if (this.dist_ply < 60) {
						this.isMovable2 = false;
						//	console.log("pl-y " + i, j);

					}

				} else if (this.gameArray[i][j].x.visible == true) {
					if (this.dist_ply < 60) {

						this.isMovable = false;
						//	 console.log("pl-x " + i, j);


					}
				}




				// player-2 nearest block:

				if (this.gameArray[i][j].y.visible == true) {
					if (this.dist_ply2 < 60) {
						this.isMovable_py2_y = false;
						//	console.log("pl-y2");

					}

				} else {

					if (this.gameArray[i][j].x.visible == true) {
						if (this.dist_ply2 < 60) {

							this.isMovable_py2_x = false;

							//	console.log("pl-x2");

						}
					}
				}
				if (i == 1 && this.gameArray[i][j].x.visible) {
					if (this.dist_ply2 < 50) {
						this.isMovable_py2 = false;
						//	console.log("pl-y2");
						console.log(i, j);

					}


				}


			}
		}
	}

	// add player1 mouvement
	addposi() {
		this.rect1.on('pointerdown', function () {
			this.player1.x = 1500 / 6 / 2 + (this.ply_x_1 - 1) * 400 / 6;
			this.player1.y = 1500 / 6 / 2 + this.ply_1_y * 400 / 6;
			this.setcolors();
			this.ply_x_1--;
			this.rect1.disableInteractive();

		}, this)
		this.rect2.on('pointerdown', function () {
			this.player1.x = 1500 / 6 / 2 + (this.ply_x_1 + 1) * 400 / 6;
			this.player1.y = 1500 / 6 / 2 + this.ply_1_y * 400 / 6;
			this.setcolors();
			this.ply_x_1++;
			this.rect2.disableInteractive();
		}, this)
		this.rect3.on('pointerdown', function () {
			this.player1.x = 1500 / 6 / 2 + this.ply_x_1 * 400 / 6;
			this.player1.y = 1500 / 6 / 2 + (this.ply_1_y + 1) * 400 / 6;
			this.setcolors();
			this.ply_1_y++;
			this.rect3.disableInteractive();
		}, this)
		this.rect4.on('pointerdown', function () {
			this.player1.x = 1500 / 6 / 2 + this.ply_x_1 * 400 / 6;
			this.player1.y = 1500 / 6 / 2 + (this.ply_1_y - 1) * 400 / 6;
			this.setcolors();
			this.ply_1_y--;
			this.rect4.disableInteractive();
		}, this)
	}


	// player1-touch event


	drow() {
		this.player1.on('pointerdown', function () {
			if (this.isMovable2 == true && this.isMovable == true) {
				this.updatepoi();
				if (this.ply_x_1 == 0) {
					this.rect1.visible = false;
				}
				if (this.ply_1_y == 0) {
					this.rect4.visible = false;

				}
				if (this.ply_x_1 == 5) {

					this.rect2.visible = false;
				}
				this.addposi();

			}
			else if (this.isMovable2 == false) {
				this.isMovabl2 = true;

				this.drow6();
				this.addposi();


			}
			else if (this.isMovable == false) {
				this.drow5();
				this.isMovable = true;
				this.addposi();

			}
			else {
			} this.isMovable = true;
			this.isMovabl2 = true;

			/*	if (this.isMovable2 == true && this.isMovable == true) {
	
			if (this.set1 == false) {
				this.set1 = true;
	
				this.drowxy1();
				this.addposi();
				console.log("set1");
	
			}
	
			if (this.set2 == false) {
				this.set2 = true;
	
				this.drowxy2();
				this.addposi();
				console.log("set2");
	
			}
			if (this.set3 == false) {
				this.drowxy3();
				this.addposi();
				this.set3 = true;
				console.log("set3");
	
	
			}
			if (this.set4 == false) {
				this.set4 = true;
				console.log("set4");
	
				this.drowxy4();
				this.addposi();
	
			} if (this.set5 == false) {
				this.set5 = true;
				console.log("set5");
	
				this.drowxy5();
				this.addposi();
	
	
			}
			if (this.set6 == false) {
				this.set6 = true;
				console.log("set6");
	
				this.drowxy6();
				this.addposi();
	
	
			}
			//}
			*/

		}, this)


	}


	// player1-touch event

	drow1() {

		if (this.ply_x_1 == 1) {
			this.rect1.visible = false;
			//	this.setcolors();
			console.log(this.ply_x_1);
			this.updatepoi1();
			this.updateposition()
		}
		else {
			console.log(this.ply_x_1);
			this.updatepoi1();
			this.updateposition()
			//	this.setcolors();

		}




	}
	drow5() {
		if (this.ply_x_1 == 0) {
			this.rect1.visible = false;
			this.updatepoi2();
			console.log("hy");
		}
		else if (this.ply_x_1 == 6) {
			this.rect2.visible = false;
			this.updatepoi1();
		}
		else {
			this.updatepoi1();
			this.updatepoi2();
			console.log("hyy3")
		}
	}
	// player1-touch event

	drow6() {
		this.isMovabl2 = true;

		if (this.ply_1_y == 0) {
			//this.rect4.visible = false;
			this.updatepoi3();
			console.log("f-y");
		}
		else {
			this.updatepoi3();
			this.updatepoi4();
			//console.log("hyy5");
		}

	}


	// add player-1 position to cheng
	updatepoi1() {
		var x = 6;

		this.rect1 = this.add.rectangle(1500 / x / 2 + (this.ply_x_1 - 1) * 400 / x, 1500 / x / 2 + this.ply_1_y * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.3).setInteractive();

	}
	updatepoi2() {
		var x = 6;

		this.rect2 = this.add.rectangle(1500 / x / 2 + (this.ply_x_1 + 1) * 400 / x, 1500 / x / 2 + this.ply_1_y * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.3).setInteractive();

	} updatepoi3() {
		var x = 6;

		this.rect3 = this.add.rectangle(1500 / x / 2 + this.ply_x_1 * 400 / x, 1500 / x / 2 + (this.ply_1_y + 1) * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.5).setInteractive();


	} updatepoi4() {
		var x = 6;

		this.rect4 = this.add.rectangle(1500 / x / 2 + this.ply_x_1 * 400 / x, 1500 / x / 2 + (this.ply_1_y - 1) * 400 / x, 40, 40).setFillStyle('#FFFFFF').setAlpha(0.5).setInteractive();

	}
	// add block is true or false:
	storevalues(data) {
		this.data = data;

		this.tru.setInteractive();
		this.click();

		this.fls.setInteractive();
		this.fls.on('pointerdown', function () {
			this.tru.visible = false;
			this.fls.visible = false;
			this.data.visible = false;

			this.isMovable = true;
			this.isMovable2 = true;


		}, this);


	}
	click() {

	}
	//player2-x cheng position:
	updatepl2x() {
		this.player2.x = 1500 / 6 / 2 + (this.ply_x_2 - 1) * 400 / 6;
		this.player2.y = 1500 / 6 / 2 + (this.ply_2_y) * 400 / 6;
		this.ply_x_2--;


	}
	//player2-y cheng position:
	updatepl2y() {
		this.player2.x = 1500 / 6 / 2 + this.ply_x_2 * 400 / 6;
		this.player2.y = 1500 / 6 / 2 + (this.ply_2_y - 1) * 400 / 6;
		this.ply_2_y--;
	}
	updatepl2xx() {
		this.player2.x = 1500 / 6 / 2 + (this.ply_x_2 + 1) * 400 / 6;
		this.player2.y = 1500 / 6 / 2 + (this.ply_2_y) * 400 / 6;
		this.ply_x_2++;
	}
	// update wells
	updatescore() {


		//console.log(this.walls_final);
		this.walls_final = this.walls_final - 1;
		this.walls.text = "Walls:" + this.walls_final;
		if (this.walls_final == 0) {
			this.wall = false;
		}






	}






}




/* END-USER-CODE */


/* END OF COMPILED CODE */

	// You can write more code he	