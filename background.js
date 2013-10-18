function checkUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf("facebook.com") > 0 || tab.url.indexOf("twitter.com") > 0) {
    chrome.pageAction.show(tabId);
  }
}

chrome.tabs.onUpdated.addListener(checkUrl);
