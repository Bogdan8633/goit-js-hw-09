let t=null;const e={startBtnEL:document.querySelector("button[data-start]"),stopBtnEL:document.querySelector("button[data-stop]")};e.startBtnEL.addEventListener("click",(()=>{t=setInterval((()=>{console.log("Нажата кнопка Start"),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.stopBtnEL.setAttribute("disabled",!0),e.startBtnEL.addEventListener("click",(()=>{e.startBtnEL.setAttribute("disabled",!0),e.stopBtnEL.removeAttribute("disabled")})),e.stopBtnEL.addEventListener("click",(()=>{clearInterval(t),console.log("Інтервал зупинено")})),e.stopBtnEL.addEventListener("click",(()=>{e.startBtnEL.removeAttribute("disabled"),e.stopBtnEL.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.4e7c48d7.js.map