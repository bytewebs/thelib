let modeBtn = document.querySelector("#mode");
let currmode = "dark";
modeBtn.addEventListener("click", () => {
    if (currmode === "dark") {
        currmode = "light";
        document.querySelector('body').classList.add("light");
        document.querySelector('body').classList.remove("dark");
    } else {
        currmode = "dark";
        document.querySelector('body').classList.add("dark");
        document.querySelector('body').classList.remove("light");
    }
});
