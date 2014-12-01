/*** PLAYER CLASS ***

 Player class: Character controller for player character. Handles collision, character update, and display of character sprite.
 * All parameters passed in are based on cellSize, the height should be between 1 and 2 in most cases.
 
 Members
 * startX and startY define where in pixels the player's top left coordinate initially is. This is per level and checkpoint and determines where the player will restart. Note: converted into pixels from startX and startY parameters, which are based on grid placement.
 * width and height define the size in pixels of the player in units of cellSize. Note: height converted into pixels from height parameter, which is based on grid cell size.
 * x and y define where in pixels the player's top left coordinate is on each update. Used to display sprite and in collision as the left and top coordinates respectively.
 * bottom and right define where in pixels the bottom and right collision coordinates are with respect to the x and y coordinates.
 * speedX is how fast the player is moving horizontally. Affected by the right and left arrow keys.
 * speedY is how fast the player is moving vertically. Affected by the up arrow, collision, and gravity.
 * platformSpeed is taken from the horizontal speed of the platform on which the character is standing.
 * onGround is a boolean flag that determines if player is affected by gravity. Triggered by a collision from below.
 * hitLeft, hitRight, and hitUp are boolean flags triggered by a collision from the left, right, or above, respectively.
 * dead is a boolean flag that is triggered when the character collides with a deadly object, or has two opposite direction hits flagged.
 * turnRight flags whether the character is looking right. Helps draw character facing the correct direction, independent of movement speed.
 * movingLeft and movingRight are boolean flags that are triggered when the player pressed the left or right arrow keys, respectively. Checking these helps ensure that if both are held down the character does not move.
 * frame is the index of the character's frame animation. Updated every draw call.
 
 Functions
 * collides(object): Takes another object and checks whether its coordinates overlap with the player. Sets a hit flag for each side that is hit, if not already flagged.
 * update: To be called after all collision checks have been completed. Updates the character position and state based on hit flags.
 * draw: To be called after update. Draws the character sprite to the screen.
 */

function Player(startX, startY, height) {
    
    // Starting location
    this.startX = startX * cellSize;
    this.startY = startY * cellSize;
    
    // Size
    this.width = 25;
    this.height = height * cellSize;
    
    // Current position and collision boundaries
    this.x = this.startX;
    this.y = this.startY;
    this.bottom = this.y + this.height;
    this.right = this.x + this.width;
    
    // Current speed
    this.speedX = 0;
    this.speedY = 0;
    this.platformSpeed = 0;
    
    // Hit flags
    this.onGround = false;
    this.hitRight = false;
    this.hitLeft = false;
    this.hitTop = false;
    
    // Other flags
    this.dead = false;
    this.turnRight = true;
    this.movingLeft = true;
    this.movingRight = true;
    
    // Current frame
    this.frame = 0;
    
    

	//Collision detection
	this.collides = function(obj2){
		
		var collided = false;
		//Check bottom
        if (((this.bottom - obj2.bottom) <= (this.speedY - obj2.fSpeedY())) && this.x < obj2.right && this.right > obj2.x && this.bottom >= (obj2.y - (this.speedY + obj2.fSpeedY()))) {
            if (!obj2.save){
           		/*if (obj2.vertical){
           			this.speedY = obj2.fSpeedY();
           			this.bottom = obj2.y + obj2.fSpeedY();
                	this.y = obj2.y + obj2.fSpeedY() - this.height;
           		} else{*/
                this.speedY = 0;
           			//if ((obj2.bottom > obj2.negLim && obj2.vertical && obj2.y < obj2.posLim)){
                if(!obj2.deadly){
                    this.bottom = obj2.y;
                    this.y = obj2.y - this.height;
                }
                //}
           		//}
           		if (!this.onGround){
           			if (series == 0 || series == 2){
                        snd_player_land_snow.currentTime = 0;
                        snd_player_land_snow.play();
           			}else{
                        snd_player_land.currentTime = 0;
                        snd_player_land.play();
           			}
           		}
                
                if((obj2.x > obj2.negLim && !obj2.vertical && obj2.x < obj2.posLim)){
                	this.platformSpeed = obj2.fSpeedX();
                }else{
                	this.platformSpeed = 0;
                }
                if (obj2.deadly) this.dead = true;
                //if (obj2 == exit) transition = true;
                collided = true;
            } else{
                this.startX = obj2.startX;
                this.startY = obj2.startY;
            }
        }
        //Check left
        if (((obj2.right - this.x) <= (obj2.fSpeedX() - this.speedX - this.platformSpeed)) && this.y < obj2.bottom && this.bottom > obj2.y && this.x <= (obj2.right + (obj2.fSpeedX() - this.speedX))){
        	if (!obj2.save){
                this.speedX = 0;
                this.x = obj2.right;
                this.right = this.x + this.width;
                if (obj2.deadly) this.dead = true;
                this.hitLeft = true;
            } else{
                this.startX = obj2.startX;
                this.startY = obj2.startY;
                //for(var i = 0; i < checkpoints.length; ++i){
                //    checkpoints[i].on = false;
                //}
                obj2.on = true;
            }

        }
        //Check right
        if (((this.right - obj2.x) <= (this.speedX + this.platformSpeed - obj2.fSpeedX())) && this.y < obj2.bottom && this.bottom > obj2.y && this.right >= (obj2.x - (this.speedX - obj2.fSpeedX()))){
        	if (!obj2.save){
                this.speedX = 0;
                this.right = obj2.x;
                this.x = this.right - this.width;
                
                if (obj2.deadly) this.dead = true;
                this.hitRight = true;
            } else{
                this.startX = obj2.startX;
                this.startY = obj2.startY;
                //for(var i = 0; i < checkpoints.length; ++i){
                //    checkpoints[i].on = false;
                //}
                obj2.on = true;
            }

            
        }
        //Check top
        if (((obj2.bottom - this.y) <= (obj2.fSpeedY() - this.speedY)) && this.x < obj2.right && this.right > obj2.x && this.y <= obj2.bottom) {
            if (!obj2.save){
                this.speedY = obj2.fSpeedY();
                this.y = obj2.bottom;
                this.bottom = obj2.bottom + this.height;
                if (obj2.deadly) this.dead = true;
                this.hitTop = true;
            } else{
                this.startX = obj2.startX;
                this.startY = obj2.startY;
            }

        }
	    return collided;
	}

    this.update = function () {
    	
    	if((this.hitRight && this.hitLeft) || (this.hitTop && this.onGround)){
    		//this.onGround = false;
    		//this.speedY = -11;
    		this.dead = true;
    	}
    	
    	if(this.dead){
    		restart = true;
    		this.speedX = 0;
    		this.speedY = 0;
    		//this.x = camera.leftLim + this.startX;
    		//this.y = camera.topLim + this.startY;
    	}

        
        if (this.onGround) {
            this.speedY = 0;
            //if ((!this.hitRight || this.platformSpeed < 0) && (!this.hitLeft || this.platformSpeed > 0)){
            if(!(this.hitLeft || this.hitRight)){
            this.x += this.platformSpeed;
            this.right += this.platformSpeed;
            }
            //}
        } else {
        	if(!this.dead){
            this.speedY += gravity;
            this.y += this.speedY;
            this.bottom += this.speedY;
           }
        }
        this.x += this.speedX;
        this.right += this.speedX;
        
        this.hitRight = false;
        this.hitLeft = false;
        this.hitTop = false;
        
        //ctx.fillStyle = "red";
        //ctx.fillRect(this.x, this.y, cellSize, this.height);
        
    }
    
    this.draw = function() {
    	if (this.dead){
    		snd_player_death.play();
    		if(this.turnRight){
                ++this.frame;
                this.frame %= player_dieright.length;
                ctx.drawImage(player_dieright[this.frame], this.x - 5, this.y);
        	}else{
                ++this.frame;
                this.frame %= player_dieleft.length;
                ctx.drawImage(player_dieleft[this.frame], this.x - 5, this.y);
        	}
    	}else{
    		snd_player_death.pause();
    		
    	if (!this.onGround){
            snd_player_walk_snow.pause();
            snd_player_walk_snow.currentTime = 0;
            snd_player_walk.pause();
            snd_player_walk.currentTime = 0;
    		if (this.turnRight){
    			++this.frame;
    			this.frame %= player_fallright.length;
        		ctx.drawImage(player_fallright[this.frame], this.x - 5, this.y);
        	}else{
        		++this.frame;
    			this.frame %= player_fallleft.length;
        		ctx.drawImage(player_fallleft[this.frame], this.x - 5, this.y);
        	}
    	}else{
    	if(this.speedX > 0){
    		if (series == 0 || series == 2){
    			snd_player_walk_snow.play();
    		}else{
    			snd_player_walk.play();
    		}
    		++this.frame;
    		this.frame %= player_runright.length;
    		ctx.drawImage(player_runright[this.frame], this.x - 5, this.y);
    	}else if(this.speedX < 0){
    		if (series == 0 || series == 2){
    			snd_player_walk_snow.play();
    		}else{
    		snd_player_walk.play();
    		}
    		++this.frame;
    		this.frame %= player_runleft.length;
    		ctx.drawImage(player_runleft[this.frame], this.x - 5, this.y);
    	}else{
    		snd_player_walk_snow.pause();
    		snd_player_walk_snow.currentTime = 0;
    		snd_player_walk.pause();
    		snd_player_walk.currentTime = 0;
    		this.frame = 0;
    	if (this.turnRight){
        	ctx.drawImage(player_right, this.x - 5, this.y);
        }else{
        	ctx.drawImage(player_left, this.x - 5, this.y);
        }
       }
      }
    }
    }
}