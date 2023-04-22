document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  
  // ================================================
  // OPTIONAL JAVASCRIPT FOR BUTTON SHINE EFFECT.
  // ================================================
  // Button code from https://codepen.io/Joanverhulst/pen/YzJXeKw.
  
  const btns = document.querySelectorAll(".btn");
  
  btns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const bounds = btn.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const translateX = Math.min(
        Math.max((x / btn.offsetWidth - 0.5) * 200, -100),
        100
      );
      const translateY = Math.min(
        Math.max((y / btn.offsetHeight - 0.5) * 200, -100),
        100
      );
      btn.style.setProperty("--mouse-x", `${translateX}%`);
      btn.style.setProperty("--mouse-y", `${translateY}%`);
    });
  
    btn.addEventListener("mouseleave", () => {
      btn.style.setProperty("--mouse-x", "-100%");
      btn.style.setProperty("--mouse-y", "-100%");
    });
  });
  