## Wheel.js

Roulette wheel using canvas.

[www.wheeljs.org][http://www.wheeljs.org/]

### Usage

```
 <canvas id="wheel"></canvas>
``

```                                                                                                            <script src="wheel.js"></script>
```

```
var settings = {                                                         
  el: 'wheel',                                                           
  members: ['Hamburgers', 'Tacos', 'Steak', 'Burritos'],                 
  colors: ['#C7181D', '#FCB937', '#A1B836', '#371979'],                  
  radius: 250                                                            
};                                                                       
                                                                        
var wheel = new Wheel(settings);                                         
                                                                        
wheel.init();                                                            
wheel.spin(function(member) {                                            
  alert(member);                                                         
});                                                                       
```

## License

Released under the MIT License.


