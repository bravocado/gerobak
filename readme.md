# Gerobak.js

Extending [basketjs](https://github.com/addyosmani/basket.js) to load scripts dynamically based on custom data attribute.


## How to use it


## How to use it

- Make sure you include the `rsvp.js` and `basket.js` or just use `gerobak.full.min.js`.
- Put `gerobak-load="your/dir/to/script.js"` anywhere on your document.
- Inital with `gerobak.docking();` when the DOM is ready.
- Done. Gerobak will automatically read and load it for you. Simple isn't it? Enjoy and keep async! :)


## Customizing

- You can customizing the data attribute by by passing the function `gerobak.attr('[your-data]');`.
- Then you can use your own custom data as a identifier.


## Contributing

- clone this repo
- `npm install && bower install`
- `grunt`
- check the test folder and `lib/gerobak.js`
