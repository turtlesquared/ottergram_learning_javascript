var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageURL, titleText) {
	'use strict';
	var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
	detailImage.setAttribute('src', imageURL);

	var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
	detailTitle.textContent = titleText;
}
