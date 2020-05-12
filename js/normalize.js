    // remove leading space of each line
    var targetTextArea = document.getElementById("source");
    var lines = targetTextArea.innerHTML.split("\n");
    targetTextArea.innerHTML = lines.map(line => line.replace(/^(?!\s+[\-|0-9])\s+/, "")).join("\n");