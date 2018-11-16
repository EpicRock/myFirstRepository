function getElement () {
	$("#elements-table").css("transform", "scale(1.03, 1.03)");
	$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0.25)");
	$(".message-box").css("top", $("#elements-table").offset().top + $("#elements-table").height() + 50 + "px");
	$(".message-box").fadeIn(700);
	$(".message-box").text("wybierz pierwiastek");
	$("#elements-table").children("div").on("mouseenter.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1.04, 1.04)");
	});
	$("#elements-table").children("div").on("mouseleave.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1, 1)");
	});
	$("#elements-table").children("div").on("click.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1, 1)");
		$(".message-box").fadeOut(700);
		$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0)");
		$("#elements-table").css("transform", "scale(1, 1)");
		$("#elements-table").children("div").off(".getElement");
		return element
	});
}

$(document).ready(() => {
	$(".properties").on("click", () => getElement());
});