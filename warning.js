var img = document.createElement("img");
var hostname = window.location.hostname;

img.id = 'em_danger';
img.width = 100;
img.height = 100;

switch(hostname) {
	case 'engagemanager.com':
	case 'admin.s3.tmhdev.com':
		iconUrl = chrome.extension.getURL("danger.png"); 
		break;

	case 'dev.v2.engagemanager.com':
		iconUrl = chrome.extension.getURL("confirm.png"); 
		break;

	case 'dev.v3.engagemanager.com':
		iconUrl = chrome.extension.getURL("bug.png"); 
		break;

	default:
		break;
}

img.src = iconUrl;
document.body.appendChild(img);