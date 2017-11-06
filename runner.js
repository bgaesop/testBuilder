mocha.setup("bdd");
var chaiSpyShould = sinon.spy(window.chai, "should"),
    chaiSpyExpect = sinon.spy(window.chai, "expect");
document.addEventListener("DOMContentLoaded", function() {
    function e(e) {
        function t(n) {
            n ? i(n, function() {
                n.test() ? t(e[++o]) : n.print()
            }) : k()
        }
        var o = 0;
        t(e[o])
    }

    function t(e, t) {
        for (var o = 0; o < t.length; o++)
            if (!t[o]()) return !1;
        return S(e) || (Q = !1, A(e)), !0
    }

    function o() {
        return !!(S(1) || V() && I())
    }

    function n() {
        return !!(S(2) || V() && I() && H() && U())
    }

    function r() {
        return !(!F() || !R())
    }

    function a() {
        return q() && G()
    }

    function i(e, t) {
        e.mocha && !z ? (document.getElementById("mocha").innerHTML = "", z = mocha.run(t)) : t()
    }

    function s() {
        console.log(["Are you sure that detectNetwork works for every credit card network given?", "", "It's pretty normal to feel like your code works because you thought it through carefully when you wrote it. It's also normal to feel frustrated at this process. However, on the job, you won't be able to risk the chance that a function produces unexpected results. The only way to know for sure is to actually run your function for each input, even if it feels tedious.", "", "To be %cabsolutely certain your function produces expected output all the time%c, you must invoke your function for EVERY combination of length and prefix and make sure it returns the correct network. This must be done in the browser console, and you will not be allowed to advance to the next step until you have done this. If you modify your function, you'll need to refresh the page, and try all of the prefix and length combinations again. This is to ensure your function still works after you made changes.", "", "For example, for American Express, make sure you try detectNetwork with:", "   - A credit card number that starts with 34 and is 15 digits long", "   - A credit card number that starts with 37 and is 15 digits long", "For Diner's Club, make sure you invoke detectNetwork with:", "   - A credit card number that starts with 38 and is 14 digits long", "   - A credit card number that starts with 39 and is 14 digits long", "", "After you have invoked detectNetwork for ALL length and prefix combinations, invoke nextStep:", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function c(e) {
        var t = ["You didn't achieve %cfull test coverage%c in your Mocha tests! Make sure there is a test for each prefix and length combination for each card.", "", "For example, for American Express, make sure there is a test with:", "   - A credit card number that starts with 34 and is 15 digits long", "   - A credit card number that starts with 37 and is 15 digits long", ""].join("\n"),
            o = ["font-weight:bold", "font-weight:normal"];
        if (e) {
            var n = y();
            t += n.message, o = o.concat(n.format)
        } else t += "Please try again!";
        console.log.apply(console, [t].concat(o))
    }

    function l(e, t) {
        for (var o = {
                1: f,
                2: d,
                3: g,
                4: m
            }, n = !1, r = t; r >= e; r--) S(r) && !n && (console.log(["%c%cUh-oh. It looks like you broke something that was previously working.", "", "Fix it before proceeding.", "", "See below for what step is no longer working.", ""].join("\n"), "font-weight:bold", "color:#c00"), e > 2 && i({
            mocha: !0
        }, function() {}), n = !0, o[e]());
        n || console.log(["Uh oh, it looks like your function %cisn't working properly for all combinations %cof prefix and length.", "Please try again!"].join("\n"), "font-weight:bold", "font-weight:normal")
    }

    function u() {
        console.log(["STEP ONE:", "", "Your goal is to write a function that can detect what credit card network a card belongs to based on the card's number. You'll write this function in %cdetectNetwork.js%c, which was included in the repo you downloaded. Go find it now and follow the directions there.", "", "%cdetectNetwork.js%c has been loaded by the browser using a script tag, so if you make changes to your function, you'll have to refresh the browser. You'll refresh often as we add steps - don't worry, the file will save progress for fully completed steps. If you're ready to test your function, you can try typing this into the console:", "", " %c>%c detectNetwork(%c'38345678901234'%c)", "", "If you see the output", "", ' %c<%c "%cDiner\'s Club%c"', "", "You're on the right track! If not, you can go back and modify your function - just remember to refresh to get the updated function.", "", "Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: ", "", "38345678901234 (Diner's Club)", "39345678901234 (Diner's Club)", "343456789012345 (American Express)", "373456789012345 (American Express)", "", "%cWhen you've made detectNetwork return the correct network for every prefix and length combination for Diner's Club and American Express, you can invoke nextStep: %c", "", "%c>%c nextStep()", ""].join("\n"), "font-weight:bold", "font-weight:normal", "font-weight:bold ", "font-weight:normal", "color:lightgray", "color:black", "color:#c00", "color:black", "color:lightgray", "color:black", "color:#c00", "color:black", "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function f() {
        console.log(["STEP ONE is no longer working.", "", "As a reminder, step one was Diner's Club and American Express.", "", "Diner's Club always starts with a 38 or 39 and has a length of 14. American Express always starts with a 34 or 37 and has a length of 15", "", "Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: ", "", "38345678901234 (Diner's Club)", "39345678901234 (Diner's Club)", "343456789012345 (American Express)", "373456789012345 (American Express)", "", "%cWhen you've repaired detectNetwork to return the correct network for every prefix and length combination for Diner's Club and American Express, you can invoke nextStep: %c", "", "%c>%c nextStep()", ""].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function h() {
        console.log(["STEP TWO:", "Nice work! Extend your function to support two popular networks, Visa and Mastercard:", "", "Visa always has a prefix of 4 and a length of 13, 16, or 19.", "MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.", "", "Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.", "", "Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: ", "", "38345678901234 (Diner's Club)", "39345678901234 (Diner's Club)", "343456789012345 (American Express)", "373456789012345 (American Express)", "4123456789012 (Visa)", "4123456789012345 (Visa)", "4123456789012345678 (Visa)", "5112345678901234 (MasterCard)", "5212345678901234 (MasterCard)", "5312345678901234 (MasterCard)", "5412345678901234 (MasterCard)", "5512345678901234 (MasterCard)", "", "", "%cWhen detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, and MasterCard you can invoke nextStep: %c", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function d() {
        console.log(["STEP TWO is no longer working.", "", "As a reminder, step two added Visa and Mastercard.", "", "Visa always has a prefix of 4 and a length of 13, 16, or 19.", "MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.", "", "Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.", "", "Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: ", "", "38345678901234 (Diner's Club)", "39345678901234 (Diner's Club)", "343456789012345 (American Express)", "373456789012345 (American Express)", "4123456789012 (Visa)", "4123456789012345 (Visa)", "4123456789012345678 (Visa)", "5112345678901234 (MasterCard)", "5212345678901234 (MasterCard)", "5312345678901234 (MasterCard)", "5412345678901234 (MasterCard)", "5512345678901234 (MasterCard)", "", "", "%cWhen you've repaired detectNetwork and it returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, and MasterCard you can invoke nextStep: %c", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function w() {
        console.log(["%cSTEP THREE:%c", "", "Well done! To ease the pain of manual testing, you can write automated tests! In the next step, your browser will turn into an automated test suite powered by Mocha and Chai.", "", "Automated tests are imperative to your efficiency as a developer. You can write a mocha test once and run it an unlimited amount of times, just by refreshing the page.", "", "Each time the test suite is run (by refreshing the page, remember?), the report clearly marks failed tests, allowing you to identify errors quickly.", "", "%cWhen you're ready to see the test suite, invoke nextStep.%c", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function p() {
        console.log(["", "Here it is! Each heading (like Diner's Club) is a different set of tests, and underneath each heading is a list of tests, with a ❌ if it fails and a ✔️ if it passes.", "", "Examine the tests in detectNetwork.test.js until you are confident about the behavior they are testing, then make them pass (you might have to modify a few tests to do so!). Then, implement the following networks:", "", "Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.", "Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.", "", "%cWhen detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, and Maestro, you can invoke nextStep: %c", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function g() {
        console.log(["STEP THREE is no longer working.", "", "As a reminder, step three added Discover and Maestro, as well as the Mocha automated test suite.", "", "Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.", "Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.", "", "%cWhen detectNetwork is repaired to return the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, and Maestro, and the all of the tests in the Mocha suite are passing, you can invoke nextStep: %c", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function m() {
        console.log(["STEP FOUR:", "Excellent work! Write your own tests and make them pass for the last two networks:", "", "China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.", "Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.", "", "Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.", "", "%cWhen detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, and Switch you can invoke nextStep: %c", "", "%c>%c nextStep()"].join("\n"), "font-weight:bold", "font-weight:normal", "color:blue", "color:black")
    }

    function y() {
        return {
            message: ["Writing all of those tests can be repetitive and exhuasting! Loops are a great way to procedurally generate tests.", "", "This code will help - %cread it carefully, %cand also consider why an IIFE is needed here before moving on.", "", "%cfor (var prefix = 644; prefix <= 649; prefix++) {", "  (function(prefix) {", "    it('has a prefix of ' + prefix + ' and a length of 16');", "    it('has a prefix of ' + prefix + ' and a length of 19');", "  })(prefix)", "}", ""].join("\n"),
            format: ["font-weight:bold", "font-weight:normal", "color:blue"]
        }
    }

    function b() {
        console.log(["Solid work writing all those tests, but you forgot to refactor your tests to use only %cshould OR expect%c, not both.", "Please refactor your tests before proceeding."].join("\n"), "font-weight:bold", "font-weight:normal")
    }

    function k() {
        console.log(["Congratulations! You have finished the exercise!"].join("\n"))
    }

    function x() {
        return 0 === chaiSpyExpect.callCount || 0 === chaiSpyShould.callCount
    }

    function v(e, t) {
        return e = "number" == typeof e ? e.toString() : e, e + new Array(t + 1 - e.length).join("0")
    }

    function C() {
        return z && 0 === z.stats.pending && 0 === z.stats.failures && z.stats.passes === z.stats.tests
    }

    function E(e, t) {
        var o = {};
        return e.forEach(function(e) {
            t.forEach(function(t) {
                o[e] || (o[e] = {}), o[e][t] = !1
            })
        }), o
    }

    function M(e, t) {
        return e === t.slice(0, e.length)
    }

    function N(e, t) {
        var o = E(e, t),
            n = [];
        J.args.forEach(function(e) {
            e = e[0];
            for (var t in o) M(t, e) && o[t].hasOwnProperty(e.length) && (o[t][e.length] = !0)
        });
        for (var r in o)
            for (var a in o[r]) o[r][a] || n.push("(p: " + r + " l: " + a + ")");
        return !(n.length > 0) || (console.log("%cdetectNetwork was NOT invoked with a card number that has the (prefix, length) combination(s):%c \n" + n.join("\n") + "%c\nSee below for more information.", "font-style: italic; background-color: pink;", "font-style: italic; background-color: pink; font-weight:bold", "font-style: italic; background-color: pink; font-weight:normal"), !1)
    }

    function S(e) {
        return !!window.localStorage.getItem("testing:" + e)
    }

    function A(e) {
        window.localStorage.setItem("testing:" + e, !0)
    }

    function D() {
        return !!D || (D = !0, !1)
    }

    function j(e) {
        return !(!S(e) && !Q) || (Q = !0, !1)
    }

    function T() {
        return "Diner's Club" === detectNetwork("38345678901234") && "Diner's Club" === detectNetwork("39345678901234")
    }

    function V() {
        return N([38, 39], [14])
    }

    function P() {
        return "American Express" === detectNetwork("343456789012345") && "American Express" === detectNetwork("373456789012345")
    }

    function I() {
        return N([34, 37], [15])
    }

    function W() {
        return "Visa" === detectNetwork("4123456789012") && "Visa" === detectNetwork("4123456789012345") && "Visa" === detectNetwork("4123456789012345678")
    }

    function H() {
        return N([4], [13, 16, 19])
    }

    function O() {
        return "MasterCard" === detectNetwork("5112345678901234") && "MasterCard" === detectNetwork("5212345678901234") && "MasterCard" === detectNetwork("5312345678901234") && "MasterCard" === detectNetwork("5412345678901234") && "MasterCard" === detectNetwork("5512345678901234")
    }

    function U() {
        return N([51, 52, 53, 54, 55], [16])
    }

    function Y() {
        var e = [6011, 644, 645, 646, 647, 648, 649, 65],
            t = !0;
        return e.forEach(function(e) {
            t = t && "Discover" === detectNetwork(v(e, 16)) && "Discover" === detectNetwork(v(e, 19))
        }), t
    }

    function F() {
        return N([6011, 644, 645, 646, 647, 648, 649, 65], [16, 19])
    }

    function L() {
        for (var e = !0, t = 12; t <= 19; t++) e = e && "Maestro" === detectNetwork(v("5018", t)) && "Maestro" === detectNetwork(v("5020", t)) && "Maestro" === detectNetwork(v("5038", t)) && "Maestro" === detectNetwork(v("6304", t));
        return e
    }

    function R() {
        return N([5018, 5020, 5038, 6304], [12, 13, 14, 15, 16, 17, 18, 19])
    }

    function K() {
        for (var e = !0, t = 16; t <= 19; t++) {
            for (var o = 622126; o <= 622925; o++) e = e && "China UnionPay" === detectNetwork(v(o, t));
            for (var o = 624; o <= 626; o++) e = e && "China UnionPay" === detectNetwork(v(o, t));
            for (var o = 6282; o <= 6288; o++) e = e && "China UnionPay" === detectNetwork(v(o, t))
        }
        return e
    }

    function q() {
        for (var e = [], t = 622126; t <= 622925; t++) e.push(t);
        for (var t = 624; t <= 626; t++) e.push(t);
        for (var t = 6282; t <= 6288; t++) e.push(t);
        return N(e, [16, 17, 18, 19])
    }

    function B() {
        var e = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"],
            t = [16, 18, 19],
            o = !0;
        return e.forEach(function(e) {
            t.forEach(function(t) {
                o = o && "Switch" === detectNetwork(v(e, t))
            })
        }), o
    }

    function G() {
        return N([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759], [16, 18, 19])
    }
    var z, J = sinon.spy(window, "detectNetwork"),
        Q = !1,
        X = [{
            print: u,
            test: j.bind(null, 1),
            mocha: !1
        }, {
            print: s,
            test: o,
            mocha: !1
        }, {
            print: l.bind(null, 1, 4),
            test: t.bind(null, 1, [T, P]),
            mocha: !1
        }, {
            print: h,
            test: j.bind(null, 2),
            mocha: !1
        }, {
            print: s,
            test: n,
            mocha: !1
        }, {
            print: l.bind(null, 2, 4),
            test: t.bind(null, 2, [W, O]),
            mocha: !1
        }, {
            print: w,
            test: j.bind(null, 3),
            mocha: !1
        }, {
            print: p,
            test: D,
            mocha: !0
        }, {
            print: c.bind(null, !0),
            test: r,
            mocha: !0
        }, {
            print: b,
            test: x,
            mocha: !0
        }, {
            print: l.bind(null, 3, 4),
            test: t.bind(null, 3, [C, Y, L]),
            mocha: !0
        }, {
            print: m,
            test: j.bind(null, 4),
            mocha: !0
        }, {
            print: c.bind(null, !0),
            test: a,
            mocha: !0
        }, {
            print: l.bind(null, 4, 4),
            test: t.bind(null, 4, [C, K, B]),
            mocha: !0
        }];
    e(X), window.nextStep = function() {
        e(X)
    };
    var D = !1
});