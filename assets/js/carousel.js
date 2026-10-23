/* Stepping-stones carousel: side arrows and position dots over a native
   scroll-snap track, plus GIF-like videos that only play while visible (and not
   at all when the visitor prefers reduced motion). Scrolling itself is CSS. */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const behavior = () => (reduceMotion.matches ? "auto" : "smooth");

  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".stones-track");
    const nav = root.querySelector(".stones-nav");
    if (!track || !nav) return;
    const prev = nav.querySelector(".stones-prev");
    const next = nav.querySelector(".stones-next");
    const cards = Array.from(track.children);
    const media = track.querySelector(".stone-media");

    // One dot per card; the cards currently in view are highlighted.
    const dotsBox = root.querySelector(".stones-dots");
    const dots = cards.map((card) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.tabIndex = -1;
      dot.addEventListener("click", () => {
        track.scrollTo({ left: card.offsetLeft, behavior: behavior() });
      });
      if (dotsBox) dotsBox.appendChild(dot);
      return dot;
    });

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const scrollable = max > 4;
      nav.hidden = !scrollable;
      if (dotsBox) dotsBox.hidden = !scrollable;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= max - 4;
      // Centre the arrows on the pictures, whatever width the cards are.
      if (media) nav.style.height = media.offsetHeight + "px";
      const left = track.scrollLeft;
      const right = left + track.clientWidth;
      cards.forEach((card, i) => {
        const start = card.offsetLeft;
        const mid = start + card.offsetWidth / 2;
        dots[i].classList.toggle("is-active", mid > left && mid < right);
      });
    };
    const go = (dir) => {
      track.scrollBy({ left: dir * track.clientWidth, behavior: behavior() });
    };

    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    const videos = track.querySelectorAll("video");
    if (!videos.length) return;
    const play = (video) => {
      const attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(() => {});
    };
    if (!("IntersectionObserver" in window)) {
      if (reduceMotion.matches) videos.forEach((v) => v.pause());
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && !reduceMotion.matches) play(target);
          else target.pause();
        });
      },
      { threshold: 0.35 }
    );
    videos.forEach((video) => {
      video.pause();
      observer.observe(video);
    });
  });
})();
