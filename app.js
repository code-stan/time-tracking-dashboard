const jsonData = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`;


/*============================
          |VARIABLE|
==============================*/
const parsedData = JSON.parse(jsonData);
const navButton = document.querySelectorAll(".nav-btn");
const previous = document.querySelectorAll(".previous");
const current = document.querySelectorAll(".current-time");

/*============================
          |DAILY|
==============================*/
navButton[0].addEventListener("click", () =>{
    //NAV COLOR
    navButton[0].classList.remove("first-nav-btn");

    navButton[0].classList.add("main-btn");

    navButton[1].classList.remove("active-color");
    navButton[2].classList.remove("active-color");

    // WORK
    current[0].textContent = `${parsedData[0].timeframes.daily.current}hrs`;
    previous[0].textContent = `Yesterday - ${parsedData[0].timeframes.daily.previous}hrs`;

    //PLAY
    current[1].textContent = `${parsedData[1].timeframes.daily.current}hr`;
    previous[1].textContent = `Yesterday - ${parsedData[1].timeframes.daily.previous}hrs`;

    //STUDY
    current[2].textContent = `${parsedData[2].timeframes.daily.current}hr`;
    previous[2].textContent = `Yesterday - ${parsedData[2].timeframes.daily.previous}hr`;

    //EXCERISE
    current[3].textContent = `${parsedData[3].timeframes.daily.current}hr`;
    previous[3].textContent = `Yesterday - ${parsedData[3].timeframes.daily.previous}hr`;

    //SOCIAL
    current[4].textContent = `${parsedData[4].timeframes.daily.current}hr`;
    previous[4].textContent = `Yesterday - ${parsedData[4].timeframes.daily.previous}hrs`;

    //SELF CARE
    current[5].textContent = `${parsedData[5].timeframes.daily.current}hr`;
    previous[5].textContent = `Yesterday - ${parsedData[5].timeframes.daily.previous}hr`;
});

/*============================
          |WEEKLY|
==============================*/

navButton[1].addEventListener("click", () =>{
    //NAV COLOR
    navButton[0].classList.remove("main-btn");

    navButton[0].classList.add("first-nav-btn");
    
    navButton[1].classList.add("active-color")
    navButton[2].classList.remove("active-color");

    // WORK
    current[0].textContent = `${parsedData[0].timeframes.weekly.current}hrs`;
    previous[0].textContent = `Last Week - ${parsedData[0].timeframes.weekly.previous}hrs`;

    //PLAY
    current[1].textContent = `${parsedData[1].timeframes.weekly.current}hrs`;
    previous[1].textContent = `Last Week - ${parsedData[1].timeframes.weekly.previous}hrs`;

    //STUDY
    current[2].textContent = `${parsedData[2].timeframes.weekly.current}hrs`;
    previous[2].textContent = `Last Week - ${parsedData[2].timeframes.weekly.previous}hrs`;

    //EXCERISE
    current[3].textContent = `${parsedData[3].timeframes.weekly.current}hrs`;
    previous[3].textContent = `Last Week - ${parsedData[3].timeframes.weekly.previous}hrs`;

    //SOCIAL
    current[4].textContent = `${parsedData[4].timeframes.weekly.current}hrs`;
    previous[4].textContent = `Last Week - ${parsedData[4].timeframes.weekly.previous}hrs`;

    //SELF CARE
    current[5].textContent = `${parsedData[5].timeframes.weekly.current}hrs`;
    previous[5].textContent = `Last Week - ${parsedData[5].timeframes.weekly.previous}hrs`;
})


/*============================
          |MONTHLY|
==============================*/

navButton[2].addEventListener("click", () =>{
    //NAV COLOR
    navButton[0].classList.remove("main-btn");
    navButton[0].classList.add("first-nav-btn");
    
    navButton[1].classList.remove("active-color");

    navButton[2].classList.add("active-color");
    // WORK
    current[0].textContent = `${parsedData[0].timeframes.monthly.current}hrs`;
    previous[0].textContent = `Last Month - ${parsedData[0].timeframes.monthly.previous}hrs`;

    //PLAY
    current[1].textContent = `${parsedData[1].timeframes.monthly.current}hrs`;
    previous[1].textContent = `Last Month - ${parsedData[1].timeframes.monthly.previous}hrs`;

    //STUDY
    current[2].textContent = `${parsedData[2].timeframes.monthly.current}hrs`;
    previous[2].textContent = `Last Month - ${parsedData[2].timeframes.monthly.previous}hrs`;

    //EXCERISE
    current[3].textContent = `${parsedData[3].timeframes.monthly.current}hrs`;
    previous[3].textContent = `Last Month - ${parsedData[3].timeframes.monthly.previous}hrs`;

    //SOCIAL
    current[4].textContent = `${parsedData[4].timeframes.monthly.current}hrs`;
    previous[4].textContent = `Last Month - ${parsedData[4].timeframes.monthly.previous}hrs`;

    //SELF CARE
    current[5].textContent = `${parsedData[5].timeframes.monthly.current}hrs`;
    previous[5].textContent = `Last Month - ${parsedData[5].timeframes.monthly.previous}hrs`;
})
