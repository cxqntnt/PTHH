let buttonLeft = document.getElementById('btn-add-left');
let buttonRight = document.getElementById('btn-add-right');
let contentLeft = document.getElementById('left-content');
let contentRight = document.getElementById('right-content');
let buttonSubmit = document.getElementById('submit');
let buttonDelete = document.getElementById('delete');
let countLeft = 0;
let countRight = 0;

window.onload = function () {
	buttonLeft.addEventListener('click', function () {
		countLeft++;
		let input = document.createElement('input');
		if (countLeft > 1) {
			let span = document.createElement('span');
			span.innerHTML = '+';
			contentLeft.append(span);
			contentLeft.append(input);
		} else {
			contentLeft.append(input);
		}
	});
	buttonRight.addEventListener('click', function () {
		countRight++;
		let input = document.createElement('input');
		if (countRight > 1) {
			let span = document.createElement('span');
			span.innerHTML = '+';
			contentRight.append(span);
			contentRight.append(input);
		} else {
			contentRight.append(input);
		}
	});
	buttonDelete.addEventListener('click', function () {
		countLeft = 0;
		countRight = 0;
		contentLeft.innerHTML = '';
		contentRight.innerHTML = '';
	});
	buttonSubmit.addEventListener('click', function () {
		let leftNodes = contentLeft.childNodes;
		let rightNodes = contentRight.childNodes;
		let leftList = [];
		let rightList = [];
		for (let i = 0; i < leftNodes.length; i++) {
			if (leftNodes[i].tagName == 'INPUT') {
				if (leftNodes[i].value.replaceAll(/\s/g, '') == '') {
					leftNodes[i].focus();
					return;
				}
				leftList.push(leftNodes[i].value.replaceAll(/\s/g, ''));
			}
		}
		for (let i = 0; i < rightNodes.length; i++) {
			if (rightNodes[i].tagName == 'INPUT') {
				if (rightNodes[i].value.replaceAll(/\s/g, '') == '') {
					rightNodes[i].focus();
					return;
				}
				rightList.push(rightNodes[i].value.replaceAll(/\s/g, ''));
			}
		}
		solve(leftList, rightList);
	});
}

function solve(leftList, rightList) {
	
}