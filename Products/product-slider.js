document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("psTrack");
  const prevBtn = document.getElementById("psPrevBtn");
  const nextBtn = document.getElementById("psNextBtn");

  // Calculate the width of 1 card + gap
  function getScrollStep() {
    const card = track.querySelector(".ps-card");
    if (!card) return 300;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  }

  // Enable/disable arrow buttons at the ends
  function updateNavButtons() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth - 2;
    prevBtn.disabled = track.scrollLeft <= 2;
    nextBtn.disabled = track.scrollLeft >= maxScrollLeft;
  }

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateNavButtons);
  window.addEventListener("resize", updateNavButtons);
  updateNavButtons();
});