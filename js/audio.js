function heathbeat(){
	var backgroundMusic=createjs.SoundJS.play('bgSnd',createjs.SoundJS.INTERRUPT_ANY, 0, 0, -1);
	backgroundMusic.onPlayFailed = function(){ 
		console.log('BG MUSIC FAILED'); 
		backgroundMusic.play(); }
}


