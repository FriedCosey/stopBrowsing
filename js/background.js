$(function(){
    chrome.tabs.onCreated.addListener(function(tab) {
        var d = new Date();
        var n = d.getHours();
        // if (tab.url.match("http://newtab/") {
            chrome.storage.sync.get({'start' : -1}, function(start){
                console.log(start);
                if(start.start == 1){
                    chrome.tabs.update(tab.id, {
                    url: chrome.extension.getURL("../newtab.html")
                    });
                }
                else if(start.start == -1){
                    if(n >= 23 && n < 24){
                        chrome.tabs.update(tab.id, {
                        url: chrome.extension.getURL("../newtab.html")
                        });
                    }
                    if(n >= 0 && n <= 8){
                        chrome.tabs.update(tab.id, {
                        url: chrome.extension.getURL("../newtab.html")
                        });
                    }
                }
            });
        // }
    });
});
