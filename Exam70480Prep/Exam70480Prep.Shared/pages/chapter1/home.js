(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter1/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

        },

        navigated: function () {
            // Do application specific on-navigated work here
            var backButton = this.pageElement.querySelector("header[role=banner] .win-backbutton");
            if (backButton) {
                backButton.onclick = function () { nav.back(); };

                if (nav.canGoBack) {
                    backButton.removeAttribute("disabled");
                } else {
                    backButton.setAttribute("disabled", "disabled");
                }
            }
        }
    });

})();