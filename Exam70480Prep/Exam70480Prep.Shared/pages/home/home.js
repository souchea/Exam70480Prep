(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var button1 = document.getElementById('button1');
            var button2 = document.getElementById('button2');
            var button3 = document.getElementById('button3');
            var button4 = document.getElementById('button4');

            button1.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter1/home.html");
            });

            button2.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter2/home.html");
            });

            button3.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter3/home.html");
            });

            button4.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/home.html");
            });
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
