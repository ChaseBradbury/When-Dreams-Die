/*Platform class:
 * All parameters passed in are based on cellSize, which defines the size of each grid cell that the platform moves on.
 * x and y define what grid cell the platform's top left coordinate is.
 * numBrick is the size of the platform in units of cellSize.
 * color determines the color of the platform, which links it to receivers of the same color.
 * on determines whether the platform is initially moving.
 * speedX is how fast the platform is moving.
 * negLim and posLim are the limits of the platform's movement range.
 */
function Platform(x, y, numBricks, color, binary, speed, negLim, posLim, vertical) {

	//Initialize all parameters
	this.x = x * cellSize;
	this.y = y * cellSize;
	this.numBricks = numBricks;
	this.color = color;
	this.negLim = negLim * cellSize;
	this.posLim = posLim * cellSize;
	this.speed = speed;
	this.on = false;
	this.binary = binary;
	this.vertical = vertical;

	//Set size of platform based on number of bricks
	this.size = this.numBricks * cellSize;
	this.bottom = this.y + cellSize / 2;
	this.right = this.x + this.size;

	this.fSpeedX = function() {
		if (this.on && !this.vertical) {
			return this.speed;
		}
		return 0;
	}
	this.fSpeedY = function() {
		if (this.on && this.vertical) {
			return this.speed;
		}
		return 0;
	}
	//Update function for the platform
	this.update = function() {
		if (this.on) {

			//Change direction when platform is at negative limit
			if ((this.x + this.speed < this.negLim && !this.vertical) || (this.y + this.speed < this.negLim) && this.vertical) {
				snd_platform_limit.play();
				if (!this.vertical) {
					this.speed = -this.speed;
					this.x = this.negLim;
					this.right = this.negLim + this.size;
				} else {
					this.speed = -this.speed;
					this.y = this.negLim;
					this.bottom = this.negLim + cellSize;
				}
				if (this.binary) {
					this.on = false;
					for (var i = 0; i < receivers.length; ++i) {
						if (receivers[i].color == this.color) {
							receivers[i].on = false;
						}
					}
				}
			}
			//Change direction when platform is size away from positive limit
			else if ((this.x + this.speed > this.posLim - this.size && !this.vertical) || (this.y + this.speed > this.posLim - cellSize && this.vertical)) {
				snd_platform_limit.play();
				if (!this.vertical) {
					this.speed = -this.speed;
					this.x = this.posLim - this.size;
					this.right = this.posLim;
				} else {
					this.speed = -this.speed;
					this.y = this.posLim - cellSize;
					this.bottom = this.posLim;
				}
				if (this.binary) {
					this.on = false;
					for (var i = 0; i < receivers.length; ++i) {
						if (receivers[i].color == this.color) {
							receivers[i].on = false;
						}
					}
				}
			}

			//Update position of platform
			if (!this.vertical) {
				this.x += this.speed;
				this.right += this.speed;
			} else {
				this.y += this.speed;
				this.bottom += this.speed;
			}
		}
	}
	this.draw = function(){ 
		
		

		//Draw color of platform
		if (this.binary) {
			if (this.speed >= 0 || !this.on) {
				ctx.fillStyle = "dark" + this.color;
			} else {
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x + 1, this.y + 1, cellSize * this.numBricks / 2, 8);
			if (this.speed <= 0 || !this.on) {
				ctx.fillStyle = "dark" + this.color;
			} else {
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x + cellSize * this.numBricks / 2, this.y + 1, cellSize * this.numBricks / 2 - 2, 8);
		} else {
			if (this.on) {
				ctx.fillStyle = this.color;
			} else {
				ctx.fillStyle = "dark" + this.color;
			}
			ctx.fillRect(this.x + 1, this.y + 1, cellSize * this.numBricks - 2, 8);
		}
		//Fill in each cell of the platform
		if (this.binary) {
			if (series == 0){
				if (this.on && this.speed < 0) {
				ctx.drawImage(platform_left_snow_on, this.x, this.y);
			} else {
				ctx.drawImage(platform_left_snow, this.x, this.y);
			}
			for (var i = 1; i < this.numBricks; ++i) {
				if (this.numBricks - 1 <= i) {
					if (this.on && this.speed > 0) {
						ctx.drawImage(platform_right_snow_on, this.x + (i * cellSize), this.y);
					} else {
						ctx.drawImage(platform_right_snow, this.x + (i * cellSize), this.y);
					}
				} else {
					ctx.drawImage(platform_middle_snow, this.x + (i * cellSize), this.y);
				}
			}
			}else{
			if (this.on && this.speed < 0) {
				ctx.drawImage(platform_left_on, this.x, this.y);
			} else {
				ctx.drawImage(platform_left, this.x, this.y);
			}
			for (var i = 1; i < this.numBricks; ++i) {
				if (this.numBricks - 1 <= i) {
					if (this.on && this.speed > 0) {
						ctx.drawImage(platform_right_on, this.x + (i * cellSize), this.y);
					} else {
						ctx.drawImage(platform_right, this.x + (i * cellSize), this.y);
					}
				} else {
					ctx.drawImage(platform_middle, this.x + (i * cellSize), this.y);
				}
			}
			}
		} else {
			if (this.on) {
				ctx.drawImage(platform2_left_on, this.x, this.y);
				for (var i = 1; i < this.numBricks; ++i) {
					if (this.numBricks - 1 <= i) {
						ctx.drawImage(platform2_right_on, this.x + (i * cellSize), this.y);
					} else {
						ctx.drawImage(platform2_middle_on, this.x + (i * cellSize), this.y);
					}
				}
			} else {
				ctx.drawImage(platform2_left, this.x, this.y);
				for (var i = 1; i < this.numBricks; ++i) {
					if (this.numBricks - 1 <= i) {
						ctx.drawImage(platform2_right, this.x + (i * cellSize), this.y);
					} else {
						ctx.drawImage(platform2_middle, this.x + (i * cellSize), this.y);
					}
				}
			}
		}
	}
}