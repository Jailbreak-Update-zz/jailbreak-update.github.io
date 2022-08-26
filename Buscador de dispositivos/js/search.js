filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".mb-2").isotope({ filter: filterValue });
  })
);

$(".mb-2").isotope({
	itemSelector: ".mb-2",
	layoutMode: "fitRows",
	transitionDuration: "0.6s",
  });