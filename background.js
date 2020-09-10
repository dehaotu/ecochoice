chrome.tabs.onActivated.addListener(tab => {
    /*
    A standard way of finding the right tab to inject the script:
    Listen tabs untill there's a valid tab to inject scripts
    */
    chrome.tabs.get(tab.tabId, current_tab_info => {
        // current_tab_info is a Tab obj
        if (/^https:\/\/www.amazon\.com/.test(current_tab_info.url)) {
            // chrome.tabs.insertCSS(null,{file:'popup.css'});
            chrome.tabs.executeScript(null,{file:'jquery-3.5.1.js'});
            chrome.tabs.executeScript(null,{file:'./foreground.js'},()=>console.log("foreground injected"));
        }
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "ITEM IMAGE SENT") {
        chrome.storage.local.get(["imagesrc","itemtitle","itemurl","price"],value=>{
            console.log("yooooo");
            chrome.runtime.onConnect.addListener(function(port) {
                port.postMessage({
                    message:"ITEM IMAGE",
                    item:value.imagesrc,
                    title:value.itemtitle,
                    url:value.itemurl,
                    price:value.price
                });
            });
        })
    }
    // chrome.runtime.onConnect.addListener(function(port) {
    //     console.log(request.image);
    //     port.postMessage({message:"ITEM IMAGE",item:request.image});
    // });
})


