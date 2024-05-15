
jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: false, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});





// Range Counting
var rangeInput = document.getElementById('rangeInput');
// Get current value display element
var currentValue = document.getElementById('current-value');

// Add event listener for input change
rangeInput.addEventListener('input', function() {
  // Update current value display
  currentValue.innerText = this.value + '%';
});

// Carousel