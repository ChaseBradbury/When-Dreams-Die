function Checkpoint(x, y, height, startX, startY){
    this.x = x * cellSize;
    this.y = y * cellSize - height * cellSize;
    this.right = this.x + cellSize;
    this.bottom = y * cellSize;
    this.startX = this.x - cellSize;
    this.startY = this.bottom - cellSize * 5;
    this.save = true;
    this.on = false;
    this.frame = 0;
    
    this.fSpeedX = function(){
		return 0;
	}
	this.fSpeedY = function(){
		return 0;
	}
    
    this.draw = function(){
        if(this.on){
            ctx.drawImage(checkpoint[this.frame], this.x - cellSize*2, this.bottom - cellSize * 4);
            if(this.frame < 15){
                ++this.frame;
            }
        }else{
            ctx.drawImage(checkpoint_off, this.x - cellSize*2, this.bottom - cellSize * 4);
        }
    }
}