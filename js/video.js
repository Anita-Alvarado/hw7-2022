var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log('autoplay set to' + video.autoplay)
	video.loop = false;
	console.log("Looping set to" + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.90
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.90
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current time is" + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute video");
	if (video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"}
	else {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"}

});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume slider");
	console.log(this)
	console.log(this.value)
	video.volume = this.value * .01
	document.querySelector("#volume").innerHTML = this.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("I am in old school")
    video = document.querySelector("video")
    video.classList.add("oldSchool") = "video"
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("I am in original")
    video = document.querySelector("video")
    video.classList.remove("oldSchool") = "video"
});

