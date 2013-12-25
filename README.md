# Wheel.js v0.1.0

Roulette wheel using canvas.

## Demo

[http://lab.miguelmota.com/wheel](http://lab.miguelmota.com/wheel)

## Download

Available via [Bower](http://bower.io/).

```
bower install wheel
```

## Usage

Include `wheel.js` in your project.

```
<script src="wheel.js"></script>
```

Create a canvas element and give it an id.

```
<canvas id="wheel"></canvas>
```

Initialize the wheel.

```
// Wheel settings object.
var settings = {                                                         
  el: 'wheel', // Canvas id.
  members: ['Hamburgers', 'Tacos', 'Steak', 'Burritos'], // Array of members.
  colors: ['#C7181D', '#FCB937', '#A1B836', '#371979'], // Background color of each member.
  radius: 250 // wheel radius
};                                                                       

// Create a wheel instance with settings.
var wheel = new Wheel(settings);

// Initialize the wheel.                                                         
wheel.init();

// Spin the wheel with a callback after it is done.
wheel.spin(function(member) {                                            
  alert(member);                                                         
});                                                                       
```

## License

Released under the MIT License.
