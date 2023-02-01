
chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({windowType:'normal'}, function(tabs) {
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if(request.greeting === "hello")
          sendResponse({length: tabs.length});
      }
    );
    console.log('Number of open tabs in all normal browser windows:',tabs.length);
  }); 
});

