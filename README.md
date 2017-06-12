# prize-wheel

> Prize wheel using canvas.

<img src="https://raw.githubusercontent.com/miguelmota/prize-wheel/master/screenshot.gif" width="500" />

## Demo

[http://lab.miguelmota.com/prize-wheel](http://lab.miguelmota.com/prize-wheel)

## Download

```
npm install prize-wheel
```

## Usage

Create a canvas element and give it an ID:

```html
<canvas id="wheel"></canvas>
```

Initialize the wheel:

```javascript
// Wheel settings object
var settings = {
  el: '#wheel', // Canvas ID
  members: ['Hamburgers', 'Tacos', 'Steak', 'Burritos'], // Array of members
  colors: ['#C7181D', '#FCB937', '#A1B836', '#371979'], // Background color of each member
  radius: 250 // wheel radius
};

// Create a wheel instance with settings
var wheel = new PrizeWheel(settings);

// Initialize the wheel
wheel.init();

// Spin the wheel with a callback after it is done
wheel.spin(function(member) {
  alert(member);
});
```

## License

MIT
