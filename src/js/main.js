const courseLinks = document.querySelectorAll(".course-grid a");

courseLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("test");
    fathom.trackGoal("ISFUV4XU", 0);
  });
});
