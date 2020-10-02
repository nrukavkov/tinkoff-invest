chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'https://www.marketwatch.com/tools/screener/premarket'})
});