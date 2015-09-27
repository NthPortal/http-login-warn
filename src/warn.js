var warned = false;

var referrer = "null";
if (document.referrer != "") {
    referrer = document.referrer.toString();
}

function check() {
    if (!warned
        && ((referrer === "null" && location.protocol != 'https:') || referrer.indexOf("http://") === 0)
        && document.querySelectorAll("input[type=password]").length > 0) {
        // TODO replace with something else
        alert("WARNING: Password field on insecure (HTTP) page!");
        warned = true;
    }
}

check();

// select the target node
var target = document.querySelector('body');

// create an observer instance
var observer = new MutationObserver(function() {
    check();
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);
