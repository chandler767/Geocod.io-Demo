var geocodio_API_KEY = "b67b8419e9b6e105e6659e191e5e16104eee640"; // Get your API key https://dash.geocod.io/

function makeRequest(apiURL){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",apiURL,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

if(navigator.geolocation) { // Get current position and send to Geocod.io reverse endpoint.
    navigator.geolocation.getCurrentPosition(function(position) {
        // Geocode.io API URL
        //https://api.geocod.io/v1.4/reverse?q=X,Y&api_key=YOUR_API_KEY
        var requestResponse = JSON.parse(makeRequest("https://api.geocod.io/v1.4/reverse?q="+position.coords.latitude+","+position.coords.longitude+"&api_key="+geocodio_API_KEY));
        document.body.appendChild(document.createElement('pre')).innerHTML = syntaxHighlight(JSON.stringify(requestResponse, undefined, 4));
    });
} else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
}

