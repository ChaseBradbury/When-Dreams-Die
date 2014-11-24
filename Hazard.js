/*Hazard class:
 * All parameters passed in are based on cellSize, very similar to platform
 * x and y define what grid cell the ground's top left coordinate is.
 * numBrick is the size of the ground in units of cellSize.
 */
function Hazard(x, y, numBricks, color, vertical) {

	//Initialize all parameters
	
	this.vertical = vertical;
	
	this.numBricks = numBricks;
	this.color = color;

	this.size = numBricks * cellSize;
	this.on = true;
	
	this.frame = 0;
	
	this.deadly = true;

	if (this.vertical){
		this.x = x * cellSize;
		this.y = y * cellSize;
		this.bottom = this.y + this.size;
		this.right = this.x + cellSize;
	}else{
		this.x = x * cellSize;
		this.y = y * cellSize;
		this.bottom = this.y + cellSize;
		this.right = this.x + this.size;
	}


	this.fSpeedX = function() {
		return 0;
	}
	this.fSpeedY = function() {
		return 0;
	}

	this.activate = function() {
		if (this.on) {
			this.on = false;
		} else {
			this.on = true;
		}

	}
	//Update function for the ground
	this.update = function () {
		for (var i = 0; i < receivers.length; ++i) {
				if (receivers[i].on && receivers[i].type == "force") {
					if (this.color == receivers[i].color) {
							this.deadly = true;
					}
				} else {
				}
			}
	}
	this.draw = function () {
    	++this.frame;
    	this.frame %= 4;
    	var f = this.frame;
    	if (this.color == "none"){
    		ctx.fillStyle = "black";
    	}else if (this.deadly){
    		ctx.fillStyle = this.color;
    	} else{
    		ctx.fillStyle = "dark" + this.color;
    	}
    	ctx.fillRect(this.x + 5, this.y + 5, 15, 15);
        //Fill in each cell of the ground
        if (!this.vertical){
        	if (this.deadly){
            ctx.drawImage(hazard_horizontal_left[f], this.x, this.y);
           }else{
           	ctx.drawImage(hazard_left_off, this.x, this.y);
           }
       	}else{
       		if (this.deadly){
            ctx.drawImage(hazard_vertical_top[f], this.x, this.y);
            }else{
           	ctx.drawImage(hazard_top_off, this.x, this.y);
           }
        }
        for (var i = 1; i < this.numBricks - 1; ++i) {
        	if (this.deadly){
            	f += 2;
    			f %= 4;
    			if (!this.vertical){
            		ctx.drawImage(hazard_horizontal[f], this.x + (i * cellSize), this.y);
            	}else{
            		ctx.drawImage(hazard_vertical[f], this.x, this.y + (i * cellSize));
            	}
           }
        }
        f += 2;
    	f %= 4;
        if (!this.vertical){
        	ctx.fillRect(this.x + (i * cellSize) + 5, this.y + 5, 15, 15);
        	if (this.deadly){
            ctx.drawImage(hazard_horizontal_right[f], this.x + (i * cellSize), this.y);
            }else{
           	ctx.drawImage(hazard_right_off, this.x + (i * cellSize), this.y);
           }
       	}else{
       		ctx.fillRect(this.x + 5, this.y + (i * cellSize) + 5, 15, 15);
       		if (this.deadly){
            ctx.drawImage(hazard_vertical_bottom[f], this.x, this.y + (i * cellSize));
            }else{
           	ctx.drawImage(hazard_bottom_off, this.x, this.y + (i * cellSize));
           }
        }
    }
}