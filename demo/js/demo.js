(function() {
  'use strict';

  var settings = [
    {
      el: '#wheel-1',
      members: ['Hamburgers', 'Tacos', 'Steak', 'Burritos'],
      colors: ['#C7181D', '#FCB937', '#A1B836', '#371979'],
      radius: 250,
      startAngle: 'random'
    }
  ];

  var wheels = [
    new PrizeWheel(settings[0])
  ];

  wheels.forEach(function(wheel) {
    wheel.init();
  });

  var spinBtn = document.querySelector('.btn-spin');
  var output = document.querySelector('#output');

  spinBtn.addEventListener('click', function(e) {
    output.textContent = '';
    wheels.forEach(function(wheel) {
      wheel.spin(function(member) {
        output.innerHTML = 'Winner:<br /><strong>' + member + '</strong>';
      });
  }, false);
  });

})();
