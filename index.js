let mediaQuery = window.matchMedia("(max-width: 1279px)");

function myFunction() {
  if (mediaQuery.matches) {
    document.body.innerHTML = `
          <h1>Please use a device of width larger than 1280px</h1>
    `;
    alert("mediaQuery matched");
  }
}

document.body.addEventListener("resize", myFunction);
