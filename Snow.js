function Snow(numParticles){
	this.particleArray = [];
	this.numParticles = numParticles;
    
    this.init = function(){
    	this.particleArray = [];
    	for(var i = 0; i < this.numParticles; ++i) {
        	this.particleArray.push(new Particle(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()+1, new Speed(Math.random()*2-1, Math.random()+1, Math.random()*30+30, 0, false), 10));
    	}
    }
    
    this.update_and_draw = function() {
    
    for(var i = 0; i < this.particleArray.length; ++i) {
        
        var currPart = this.particleArray[i];
        
        if(currPart.y > canvas.height) {
            currPart.y = 0 - (currPart.y - canvas.height);
            currPart.x = Math.random()*canvas.width;
        }else if(currPart.y < 0) {
            currPart.y = canvas.height - currPart.y;
        }
        if(currPart.x > canvas.width) {
            currPart.x = 0 - (currPart.x - canvas.width);
        } else if(currPart.x < 0) {
            currPart.x = canvas.width - currPart.x;
        }
        
        ctx.fillStyle = "white";
        ctx.beginPath();
            ctx.arc(currPart.x, currPart.y, currPart.radius, Math.PI*2, false);
            ctx.fill(); 
        
        if(currPart.speed.incr < currPart.speed.changeTime)
            currPart.speed.incr++;
        else {
            currPart.speed.incr = 0;
            if(currPart.speed.neg)
                currPart.speed.neg = false;
            else currPart.speed.neg = true;
        }
        
        if(currPart.speed.neg)
            currPart.x -= currPart.speed.x;
        else currPart.x += currPart.speed.x;
        currPart.y += currPart.speed.y;
            
        
    }
    
    
    
}
}

function Dust(numParticles, color){
	this.particleArray = [];
	this.numParticles = numParticles;
	this.color = color;
    
    this.init = function(){
    	this.particleArray = [];
    	for(var i = 0; i < this.numParticles; ++i) {
        	this.particleArray.push(new Particle(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*100 + 20, new Speed(Math.random()-.5, Math.random()-.5, Math.random()*30+30, 0, false), Math.random()*10+100, .05));
    	}
    }
    
    this.update_and_draw = function() {
    
    for(var i = 0; i < this.particleArray.length; ++i) {
        
        var currPart = this.particleArray[i];
        
        if(currPart.y > canvas.height + currPart.radius) {
            currPart.y = 0 - (currPart.y - canvas.height);
        } else if(currPart.y < 0  - currPart.radius) {
            currPart.y = 0 - (canvas.height - currPart.y);
        }
        if(currPart.x > canvas.width + currPart.radius) {
            currPart.x = 0 - (currPart.x - canvas.width);
        } else if(currPart.x < 0  - currPart.radius) {
            currPart.x = canvas.width - currPart.x;
        }
        
        currPart.x += currPart.speed.x;
        currPart.y += currPart.speed.y;
        
        ctx.fillStyle = this.color;
        if (currPart.time < currPart.lifetime/2){
        	currPart.alpha += .00005;
        }else{
        	currPart.alpha -= .00005;
        }
        ctx.globalAlpha = currPart.alpha;
        ctx.beginPath();
            ctx.arc(currPart.x, currPart.y, currPart.radius, Math.PI*2, false);
            ctx.fill(); 
            
        
        if (++currPart.time > currPart.lifetime){
        	currPart.time = 0;
        }
        
    }
    
    
    
}
}

function Particle(x, y, radius, speed, lifetime, alpha) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.lifetime = lifetime;
    this.time = 0;
    this.alpha = alpha;
}

function Speed(x, y, changeTime, incr, neg) {
    this.x = x;
    this.y = y;
    this.changeTime = changeTime;
    this.incr = incr;
    this.neg = neg;
}

