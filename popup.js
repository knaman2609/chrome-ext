console.log("hello");
var AWS_TOKEN = "1swqwedq2123132qweqwq"

document.addEventListener('DOMContentLoaded', function () {
  var bg = chrome.extension.getBackgroundPage();
  console.log(bg);
  Object.keys(bg.urlMap).forEach(function(key) {
    var div = document.createElement("div");
    div.textContent = key + ":" + bg.urlMap[key];
    document.body.appendChild(div);
  });
});
