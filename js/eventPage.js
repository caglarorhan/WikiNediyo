var menuItem = {
    "id":"wikinediyo",
    "title":"WikiNediyo",
    "contexts":["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}


chrome.contextMenus.onClicked.addListener(function(clickData){
    console.log("calisiyor");
    if(clickData.menuItemId === "wikinediyo" && clickData.selectionText){
        let wikiUrl = "https://tr.wikipedia.org/wiki/"+fixedEncodeURI(clickData.selectionText);
        
        chrome.windows.getCurrent(function(currentWindow) {
            let createData = {
                "url": wikiUrl,
                "type": "popup",
                "top": 5,
                "left":5,
                "width": currentWindow.width/2,
                "height": currentWindow.height/2
            };
            chrome.windows.create(createData, function(){});
        });
    }
});
