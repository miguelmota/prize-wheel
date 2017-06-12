(function(root) {
  'use strict';

  function _merge(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  var PrizeWheel = function(options) {
    var _this = this,
        defaults,
        s,
        ctx,
        canvas;

   defaults = {
      el: null,
      members: ['Member 1', 'Member 2', 'Member 3', 'Member 4'],
      colors: ['#C7181D', '#FCB937', '#A1B836', '#371979', '#C7181D', '#FCB937', '#A1B836', '#371979'],
      radius: 250,
      startAngle: 0,
      textRadius: 160
    };

    // s for settings
    s = _merge(defaults, options);

    s.width = s.height = s.radius * 2;
    s.insideRadius = (s.width / 5);
    s.outsideRadius = (s.width / 2) - 10;

    s.startAngle = (s.startAngle === 'random' ? Math.floor(Math.random() * 360) : s.startAngle);
    s.arc = Math.PI / (s.members.length / (s.members.length / (s.members.length / 2)));
    s.spinTimeout =  null;
    s.spinTime =  0;
    s.spinTimeTotal =  0;
    s.spinAngleStart =  null;

    this.draw = function() {
        var angle,
            text,
            i;

        canvas = document.querySelector(s.el);
        canvas.width = s.width;
        canvas.height = s.height;
        if (canvas.getContext) {

          ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, s.width, s.height);

          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;

          ctx.font = '16px sans-serif';

          for (i = 0; i < s.members.length; i++) {
            angle = s.startAngle + i * s.arc;

            ctx.fillStyle = s.colors[i];
            ctx.beginPath();
            ctx.arc(s.width / 2, s.height / 2, s.outsideRadius, angle, angle + s.arc, false);
            ctx.arc(s.width / 2, s.height / 2, s.insideRadius, angle + s.arc, angle, true);
            ctx.stroke();
            ctx.fill();
            ctx.save();

            ctx.shadowOffsetX = -1;
            ctx.shadowOffsetY = -1;
            ctx.shadowBlur = 0;
            ctx.fillStyle = "black";
            ctx.translate((s.width / 2) + Math.cos(angle + s.arc / 2) * s.textRadius, (s.height / 2) + Math.sin(angle + s.arc / 2) * s.textRadius);
            ctx.rotate(s.angle + s.arc / 2 + Math.PI / 2);
            text = s.members[i];
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            ctx.restore();
          }

          //Arrow
          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(s.radius - 4, s.radius - (s.outsideRadius + 5));
          ctx.lineTo(s.radius + 4, s.radius - (s.outsideRadius + 5));
          ctx.lineTo(s.radius + 4, s.radius - (s.outsideRadius - 5));
          ctx.lineTo(s.radius + 9, s.radius - (s.outsideRadius - 5));
          ctx.lineTo(s.radius + 0, s.radius - (s.outsideRadius - 13));
          ctx.lineTo(s.radius - 9, s.radius - (s.outsideRadius - 5));
          ctx.lineTo(s.radius - 4, s.radius - (s.outsideRadius - 5));
          ctx.lineTo(s.radius - 4, s.radius - (s.outsideRadius + 5));
          ctx.fill();
        }
      };

      this.easeOut = function(t, b, c, d) {
        var ts,
            tc;

        ts = (t/=d)*t;
        tc = ts*t;
        return b+c*(tc + -3*ts + 3*t);
      };

      this.rotate = function() {
        var spinAngle;
        s.spinTime += 30;
        if((s.spinTime + 5000) >= s.spinTimeTotal) {
          _this.stop();
          return;
        }
        spinAngle = s.spinAngleStart - _this.easeOut(s.spinTime, 0, s.spinAngleStart, s.spinTimeTotal);
        s.startAngle += (spinAngle * Math.PI / 180);
        _this.draw();
        s.spinTimeout = setTimeout(_this.rotate, 30);
      };

      this.spin = function(cb) {
          _this.cb = cb;
          s.spinAngleStart = Math.random() * 10 + 10;
          s.spinTime = 0;
          s.spinTimeTotal = Math.random() * 3 + 4 * 3000;
          _this.rotate();
      };

      this.stop = function() {
        var degrees;
        var arcd;
        var index;

        clearTimeout(s.spinTimeout);
        degrees = s.startAngle * 180 / Math.PI + 90;
        arcd = s.arc * 180 / Math.PI;
        index = Math.floor((360 - degrees % 360) / arcd);
        ctx.save();
        _this.done(s.members[index]);
      };

      this.done = function(member) {
        _this.cb(member);
      };

    return {
      init: _this.draw,
      spin: _this.spin
    };
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = PrizeWheel;
    }
    exports.PrizeWheel = PrizeWheel;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return PrizeWheel;
    });
  } else {
    root.PrizeWheel = PrizeWheel;
  }

})(this);
