function getElement (messageBoxText) {
	$("#elements-table").css("transform", "scale(1.03, 1.03)");
	$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0.25)");
	$(".message-box").css("top", $("#elements-table").offset().top + $("#elements-table").height() + 50 + "px");
	$(".message-box").fadeIn(700);
	$(".message-box").text(messageBoxText);
	$("#elements-table").children("div").on("mouseenter.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1.03, 1.03)");
		element.css("boxShadow", "0 0 7px 3px blue");
		element.css("backgroundColor", "white");
	});
	$("#elements-table").children("div").on("mouseleave.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1, 1)");
		element.css("boxShadow", "0 0 0px 0px blue");
		element.css("backgroundColor", "");
	});
	$("#elements-table").children("div").on("click.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1, 1)");
		element.css("boxShadow", "0 0 0px 0px blue");
		element.css("backgroundColor", "");
		$(".message-box").fadeOut(700);
		$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0)");
		$("#elements-table").css("transform", "scale(1, 1)");
		$("#elements-table").children("div").off(".getElement");
		return element
	});
}

$(document).ready(() => {
	$(".properties").click(() => getElement("wybierz pierwiastek"));
	$(".changeTable").click(() => {
		if ($(".logo").eq(1).css("opacity") === "0") {
			//$(".logo").eq(1).fadeIn(2000);
			$(".logo").eq(1).css("opacity", 1);
		}
		else {
			//$(".logo").eq(1).fadeOut(2000);
			$(".logo").eq(1).css("opacity", 0);
		}
	});
});