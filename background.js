window.urlMap = {};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (!window.urlMap[request])
    window.urlMap[request] = 0;


  window.urlMap[request]++;
})


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: 'popup.html'});
})
