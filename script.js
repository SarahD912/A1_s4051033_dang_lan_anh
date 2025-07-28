const svgs = Array.from(document.querySelectorAll('.animated-svg'));
          const durations = svgs.map(svg => parseInt(svg.getAttribute('data-duration')) || 2000);
          const maxDuration = Math.max(...durations);
          svgs.forEach(function(svg, i) {
            const duration = durations[i];
            // Optional: log each path's length
            console.log(svg.querySelector('path').getTotalLength());
            // Delay = maxDuration - this svg's duration
            setTimeout(function() {
              svg.classList.add('filled');
            }, maxDuration - duration);
            // Set animation duration via style property
            svg.querySelector('path').style.animationDuration = duration + 'ms';
          });

let sky = document.getElementById('sky');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    sky.style.top = value * 1.5 + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  const heartbeatElement = document.querySelector(".heartbeat");
  const crackElements = document.querySelector(".crack-elements");

  /*heartbeat.addEventListener("click", function () {
    crack.forEach(img => img.classList.add("show"));
  });*/
  heartbeatElement.addEventListener("click", function () {
    heartbeatElement.style.opacity = '0';
    crackElements.style.opacity = '1';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heartbeatE = document.querySelector(".heartbeat2");

  heartbeatE.addEventListener("click", function () {
    heartbeatE.style.opacity = '0';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heartbeatE3 = document.querySelector(".heartbeat3");

  heartbeatE3.addEventListener("click", function () {
    heartbeatE3.style.opacity = '0';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heartbeatE4 = document.querySelector(".heartbeat4");

  heartbeatE4.addEventListener("click", function () {
    heartbeatE4.style.opacity = '0';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heartbeatE5 = document.querySelector(".heartbeat5");

  heartbeatE5.addEventListener("click", function () {
    heartbeatE5.style.opacity = '0';
  });
});