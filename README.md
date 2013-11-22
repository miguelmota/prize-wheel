## Wheel.js

Roulette wheel using canvas.

[www.wheeljs.org](http://www.wheeljs.org/)

### Usage

```
<canvas id="wheel"></canvas>
```

```
<script src="wheel.js"></script>
```

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
