let dailyOption = document.getElementById("daily");
let weeklyOption = document.getElementById("weekly");
let monthlyOption = document.getElementById("monthly");
let workCurrentTime = document.getElementById("workCurrentTime");
let workPreviousTime = document.getElementById("workPrevious");
let playCurrentTime = document.getElementById("playCurrentTime");
let playPreviousTime = document.getElementById("playPrevious");
let studyCurrentTime = document.getElementById("studyCurrentTime");
let studyPreviousTime = document.getElementById("studyPrevious");
let exerciseCurrentTime = document.getElementById("exerciseCurrentTime");
let exercisePreviousTime = document.getElementById("exercisePrevious");
let socialCurrentTime = document.getElementById("socialCurrentTime");
let socialPreviousTime = document.getElementById("socialPrevious");
let selfCareCurrentTime = document.getElementById("selfCareCurrentTime");
let selfCarePreviousTime = document.getElementById("selfCarePrevious");

dailyOption.onclick = function() {
    workCurrentTime.innerText = "5hrs";
    workPreviousTime.innerText = "Las Week - 7hrs";
    playCurrentTime.innerText = "1hr";
    playPreviousTime.innerText = "Las Week - 2hrs";
    studyCurrentTime.innerText = "0hrs";
    studyPreviousTime.innerText = "Las Week - 1hr";
    exerciseCurrentTime.innerText = "1hr";
    exercisePreviousTime.innerText = "Las Week - 1hr";
    socialCurrentTime.innerText = "1hr";
    socialPreviousTime.innerText = "Las Week - 3hrs";
    selfCareCurrentTime.innerText = "0hrs";
    selfCarePreviousTime.innerText = "Las Week - 1hr";
    dailyOption.classList.add("clicked");
    weeklyOption.classList.remove("clicked");
    monthlyOption.classList.remove("clicked");
};

weeklyOption.onclick = function() {
    workCurrentTime.innerText = "32hrs";
    workPreviousTime.innerText = "Las Week - 36hrs";
    playCurrentTime.innerText = "10hrs";
    playPreviousTime.innerText = "Las week - 8hrs";
    studyCurrentTime.innerText = "4hrs";
    studyPreviousTime.innerText = "Last Week - 7hrs";
    exerciseCurrentTime.innerText = "4hrs";
    exercisePreviousTime.innerText = "Last Week - 5hrs";
    socialCurrentTime.innerText = "5hrs";
    socialPreviousTime.innerText = "Last Week - 10hrs";
    selfCareCurrentTime.innerText = "2hrs";
    selfCarePreviousTime.innerText = "Last Week - 2hrs";
    dailyOption.classList.remove("clicked");
    weeklyOption.classList.add("clicked");
    monthlyOption.classList.remove("clicked");
};

monthlyOption.onclick = function() {
    workCurrentTime.innerText = "103hrs";
    workPreviousTime.innerText = "Las Week - 128hrs";
    playCurrentTime.innerText = "23hrs";
    playPreviousTime.innerText = "Las week - 29hrs";
    studyCurrentTime.innerText = "13hrs";
    studyPreviousTime.innerText = "Last Week - 19hrs";
    exerciseCurrentTime.innerText = "11hrs";
    exercisePreviousTime.innerText = "Last Week - 18hrs";
    socialCurrentTime.innerText = "21hrs";
    socialPreviousTime.innerText = "Last Week - 23hrs";
    selfCareCurrentTime.innerText = "7hrs";
    selfCarePreviousTime.innerText = "Last Week - 11hrs";
    dailyOption.classList.remove("clicked");
    weeklyOption.classList.remove("clicked");
    monthlyOption.classList.add("clicked");
};