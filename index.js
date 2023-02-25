document.addEventListener("DOMContentLoaded", ready); 

function ready() {
  let x = document.getElementById("x");
  let hamb = document.getElementById("hamb");
  let nav = document.getElementById("mobile-nav-bottom");

  open = () => {
    x.style.display = "block";
    hamb.style.display = "none";
    nav.style.display = "block";
  }

  close = () => {
    x.style.display = "none";
    hamb.style.display = "block";
    nav.style.display = "none";
  }

  x.addEventListener("click", close);
  hamb.addEventListener("click", open);



  //initalize buttons and content
  let content = document.querySelectorAll(".content");
  let btns = document.querySelectorAll(".btn");

  //initialize sections
  for (let i = 0; i < content.length; i++) {
    content[i].classList.add("hide");
    content[0].classList.remove("hide");
    content[0].classList.add("show");
  }

  const activeSections = (activeBtn, inactiveBtns, activeSec, inactiveSecs) => {
    for (let i = 0; i < content.length; i++) {
      inactiveSecs[i].classList.add("hide");
      inactiveSecs[i].classList.remove("show");
      activeSec.classList.remove("hide");
      activeSec.classList.add("show");
      
      //you don't need this
      // activeBtn.style.color = "#77fcfd";
      // inactiveBtns.forEach(btn => {
      //   if (btn !== activeBtn) {
      //     btn.style.color = "white";
      //   }
      // });
    }
  };

  // adding event listeners to buttons
  for (let i = 0; i < btns.length; i++) {
    btns[0].addEventListener("click", function() {
    activeSections(btns[0], btns, content[0], content);
    });
    btns[1].addEventListener("click", function() {
      activeSections(btns[1], btns, content[1], content);
    });
    btns[2].addEventListener("click", function() {
      activeSections(btns[2], btns, content[2], content);
    });
    btns[3].addEventListener("click", function() {
      activeSections(btns[3], btns, content[3], content);
    });
    btns[4].addEventListener("click", function() {
      activeSections(btns[0], btns, content[0], content);
    });
    btns[5].addEventListener("click", function() {
      activeSections(btns[1], btns, content[1], content);
    });
    btns[6].addEventListener("click", function() {
      activeSections(btns[2], btns, content[2], content);
    });
    btns[7].addEventListener("click", function() {
      activeSections(btns[3], btns, content[3], content);
    });
    btns[8].addEventListener("click", function() {
      activeSections(btns[2], btns, content[2], content);
    });
    btns[9].addEventListener("click", function() {
      activeSections(btns[1], btns, content[1], content);
    });
  }

  //the experience section logic
  let experienceTabs = document.querySelectorAll(".xpbutton");

  let cvCont = document.getElementById("cv-content");
  let skillsCont = document.getElementById("skills-content");
  cvCont.classList.add("hidexp")
  for (let i = 0; i < experienceTabs.length; i++) {
    console.log(experienceTabs)
    //with this you initialize the css classes so you don't have to in html
    setActiveButton(experienceTabs[0], experienceTabs[1]);
    
    experienceTabs[0].addEventListener("click", function() {
      skillsCont.classList.add("showxp");
      skillsCont.classList.remove("hidexp");
      cvCont.classList.add("hidexp");
      cvCont.classList.remove("showxp");
  
      setActiveButton(experienceTabs[0], experienceTabs[1]);
    });
    experienceTabs[1].addEventListener("click", function() {
      cvCont.classList.remove("hidexp");
      cvCont.classList.add("showxp");
      skillsCont.classList.remove("showxp");
      skillsCont.classList.add("hidexp");
   
      setActiveButton(experienceTabs[1], experienceTabs[0]);
    });
  }

  function setActiveButton(activeBtn, inactiveBtn) {
    activeBtn.classList.add("active");
    activeBtn.classList.remove("inactive");
    inactiveBtn.classList.remove("active");
    inactiveBtn.classList.add("inactive");
  } 
}
  

























/* <div class="content-btn">
  <div class="btn-1 btn" id="btn-1">first button</div>
  <div class="btn-2 btn" id="btn-2">seccond button</div>
</div>
<div class="content-wrap">
  <div class="content">
    <div class="cont-1" id="cont-1">
      <h3>this is a the content 1</h3>
      <p>thsi is going to be the paragraph content for the second content, and it's going to be a little bit larger to show some decent content length</p>
      <p>thsi is going to be the paragraph content for the second content, and it's going to be a little bit larger to show some decent content length</p>
    </div>
    <div class="cont-2" id="cont-2">
      <h3>this is a the content 2</h3>
      <p>thsi is going to be the paragraph content for the second content, and it's going to be a little bit larger to show some decent content length</p>
      <p>thsi is going to be the paragraph content for the second content, and it's going to be a little bit larger to show some decent content length</p>
      <p>thsi is going to be the paragraph content for the second content, and it's going to be a little bit larger to show some decent content length</p>
      <p>thsi is going to be the paragraph content for the second content, and it's going to be a little bit larger to show some decent content length</p>
    </div>
  </div>
  </div>

<section>
  <h3>and then theres some more content over here</h3>
  <p>this is a test this is a testthis is a test this is a test this is a test this is a test this is a test this is a testthis is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a testthis is a test this is a testthis is a test</p>
</section>


* {
    margin: 0px;
    box-sizing: border-box;
  }
  
  body {
    border: 1px solid red;
  }
  
  .content-btn {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 30px 0px;
  }
  
  .btn:hover {
    cursor: pointer;
  }
  .active {
    color: black;
    background-color: #939393;
  }
  .inactive {
    color: black;
    background-color: #dedcdc;
  }
  .inactive:hover {
    background-color: #939393;
  }
  
  .btn-1 {
    padding: 0px 10px;
  }
  .btn-2 {
    border-left: 1px solid black;
    margin: 0px 10px;
    padding: 0px 10px;
  }
  
  .content-wrap {
    display: flex;
    justify-content: center;
  }
  
  .content {
    border: 1px solid blue;
    width: 250px;
  }
  .cont-1, .cont-2 {
    transition: all 0.5s;
    position: relative;
  }
  .cont-1 {
    background-color: #dae8ff;
    height: auto;
    overflow: hidden;
  }
  .cont-2 {
    background-color: #ffdada;
    height: 0px;
    overflow: hidden;
    opacity: 0;
  }
  
  .show {
    opacity: 1;
    z-index: 3;
    height: auto;
  }
  .hide {
    opacity: 0;
    z-index: -3;
    height: 0px;
  }
  
  section {
    padding: 100px;
    border: 1px solid green;
  }

//initialize buttons
let buttons = document.querySelectorAll(".btn");

//content
let contOne = document.getElementById("cont-1");
let contTwo = document.getElementById("cont-2");

//for loop to change buttons classes
for (let i = 0; i < buttons.length; i++) {
  //with this you initialize the css classes so you don't have to in html
  setActiveButton(buttons[0], buttons[1]);
  
  buttons[0].addEventListener("click", function() {
    contOne.classList.add("show");
    contOne.classList.remove("hide");
    contTwo.classList.add("hide");
    contOne.classList.remove("show");

    setActiveButton(buttons[0], buttons[1]);
  });
  buttons[1].addEventListener("click", function() {
    contOne.classList.add("hide");
    contOne.classList.remove("show");
    contTwo.classList.add("show");
    contTwo.classList.remove("hide");
 
    setActiveButton(buttons[1], buttons[0]);
  });
  
}

//funtion to 
function setActiveButton(activeBtn, inactiveBtn) {
  activeBtn.classList.add("active");
  activeBtn.classList.remove("inactive");
  inactiveBtn.classList.add("inactive");
  inactiveBtn.classList.remove("active");
} */

