chrome.tabs.onActivated.addListener(tab => {
    /*
    A standard way of finding the right tab to inject the script:
    Listen tabs untill there's a valid tab to inject scripts to
    */
    chrome.tabs.get(tab.tabId, current_tab_info => {
        // current_tab_info is a Tab obj
        if (/^https:\/\/www.amazon\.com/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null,{file:'./foreground.js'}, ()=>console.log("bro"))
        }
    });
})