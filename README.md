# Geocod.io Reverse Geocoding API Demo

This is a reverse geocoding demo that uses your current location to provide you with a JSON output of information about your current position. Powered by [Geocod.io](https://Geocod.io).

<a href="https://geo-demo.chandlermayo.com">
    <img alt="Geocod.io" src="https://img.stackshare.io/service/3948/preview.png" width=100 height=100/>
</a>

### [Try the Demo](https://geo-demo.chandlermayo.com)

## What and Why?

Good location data can make a huge impact on the quality of your application's user experiance. The problem is a good source of location data is hard to find and users often provide incomplete and missing data.

Using Geocod.io to make a reverse geocoding request we can resolve more location infomation from a limited amount of data.

This lets you correct incomplete infomation and ensure you have a correct and valid address. 

With complete location information you can do things like:
- Ensure that physical mailings reach your users.
- Reduce returned packages and missed deliveries.
- Improve QoS on food delivery services. 
- Ensure legal compliances.

## How does this demo work?

First the user is asked for permission to get their current location.

<a href="https://geo-demo.chandlermayo.com">
    <img alt="Geocod.io" src="http://geo-demo.chandlermayo.com/images/prompt.png" width=300/>
</a>

Then a request is made to the Geocod.io Reverse Geocoding API with the users position:

```
https://api.geocod.io/v1.4/reverse?q=X,Y&api_key=YOUR_API_KEY
```

Results of the request are displayed under the page instructions. 

What are you waiting for? [Try the Demo](https://geo-demo.chandlermayo.com)

## How do I clone this project?

Sign up for a <a href="https://Geocod.io" target="_blank" rel="noopener noreferrer">Geocod.io account</a>. Get your API key from the <a href="https://dash.geocod.io/" target="_blank" rel="noopener noreferrer">dashboard</a>.
  
Fork/clone this repo and edit scripts.js. Replace my API key with your API key:

```javascript
var geocodio_API_KEY = "b67b8419e9b6e105e6659e191e5e16104eee640"; // Get your API key https://dash.geocod.io/
```

Enable GitHub pages on the master branch. 

Visit your site and give it a try.

Learn more from the <a href="https://www.geocod.io/docs/#reverse-geocoding-single-coordinate" target="_blank" rel="noopener noreferrer">Geocode.io Docs</a>.



