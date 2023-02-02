
chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({ windowType: 'normal' }, function (tabs) {
    chrome.runtime.onMessage.addListener(

      function (request, sender, sendResponse) {
        switch (request.type) {
          case "hello":
            sendResponse({ length: tabs.length });
            break;
          case "requirementsCheck":
            var result = {};
            if (navigator.onLine) {
              result.internetStability = true;
            } else {
              result.internetStability = false;
            }
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
              result.audio = true;
              stream.getTracks().forEach(function (track) {
                track.stop();
              });
              navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                result.camera = true;
                stream.getTracks().forEach(function (track) {
                  track.stop
                });
              }).catch(function () {
                result.camera = false;
              });
            }).catch(function () {
              result.audio = false;
            });
            sendResponse(result);
            break;

        }
      }
    );

  });
});


