// Publication entries (see _layouts/bib.liquid).
// - Demo videos: muted loops that play only while on screen, never for users who
//   ask for reduced motion, and stay paused once the visitor pauses them.
// - "Cite" copies the entry's BibTeX to the clipboard.
// - "Poster" opens the poster PDF in an in-page <dialog>.
// The bib layout includes this script once per entry, so it guards against
// running more than once.
(function () {
  if (window.__publicationsInit) return;
  window.__publicationsInit = true;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const setPaused = (wrap, paused) => wrap.classList.toggle("is-paused", paused);

  const play = (video) => {
    const attempt = video.play();
    if (attempt && attempt.catch) attempt.catch(() => setPaused(video.parentElement, true));
  };

  const initVideos = () => {
    const wraps = document.querySelectorAll(".pub-video");
    if (!wraps.length) return;

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach(({ target, isIntersecting }) => {
                if (target.dataset.userPaused === "true" || reduceMotion.matches) return;
                if (isIntersecting) play(target);
                else target.pause();
              });
            },
            { threshold: 0.35 }
          )
        : null;

    wraps.forEach((wrap) => {
      const video = wrap.querySelector("video");
      const button = wrap.querySelector(".pub-video-toggle");
      video.addEventListener("play", () => setPaused(wrap, false));
      video.addEventListener("pause", () => setPaused(wrap, true));

      const toggle = () => {
        if (video.paused) {
          video.dataset.userPaused = "false";
          play(video);
        } else {
          video.dataset.userPaused = "true";
          video.pause();
        }
      };
      button.addEventListener("click", toggle);
      video.addEventListener("click", toggle);

      if (observer) observer.observe(video);
      else if (!reduceMotion.matches) play(video);
    });
  };

  const copyText = (text) => {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      ok ? resolve() : reject(new Error("copy failed"));
    });
  };

  const initCite = () => {
    document.querySelectorAll(".cite-btn").forEach((button) => {
      const source = button.parentElement.querySelector(".bib-src");
      const label = button.querySelector(".cite-label");
      if (!source || !label) return;
      let timer;
      button.addEventListener("click", () => {
        copyText(source.value).then(
          () => {
            button.classList.add("is-copied");
            label.textContent = "Copied";
            clearTimeout(timer);
            timer = setTimeout(() => {
              button.classList.remove("is-copied");
              label.textContent = "Cite";
            }, 1600);
          },
          () => {
            label.textContent = "Copy failed";
          }
        );
      });
    });
  };

  // Poster overlay: a single native <dialog> shared by every "Poster" link.
  // Without <dialog> support (or with a modifier-click) the link simply opens
  // the PDF, so nothing is lost when this code does not run.
  const initPosters = () => {
    const triggers = document.querySelectorAll("a.poster-btn");
    if (!triggers.length || typeof HTMLDialogElement === "undefined") return;

    // Browsers that cannot render PDFs inline (notably Chrome on Android)
    // report pdfViewerEnabled === false; show a link-out there instead of a
    // blank frame.
    const canShowInline = navigator.pdfViewerEnabled !== false;
    const root = document.documentElement;
    let dialog, titleEl, openLink, closeButton, body, lastTrigger;

    const lockScroll = () => {
      const scrollbar = window.innerWidth - root.clientWidth;
      root.classList.add("has-modal");
      if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    };
    const unlockScroll = () => {
      root.classList.remove("has-modal");
      document.body.style.paddingRight = "";
    };

    const build = () => {
      dialog = document.createElement("dialog");
      dialog.className = "poster-dialog";
      dialog.setAttribute("aria-labelledby", "poster-dialog-title");
      dialog.innerHTML = `
        <div class="poster-dialog__bar">
          <h2 class="poster-dialog__title" id="poster-dialog-title">Poster</h2>
          <a class="poster-dialog__open" target="_blank" rel="noopener">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i><span>Open PDF</span>
          </a>
          <button type="button" class="poster-dialog__close" aria-label="Close poster">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <div class="poster-dialog__body"></div>`;
      document.body.appendChild(dialog);
      titleEl = dialog.querySelector(".poster-dialog__title");
      openLink = dialog.querySelector(".poster-dialog__open");
      closeButton = dialog.querySelector(".poster-dialog__close");
      body = dialog.querySelector(".poster-dialog__body");

      closeButton.addEventListener("click", () => dialog.close());
      // The dialog has no padding and its children fill it, so a click whose
      // target is the dialog itself landed on the backdrop.
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
      // Escape fires "cancel" and closes natively; every path ends here.
      dialog.addEventListener("close", () => {
        body.replaceChildren(); // unload the PDF
        unlockScroll();
        if (lastTrigger) lastTrigger.focus();
      });
    };

    const open = (trigger) => {
      if (!dialog) build();
      lastTrigger = trigger;
      const href = trigger.href;
      const label = trigger.dataset.posterTitle || "Poster";
      titleEl.textContent = label;
      openLink.href = href;

      if (canShowInline) {
        const frame = document.createElement("iframe");
        // Ask the viewer to fit the whole page (Chrome: view=Fit, Firefox: zoom=page-fit).
        frame.src = `${href}#view=Fit&zoom=page-fit`;
        frame.title = label;
        body.replaceChildren(frame);
      } else {
        const fallback = document.createElement("div");
        fallback.className = "poster-fallback";
        fallback.innerHTML = `<p>This browser can’t show PDFs inside the page.</p>
          <a href="${href}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i>Open the poster</a>`;
        body.replaceChildren(fallback);
      }

      lockScroll();
      dialog.showModal();
      closeButton.focus();
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        open(trigger);
      });
    });
  };

  const init = () => {
    initVideos();
    initCite();
    initPosters();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
