console.log("Satyam Jha");
const pretotalbill = document.getElementById("pretotalbill");
const totalamount = document.getElementById("totalamount");
const peoplecount = document.getElementById("peoplecount");
const finaltipamount = document.getElementById("finaltipamount");

const customtipamntinput = document.getElementById("customtipamntinput");
let reset = document.getElementById("reset");

peoplecount.addEventListener("input", mainfunct);
pretotalbill.addEventListener("input", mainfunct);
customtipamntinput.addEventListener("input", mainfunct);
reset.addEventListener("click", resetfunct);

// peopleInput
function mainfunct() {
  if (peoplecount.value == 0) {
    error.style.display = "block";
    error.style.color = "red";
  } else if (customtipamntinput.value >= 1) {
    finaltipamount.innerHTML =
      ((customtipamntinput.value / 100) * pretotalbill.value) /
      peoplecount.value
    totalamount.innerHTML = parseFloat(
      pretotalbill.value / peoplecount.value +
        parseFloat(finaltipamount.innerHTML)
    ).toFixed(2);
    finaltipamount.style.marginTop = "20px"
    finaltipamount.style.fontSize = "30px" 
    totalamount.style.marginTop = "20px"
    totalamount.style.fontSize = "30px"
  } else if (customtipamntinput.value == 0) {
    finaltipamount.value = ""

    if (peoplecount.value >= 1) {
      error.style.display = "none"
      customtipamntinput.value == "0"
      tipbutton.forEach((tipamnt) => {
        tipamnt.addEventListener("click", tipcalc);
      });

      function tipcalc(event) {
        tipbutton.forEach((tipamnt) => {
          event.target.style.backgroundColor = "hsl(172, 67%, 45%)"
          if (event.target.innerHTML !== tipamnt.innerHTML){
            event.target.style.backgroundColor = "none"

          }
          if (event.target.innerHTML == tipamnt.innerHTML) {
            customtipamntinput.value == "0";

            buttontipfinal =
              ((parseFloat(tipamnt.innerHTML) / 100) * pretotalbill.value) /
              parseFloat(peoplecount.value);

            if (customtipamntinput.value == 0) {
              if (peoplecount.value >= 1) {
                finaltipamount.innerHTML = buttontipfinal;
                error.style.display = "none";
                totalamount.innerHTML =
                  (parseFloat(tipamnt.innerHTML) +
                    parseFloat(pretotalbill.value)) /
                  peoplecount.value;
                error.style.display = "none";
                finaltipamount.style.marginTop = "20px";
                finaltipamount.style.fontSize = "30px";
                totalamount.style.marginTop = "20px";
                totalamount.style.fontSize = "30px";
              }
            }
          }
        });
      }
    }
  }
}

const tipbutton = document.querySelectorAll(".tipamnt");

tipbutton.forEach((tipamnt) => {
  tipamnt.addEventListener("click", tipcalc);
});

function tipcalc(event) {
  tipbutton.forEach((tipamnt) => {
    if (event.target.innerHTML == tipamnt.innerHTML) {
      customtipamntinput.value = "0";

      buttontipfinal =
        ((parseFloat(tipamnt.innerHTML) / 100) * pretotalbill.value) /
        parseFloat(peoplecount.value);

      if (customtipamntinput.value == 0) {
        if (peoplecount.value >= 1) {
          finaltipamount.innerHTML = buttontipfinal;
          tipamnt.classList.add("active-tip");
          totalamount.innerHTML =
            (parseFloat(tipamnt.innerHTML) + parseFloat(pretotalbill.value)) /
            peoplecount.value;
          finaltipamount.style.marginTop = "20px";
          finaltipamount.style.fontSize = "30px";
          totalamount.style.marginTop = "20px";
          totalamount.style.fontSize = "30px";
          error.style.display = "none";
        } else {
          error.style.display = "block";
          error.style.color = "red";
        }
      }
    }
  });
}

peoplecount.addEventListener("input", removeerror);

function removeerror() {
  if (peoplecount.input >= 1) {
    error.style.display = "none";
  }
}

// resetfunct
function resetfunct() {
  customtipamntinput.value = "";
  peoplecount.value = "";
  pretotalbill.value = "";
  totalamount.innerHTML = "$ 0.00";
  finaltipamount.innerHTML = "$ 0.00";
  error.style.display = "none";
}
