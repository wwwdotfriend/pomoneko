const backgroundColourOptions = [
  {
    "themeClass": 'light-grey',
    "description": "Light Grey",
    "thumbnailColor1": "#f8f9fa",
    "thumbnailColor2": "#ced4da",
  },
  {
    "themeClass": 'off-white',
    "description": 'Nearly white',
    "thumbnailColor1" : '#D7E1EC',
    "thumbnailColor2" : '#FFFFFF',
  }, 
  {
    "themeClass": 'default',
    "description": 'Pink',
    "thumbnailColor1" : '#ee9ca7',
    "thumbnailColor2" : '#ffdde1',
  },
  {
    "themeClass": 'pink-orange',
    "description": 'Pink orange',
    "thumbnailColor1" : '#f9c1b1',
    "thumbnailColor2" : '#fb8085',
  },
  {
    "themeClass": 'blush',
    "description": "Blush",
    "thumbnailColor1": "#b5838d",
    "thumbnailColor2": "#ffb4a2",
  },
  {
    "themeClass": 'pale-yellow',
    "description": 'Pale yellow',
    "thumbnailColor1" : '#f9d29d',
    "thumbnailColor2" : '#ffd8cb',
  },
  {
    "themeClass": 'earthy-orange',
    "description": "Earthy Orange",
    "thumbnailColor1": "#fcb97d",
    "thumbnailColor2": "#fcb97d",
  },
  {
    "themeClass": 'earthy',
    "description": "Earthy",
    "thumbnailColor1": "#cb997e",
    "thumbnailColor2": "#cb997e",
  },
  {
    "themeClass": 'earthy-red',
    "description": "Earthy Red",
    "thumbnailColor1": "#d66853",
    "thumbnailColor2": "#d66853",
  },
  {
    "themeClass": 'bright-red',
    "description": "Bright Red",
    "thumbnailColor1": "#85182a",
    "thumbnailColor2": "#da1e37",
  },
  {
    "themeClass": 'reddy-brown',
    "description": "Red and Brown",
    "thumbnailColor1": "#3a001e",
    "thumbnailColor2": "#3a001e",
  },
  {
    "themeClass": 'sunset-orange',
    "description": "Sunset Orange",
    "thumbnailColor1": "#e85d04",
    "thumbnailColor2": "#faa307",
  },
  {
    "themeClass": 'blue-yellow',
    "description": "Blue Yellow",
    "thumbnailColor1": "#fdc921",
    "thumbnailColor2": "#fdc921",
  },
  {
    "themeClass": 'blue',
    "description": "Blue",
    "thumbnailColor1": "#caf0f8",
    "thumbnailColor2": "#00b4d8",
  },
  {
    "themeClass": 'light-blue',
    "description": "Light Blue",
    "thumbnailColor1": "#63aca4",
    "thumbnailColor2": "#edf6f9",
  },
  {
    "themeClass": 'forest-green',
    "description": "Forest Green",
    "thumbnailColor1": "#5F7161",
    "thumbnailColor2": "#6D8B74",
  },
  {
    "themeClass": 'green',
    "description": 'Green',
    "thumbnailColor1" : '#d8d8ac',
    "thumbnailColor2" : '#c8c85e',
  }, 
  {
    "themeClass": 'purple',
    "description": 'Purple',
    "thumbnailColor1" : '#9ab5e1',
    "thumbnailColor2" : '#f39fdc',
  },
  {
    "themeClass": 'light-purple',
    "description": "Light Purple",
    "thumbnailColor1": "#947EC3",
    "thumbnailColor2": "#947EC3",
  },
  {
    "themeClass": 'bright-purple',
    "description": "Bright Purple",
    "thumbnailColor1": "#8900f2",
    "thumbnailColor2": "#e500a4",
  },
  
  {
    "themeClass": 'moon-purple',
    "description": 'Moon Purple',
    "thumbnailColor1" : '#4e54c8',
    "thumbnailColor2" : '#8f94fb',
  },
  {
    "themeClass": 'ace-flag',
    "description": "Ace Flag",
    "thumbnailColor1": "#800080",
    "thumbnailColor2": "#800080",
  },
  {
    "themeClass": 'halloween-gradient',
    "description": "Halloween gradient",
    "thumbnailColor1": "#3C096C",
    "thumbnailColor2": "#9D4EDD",
  },
  {
    "themeClass": 'dark-blue',
    "description": "Dark blue",
    "thumbnailColor1": "#000000",
    "thumbnailColor2": "#14213d",
  },
  {
    "themeClass": 'twitter-dark',
    "description": "Twitter dim",
    "thumbnailColor1": "#15202b",
    "thumbnailColor2": "#15202b",
  },
  {
    "themeClass": 'all-grey',
    "description": "All Grey",
    "thumbnailColor1": "#232323",
    "thumbnailColor2": "#232323",
  },
  {
    "themeClass": 'green-purple',
    "description": "Green Purple",
    "thumbnailColor1": "#0b525b",
    "thumbnailColor2": "#4d194d",
  },
 
  ];

const catOptions = [
  {
    "themeClass": 'black-cat',
    "description": 'Black cat, blue eyes',
    "thumbnailColor": '#333',
    "eyeColor": '#9ddbf9',
  },
  {
    "themeClass": 'black-cat-green',
    "description": 'Black cat, green eyes',
    "thumbnailColor": '#333',
    "eyeColor": '#acd359',
  },
  {
    "themeClass": 'black-cat-orange',
    "description": 'Black cat, orange eyes',
    "thumbnailColor": '#333',
    "eyeColor": '#ff9f1c',
  },
  {
    "themeClass": 'black-cat-yellow',
    "description": 'Black cat, yellow eyes',
    "thumbnailColor": '#333',
    "eyeColor": '#ffd249',
  },
  {
    "themeClass": 'grey-cat',
    "description": 'Grey cat, orange eyes',
    "thumbnailColor": '#4b5d67',
    "eyeColor": '#f2a365',
  },
  {
    "themeClass": 'grey-cat-green',
    "description": 'Grey cat, green eyes',
    "thumbnailColor": '#4b5d67',
    "eyeColor": '#acd359',
  },
  {
    "themeClass": 'grey-cat-blue',
    "description": 'Grey cat, blue eyes',
    "thumbnailColor": '#4b5d67',
    "eyeColor": '#95dee6',
  },
  {
    "themeClass": 'grey-cat-yellow',
    "description": 'Grey cat, yellow eyes',
    "thumbnailColor": '#4b5d67',
    "eyeColor": '#ffd249',
  },
  {
    "themeClass": 'white-cat',
    "description": 'White cat, blue eyes',
    "thumbnailColor": '#fffff2',
    "eyeColor": '#95dee6',
  },
  {
    "themeClass": 'white-cat-green',
    "description": 'White cat, green eyes',
    "thumbnailColor": '#fffff2',
    "eyeColor": '#acd359',
  },
  {
    "themeClass": 'white-cat-orange',
    "description": 'White cat, orange eyes',
    "thumbnailColor": '#fffff2',
    "eyeColor": '#f2a365',
  },
  {
    "themeClass": 'white-cat-yellow',
    "description": 'White cat, yellow eyes',
    "thumbnailColor": '#fffff2',
    "eyeColor": '#ffd249',
  },
  {
    "themeClass": 'chocolate-cat',
    "thumbnailColor": '#523535',
    "eyeColor": '#acd359',
  },
  {
    "themeClass": 'chocolate-cat-blue',
    "thumbnailColor": '#523535',
    "eyeColor": '#9ddbf9',
  },
  {
    "themeClass": 'chocolate-cat-orange',
    "thumbnailColor": '#523535',
    "eyeColor": '#f2a365',
  },
  {
    "themeClass": 'chocolate-cat-yellow',
    "thumbnailColor": '#523535',
    "eyeColor": '#ffd249',
  },
  {
    "themeClass": 'ginger-cat-blue',
    "thumbnailColor": '#f09d3f',
    "eyeColor": '#9ddbf9',
  },
  {
    "themeClass": 'ginger-cat-green',
    "thumbnailColor": '#f09d3f',
    "eyeColor": '#acd359',
  },
  {
    "themeClass": 'ginger-cat-yellow',
    "thumbnailColor": '#f09d3f',
    "eyeColor": '#ffd249',
  },
  {
    "themeClass": 'lightgrey-cat-blue',
    "thumbnailColor": '#aeaaa7',
    "eyeColor": '#9ddbf9',
  },
  {
    "themeClass": 'lightgrey-cat-green',
    "thumbnailColor": '#aeaaa7',
    "eyeColor": '#acd359',
  },
  {
    "themeClass": 'lightgrey-cat-orange',
    "thumbnailColor": '#aeaaa7',
    "eyeColor": '#ff9f1c',
  },
  {
    "themeClass": 'lightgrey-cat-yellow',
    "thumbnailColor": '#aeaaa7',
    "eyeColor": '#ffd249',
  },
];
  
// const button = document.querySelector('.toggleEyes');
const requestPermissionBtn = document.querySelector('.requestPermissionsBtn');
const menuParent = document.querySelector('#menuBtnContainer');
const closeMenuBtn = document.querySelectorAll('.closeMenuBtn');
// const closeMenuBtn = document.querySelectorAll('.closeMenuBtnPath');
const optionsMenuBtn = document.querySelector('.options_btn');
const optionsMenuDisplay = document.querySelector('#optionsMenu');
const sessionsMenuBtn = document.querySelector('.sessions_btn');
const sessionsMenuDisplay = document.querySelector('#sessionsMenu');
const eyes = document.querySelector('.eyes');
const timer = document.querySelector('.display .time');
const displayType = document.querySelector('.display .type');
const startButton = document.querySelector('.startTimer'); 
const stopButton = document.querySelector('.stopTimer');
let title = document.querySelector('h1');
let colourContainer = document.querySelector('#colourContainer');
let catOptionsContainer = document.querySelector('#catBgContainer');
let isClockRunning = false;
let finishedPomodoroSound = new Audio('./sounds/cat-meow.wav');
// let breakOverSound = new Audio('./sounds/cat-break.wav');
let type = 'Work';
let elapsedTime = 0;
let timeInCurrentSession = 0;
let currentTaskLabel = document.querySelector('#pomodoro-clock-task');
let pomodorosFinished = 0;
let currentDate = new Date(Date.now()); //keep track of time of day
let currentHour = currentDate.getHours();
let workSessionDuration = 1500; //seconds of 25min
let currentTimeLeftInSession = 1500000; //time to reset to in ms 
let breakDuration = 300;
let longBreak = 900; // 15min
let workSessionLabel, sessionLabel, resizeTimer;
var clockTimer;
let notificationImg = './favicon.png';
let notificationText = 'Time up!'; //fallback
let playButton = document.getElementById("playbutton");
let setTimeForm = document.querySelector('#change-times');
let changeWorkTimeInput = document.querySelector('#work-time');
let changeBreakTimeInput = document.querySelector('#break-time');
let changeLongBreakTimeInput = document.querySelector('#long-break-time');
let startTime, pauseTimeStart, pauseReminder, pauseTimeElapsed, diff, diffMin;
let timeCompletedDisplay = document.querySelector('.timeCompleted');
let allTimeCompleted = 0;
let allTimeCompletedMin;
let stopTime;
let newElapsed;
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));


function eyesBasedOnTime() {
  // if between 6pm and 6am have different eyes
  if(currentHour > 18 || currentHour < 6 ) {
    if(eyes.classList.contains('tired')) {
      eyes.classList.replace('tired','large');
    } else {
      eyes.classList.add('large');
    } 
  } else {
    if(eyes.classList.contains('large')) {
      eyes.classList.replace('large','tired');
    } else {
      eyes.classList.add('tired');
    } 
  }
}
function updateTime() {
  eyesBasedOnTime();
  // check time of day every 10min
  setInterval(() => {
    currentDate = new Date(Date.now());
    currentHour = currentDate.getHours();
    eyesBasedOnTime();
  }, 600000);
}

function displayColours() {
  const html = backgroundColourOptions.map(colour =>
    `<button class="colour" aria-label="${colour.description}" data-class="${colour.themeClass}" style="background:  linear-gradient(
      53deg,
      ${colour.thumbnailColor1},
      ${colour.thumbnailColor2}
    );">
    </div>`).join('');
    colourContainer.innerHTML = html;
}

function displayCatOptions() {
  const html = catOptions.map(colour =>
    `<button class="colour" aria-label="${colour.description}" data-class="${colour.themeClass}" style="background: linear-gradient(45deg, ${colour.thumbnailColor}, ${colour.thumbnailColor} 70%,${colour.eyeColor} 70%)">
    </div>`).join('');
    catOptionsContainer.innerHTML = html;
}

async function playMeow() {
  try {
    await finishedPomodoroSound.play();
    playButton.classList.add("playing");
    playButton.style.display = 'none';
  } catch(err) {
    console.log(err);
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (finishedPomodoroSound.paused) {
    playMeow();
    // finishedPomodoroSound.pause();
  } else {
    finishedPomodoroSound.pause(); 
    playButton.classList.remove("playing");
  }
}

function startPomodoro(secondsLeft) {
  let ms = secondsLeft * 1000;
  startTime = new Date().getTime();
  //set clock to be running
  isClockRunning = true;
  //change display of button
  startButton.innerHTML = 'Pause';
  if(pomodorosFinished === 0 || displayType.innerHTML === '') {
    type === 'Work';
    displayType.innerHTML = 'Work'; 
  }
  clockTimer = setInterval(() => {
    currentTimeLeftInSession = Math.max(0, ms - (new Date().getTime()-startTime));
    updateDisplay();
    if(currentTimeLeftInSession === 0) {
      stopTime = new Date().getTime();
      playMeow();
      clearInterval(clockTimer);
      if(type === 'Work') {
        pomodorosFinished++;
        allTimeCompleted = (allTimeCompletedMin*60) + workSessionDuration;
        allTimeCompletedMin = allTimeCompleted / 60;
        convertAllTimeCompletedMin();
        localStorage.setItem("pomodoroMinsCompleted", allTimeCompletedMin);
        if(pomodorosFinished % 4 === 0) {
          notificationText = 'Meow! Time for a long break.';
        } else {
          notificationText = 'Nice work. Break time!';
        }
        showNotification();
        switchType();
      } else {
        //show break text
        notificationText = 'Break over! Back to work.';
        showNotification();
        switchType();
      }
    }
  }, 250);
}

function showNotification() {
  if(!('Notification' in window)) {
    console.log('Notification not possible');
  } else {
    new Notification('Pomodoro Timer', { body: notificationText, vibrate: [200, 100, 200], icon: notificationImg });
  }
}

function pausePomodoro() {
  if(isClockRunning) {
    clearInterval(clockTimer);
    startButton.innerHTML = 'Resume';
    isClockRunning = false;
    pauseTimeStart = new Date().getTime();
    pauseTimeStart = new Date().getTime(); 
    pauseReminder = setInterval(() => {
      pauseTimeElapsed = new Date().getTime();
      diff = pauseTimeElapsed - pauseTimeStart;
      diffMin = new Date(diff).getMinutes();
      // if timer has been paused a while send a reminder
      if(diffMin === 5) {
        clearInterval(pauseReminder);
        notificationText = 'Would you like to continue working?';
        showNotification();
        pauseTimeStart = 0;
      }
    }, 250);
  } else {
    console.log('Timer not running');
  }
}

function resumePomodoro() {
  if(!isClockRunning) {
    startPomodoro(currentTimeLeftInSession/1000);
    startButton.innerHTML = 'Pause';
    isClockRunning = true;
    clearInterval(pauseReminder);
  } else {
    console.log('I am confused');
  }
}

function pauseOrResumePomodoro() {
if(isClockRunning === false) {
  if(currentTimeLeftInSession === 0) {
    startPomodoro(currentTimeLeftInSession/1000);
  } else {
    resumePomodoro();
  }
} else {
  pausePomodoro();
}
}

function resetPomodoro() {
  stopTime = new Date().getTime();
  elapsedTime = Math.round((stopTime - startTime)/60000);
  clearInterval(clockTimer);
  clearInterval(pauseReminder);
  isClockRunning = false;
  currentTimeLeftInSession = workSessionDuration*1000;
  displayType.innerHTML = '';
  startButton.innerHTML = 'Start';
  displaySessionLog(type);
  type = 'Work';
  currentTaskLabel.disabled = false;
  if(currentTaskLabel.value === 'Break' || currentTaskLabel.value === 'Long break') {
    currentTaskLabel.value = workSessionLabel;
  }
  updateDisplay();
}


function switchType() {
  elapsedTime = Math.round((stopTime - startTime)/60000);
  if(currentTimeLeftInSession === 0) {
    if(type === 'Work') { // if work session has just finished switch to a break
      if(pomodorosFinished % 4 === 0) {
        currentTimeLeftInSession = longBreak;
        displaySessionLog('Work');
        type = 'Break';
        currentTaskLabel.disabled = true;
        currentTaskLabel.value = 'Long break';
        displayType.innerHTML = 'Long break';
        startPomodoro(longBreak);
      } else {
        currentTimeLeftInSession = breakDuration;
        displaySessionLog('Work');
        type = 'Break';
        currentTaskLabel.disabled = true;
        currentTaskLabel.value = 'Break';
        displayType.innerHTML = 'Break';
        startPomodoro(breakDuration);
      }
      
    } else { //otherwise make it a work session
      currentTimeLeftInSession = workSessionDuration;
      type = 'Work';
      displayType.innerHTML = 'Work'; 
      if(currentTaskLabel.value === 'Break' || currentTaskLabel.value === 'Long break') {
        currentTaskLabel.value = workSessionLabel;
      }
      currentTaskLabel.disabled = false;
      displaySessionLog('Break');
      startPomodoro(workSessionDuration);
    }
  } else {
    console.log('I am confused');
  }
}

function updateDisplay() {
  const secondsLeft = currentTimeLeftInSession/1000;
  let hour = Math.floor((currentTimeLeftInSession/1000)/3600);
  let min = parseInt((secondsLeft/60) % 60);
  let seconds = Math.floor(secondsLeft % 60);
  min = (min < 10 ? "0" : "") + min;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  timer.innerText = hour > 0 ? hour + ":" + min +":" + seconds : min +":" + seconds;
}

function displaySessionLog(type) {
  const sessionsList = document.querySelector('#sessions');
  //append li
  const li = document.createElement('li');
  if(type === 'Work') {
    sessionLabel = currentTaskLabel.value ? currentTaskLabel.value : 'Work';
    workSessionLabel = sessionLabel;
  } else {
    sessionLabel = 'Break';
  }
  // elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';
  const text = document.createTextNode(
    `${sessionLabel} : ${elapsedTime} min`
  );
  li.appendChild(text);
if(elapsedTime >= 1) {
  sessionsList.appendChild(li);

}
  
}

function isMenuOpen() {
  // if either menu is open give parent a class of open
  if(!optionsMenuDisplay.classList.contains('closed') || !sessionsMenuDisplay.classList.contains('closed')) {
    menuParent.classList.add('open');
  } else {
    if(optionsMenuDisplay.classList.contains('closed') || sessionsMenuDisplay.classList.contains('closed')) {
    menuParent.classList.remove('open');
    }
  }
}

async function waitThenToggleVisibility(target, visibility, delay = 500) {
  let targetWrap = target.querySelector('.menuWrap');
  let targetCredit = target.querySelector('.menuWrap');
  await wait(delay);
  targetWrap.style.visibility = visibility;
  targetCredit.style.visibility = visibility;
}

async function closeMenu() {
  // debugger;
  isMenuOpen();
  menuParent.classList.remove('open');
  if(!sessionsMenuDisplay.classList.contains('closed')) {
    waitThenToggleVisibility(sessionsMenuDisplay, "hidden");
    sessionsMenuDisplay.classList.remove('active');
    // optionsMenuDisplay.classList.remove('active');
    sessionsMenuDisplay.classList.add('closed');
  }
  if(!optionsMenuDisplay.classList.contains('closed')) {
    waitThenToggleVisibility(optionsMenuDisplay, "hidden");
    optionsMenuDisplay.classList.add('closed');
    await wait(500);
    optionsMenuDisplay.classList.remove('active');
  }

  
}

// Start clock if button is pressed
startButton.addEventListener('click', () => {
  // toggleClock();
  // startPomodoro(workSessionDuration);
  pauseOrResumePomodoro();
});
// Stop clock if button is pressed
stopButton.addEventListener('click', () => {
  // toggleClock(true);
  resetPomodoro();
});
window.addEventListener('load',updateDisplay);
window.addEventListener('load', updateTime);
// If options menu is clicked open menu. 

async function openMenu(e, targetMenu, nonTargetMenu) {
e.preventDefault();
if(nonTargetMenu.classList.contains('active')) {
  nonTargetMenu.classList.remove('active');
  waitThenToggleVisibility(nonTargetMenu, "hidden", 0);
}
if(targetMenu.classList.contains('active')) {
  closeMenu();
} else {
  waitThenToggleVisibility(targetMenu, "visible", 0);
  targetMenu.classList.add('active');
  // await wait(450);
  targetMenu.classList.remove('closed');
}

isMenuOpen();
}

optionsMenuBtn.addEventListener('click', function (e) { openMenu(e, optionsMenuDisplay, sessionsMenuDisplay); });
sessionsMenuBtn.addEventListener('click', function (e) { openMenu(e, sessionsMenuDisplay, optionsMenuDisplay); });


window.addEventListener('keydown', function(e) {
  if(e.key == 'Escape') {
    closeMenu();
  }
});

// Click outside of menu closes menu if open
window.addEventListener('click', function(event) {
  if(menuParent.classList.contains('open') && !event.target.classList.contains('menu_btn')) {
    const isOutside = !event.target.closest('#menuBtnContainer') || !!event.target.closest('.menuButtons');
    if(isOutside) {      
      closeMenu();
    }
  }
});

// Pause transitions during window resize
window.addEventListener("resize", () => {
  document.body.classList.add('noTransition');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('noTransition');
  }, 400);
});

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch(e) {
    return false;
  }
  return true;
}

function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // Whatever the user answers, we make sure Chrome stores the information
    if(!('permission' in Notification)) {
      Notification.permission = permission;
    }

    // set the button to shown or hidden, depending on what the user answers
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
        requestPermissionBtn.style.display = 'block';
    } else {
      requestPermissionBtn.style.display = 'none';
    }
  }
  // Check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
    requestPermissionBtn.style.display = 'none';
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}

function convertAllTimeCompletedMin() {
  let hours = Math.floor(allTimeCompletedMin / 60);
  let mins = allTimeCompletedMin % 60;
  timeCompletedDisplay.innerText = hours > 0 ? `${hours} hrs ${mins} min` : `${mins} min` ;
}
// retreive themes on load
function retrieveSettings() {
  let currentTheme = localStorage.getItem('bgTheme');
  let currentCat = localStorage.getItem('catColour');
  let titleVisibility =   localStorage.getItem("titleVisible");
  allTimeCompletedMin = localStorage.getItem("pomodoroMinsCompleted");
  let backgroundSwatchContainer = document.querySelector('#colourContainer');
  let backgroundSwatchColour = backgroundSwatchContainer.querySelectorAll('button');
  let catSwatchContainer = document.querySelector('#catBgContainer');
  let catSwatchColour = catSwatchContainer.querySelectorAll('button');

  if(allTimeCompletedMin > 0) {
    convertAllTimeCompletedMin();
  }
  if(currentTheme !== null) {
  document.body.className = currentTheme;
  //loop over colours and add active class
  
  backgroundSwatchColour.forEach(colour => {
    if(colour.getAttribute('data-class') == document.body.className) {
      colour.classList.add('active');
    }
  });
  }
  if(currentCat !== null) {
    document.querySelector('#catContainer').className = currentCat;
    catSwatchColour.forEach(colour => {
      if(colour.getAttribute('data-class') == currentCat) {
        colour.classList.add('active');
      }
    });
  }
  if(titleVisibility === "show") {
    titleToggle.innerText = "show title";
    title.style.display = 'none';
  } else {
    titleToggle.innerText = "hide title";
    title.style.display = 'block';
  }

}

// Ask for permission to show notifications
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  requestPermissionBtn.style.display = 'none';
} else {
  requestPermissionBtn.addEventListener('click', askNotificationPermission);
}
// Hide button in options on load if notifications already allowed
window.addEventListener('load', function() {
  if(Notification.permission === 'granted') {
    requestPermissionBtn.style.display = 'none';
    }
})

//Hide sound permissions if on desktop
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  playButton.style.display = 'block';
  playButton.style.opacity = "1";
 } else {
  playButton.style.display = 'none';
  playButton.parentNode.remove();
 }
 let titleToggle = document.querySelector('#titleToggle');

 // Option for toggling h1 display
 titleToggle.addEventListener('click', () => {
if(titleToggle.innerText === "hide title") {
  titleToggle.innerText = "show title";
  title.style.display = 'none';
  localStorage.setItem("titleVisible", "show");
}
else {
  titleToggle.innerText = "hide title";
  title.style.display = 'block';
  localStorage.setItem("titleVisible", "hide");
}
 });

 displayColours();
 displayCatOptions();
 retrieveSettings();

colourContainer.addEventListener('click', function(e) {
  const bgColour = e.target.getAttribute('data-class');
  // push/overwrite active to localStorage
  localStorage.setItem('bgTheme', bgColour);
  const selected = e.target;
  let colours = document.querySelectorAll('#colourContainer .colour');
  if(e.target.matches('.colour')) {
    document.body.className = bgColour;
    colours.forEach(colour => {
      // remove active class if already on there
      if(colour.classList.contains('active')) {
      colour.classList.remove('active');
    }});
    // add active class to the newly selected colour
    selected.classList.add('active');
  }
});

catOptionsContainer.addEventListener('click', function(e) {
  const catColour = e.target.getAttribute('data-class');
  // push/overwrite active to localStorage
  localStorage.setItem('catColour', catColour);
  // get the selected colour
  const selected = e.target;
  let colours = document.querySelectorAll('#catBgContainer .colour');
  if(e.target.matches('.colour')) {
    document.querySelector('#catContainer').className = catColour;
    colours.forEach(colour => {
     // remove active class if already on there
      if(colour.classList.contains('active')) {
      colour.classList.remove('active');
    }});
    // add active class to the newly selected colour
    selected.classList.add('active');
  }
});

// change the times
setTimeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //convert min to seconds
  workSessionDuration = (changeWorkTimeInput.value * 60);
  currentTimeLeftInSession = (changeWorkTimeInput.value * 60);
  breakDuration = (changeBreakTimeInput.value * 60);
  longBreak = (changeLongBreakTimeInput.value * 60);
  resetPomodoro();
  closeMenu();
})

// event listener for meow button that shows on mobile
playButton.addEventListener("click", handlePlayButton, false);

// if close button is clicked close menu
closeMenuBtn.forEach(btn => btn.addEventListener('click', closeMenu));