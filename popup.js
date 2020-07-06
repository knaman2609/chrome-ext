document.addEventListener('DOMContentLoaded', function () {
  var bg = chrome.extension.getBackgroundPage();
  console.log(bg);
  Object.keys(bg.urlMap).forEach(function(key) {
    var div = document.createElement("div");
    div.textContent = key + ":" + bg.urlMap[key];
    document.body.appendChild(div);
  });
});
