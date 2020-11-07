let textShade = "";

const letterFat = 15;

for (let i = 1; i < letterFat; i++) {
  textShade += `1px ${i}px 1px gray, `;
}
for (let i = 1; i < letterFat; i++) {
  textShade += `${i}px ${i}px 1px gray, `;
}

textShade += " 1px 1px 1px gray";

console.log(textShade);

// $(".nav-link").css("text-shadow", textShade);

$(".nav-link").mouseover((event) => {
  let bgColor;
  console.log(event.target.id);
  switch (event.target.id) {
    case "1":
      bgColor = "red";
      break;
    case "2":
      bgColor = "dodgerblue";
      break;
    case "3":
      bgColor = "green";
      break;
    case "4":
      bgColor = "#0aeac0";
      break;
    default:
      bgColor = "white";
      break;
  }

  $(".container-fluid").css("background", bgColor);
  $("body").css("background", bgColor);
});
