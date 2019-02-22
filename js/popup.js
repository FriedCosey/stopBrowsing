$(function(){
    $('#start').click(function(){
        chrome.storage.sync.set({'start': 1}, function(){               
                chrome.notifications.create("", {
                type: 'basic',
                iconUrl: 'icons/zzz.png',
                title: 'Start Sleepiing',
                message: 'Start Sleeping!'
            }, function(id) {
        timer = setTimeout(function(){chrome.notifications.clear(id);}, 2000)})
        });
    });
    $('#stop').click(function(){
        chrome.storage.sync.set({'start': 2}, function(){               
                chrome.notifications.create("", {
                type: 'basic',
                iconUrl: 'icons/zzz.png',
                title: 'Stop Sleepiing',
                message: 'Stop Sleeping!'
            }, function(id) {
        timer = setTimeout(function(){chrome.notifications.clear(id);}, 2000)})
        });
    });

});
