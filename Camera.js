function Camera(left, top, right, bottom, leftLim, topLim, rightLim, bottomLim) {
	this.left = left;
	this.top = top;
	this.right = right;
	this.bottom = bottom;

	this.x = (left + right) / 2;
	this.y = (top + bottom) / 2;
	//this.width = right;
	//this.bottom = bottom;
	this.leftLim = leftLim;
	this.topLim = topLim;
	this.rightLim = rightLim;
	this.bottomLim = bottomLim;

	this.update = function(pX, pY) {
		this.deltaX = this.x - pX;
		this.deltaY = this.y - pY;
		this.leftLim += this.deltaX;
		this.topLim += this.deltaY;
		this.rightLim += this.deltaX;
		this.bottomLim += this.deltaY;
		//this.x -= this.deltaX;
		//this.y -= this.deltaY;

		//if (this.left >= this.leftLim && this.right <= this.rightLim){

		player.x = this.x;
		player.right = this.x + player.width;

		//Iterate over platform array and call their updates
		for (var i = 0; i < receivers.length; ++i) {
			receivers[i].x += this.deltaX;
			receivers[i].right += this.deltaX;
		}

		//Iterate over platform array and call their updates
		for (var i = 0; i < platforms.length; ++i) {
			platforms[i].x += this.deltaX;
			platforms[i].right += this.deltaX;
			if (!platforms[i].vertical) {
				platforms[i].negLim += this.deltaX;
				platforms[i].posLim += this.deltaX;
			} else {
				platforms[i].negLim += this.deltaY;
				platforms[i].posLim += this.deltaY;
			}
		}

		//Iterate over ground array and call their updates
		for (var i = 0; i < ground.length; ++i) {
			ground[i].x += this.deltaX;
			ground[i].right += this.deltaX;
		}

		//Iterate over ground array and call their updates
		for (var i = 0; i < hazards.length; ++i) {
			hazards[i].x += this.deltaX;
			hazards[i].right += this.deltaX;
		}

		//}

		//if (this.top >= this.topLim && this.bottom <= this.bottomLim){
		player.y = this.y;
		player.bottom = this.y + player.height;

		//Iterate over platform array and call their updates
		for (var i = 0; i < receivers.length; ++i) {
			receivers[i].y += this.deltaY;
			receivers[i].bottom += this.deltaY;
		}

		//Iterate over platform array and call their updates
		for (var i = 0; i < platforms.length; ++i) {
			platforms[i].y += this.deltaY;
			platforms[i].bottom += this.deltaY;
		}

		//Iterate over ground array and call their updates
		for (var i = 0; i < ground.length; ++i) {
			ground[i].y += this.deltaY;
			ground[i].bottom += this.deltaY;
		}

		//Iterate over ground array and call their updates
		for (var i = 0; i < hazards.length; ++i) {
			hazards[i].y += this.deltaY;
			hazards[i].bottom += this.deltaY;
		}

		for (var i = 0; i < foregrounds.length; ++i) {
			foregrounds[i].x += this.deltaX * foregrounds[i].rate;
			foregrounds[i].y += this.deltaY * foregrounds[i].rate;
		}

		for (var i = 0; i < backgrounds.length; ++i) {
			backgrounds[i].x += this.deltaX * backgrounds[i].rate;
			backgrounds[i].y += this.deltaY * backgrounds[i].rate;
		}
        
        for (var i = 0; i < checkpoints.length; ++i) {
			checkpoints[i].x += this.deltaX;
			checkpoints[i].y += this.deltaY;
            checkpoints[i].right += this.deltaX;
			checkpoints[i].bottom += this.deltaY;
            //checkpoints[i].startX += this.deltaX;
			//checkpoints[i].startY += this.deltaY;
		}
		
		for(var i = 0; i < snow.particleArray.length; ++i) {
        	snow.particleArray[i].x += this.deltaX;
        	snow.particleArray[i].y += this.deltaY;
    	}
    	for(var i = 0; i < stage_dust.particleArray.length; ++i) {
        	stage_dust.particleArray[i].x += this.deltaX;
        	stage_dust.particleArray[i].y += this.deltaY;
    	}
    	for(var i = 0; i < forest_dust.particleArray.length; ++i) {
        	forest_dust.particleArray[i].x += this.deltaX;
        	forest_dust.particleArray[i].y += this.deltaY;
    	}
    	for(var i = 0; i < city_dust.particleArray.length; ++i) {
        	city_dust.particleArray[i].x += this.deltaX;
        	city_dust.particleArray[i].y += this.deltaY;
    	}

		exit.x += this.deltaX;
		exit.right += this.deltaX;
		exit.y += this.deltaY;
		exit.bottom += this.deltaY;

		//}
	}
}
