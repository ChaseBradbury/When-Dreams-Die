var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var loadframe = 0;

var loaded = false;

window.onload=function(){
	loaded = true;
	level_init(level);
	snow.init();
    //voice_over[level].play();
};



//Load up images
var loading = new Image();
loading.src = "sprites/loading.png";
var receiver = new Image();
receiver.src = "sprites/receiver2.png";
var receiver_on1 = new Image();
receiver_on1.src = "sprites/receiver_inrange_frame1.png";
var receiver_on2 = new Image();
receiver_on2.src = "sprites/receiver_inrange_frame2.png";
var receiver_on3 = new Image();
receiver_on3.src = "sprites/receiver_inrange_frame3.png";
var receiver_on4 = new Image();
receiver_on4.src = "sprites/receiver_inrange_frame4.png";
var receiver_on5 = new Image();
receiver_on5.src = "sprites/receiver_inrange_frame5.png";
var receiver_on6 = new Image();
receiver_on6.src = "sprites/receiver_inrange_frame6.png";
var receiver_on7 = new Image();
receiver_on7.src = "sprites/receiver_inrange_frame7.png";
var receiver_on8 = new Image();
receiver_on8.src = "sprites/receiver_inrange_frame8.png";
var receiver_on9 = new Image();
receiver_on9.src = "sprites/receiver_inrange_frame9.png";
var receiver_on10 = new Image();
receiver_on10.src = "sprites/receiver_inrange_frame10.png";
var receiver_on11 = new Image();
receiver_on11.src = "sprites/receiver_inrange_frame11.png";
var receiver_on12 = new Image();
receiver_on12.src = "sprites/receiver_inrange_frame12.png";
var receiver_on = [receiver_on1, receiver_on2, receiver_on3, receiver_on4, receiver_on5, receiver_on6, receiver_on7, receiver_on8, receiver_on9, receiver_on10, receiver_on11, receiver_on12];
var ground_topleft = new Image();
ground_topleft.src = "sprites/ground_topleft.png";
var ground_left = new Image();
ground_left.src = "sprites/ground_left.png";
var ground_topright = new Image();
ground_topright.src = "sprites/ground_topright.png";
var ground_right = new Image();
ground_right.src = "sprites/ground_right.png";
var ground_middle = new Image();
ground_middle.src = "sprites/ground_middle.png";
var ground_top = new Image();
ground_top.src = "sprites/ground_top.png";
var ground_bottom = new Image();
ground_bottom.src = "sprites/ground_bottom.png";
var platform_left = new Image();
platform_left.src = "sprites/platform_left.png";
var platform_middle = new Image();
platform_middle.src = "sprites/platform_middle.png";
var platform_right = new Image();
platform_right.src = "sprites/platform_right.png";
var platform_left_on = new Image();
platform_left_on.src = "sprites/platform_left_on.png";
var platform_right_on = new Image();
platform_right_on.src = "sprites/platform_right_on.png";
var platform2_left = new Image();
platform2_left.src = "sprites/platform2_left.png";
var platform2_middle = new Image();
platform2_middle.src = "sprites/platform2_middle.png";
var platform2_right = new Image();
platform2_right.src = "sprites/platform2_right.png";
var platform2_left_on = new Image();
platform2_left_on.src = "sprites/platform2_left_on.png";
var platform2_middle_on = new Image();
platform2_middle_on.src = "sprites/platform2_middle_on.png";
var platform2_right_on = new Image();
platform2_right_on.src = "sprites/platform2_right_on.png";
var player_right = new Image();
player_right.src = "sprites/tesla_idleright.png";
var player_left = new Image();
player_left.src = "sprites/tesla_idleleft.png";
var player_runright1 = new Image();
player_runright1.src = "sprites/tesla_runright_frame1.png";
var player_runright2 = new Image();
player_runright2.src = "sprites/tesla_runright_frame2.png";
var player_runright3 = new Image();
player_runright3.src = "sprites/tesla_runright_frame3.png";
var player_runright4 = new Image();
player_runright4.src = "sprites/tesla_runright_frame4.png";
var player_runright5 = new Image();
player_runright5.src = "sprites/tesla_runright_frame5.png";
var player_runright6 = new Image();
player_runright6.src = "sprites/tesla_runright_frame6.png";
var player_runright7 = new Image();
player_runright7.src = "sprites/tesla_runright_frame7.png";
var player_runright8 = new Image();
player_runright8.src = "sprites/tesla_runright_frame8.png";
var player_runright9 = new Image();
player_runright9.src = "sprites/tesla_runright_frame9.png";
var player_runright10 = new Image();
player_runright10.src = "sprites/tesla_runright_frame10.png";
var player_runright11 = new Image();
player_runright11.src = "sprites/tesla_runright_frame11.png";
var player_runright12 = new Image();
player_runright12.src = "sprites/tesla_runright_frame12.png";
var player_runright13 = new Image();
player_runright13.src = "sprites/tesla_runright_frame13.png";
var player_runright14 = new Image();
player_runright14.src = "sprites/tesla_runright_frame14.png";
var player_runright15 = new Image();
player_runright15.src = "sprites/tesla_runright_frame15.png";
var player_runright16 = new Image();
player_runright16.src = "sprites/tesla_runright_frame16.png";
var player_runright = [player_runright1, player_runright2, player_runright3, player_runright4, player_runright5, player_runright6, player_runright7, player_runright8, player_runright9, player_runright10, player_runright11, player_runright12, player_runright13, player_runright14, player_runright15, player_runright16];
var player_runleft1 = new Image();
player_runleft1.src = "sprites/tesla_runleft_frame1.png";
var player_runleft2 = new Image();
player_runleft2.src = "sprites/tesla_runleft_frame2.png";
var player_runleft3 = new Image();
player_runleft3.src = "sprites/tesla_runleft_frame3.png";
var player_runleft4 = new Image();
player_runleft4.src = "sprites/tesla_runleft_frame4.png";
var player_runleft5 = new Image();
player_runleft5.src = "sprites/tesla_runleft_frame5.png";
var player_runleft6 = new Image();
player_runleft6.src = "sprites/tesla_runleft_frame6.png";
var player_runleft7 = new Image();
player_runleft7.src = "sprites/tesla_runleft_frame7.png";
var player_runleft8 = new Image();
player_runleft8.src = "sprites/tesla_runleft_frame8.png";
var player_runleft9 = new Image();
player_runleft9.src = "sprites/tesla_runleft_frame9.png";
var player_runleft10 = new Image();
player_runleft10.src = "sprites/tesla_runleft_frame10.png";
var player_runleft11 = new Image();
player_runleft11.src = "sprites/tesla_runleft_frame11.png";
var player_runleft12 = new Image();
player_runleft12.src = "sprites/tesla_runleft_frame12.png";
var player_runleft13 = new Image();
player_runleft13.src = "sprites/tesla_runleft_frame13.png";
var player_runleft14 = new Image();
player_runleft14.src = "sprites/tesla_runleft_frame14.png";
var player_runleft15 = new Image();
player_runleft15.src = "sprites/tesla_runleft_frame15.png";
var player_runleft16 = new Image();
player_runleft16.src = "sprites/tesla_runleft_frame16.png";
var player_runleft = [player_runleft1, player_runleft2, player_runleft3, player_runleft4, player_runleft5, player_runleft6, player_runleft7, player_runleft8, player_runleft9, player_runleft10, player_runleft11, player_runleft12, player_runleft13, player_runleft14, player_runleft15, player_runleft16];
var player_fallright1 = new Image();
player_fallright1.src = "sprites/tesla_fallright_frame1.png";
var player_fallright2 = new Image();
player_fallright2.src = "sprites/tesla_fallright_frame2.png";
var player_fallright3 = new Image();
player_fallright3.src = "sprites/tesla_fallright_frame3.png";
var player_fallright4 = new Image();
player_fallright4.src = "sprites/tesla_fallright_frame4.png";
var player_fallright5 = new Image();
player_fallright5.src = "sprites/tesla_fallright_frame5.png";
var player_fallright6 = new Image();
player_fallright6.src = "sprites/tesla_fallright_frame6.png";
var player_fallright = [player_fallright1, player_fallright1, player_fallright2, player_fallright2, player_fallright3, player_fallright3, player_fallright4, player_fallright4, player_fallright5, player_fallright5, player_fallright6, player_fallright6];
var player_fallleft1 = new Image();
player_fallleft1.src = "sprites/tesla_fallleft_frame1.png";
var player_fallleft2 = new Image();
player_fallleft2.src = "sprites/tesla_fallleft_frame2.png";
var player_fallleft3 = new Image();
player_fallleft3.src = "sprites/tesla_fallleft_frame3.png";
var player_fallleft4 = new Image();
player_fallleft4.src = "sprites/tesla_fallleft_frame4.png";
var player_fallleft5 = new Image();
player_fallleft5.src = "sprites/tesla_fallleft_frame5.png";
var player_fallleft6 = new Image();
player_fallleft6.src = "sprites/tesla_fallleft_frame6.png";
var player_fallleft = [player_fallleft1, player_fallleft1, player_fallleft2, player_fallleft2, player_fallleft3, player_fallleft3, player_fallleft4, player_fallleft4, player_fallleft5, player_fallleft5, player_fallleft6, player_fallleft6];
var player_dieright1 = new Image();
player_dieright1.src = "sprites/tesla_dieright_frame1.png";
var player_dieright2 = new Image();
player_dieright2.src = "sprites/tesla_dieright_frame2.png";
var player_dieright = [player_dieright1, player_dieright2];
var player_dieleft1 = new Image();
player_dieleft1.src = "sprites/tesla_dieleft_frame1.png";
var player_dieleft2 = new Image();
player_dieleft2.src = "sprites/tesla_dieleft_frame2.png";
var player_dieleft = [player_dieleft1, player_dieleft2];
var hazard_vertical1 = new Image();
hazard_vertical1.src = "sprites/hazard_middlev_frame1.png";
var hazard_vertical2 = new Image();
hazard_vertical2.src = "sprites/hazard_middlev_frame2.png";
var hazard_vertical3 = new Image();
hazard_vertical3.src = "sprites/hazard_middlev_frame3.png";
var hazard_vertical4 = new Image();
hazard_vertical4.src = "sprites/hazard_middlev_frame4.png";
var hazard_vertical = [hazard_vertical1, hazard_vertical2, hazard_vertical3, hazard_vertical4];
var hazard_horizontal1 = new Image();
hazard_horizontal1.src = "sprites/hazard_middleh_frame1.png";
var hazard_horizontal2 = new Image();
hazard_horizontal2.src = "sprites/hazard_middleh_frame2.png";
var hazard_horizontal3 = new Image();
hazard_horizontal3.src = "sprites/hazard_middleh_frame3.png";
var hazard_horizontal4 = new Image();
hazard_horizontal4.src = "sprites/hazard_middleh_frame4.png";
var hazard_horizontal = [hazard_horizontal1, hazard_horizontal2, hazard_horizontal3, hazard_horizontal4];
var hazard_vertical_top1 = new Image();
hazard_vertical_top1.src = "sprites/hazard_topv_frame1.png";
var hazard_vertical_top2 = new Image();
hazard_vertical_top2.src = "sprites/hazard_topv_frame2.png";
var hazard_vertical_top3 = new Image();
hazard_vertical_top3.src = "sprites/hazard_topv_frame3.png";
var hazard_vertical_top4 = new Image();
hazard_vertical_top4.src = "sprites/hazard_topv_frame4.png";
var hazard_vertical_top = [hazard_vertical_top1, hazard_vertical_top2, hazard_vertical_top3, hazard_vertical_top4];
var hazard_vertical_bottom1 = new Image();
hazard_vertical_bottom1.src = "sprites/hazard_bottomv_frame1.png";
var hazard_vertical_bottom2 = new Image();
hazard_vertical_bottom2.src = "sprites/hazard_bottomv_frame2.png";
var hazard_vertical_bottom3 = new Image();
hazard_vertical_bottom3.src = "sprites/hazard_bottomv_frame3.png";
var hazard_vertical_bottom4 = new Image();
hazard_vertical_bottom4.src = "sprites/hazard_bottomv_frame4.png";
var hazard_vertical_bottom = [hazard_vertical_bottom1, hazard_vertical_bottom2, hazard_vertical_bottom3, hazard_vertical_bottom4];
var hazard_horizontal_left1 = new Image();
hazard_horizontal_left1.src = "sprites/hazard_lefth_frame1.png";
var hazard_horizontal_left2 = new Image();
hazard_horizontal_left2.src = "sprites/hazard_lefth_frame2.png";
var hazard_horizontal_left3 = new Image();
hazard_horizontal_left3.src = "sprites/hazard_lefth_frame3.png";
var hazard_horizontal_left4 = new Image();
hazard_horizontal_left4.src = "sprites/hazard_lefth_frame4.png";
var hazard_horizontal_left = [hazard_horizontal_left1, hazard_horizontal_left2, hazard_horizontal_left3, hazard_horizontal_left4];
var hazard_horizontal_right1 = new Image();
hazard_horizontal_right1.src = "sprites/hazard_righth_frame1.png";
var hazard_horizontal_right2 = new Image();
hazard_horizontal_right2.src = "sprites/hazard_righth_frame2.png";
var hazard_horizontal_right3 = new Image();
hazard_horizontal_right3.src = "sprites/hazard_righth_frame3.png";
var hazard_horizontal_right4 = new Image();
hazard_horizontal_right4.src = "sprites/hazard_righth_frame4.png";
var hazard_horizontal_right = [hazard_horizontal_right1, hazard_horizontal_right2, hazard_horizontal_right3, hazard_horizontal_right4];
var signal1 = new Image();
signal1.src = "sprites/signal_on_frame1.png";
var signal2 = new Image();
signal2.src = "sprites/signal_on_frame2.png";
var signal3 = new Image();
signal3.src = "sprites/signal_on_frame3.png";
var signal4 = new Image();
signal4.src = "sprites/signal_on_frame4.png";
var signal5 = new Image();
signal5.src = "sprites/signal_on_frame5.png";
var signal6 = new Image();
signal6.src = "sprites/signal_on_frame6.png";
var signal7 = new Image();
signal7.src = "sprites/signal_on_frame7.png";
var signal8 = new Image();
signal8.src = "sprites/signal_on_frame8.png";
var signal_sprite = [signal1, signal1, signal2, signal2, signal3, signal3, signal4, signal4, signal5, signal5, signal6, signal6, signal7, signal7, signal8, signal8];
var signal_sprite_off = [signal1, signal1, signal1, signal1, signal2, signal2, signal2, signal2, signal3, signal3, signal3, signal3, signal4, signal4, signal4, signal4];
var snow_middle = new Image();
snow_middle.src = "sprites/snow_middle.png";
var snow_top = new Image();
snow_top.src = "sprites/snow_top.png";
var snow_topmiddle = new Image();
snow_topmiddle.src = "sprites/snow_topmiddle.png";
var snow_topleft = new Image();
snow_topleft.src = "sprites/snow_topleft.png";
var snow_topright = new Image();
snow_topright.src = "sprites/snow_topright.png";
var hazard_top_off = new Image();
hazard_top_off.src = "sprites/hazard_topv_off.png";
var hazard_bottom_off = new Image();
hazard_bottom_off.src = "sprites/hazard_bottomv_off.png";
var hazard_left_off = new Image();
hazard_left_off.src = "sprites/hazard_lefth_off.png";
var hazard_right_off = new Image();
hazard_right_off.src = "sprites/hazard_righth_off.png";
var platform_middle_snow = new Image();
platform_middle_snow.src = "sprites/platform_middle_snow.png";
var platform_left_snow = new Image();
platform_left_snow.src = "sprites/platform_left_snow.png";
var platform_right_snow = new Image();
platform_right_snow.src = "sprites/platform_right_snow.png";
var platform_left_snow_on = new Image();
platform_left_snow_on.src = "sprites/platform_left_snow_on.png";
var platform_right_snow_on = new Image();
platform_right_snow_on.src = "sprites/platform_right_snow_on.png";
var building_topleft = new Image();
building_topleft.src = "sprites/building_topleft.png";
var building_left = new Image();
building_left.src = "sprites/building_left.png";
var building_topright = new Image();
building_topright.src = "sprites/building_topright.png";
var building_right = new Image();
building_right.src = "sprites/building_right.png";
var building_middle = new Image();
building_middle.src = "sprites/building_middle2.png";
var building_top = new Image();
building_top.src = "sprites/building_top.png";
var dirt_top = new Image();
dirt_top.src = "sprites/dirt_top.png";
var dirt_top = new Image();
dirt_top.src = "sprites/dirt_top.png";
var dirt_middle = new Image();
dirt_middle.src = "sprites/dirt_middle.png";
var grass = new Image();
grass.src = "sprites/grass.png";

var exit_frame1 = new Image();
exit_frame1.src = "sprites/exit_frame1.png";
var exit_frame2 = new Image();
exit_frame2.src = "sprites/exit_frame2.png";
var exit_frame3 = new Image();
exit_frame3.src = "sprites/exit_frame3.png";
var exit_frame4 = new Image();
exit_frame4.src = "sprites/exit_frame4.png";
var exit_frame5 = new Image();
exit_frame5.src = "sprites/exit_frame5.png";
var exit_frame6 = new Image();
exit_frame6.src = "sprites/exit_frame6.png";
var exit_frame7 = new Image();
exit_frame7.src = "sprites/exit_frame7.png";
var exit_frame8 = new Image();
exit_frame8.src = "sprites/exit_frame8.png";
var exit_frame9 = new Image();
exit_frame9.src = "sprites/exit_frame9.png";
var exit_frame10 = new Image();
exit_frame10.src = "sprites/exit_frame10.png";
var exit_frame11 = new Image();
exit_frame11.src = "sprites/exit_frame11.png";
var exit_frame12 = new Image();
exit_frame12.src = "sprites/exit_frame12.png";
var exit_frame13 = new Image();
exit_frame13.src = "sprites/exit_frame13.png";
var exit_frame14 = new Image();
exit_frame14.src = "sprites/exit_frame14.png";
var exit_frame15 = new Image();
exit_frame15.src = "sprites/exit_frame15.png";
var exit_frame16 = new Image();
exit_frame16.src = "sprites/exit_frame16.png";
var exit_frame17 = new Image();
exit_frame17.src = "sprites/exit_frame17.png";
var exit_frame18 = new Image();
exit_frame18.src = "sprites/exit_frame18.png";
var exit_frame19 = new Image();
exit_frame19.src = "sprites/exit_frame19.png";
var exit_frame20 = new Image();
exit_frame20.src = "sprites/exit_frame20.png";
var exit_frame21 = new Image();
exit_frame21.src = "sprites/exit_frame21.png";
var exit_frame22 = new Image();
exit_frame22.src = "sprites/exit_frame22.png";
var exit_frame23 = new Image();
exit_frame23.src = "sprites/exit_frame23.png";
var exit_frame24 = new Image();
exit_frame24.src = "sprites/exit_frame24.png";
var exit_frame25 = new Image();
exit_frame25.src = "sprites/exit_frame25.png";
var exit_frame26 = new Image();
exit_frame26.src = "sprites/exit_frame26.png";
var exit_frame27 = new Image();
exit_frame27.src = "sprites/exit_frame27.png";
var exit_frame28 = new Image();
exit_frame28.src = "sprites/exit_frame28.png";
var exit_frame29 = new Image();
exit_frame29.src = "sprites/exit_frame29.png";
var exit_frame30 = new Image();
exit_frame30.src = "sprites/exit_frame30.png";
var exit_frame31 = new Image();
exit_frame31.src = "sprites/exit_frame31.png";
var exit_frame32 = new Image();
exit_frame32.src = "sprites/exit_frame32.png";
var exit_sprite = [exit_frame1, exit_frame2, exit_frame3, exit_frame4, exit_frame5, exit_frame6, exit_frame7, exit_frame8, exit_frame9, exit_frame10, exit_frame11, exit_frame12, exit_frame13, exit_frame14, exit_frame15, exit_frame16, exit_frame17, exit_frame18, exit_frame19, exit_frame20, exit_frame21, exit_frame22, exit_frame23, exit_frame24, exit_frame25, exit_frame26, exit_frame27, exit_frame28, exit_frame29, exit_frame30, exit_frame31, exit_frame32];



var poem1 = new Image();
poem1.src = "sprites/poem1.png";
var poem2 = new Image();
poem2.src = "sprites/poem2.png";
var poem3 = new Image();
poem3.src = "sprites/poem3.png";
var poem4 = new Image();
poem4.src = "sprites/poem4.png";
var poem5 = new Image();
poem5.src = "sprites/poem5.png";
var poem6 = new Image();
poem6.src = "sprites/poem6.png";
var poem7 = new Image();
poem7.src = "sprites/poem7.png";
var poem8 = new Image();
poem8.src = "sprites/poem8.png";
var left_arrow = new Image();
left_arrow.src = "sprites/left_arrow.png";
var right_arrow = new Image();
right_arrow.src = "sprites/right_arrow.png";
var up_arrow = new Image();
up_arrow.src = "sprites/up_arrow.png";
var spacebar = new Image();
spacebar.src = "sprites/spacebar.png";
var spacebar_cross = new Image();
spacebar_cross.src = "sprites/spacebar_cross.png";
var title = new Image();
title.src = "sprites/title.png";
var names = new Image();
names.src = "sprites/EnigmaNames.png";

var bio1 = new Image();
bio1.src = "sprites/bio1.png";
var bio2 = new Image();
bio2.src = "sprites/bio2.png";
var bio3 = new Image();
bio3.src = "sprites/bio3.png";
var bio4 = new Image();
bio4.src = "sprites/bio4.png";
var bio5 = new Image();
bio5.src = "sprites/bio5.png";
var bio6 = new Image();
bio6.src = "sprites/bio6.png";
var bio7 = new Image();
bio7.src = "sprites/bio7.png";
var bio8 = new Image();
bio8.src = "sprites/bio8.png";
var bio9 = new Image();
bio9.src = "sprites/bio9.png";
var bio10 = new Image();
bio10.src = "sprites/bio10.png";
var bio11 = new Image();
bio11.src = "sprites/bio11.png";
var bio12 = new Image();
bio12.src = "sprites/bio12.png";
var bio13 = new Image();
bio13.src = "sprites/bio13.png";
var bio14 = new Image();
bio14.src = "sprites/bio14.png";
var bio15 = new Image();
bio15.src = "sprites/bio15.png";
var bio16 = new Image();
bio16.src = "sprites/bio16.png";
var bio17 = new Image();
bio17.src = "sprites/bio17.png";
var bio18 = new Image();
bio18.src = "sprites/bio18.png";
var bio19 = new Image();
bio19.src = "sprites/bio19.png";
var bio20 = new Image();
bio20.src = "sprites/bio20.png";
var bio21 = new Image();
bio21.src = "sprites/bio21.png";
var bio22 = new Image();
bio22.src = "sprites/bio22.png";
var bio23 = new Image();
bio23.src = "sprites/bio23.png";
var bio24 = new Image();
bio24.src = "sprites/bio24.png";
var bio25 = new Image();
bio25.src = "sprites/bio25.png";
var bio26 = new Image();
bio26.src = "sprites/bio26.png";
var bio27 = new Image();
bio27.src = "sprites/bio27.png";
var bio28 = new Image();
bio28.src = "sprites/bio28.png";
var bio29 = new Image();
bio29.src = "sprites/bio29.png";
var bio30 = new Image();
bio30.src = "sprites/bio30.png";

var quote1 = new Image();
quote1.src = "sprites/quote1.png";

var bg1 = new Image();
bg1.src = "sprites/Background1.png";
var mg1 = new Image();
mg1.src = "sprites/Midground1.png";
var bg2 = new Image();
bg2.src = "sprites/Background2.png";
var mg2 = new Image();
mg2.src = "sprites/Midground2.png";
var bg3 = new Image();
bg3.src = "sprites/Background3.png";
//var mg3 = new Image();
//mg3.src = "sprites/Midground3.png";
var csmg1 = new Image();
csmg1.src = "sprites/CSMidground1.png";
var csmg2 = new Image();
csmg2.src = "sprites/CSMidground2.png";
var csmg3 = new Image();
csmg3.src = "sprites/CSMidground3.png";
var bg4 = new Image();
bg4.src = "sprites/Background4.png";
var mg4 = new Image();
mg4.src = "sprites/Midground4.png";

var checkpoint_off = new Image();
checkpoint_off.src = "sprites/checkpoint_off_frame1.png";

var checkpoint_frame1 = new Image();
checkpoint_frame1.src = "sprites/checkpoint_act_frame1.png";
var checkpoint_frame2 = new Image();
checkpoint_frame2.src = "sprites/checkpoint_act_frame2.png";
var checkpoint_frame3 = new Image();
checkpoint_frame3.src = "sprites/checkpoint_act_frame3.png";
var checkpoint_frame4 = new Image();
checkpoint_frame4.src = "sprites/checkpoint_act_frame4.png";
var checkpoint_frame5 = new Image();
checkpoint_frame5.src = "sprites/checkpoint_act_frame5.png";
var checkpoint_frame6 = new Image();
checkpoint_frame6.src = "sprites/checkpoint_act_frame6.png";
var checkpoint_frame7 = new Image();
checkpoint_frame7.src = "sprites/checkpoint_act_frame7.png";
var checkpoint_frame8 = new Image();
checkpoint_frame8.src = "sprites/checkpoint_act_frame8.png";
var checkpoint_frame9 = new Image();
checkpoint_frame9.src = "sprites/checkpoint_act_frame9.png";
var checkpoint_frame10 = new Image();
checkpoint_frame10.src = "sprites/checkpoint_act_frame10.png";
var checkpoint_frame11 = new Image();
checkpoint_frame11.src = "sprites/checkpoint_act_frame11.png";
var checkpoint_frame12 = new Image();
checkpoint_frame12.src = "sprites/checkpoint_act_frame12.png";
var checkpoint_frame13 = new Image();
checkpoint_frame13.src = "sprites/checkpoint_act_frame13.png";
var checkpoint_frame14 = new Image();
checkpoint_frame14.src = "sprites/checkpoint_act_frame14.png";
var checkpoint_frame15 = new Image();
checkpoint_frame15.src = "sprites/checkpoint_act_frame15.png";
var checkpoint_frame16 = new Image();
checkpoint_frame16.src = "sprites/checkpoint_act_frame16.png";
var checkpoint = [checkpoint_frame1, checkpoint_frame2, checkpoint_frame3, checkpoint_frame4, checkpoint_frame5, checkpoint_frame6, checkpoint_frame7, checkpoint_frame8, checkpoint_frame9, checkpoint_frame10, checkpoint_frame11, checkpoint_frame12, checkpoint_frame13, checkpoint_frame14, checkpoint_frame15, checkpoint_frame16]; 

var stagedec1 = new Image();
stagedec1.src = "sprites/stagedecorative1.png";
var stagedec2 = new Image();
stagedec2.src = "sprites/stagedecorative2.png";

var snowyowl = new Image();
snowyowl.src = "sprites/snowyowl.png";


//Load up sound
var snd_player_land = new Audio("sound/player_land.wav");
var snd_player_land_snow = new Audio("sound/player_land_snow.wav");
snd_player_land_snow.volume = .7;
var snd_player_jump = new Audio("sound/player_jump.wav");
snd_player_jump.volume = .5;
var snd_player_walk = new Audio("sound/player_walk.wav");
snd_player_walk.loop = true;
snd_player_walk.volume = .5;
var snd_player_walk_snow = new Audio("sound/player_walk_snow.wav");
snd_player_walk_snow.loop = true;
snd_player_walk_snow.volume = .7;
var snd_player_death = new Audio("sound/player_death.wav");
snd_player_death.loop = true;
snd_player_death.volume = .8;
var snd_signal_on = new Audio("sound/signal_on.wav");
snd_signal_on.loop = true;
snd_signal_on.volume = .6;
var snd_platform_moving = new Audio("sound/platform_moving.wav");
snd_platform_moving.loop = true;
snd_platform_moving.volume = .6;
var snd_platform_limit = new Audio("sound/platform_limit.wav");
snd_platform_limit.volume = .5;
var snd_receiver_on = new Audio("sound/receiver_on.wav");
snd_receiver_on.volume = .5;
var snd_howling_wind = new Audio("sound/howling_wind.wav");
snd_howling_wind.loop = true;
snd_howling_wind.volume = .4;
//snd_howling_wind.play();

//Load up music
var music_exhibition = new Audio("music/Exhibition.mp3");
music_exhibition.loop = true;
music_exhibition.volume = 1;
var music_lab = new Audio("music/Lab.mp3");
music_lab.loop = true;
music_lab.volume = 1;
var music_coloradosprings = new Audio("music/ColoradoSprings.mp3");
music_coloradosprings.loop = true;
music_coloradosprings.volume = .5;
var music_nyc = new Audio("music/NewYorkCity.mp3");
music_nyc.loop = true;
music_nyc.volume = .5;

// Define cell size, which is how big each unit will be.
var cellSize = 25;
var gravity = .6;
var spacePressed = false;
var worldHeight = 32 * cellSize;
var worldWidth = 60 * cellSize;
var restart = false;
var level = 1;
var series = 0;

var transition = false;

var restartCounter = 0;
var transitionCounter = 0;
var transitionAlpha = 1;

var anyPlatformsOn = false;

var oneOffsetX = -6;
var oneOffsetY = 134;

var player = new Player(-40, 4, 2);
var signal = new Signal(0, 0, 100);

var camera = new Camera(0, 0, canvas.width, canvas.height, 0, 0, worldHeight, worldWidth);



//Handles key presses
document.onkeydown = keyDown;
function keyDown(e) {
	e = e || window.event;
	//When up arrow is pressed
	if (e.keyCode == '38') {
		if (player.onGround) {
			player.speedY = -11;
			snd_player_jump.play();
		}
		player.onGround = false;
	}
	//When left arrow is pressed
	else if (e.keyCode == '37') {
		player.movingLeft = true;
		//player.movingRight = false;
		player.turnRight = false;
	}
	//When right arrow is pressed
	else if (e.keyCode == '39') {
		player.movingRight = true;
		//player.movingLeft = false;
		player.turnRight = true;
	}
	//When down arrow is pressed
	else if (e.keyCode == '40') {
		//player.onGround = true;
	}
	//Test spacebar
	if (e.keyCode == '32') {
		if (!signal.on) {
			signal.turnOn();
		}
	}

}

//Handles key presses
document.onkeyup = keyUp;
function keyUp(e) {
	e = e || window.event;
	//When up arrow is released
	if (e.keyCode == '38') {
	}
	//When left arrow is released
	else if (e.keyCode == '37') {
		player.movingLeft = false;
	}
	//When right arrow is released
	else if (e.keyCode == '39') {
		player.movingRight = false;
	}
	//When down arrow is released
	else if (e.keyCode == '40') {
		//player.speedY = 0;
	}
	if (e.keyCode == '32') {
		signal.on = false;
		spacePressed = false;
	}
	//s = skip level
	if (e.keyCode =='83') {
		if (level == 15) level = 0;
		else ++level;
        player_init(level);
		restart = true;
	}
	//a = previous level
	if (e.keyCode == '65' && level >= 2) {
		level--;
        player_init(level);
		restart = true;
	}
	/*
	//level shortcuts
	if (e.keyCode == '48') {
		level = 0;
		restart = true;
	}
	if (e.keyCode == '49') {
		level = 1;
		restart = true;
	}
	if (e.keyCode == '50') {
		level = 2;
		restart = true;
	}
	if (e.keyCode == '51') {
		level = 3;
		restart = true;
	}
	if (e.keyCode == '52') {
		level = 4;
		restart = true;
	}
	if (e.keyCode == '53') {
		level = 5;
		restart = true;
	}
	if (e.keyCode == '54') {
		level = 6;
		restart = true;
	}
	if (e.keyCode == '55') {
		level = 7;
		restart = true;
	}
	if (e.keyCode == '56') {
		level = 8;
		restart = true;
	}
	if (e.keyCode == '57') {
		level = 9;
		restart = true;
	}
	//q
	if (e.keyCode =='81') {
		level = 10;
		restart = true;
	}
	//w
	if (e.keyCode =='87') {
		level = 11;
		restart = true;
	}
	//e
	if (e.keyCode =='69') {
		level = 12;
		restart = true;
	}
	//r
	if (e.keyCode =='82') {
		level = 13;
		restart = true;
	}
	//t
	if (e.keyCode =='84') {
		level = 14;
		restart = true;
	}
	//y
	if (e.keyCode =='89') {
		level = 15;
		restart = true;
	}
	//u
	if (e.keyCode =='85') {
		level = 16;
		restart = true;
	}
	*/
	
}

//level_init(level)

var exit = new Exit(8, 10);
var backgrounds = [];
var foregrounds = [];
var receivers = [];
var platforms = [];
var ground = [];
var hazards = [];
var checkpoints = [];



//player_init(level);

var collided = false;

var snow = new Snow(250);


var stage_dust = new Dust(15, "chocolate");

var forest_dust = new Dust(30, "yellow");

var city_dust = new Dust(60, "indigo");



//Main update
function update_and_draw() {
	canvas.width = canvas.width;
	if (series == 0) {
		ctx.fillStyle = "gray";
	} else {
		ctx.fillStyle = "black";
	}
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fill();


	if(loaded){
	if (level >= 0 && level <= 4) {
		series = 0;
	} else if (level >= 5 && level <= 7) {
		series = 1;
	} else if (level >= 8 && level <= 11) {
		series = 2;
	} else {
		series = 3;
	}

	if (series == 0) {
		music_nyc.pause();
		music_nyc.currentTime = 0;
		music_lab.pause();
		music_lab.currentTime = 0;
		music_coloradosprings.pause();
		music_coloradosprings.currentTime = 0;
		music_exhibition.play();
		snd_howling_wind.play();
	} else if (series == 1) {
		music_nyc.pause();
		music_nyc.currentTime = 0;
		music_coloradosprings.pause();
		music_coloradosprings.currentTime = 0;
		music_exhibition.pause();
		music_exhibition.currentTime = 0;
		music_lab.play();
		snd_howling_wind.pause();
	} else if (series == 3) {
		music_coloradosprings.pause();
		music_coloradosprings.currentTime = 0;
		music_exhibition.pause();
		music_exhibition.currentTime = 0;
		music_lab.pause();
		music_lab.currentTime = 0;
		music_nyc.play();
		snd_howling_wind.pause();
	} else {
		music_nyc.pause();
		music_nyc.currentTime = 0;
		music_lab.pause();
		music_lab.currentTime = 0;
		music_exhibition.pause();
		music_exhibition.currentTime = 0;
		music_coloradosprings.play();
		snd_howling_wind.pause();
	}

	signal.update();

	//Iterate over platform array and call their updates
	for (var i = 0; i < receivers.length; ++i) {
		receivers[i].update();
	}

	//Iterate over platform array and call their updates
	for (var i = 0; i < platforms.length; ++i) {
		platforms[i].update();
	}

	//Iterate over platform array and call their updates
	for (var i = 0; i < hazards.length; ++i) {
		hazards[i].update();
	}

	if (player.collides(exit)) {
		collided = true;
		transition = true;
	}
    
    for (var i = 0; i < checkpoints.length; ++i) {
        player.collides(checkpoints[i]);
	}
	for (var i = 0; i < hazards.length; ++i) {
		if (hazards[i].deadly) {
			player.collides(hazards[i]);
		}
	}
	for (var i = 0; i < platforms.length; ++i) {
		if (player.collides(platforms[i])) {
			collided = true;
		}
	}
	for (var i = 0; i < ground.length; ++i) {
		if (player.collides(ground[i])) {
			collided = true;
		}
	}
	if (collided) {
		player.onGround = true;
	} else {
		player.onGround = false;
		player.platformSpeed = 0;
	}
	collided = false;

	//call player update
	player.update();

	if (player.movingLeft && !transition) {
		player.speedX = -5;
	} else {
		player.speedX = 0;
	}
	if (player.movingRight && !transition) {
		if (!player.movingLeft) {
			player.speedX = 5;
		}
	}

	if (restart) {++restartCounter;
	}

	if (restart && (restartCounter >= 30 || transition)) {
		restartCounter = 0;
		level_init(level);
		player_init();
        //camera.update();
		snow.init();
		stage_dust.init();
		forest_dust.init();
		city_dust.init();
		restart = false;
	}

	if (transition) {
		//exit.on = true;
		//player.turnRight = true;
		if (transitionCounter > 100) {
			transition = false;
			transitionCounter = 0;
			transitionAlpha = 1;
		} else if (transitionCounter == 50) {
			if (level == 15) level = 0;
			else ++level;
            player_init(level);
			restart = true;
			ctx.globalAlpha = 0;
            //voice_over[level].play();
		} else if (transitionCounter < 50) {
			transitionAlpha += -.02;
			ctx.globalAlpha = transitionAlpha;
		} else {
			transitionAlpha += .02;
			ctx.globalAlpha = transitionAlpha;
		}
		++transitionCounter;

	}
	camera.update(player.x, player.y);

	for (var i = 0; i < backgrounds.length; ++i) {
		backgrounds[i].draw();
	}

	//Iterate over platform array and call their updates
	for (var i = 0; i < platforms.length; ++i) {
		if (platforms[i].on && platforms[i].right > 0 && platforms[i].bottom > 0 && platforms[i].x < canvas.width && platforms[i].y < canvas.height) {
			anyPlatformsOn = true;
		}
		platforms[i].draw();
	}
	if (anyPlatformsOn) {
		snd_platform_moving.play();
		anyPlatformsOn = false;
	} else {
		snd_platform_moving.pause();
		snd_platform_moving.currentTime = 0;
	}

	//Iterate over platform array and call their updates
	for (var i = 0; i < hazards.length; ++i) {
		hazards[i].draw();
	}

	//Iterate over ground array and call their updates
	for (var i = 0; i < ground.length; ++i) {
		ground[i].draw();
	}

	//Iterate over platform array and call their updates
	for (var i = 0; i < receivers.length; ++i) {
		receivers[i].draw();
	}

	

	exit.draw();

	if (series == 0) {
		snow.update_and_draw();
	}
	if (series == 1) {
		stage_dust.update_and_draw();
	}
	if (series == 2) {
		forest_dust.update_and_draw();
	}
	if (series == 3) {
		city_dust.update_and_draw();
	}

	signal.draw();

	ctx.globalAlpha = 1;

	player.draw();

    ctx.globalAlpha = transitionAlpha;

	if (series == 2) {
		for (var i = 0; i < ground.length; ++i) {
			ground[i].drawGrass();
		}
	}
    
    //Iterate over foreground array and draw them
	for (var i = 0; i < foregrounds.length; ++i) {
		foregrounds[i].draw();
	}
    
    for (var i = 0; i < checkpoints.length; ++i) {
		checkpoints[i].draw();
	}
    
	}else{
		ctx.drawImage(receiver_on[loadframe++], canvas.width/2 - cellSize/2, canvas.height/2 - cellSize/2);
		loadframe %= receiver_on.length;
		ctx.drawImage(loading, canvas.width/2 - 100, canvas.height/2 + 25);
	}

}

setInterval(update_and_draw, 30);

//Distance formula
function distance(x1, y1, x2, y2) {
	var xs = 0;
	var ys = 0;
	xs = x2 - x1;
	xs = xs * xs;
	ys = y2 - y1;
	ys = ys * ys;
	return Math.sqrt(xs + ys);
}