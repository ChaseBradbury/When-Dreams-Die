function Decoration(x, y, rate, sprite, loop){
	this.x = x * cellSize;
	this.y = y * cellSize;
	this.sprite = sprite;
	this.rate = rate;
	this.loop = loop;
	this.draw = function(){
		ctx.drawImage(this.sprite, this.x, this.y);
	}
}