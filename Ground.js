/*Ground class:
 * All parameters passed in are based on cellSize, very similar to platform
 * x and y define what grid cell the ground's top left coordinate is.
 * numBrick is the size of the ground in units of cellSize.
 */
function Ground(x, y, numBricks, numBricksY) {

    //Initialize all parameters
    this.x = x * cellSize;
    this.y = y * cellSize;
    this.numBricks = numBricks;
    this.numBricksY = numBricksY;
    
    this.size = numBricks * cellSize;
    this.on = false;
    
    this.bottom = this.y + this.numBricksY * cellSize - 20;
    this.right = this.x + this.size;
    this.frame = 0;

	this.fSpeedX = function(){
		return 0;
	}
	this.fSpeedY = function(){
		return 0;
	}
	
	this.drawGrass = function(){
		for (var i = 0; i < this.numBricks; ++i) {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(grass, this.x + (i * cellSize), this.y - cellSize);
		}
	}

    //Update function for the ground
	this.draw = function(){ 
        //Fill in each cell of the ground
        if(series == 0){
        	if (numBricks == 1){
        		if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
        	ctx.drawImage(snow_top, this.x, this.y);
        }else{
        	if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
        	ctx.drawImage(snow_topleft, this.x, this.y);
        }
        for (var j = 1; j < this.numBricksY; ++j) {
        	if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
        	ctx.drawImage(snow_middle, this.x, this.y + (j * cellSize));
        }
		for (var i = 1; i < this.numBricks; ++i) {
			if (this.numBricks - 1 <= i) {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(snow_topright, this.x + (i * cellSize), this.y);
			} else {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(snow_topmiddle, this.x + (i * cellSize), this.y);
			}
			
			//Fill the cells below the top
            for (var j = 1; j < this.numBricksY; ++j) {
            	if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
            	ctx.drawImage(snow_middle, this.x + (i * cellSize), this.y + (j * cellSize));
            }
        }
        }else if (series == 3){
        	if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
        	ctx.drawImage(building_topleft, this.x, this.y);
        for (var j = 1; j < this.numBricksY; ++j) {
        	if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
        		ctx.drawImage(building_left, this.x, this.y + (j * cellSize));
        }
		for (var i = 1; i < this.numBricks; ++i) {
			if (this.numBricks - 1 <= i) {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(building_topright, this.x + (i * cellSize), this.y);
			} else {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(building_top, this.x + (i * cellSize), this.y);
			}
			
			//Fill the cells below the top
            for (var j = 1; j < this.numBricksY; ++j) {
					if (this.numBricks - 1 <= i) {
						if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
						ctx.drawImage(building_right, this.x + (i * cellSize), this.y + (j * cellSize));
					} else {
						if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
						ctx.drawImage(building_middle, this.x + (i * cellSize), this.y + (j * cellSize));
					}
            }
        }
        }else if(series == 2){
        	if (numBricks == 1){
        		if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
        	ctx.drawImage(dirt_top, this.x, this.y);
        }else{
        	if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
        	ctx.drawImage(dirt_top, this.x, this.y);
        }
        for (var j = 1; j < this.numBricksY; ++j) {
        	if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
        	ctx.drawImage(dirt_middle, this.x, this.y + (j * cellSize));
        }
		for (var i = 1; i < this.numBricks; ++i) {
			if (this.numBricks - 1 <= i) {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(dirt_top, this.x + (i * cellSize), this.y);
			} else {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(dirt_top, this.x + (i * cellSize), this.y);
			}
			
			//Fill the cells below the top
            for (var j = 1; j < this.numBricksY; ++j) {
            	if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
            	ctx.drawImage(dirt_middle, this.x + (i * cellSize), this.y + (j * cellSize));
            }
        }
        }else{
        ctx.drawImage(ground_topleft, this.x, this.y);
        for (var j = 1; j < this.numBricksY; ++j) {
        	if (this.numBricksY - 1 <= j) {
        		if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y < canvas.height + cellSize)
        		ctx.drawImage(ground_bottom, this.x, this.y + (j * cellSize));
        	}else{
        		if (this.x > 0 - cellSize && this.x < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
        		ctx.drawImage(ground_left, this.x, this.y + (j * cellSize));
        	}
        }
		for (var i = 1; i < this.numBricks; ++i) {
			if (this.numBricks - 1 <= i) {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(ground_topright, this.x + (i * cellSize), this.y);
			} else {
				if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y > 0 - cellSize && this.y < canvas.height + cellSize)
				ctx.drawImage(ground_top, this.x + (i * cellSize), this.y);
			}
			
			//Fill the cells below the top
            for (var j = 1; j < this.numBricksY; ++j) {
            	if (this.numBricksY - 1 <= j) {
            		if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
        			ctx.drawImage(ground_bottom, this.x + (i * cellSize), this.y + (j * cellSize));
        		}else{
					if (this.numBricks - 1 <= i) {
						if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
						ctx.drawImage(ground_right, this.x + (i * cellSize), this.y + (j * cellSize));
					} else {
						if (this.x + i * cellSize > 0 - cellSize && this.x + i * cellSize < canvas.width + cellSize && this.y + j * cellSize > 0 - cellSize && this.y + j * cellSize < canvas.height + cellSize)
						ctx.drawImage(ground_middle, this.x + (i * cellSize), this.y + (j * cellSize));
					}
				}
            }
        }
    }
   }
}