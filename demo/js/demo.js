(function() {
  'use strict';

  /*
  $('input').on('keyup', function(e) {
    console.log($(this).val());
  });
  */

  var settings = [
    {
      el: 'wheel-1',
      members: ['Hamburgers', 'Tacos', 'Steak', 'Burritos'],
      colors: ['#C7181D', '#FCB937', '#A1B836', '#371979'],
      radius: 250,
      startAngle: 'random'
    }
  ];

  var wheels = [
    new Wheel(settings[0])
  ];

  wheels.forEach(function(wheel) {
    wheel.init();
  });

  var spinBtn = document.querySelector('.btn-spin');
  spinBtn.addEventListener('click', function(e) {
    wheels.forEach(function(wheel) {
      wheel.spin(function(member) {
        alert(member);
      });
  }, false);
  });

})();
