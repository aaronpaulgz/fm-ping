let $btn = document.getElementById("btn");
let $input = document.getElementById("input");

const validateMail = () => {
  let $input = document.getElementById("input");
  if ($input.value.length < 6) {
    $input.style.border = "solid 1px hsl(354, 100%, 66%)";
    $input.insertAdjacentHTML(
      "afterend",
      '<div class="warn--container"><p class="warn">Please provide a valid email address</p></div> '
    );
  } else {
  }
};

$input.addEventListener("focus", () => {
  $input.style.border = "";
  $input.nextElementSibling.style.display = "none";
});
