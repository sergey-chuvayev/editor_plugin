var mainPosition = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    if (request.position === 'get') {
        console.log('get');
        console.log(mainPosition.toString())
        sendResponse({position: mainPosition.toString()});
    } else {
        mainPosition = request.position
        console.log(mainPosition);
    }

});