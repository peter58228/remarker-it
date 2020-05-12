// init VUE
for (var el of document.querySelectorAll(".vue")) {
  new Vue({
    el: el
  });
}

// init cards
var preview_win_cards = document.querySelectorAll(".preview-win");
for (var card of preview_win_cards) {
  (clickedCard => {
    clickedCard.addEventListener("click", e => {
      var img = clickedCard.querySelector("img");
      if (img) {
        window.open(img.src);
      }
    });
  })(card);
}

// add compatibly for F11 fullScreen
function isFullScreen() {
  return window.fullScreen || (window.innerWidth == screen.width && window.innerHeight == screen.height);
}

window.addEventListener("resize", () => {
  if (isFullScreen()) {
    document.body.style["background-color"] = "#000";
  } else {
    document.body.style["background-color"] = "#d7d8d2";
  }
});

// init mermaid
mermaid.mermaidAPI.initialize({
  startOnLoad: false,
  theme: "forest",
  themeCSS:
    ".tick>text { font-size:26px; }  .taskTextOutsideRight,.taskTextOutsideLeft { font-size:20px; } .titleText {font-size:30px;} .sectionTitle {font-size:20px;}",
  gantt: {
    fontSize: 26,
    barHeight: 30,
    useMaxWidth: false
  }
});

var mermaidCmps = document.querySelectorAll(".mermaid");
for (var i = 0; i < mermaidCmps.length; i++) {
  var mermaidCmp = mermaidCmps[i];
  var insertSvg = function (svgCode, bindFunctions) {
    mermaidCmp.innerHTML = svgCode;
  };

  var graphDefinition = "";
  let pCmps = mermaidCmp.querySelectorAll("pre");
  for (var pCmp of pCmps) {
    graphDefinition += pCmp.textContent.replace(/\\n/g, "<br/>");
  }

  var graph = mermaid.mermaidAPI.render("graphDiv" + i, graphDefinition, insertSvg);
}
