(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter4/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var button1 = document.getElementById('buttonObjective1');
            var button2 = document.getElementById('buttonObjective2');
            var button3 = document.getElementById('buttonObjective3');
            var button4 = document.getElementById('buttonObjective4');
            var button5 = document.getElementById('buttonObjective5');
            var button6 = document.getElementById('buttonObjective6');

            button1.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/objective1.html");
            });

            button2.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/objective2.html");
            });

            button3.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/objective3.html");
            });

            button4.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/objective4.html");
            });

            button5.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/objective5.html");
            });

            button6.addEventListener('click', function () {
                WinJS.Navigation.navigate("/pages/chapter4/objective6.html");
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