/*Signal class:
 * All parameters are based on pixels. Player must be created before signal.
 * x and y are positioned at the player's center offset by x and y.
 * radius is the range of the signal from the x,y coordinate
 * on determines whether the signal can affect other objects.
 * inRange is a boolean says whether or not a receiver is in range, affecting the sprite.
 */
function Signal(x, y, radius) {
	this.x = player.x + player.width / 2 + x;
	this.y = player.y + (player.height) / 2 + y;
	this.radius = radius;
	this.on = false;
	this.inRange = false;
	this.frame = 0;
	var timeoutID;
	var yellowOn = false;

	this.turnOn = function() {
		this.on = true;
		for (var i = 0; i < receivers.length; ++i) {
			var dist = distance(this.x, this.y, receivers[i].x, receivers[i].y);
			if (dist < this.radius) {
				if (receivers[i].type=="normal") {
					receivers[i].turnOnOff();
					/*if(receivers[i].on){
						receivers[i].on = false;
					}else{
						receivers[i].on = true;
					}*/
				}
				
			}
			
		}
	}

	this.update = function() {
		this.inRange = false;
		this.x = player.x + player.width / 2;
		this.y = player.y + (player.height) / 2;

		for (var i = 0; i < receivers.length; ++i) {
			var dist = distance(this.x, this.y, receivers[i].x, receivers[i].y);
			if (dist < this.radius) {
				this.inRange = true;
				if (receivers[i].type == "force") receivers[i].on = true;
			} else{
				if (receivers[i].type == "force") receivers[i].on = false;
			}
			/*if (dist < this.radius) {
				this.inRange = true;
				
				if (receivers[i].type == "force" && !receivers[i].on){
					receivers[i].on = true;
					receivers[i].turnOnOff();
				}
			}else{
				if (receivers[i].type == "force" && receivers[i].on){
					receivers[i].on = false;
					receivers[i].turnOnOff();
				}
			}*/

		}
		
	}
	this.draw = function(){

		if (this.inRange) {
			//ctx.globalAlpha = 0.1;
			ctx.fillStyle = "red";
			snd_signal_on.play();
		} else {
			//ctx.globalAlpha = 0.0;
			ctx.fillStyle = "white";
			snd_signal_on.pause();
			snd_signal_on.currentTime = 0;
		}

		if (this.on) {
			//ctx.fillStyle = "red";
			ctx.globalAlpha = 0.15;
		} else {
			//ctx.fillStyle = "white";
			ctx.globalAlpha = 0.1;
		}
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
		ctx.fill();

		ctx.globalAlpha = .4;
		
		
		++this.frame;
    	this.frame %= signal_sprite.length;
    	ctx.drawImage(signal_sprite[this.frame], this.x - this.radius, this.y - this.radius);
    	
    	ctx.globalAlpha = 1;
		
	}
}