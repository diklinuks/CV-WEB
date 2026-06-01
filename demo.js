// Click-to-load live demo embeds.
// The heavy ML demo only downloads when the visitor clicks — keeps page load fast.
// Each demo: <div class="demo" data-demo="URL" data-title="..."> ... </div>
(function () {
  "use strict";
  document.querySelectorAll(".demo[data-demo]").forEach(function (el) {
    var loader = el.querySelector(".demo__load");
    if (!loader) return;
    loader.addEventListener("click", function () {
      var frame = el.querySelector(".demo__frame");
      if (!frame) return;
      var iframe = document.createElement("iframe");
      iframe.src = el.getAttribute("data-demo");
      iframe.title = el.getAttribute("data-title") || "Live demo";
      iframe.loading = "lazy";
      iframe.setAttribute("allow", "fullscreen; camera; microphone; accelerometer; gyroscope");
      iframe.setAttribute("allowfullscreen", "");
      // Sandbox: let the demo run scripts and same-origin behaviour, but isolate it.
      iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads");
      loader.setAttribute("hidden", "");
      frame.appendChild(iframe);
      el.classList.add("is-loaded");
    });
  });
})();
