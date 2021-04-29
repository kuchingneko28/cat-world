const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearonScoll = new IntersectionObserver(function (
  entries,
  appearonScoll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearonScoll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearonScoll.observe(fader);
});
sliders.forEach((slider) => {
  appearonScoll.observe(slider);
});
