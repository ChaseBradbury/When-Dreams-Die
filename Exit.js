function Exit(x, y){
	this.x = x * cellSize;
	this.y = y * cellSize;
	this.right = this.x + 75;
	this.bottom = this.y + cellSize;
	
	this.frame = 0;
	
	this.fSpeedX = function(){
		return 0;
	}
	this.fSpeedY = function(){
		return 0;
	}
	
	this.draw = function(){
		ctx.drawImage(exit_sprite[this.frame], this.x, this.y);
		++this.frame;
		this.frame %= exit_sprite.length;
	}
}
