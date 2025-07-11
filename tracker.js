window.onload = () => {
  const sessionStart = Date.now();
  let maxScroll = 0;

  document.addEventListener("scroll", () => {
    const currentScroll = window.scrollY + window.innerHeight;
    maxScroll = Math.max(maxScroll, currentScroll);
  });

  window.addEventListener("beforeunload", () => {
    const duration = Math.floor((Date.now() - sessionStart) / 1000);
    const behavior = {
      time: new Date().toISOString(),
      duration_seconds: duration,
      scroll_position: maxScroll,
      screen_height: window.innerHeight
    };

    localStorage.setItem("schwila_behavior", JSON.stringify(behavior));
  });
};

