let functionEnd = false;
let functionReturn;
let isChangingtable = false;

function getElement (multipleElements) {
	let returnArr = [];
	$("#table-container").css("transform", "scale(1.03, 1.03)");
	$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0.25)");
	$(".cover").css("pointerEvents", "initial");
	$(".message-box").css("top", $("#under-table").offset().top + $("#under-table").height() + 50 + "px");
	$(".message-box").fadeIn(700);
	if (multipleElements) {
		$(".message-box").text("Wybierz pierwiastki, a potem naciśnij ten napis");
		$(".message-box").css("cursor", "pointer");
		$(".message-box").on("click.getElement", () => {
			$(".message-box").fadeOut(700);
			$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0)");
			$(".cover").css("pointerEvents", "none");
			$("#table-container").css("transform", "scale(1, 1)");
			$(".elements-container").children("div").off(".getElement");
			$(".message-box").off(".getElement");
			$(".message-box").css("cursor", "initial");
			$(".elements-container").children("div").each(function () {
				$(this).data("clicked", false);
				$(this).css("transform", "scale(1, 1)");
				$(this).css("boxShadow", "0 0 0px 0px transparent");
				$(this).css("backgroundColor", "");
			});
			functionEnd = true
			functionReturn = returnArr;
		});
	}
	else {
		$(".message-box").text("Wybierz pierwiastek");
	}
	$(".elements-container").children("div").on("mouseenter.getElement", (event) => {
		const element = $(event.currentTarget);
		element.css("transform", "scale(1.03, 1.03)");
		element.css("boxShadow", "#00639c 0px 0px 7px 3px");
		element.css("backgroundColor", "white");
	});
	$(".elements-container").children("div").on("mouseleave.getElement", (event) => {
		const element = $(event.currentTarget);
		if (element.data("clicked") === false || element.data("clicked") === undefined) {
			element.css("transform", "scale(1, 1)");
			element.css("boxShadow", "0 0 0px 0px transparent");
			element.css("backgroundColor", "");
		}
	});
	$(".elements-container").children("div").on("click.getElement", (event) => {
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
			element.css("boxShadow", "0 0 0px 0px transparent");
			element.css("backgroundColor", "");
			$(".message-box").fadeOut(700);
			$(".cover").css("backgroundColor", "rgba(0, 0, 0, 0)");
			$(".cover").css("pointerEvents", "none");
			$("#table-container").css("transform", "scale(1, 1)");
			$(".elements-container").children("div").off(".getElement");
			functionEnd = true;
			functionReturn = element;
		}
	});
}

$(document).ready(() => {
	//this fixes the bug with causes logo-container has no width
	$(".logo-container").css("width", 10);
	setTimeout(() => {
		$(".logo-container").css("width", "");
	}, 1);
	
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
		//block clicking in moveing phase
		if (!isChangingtable) {
			isChangingtable = true;
			let viewingRight;
			
			setTimeout(() => {
				isChangingtable = false;
			}, 2000);
			$(".changeTable").animate({
				opacity: 0
			}, 1000, () => {
				if (viewingRight) {
					$(".changeTable").children("p").text("Przejdź do tablicy Mendelejewa");
					$(".changeTable img").eq(0).show();
					$(".changeTable img").eq(1).hide();
				}
				else {
					$(".changeTable").children("p").text("Przejdź do tablicy rozpuszczalności");
					$(".changeTable img").eq(1).show();
					$(".changeTable img").eq(0).hide();
				}
				$(".changeTable").animate({
					opacity: 1
				}, 1000);
			});
			if ($(".logo").eq(1).css("opacity") === "0") {
				viewingRight = true;
				$(".logo").eq(1).css("opacity", 1);
				$("#left").css("left", "-100%");
				$("#right").css("left", "0%");
				$("#top-bar").css("backgroundColor", "#8ca77b");
				$("#top-bar").css("borderBottom", "3px solid #205200");
			}
			else {
				viewingRight = false;
				$(".logo").eq(1).css("opacity", 0);
				$("#left").css("left", "0%");
				$("#right").css("left", "100%");
				$("#top-bar").css("backgroundColor", "#819da0");
				$("#top-bar").css("borderBottom", "3px solid #005d67");
			}
		}
	});
});