let functionEnd = false;
let functionReturn;

function getElement (multipleElements) {
	let returnArr = [];
	$("#elements-table").css("transform", "scale(1.03, 1.03)");
	$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0.25)");
	$(".message-box").css("top", $("#elements-table").offset().top + $("#elements-table").height() + 50 + "px");
	$(".message-box").fadeIn(700);
	if (multipleElements) {
		$(".message-box").text("Wybierz pierwiastki, a potem naciśnij ten napis");
		$(".message-box").css("cursor", "pointer");
		$(".message-box").on("click.getElement", () => {
			$(".message-box").fadeOut(700);
			$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0)");
			$("#elements-table").css("transform", "scale(1, 1)");
			$("#elements-table").children("div").off(".getElement");
			$(".message-box").off(".getElement");
			$(".message-box").css("cursor", "initial");
			$("#elements-table").children("div").each(function () {
				$(this).data("clicked", false);
				$(this).css("transform", "scale(1, 1)");
				$(this).css("boxShadow", "0 0 0px 0px blue");
				$(this).css("backgroundColor", "");
			});
			functionEnd = true
			functionReturn = returnArr;
		});
	}
	else {
		$(".message-box").text("Wybierz pierwiastek");
	}
	$("#elements-table").children("div").on("mouseenter.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1.03, 1.03)");
		element.css("boxShadow", "0 0 7px 3px blue");
		element.css("backgroundColor", "white");
	});
	$("#elements-table").children("div").on("mouseleave.getElement", (event) => {
		const element = $(event.currentTarget);
		if (element.data("clicked") === false || element.data("clicked") === undefined) {
			element.css("transform", "scale(1, 1)");
			element.css("boxShadow", "0 0 0px 0px blue");
			element.css("backgroundColor", "");
		}
	});
	$("#elements-table").children("div").on("click.getElement", (event) => {
		const element = $(event.currentTarget);
		if (multipleElements) {
			if (element.data("clicked") === undefined) {
				element.data("clicked", true);
				returnArr.push(element);
			}
			else if (element.data("clicked") === true) {
				element.data("clicked", false);
				for (let i = 0; i < returnArr.length; i++) {
					if (returnArr[i][0] === element[0]) {
						returnArr.splice(i, 1);
					}
				}
			}
			else if (element.data("clicked") === false) {
				element.data("clicked", true);
				returnArr.push(element);
			}
		}
		else {
			element.css("transform", "scale(1, 1)");
			element.css("boxShadow", "0 0 0px 0px blue");
			element.css("backgroundColor", "");
			$(".message-box").fadeOut(700);
			$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0)");
			$("#elements-table").css("transform", "scale(1, 1)");
			$("#elements-table").children("div").off(".getElement");
			functionEnd = true;
			functionReturn = element;
		}
	});
}

$(document).ready(() => {
	$(".properties").click(() => {
		getElement(false);
		const wait = setInterval(() => {
			if (functionEnd === true) {
				functionEnd = false;
				//alert(functionReturn);
			}
		}, 100);
	});
	$(".compare").click(() => {
		getElement(true);
		const wait = setInterval(() => {
			if (functionEnd === true) {
				functionEnd = false;
				//alert(functionReturn);
			}
		}, 100);
	});
	$(".usage").click(() => {
		getElement(false);
		const wait = setInterval(() => {
			if (functionEnd === true) {
				functionEnd = false;
				//alert(functionReturn);
			}
		}, 100);
	});
	$(".description").click(() => {
		getElement(false);
		const wait = setInterval(() => {
			if (functionEnd === true) {
				functionEnd = false;
				//alert(functionReturn);
			}
		}, 100);
	});
	$(".changeTable").click(() => {
		if ($(".logo").eq(1).css("opacity") === "0") {
			$(".logo").eq(1).css("opacity", 1);
			$("#left").css("left", "-100%");
			$("#right").css("left", "0%");
		}
		else {
			$(".logo").eq(1).css("opacity", 0);
			$("#left").css("left", "0%");
			$("#right").css("left", "100%")
		}
	});
});