/*Receiver class:
 * Parameters are based on cellSize.
 * x and y are positioned at the the center of the receiver.
 * color determines the color of the platform, which links it to platforms and receivers of the same color.
 * on determines whether the linked platforms and receivers will turn on.
 */
function Receiver(x, y, color, on, type) {
	this.x = x * cellSize + cellSize / 2;
	this.y = y * cellSize + cellSize / 2;
	this.color = color;
	this.on = on;
	this.type = type;
	this.frame = 0;
	//this.duration = duration;
	//this.timer = 0;
	//this.force = force;
	//this.standingOn = standingOn;

	this.turn = function() {
		/*
		 //makeshift multiple receiver implementation
		 for (var k = 0; k < receivers.length; ++k) {
		 if (receivers[k].color == this.color) {
		 if (this.on) {
		 this.on = false;
		 } else {
		 this.on = true;
		 }
		 }
		 }
		 */

		//if (this.type != "binary") {
			
			
			
			
			if (this.on) {
				this.deactivate();
				this.activate();
			} else {
				this.activate();
			}
		}
			
	this.turnOnOff = function() {
		if (this.type != "force") {
			if (this.on){
				this.on = false;
			} else {
				this.on = true;
				snd_receiver_on.play();
			}
			}
			
			for (var i = 0; i < platforms.length; ++i) {
				if (!platforms[i].on || platforms[i].binary) {
					if (this.color == platforms[i].color) {
						platforms[i].on = true;
						//this.on = false;
					}
				} else {
					if (this.color == platforms[i].color) {
						if (!platforms[i].binary)
							platforms[i].on = false;
							//this.on = true;
					}
				}
			}
			for (var i = 0; i < hazards.length; ++i) {
				if (hazards[i].deadly) {
					if (this.color == hazards[i].color) {
						hazards[i].deadly = false;
						//this.on = false;
					}
				} else {
					if (this.color == hazards[i].color) {
							hazards[i].deadly = true;
							//this.on = true;
					}
				}
				}
	}
			
	this.deactivate = function() {
		for (var i = 0; i < platforms.length; ++i) {
			if (this.color == platforms[i].color) {
				if (!platforms[i].binary)
					platforms[i].on = false;
							//this.on = true;
				}
			}
			


		/*} else if (this.type == "binary") {
			//if (this.on == false) this.on = true;
			this.on = true;
			for (var j = 0; j < platforms.length; ++j) {
				if (this.on && (this.color == platforms[j].color)) {
					while (!platforms[j].atLimit) {
						platforms[j].on = true
						//this.on = false;
					}
					platforms[j].on = false;
					
				}
			}
			this.on = false;
		} */

	}
	this.update = function(){
		for (var i = 0; i < platforms.length; ++i) {
				if (this.on) {
					if (this.color == platforms[i].color) {
						//if(!platforms[i].binary){
							platforms[i].on = true;
						//this.on = false;
						//}
					}
				} else {
					if (this.color == platforms[i].color) {
						if (!platforms[i].binary)
							platforms[i].on = false;
							//this.on = true;
					}
				}
			}
			
	}

	this.draw = function() {
		++this.frame;
    	this.frame %= receiver_on.length;
    	if(this.on){
    		ctx.fillStyle = this.color;
		} else {
			ctx.fillStyle = "dark" + this.color;
		}
		ctx.fillRect(this.x  - cellSize / 2, this.y  - cellSize / 2, cellSize, cellSize);
		
    	var dist = distance(this.x, this.y, signal.x, signal.y);
		if (dist < signal.radius || this.type == "force") {
			ctx.drawImage(receiver_on[this.frame], this.x - cellSize / 2, this.y - cellSize / 2);
			//if (this.type == "force") this.on = true;
		} else {
			ctx.drawImage(receiver, this.x - cellSize / 2, this.y - cellSize / 2);
			//if (this.type == "force") this.on = false;
		}
        
		/*var dist = distance(this.x, this.y, signal.x, signal.y);
		if (dist < signal.radius) {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - 8, this.y - 2, 18, 10);
			ctx.drawImage(receiver_on, this.x - cellSize / 2, this.y - cellSize / 2);
			if (this.type == "force") this.on = true;
		} else {
			ctx.fillStyle = "dark" + this.color;
			ctx.fillRect(this.x - 8, this.y - 2, 18, 10);
			ctx.drawImage(receiver, this.x - cellSize / 2, this.y - cellSize / 2);
			if (this.type == "force") this.on = false;
		}*/
		
	}
}