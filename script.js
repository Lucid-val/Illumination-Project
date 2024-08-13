const mouseevent = document.documentElement;

mouseevent.addEventListener("mousemove", (e) => {
  mouseevent.style.setProperty("--x", e.clientX + "px");
  mouseevent.style.setProperty("--y", e.clientY + "px");
});
