chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateElementorIcon") {
        if (msg.value) {
            chrome.browserAction.setIcon({path: "icon.png"});
        } else {
            chrome.browserAction.setIcon({path: "icon_off.png"});
        }
    }
});