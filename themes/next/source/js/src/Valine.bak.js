! function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("Valine", [], n) : "object" == typeof exports ? exports.Valine = n() : e.Valine = n()
}(this, function () {
    return function (e) {
        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        var t = {};
        return n.m = e, n.c = t, n.i = function (e) {
            return e
        }, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, n.p = "/dist/", n(n.s = 3)
    }([

        function (e, n, t) {
            var r;
            ! function (i) {
                "use strict";

                function a(e, n) {
                    var t = (65535 & e) + (65535 & n);
                    return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
                }

                function o(e, n) {
                    return e << n | e >>> 32 - n
                }

                function l(e, n, t, r, i, l) {
                    return a(o(a(a(n, e), a(r, l)), i), t)
                }

                function s(e, n, t, r, i, a, o) {
                    return l(n & t | ~n & r, e, n, i, a, o)
                }

                function c(e, n, t, r, i, a, o) {
                    return l(n & r | t & ~r, e, n, i, a, o)
                }

                function u(e, n, t, r, i, a, o) {
                    return l(n ^ t ^ r, e, n, i, a, o)
                }

                function v(e, n, t, r, i, a, o) {
                    return l(t ^ (n | ~r), e, n, i, a, o)
                }

                function d(e, n) {
                    e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
                    var t, r, i, o, l, d = 1732584193,
                        p = -271733879,
                        f = -1732584194,
                        m = 271733878;
                    for (t = 0; t < e.length; t += 16) r = d, i = p, o = f, l = m, d = s(d, p, f, m, e[t], 7, -680876936), m = s(m, d, p, f, e[t + 1], 12, -389564586), f = s(f, m, d, p, e[t + 2], 17, 606105819), p = s(p, f, m, d, e[t + 3], 22, -1044525330), d = s(d, p, f, m, e[t + 4], 7, -176418897), m = s(m, d, p, f, e[t + 5], 12, 1200080426), f = s(f, m, d, p, e[t + 6], 17, -1473231341), p = s(p, f, m, d, e[t + 7], 22, -45705983), d = s(d, p, f, m, e[t + 8], 7, 1770035416), m = s(m, d, p, f, e[t + 9], 12, -1958414417), f = s(f, m, d, p, e[t + 10], 17, -42063), p = s(p, f, m, d, e[t + 11], 22, -1990404162), d = s(d, p, f, m, e[t + 12], 7, 1804603682), m = s(m, d, p, f, e[t + 13], 12, -40341101), f = s(f, m, d, p, e[t + 14], 17, -1502002290), p = s(p, f, m, d, e[t + 15], 22, 1236535329), d = c(d, p, f, m, e[t + 1], 5, -165796510), m = c(m, d, p, f, e[t + 6], 9, -1069501632), f = c(f, m, d, p, e[t + 11], 14, 643717713), p = c(p, f, m, d, e[t], 20, -373897302), d = c(d, p, f, m, e[t + 5], 5, -701558691), m = c(m, d, p, f, e[t + 10], 9, 38016083), f = c(f, m, d, p, e[t + 15], 14, -660478335), p = c(p, f, m, d, e[t + 4], 20, -405537848), d = c(d, p, f, m, e[t + 9], 5, 568446438), m = c(m, d, p, f, e[t + 14], 9, -1019803690), f = c(f, m, d, p, e[t + 3], 14, -187363961), p = c(p, f, m, d, e[t + 8], 20, 1163531501), d = c(d, p, f, m, e[t + 13], 5, -1444681467), m = c(m, d, p, f, e[t + 2], 9, -51403784), f = c(f, m, d, p, e[t + 7], 14, 1735328473), p = c(p, f, m, d, e[t + 12], 20, -1926607734), d = u(d, p, f, m, e[t + 5], 4, -378558), m = u(m, d, p, f, e[t + 8], 11, -2022574463), f = u(f, m, d, p, e[t + 11], 16, 1839030562), p = u(p, f, m, d, e[t + 14], 23, -35309556), d = u(d, p, f, m, e[t + 1], 4, -1530992060), m = u(m, d, p, f, e[t + 4], 11, 1272893353), f = u(f, m, d, p, e[t + 7], 16, -155497632), p = u(p, f, m, d, e[t + 10], 23, -1094730640), d = u(d, p, f, m, e[t + 13], 4, 681279174), m = u(m, d, p, f, e[t], 11, -358537222), f = u(f, m, d, p, e[t + 3], 16, -722521979), p = u(p, f, m, d, e[t + 6], 23, 76029189), d = u(d, p, f, m, e[t + 9], 4, -640364487), m = u(m, d, p, f, e[t + 12], 11, -421815835), f = u(f, m, d, p, e[t + 15], 16, 530742520), p = u(p, f, m, d, e[t + 2], 23, -995338651), d = v(d, p, f, m, e[t], 6, -198630844), m = v(m, d, p, f, e[t + 7], 10, 1126891415), f = v(f, m, d, p, e[t + 14], 15, -1416354905), p = v(p, f, m, d, e[t + 5], 21, -57434055), d = v(d, p, f, m, e[t + 12], 6, 1700485571), m = v(m, d, p, f, e[t + 3], 10, -1894986606), f = v(f, m, d, p, e[t + 10], 15, -1051523), p = v(p, f, m, d, e[t + 1], 21, -2054922799), d = v(d, p, f, m, e[t + 8], 6, 1873313359), m = v(m, d, p, f, e[t + 15], 10, -30611744), f = v(f, m, d, p, e[t + 6], 15, -1560198380), p = v(p, f, m, d, e[t + 13], 21, 1309151649), d = v(d, p, f, m, e[t + 4], 6, -145523070), m = v(m, d, p, f, e[t + 11], 10, -1120210379), f = v(f, m, d, p, e[t + 2], 15, 718787259), p = v(p, f, m, d, e[t + 9], 21, -343485551), d = a(d, r), p = a(p, i), f = a(f, o), m = a(m, l);
                    return [d, p, f, m]
                }

                function p(e) {
                    var n, t = "",
                        r = 32 * e.length;
                    for (n = 0; n < r; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                    return t
                }

                function f(e) {
                    var n, t = [];
                    for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1) t[n] = 0;
                    var r = 8 * e.length;
                    for (n = 0; n < r; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                    return t
                }

                function m(e) {
                    return p(d(f(e), 8 * e.length))
                }

                function h(e, n) {
                    var t, r, i = f(e),
                        a = [],
                        o = [];
                    for (a[15] = o[15] = void 0, i.length > 16 && (i = d(i, 8 * e.length)), t = 0; t < 16; t += 1) a[t] = 909522486 ^ i[t], o[t] = 1549556828 ^ i[t];
                    return r = d(a.concat(f(n)), 512 + 8 * n.length), p(d(o.concat(r), 640))
                }

                function g(e) {
                    var n, t, r = "0123456789abcdef",
                        i = "";
                    for (t = 0; t < e.length; t += 1) n = e.charCodeAt(t), i += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
                    return i
                }

                function b(e) {
                    return unescape(encodeURIComponent(e))
                }

                function w(e) {
                    return m(b(e))
                }

                function y(e) {
                    return g(w(e))
                }

                function x(e, n) {
                    return h(b(e), b(n))
                }

                function k(e, n) {
                    return g(x(e, n))
                }

                function A(e, n, t) {
                    return n ? t ? x(n, e) : k(n, e) : t ? w(e) : y(e)
                }
                void 0 !== (r = function () {
                    return A
                }.call(n, t, n, e)) && (e.exports = r)
            }()
        },
        function (e, n, t) {
            "use strict";

            function r(e) {
                return e.replace(RegExp("^" + (e.match(/^(\t| )+/) || "")[0], "gm"), "")
            }

            function i(e) {
                return (e + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function a(e) {
                function n(e) {
                    var n = o[e.replace(/\*/g, "_")[1] || ""],
                        t = p[p.length - 1] == e;
                    return n ? n[1] ? (p[t ? "pop" : "push"](e), n[0 | t]) : n[0] : e
                }

                function t() {
                    for (var e = ""; p.length;) e += n(p[p.length - 1]);
                    return e
                }
                var l, s, c, u, v, d = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,
                    p = [],
                    f = "",
                    m = 0,
                    h = {};
                for (e = e.replace(/^\[(.+?)\]:\s*(.+)$/gm, function (e, n, t) {
                    return h[n.toLowerCase()] = t, ""
                }).replace(/^\n+|\n+$/g, ""); c = d.exec(e);) s = e.substring(m, c.index), m = d.lastIndex, l = c[0], s.match(/[^\\](\\\\)*\\$/) || (c[3] || c[4] ? l = '<pre class="code ' + (c[4] ? "poetry" : c[2].toLowerCase()) + '">' + r(i(c[3] || c[4]).replace(/^\n+|\n+$/g, "")) + "</pre>" : c[6] ? (v = c[6], v.match(/\./) && (c[5] = c[5].replace(/^\d+/gm, "")), u = a(r(c[5].replace(/^\s*[>*+.-]/gm, ""))), ">" === v ? v = "blockquote" : (v = v.match(/\./) ? "ol" : "ul", u = u.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), l = "<" + v + ">" + u + "</" + v + ">") : c[8] ? l = '<img src="' + i(c[8]) + '" alt="' + i(c[7]) + '">' : c[10] ? (f = f.replace("<a>", '<a href="' + i(c[11] || h[s.toLowerCase()]) + '">'), l = t() + "</a>") : c[9] ? l = "<a>" : c[12] || c[14] ? (v = "h" + (c[14] ? c[14].length : "=" === c[13][0] ? 1 : 2), l = "<" + v + ">" + a(c[12] || c[15]) + "</" + v + ">") : c[16] ? l = "<code>" + i(c[16]) + "</code>" : (c[17] || c[1]) && (l = n(c[17] || "--"))), f += s, f += l;
                return (f + e.substring(m) + t()).trim()
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = {
                "": ["<em>", "</em>"],
                _: ["<strong>", "</strong>"],
                "\n": ["<br />"],
                " ": ["<br />"],
                "-": ["<hr />"]
            };
            n.default = a
        },
        function (e, n, t) {
            var r = t(4);
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var i = {};
            i.transform = void 0;
            t(6)(r, i);
            r.locals && (e.exports = r.locals)
        },
        function (e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function () {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var r = n[t];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (n, t, r) {
                        return t && e(n.prototype, t), r && e(n, r), n
                    }
                }(),
                a = t(1),
                o = function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(a);
            t(2);
            var l = t(0),
                s = location.pathname,
                c = {
                    ip: "",
                    comment: "",
                    rid: "",
                    at: "",
                    nick: "",
                    mail: "",
                    link: "",
                    ua: navigator.userAgent,
                    url: s,
                    pin: 0,
                    like: 0
                },
                u = {}.toString,
                v = localStorage,
                d = function () {
                    function e(n) {
                        r(this, e);
                        var t = this;
                        t.version = "1.1.4", b(), !!n && t.init(n)
                    }
                    return i(e, [{
                        key: "init",
                        value: function (e) {
                            var n = this,
                                t = e.av || n.v;
                            try {
                                var r = "[object HTMLDivElement]" === u.call(e.el) ? e.el : document.querySelectorAll(e.el)[0];
                                if ("[object HTMLDivElement]" != u.call(r)) throw "The target element was not found.";
                                n.el = r, n.el.classList.add("valine");
                                var i = e.placeholder || "ヾﾉ≧∀≦)o来啊，快活啊!",
                                    a = '<div class="vwrap">\n                                <div class="textarea-wrapper">\n                                    <textarea class="veditor" placeholder="' + i + '"></textarea>\n                                </div>\n                                <section class="auth-section">\n                                    <div class="input-wrapper"><input type="text" name="author" class="vnick" placeholder="名字" value=""></div>\n                                    <div class="input-wrapper"><input type="email" name="email" class="vmail" placeholder="E-mail" value=""></div>\n                                    <div class="input-wrapper"><input type="text" name="website" class="vlink" placeholder="网站 (可选)" value=""></div>\n                                    <div class="post-action"><button type="button" class="vsubmit">提交</button></div>\n                                </section>\n                                <div style="display:none;" class="vmark"></div>\n                           </div>\n                           <div class="info">\n                                <div class="col">共 <span class="count"></span> 条评论</div>\n                                <div class="col power float-right">\n                                    <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg>\n                                    <span>Markdown is supported</span>\n                                </div>\n                           </div>\n                           <ul class="vlist"><li class="vloading"></li><li class="vempty"></li></ul>';
                                n.el.innerHTML = a;
                                var o = n.el.querySelector(".vempty");
                                n.nodata = {
                                    show: function (e) {
                                        o.innerHTML = e || "还没有评论哦，快来抢沙发吧!", o.setAttribute("style", "display:block;")
                                    }, hide: function () {
                                        o.setAttribute("style", "display:none;")
                                    }
                                }, n.nodata.show(), t.init({
                                    appId: e.app_id || e.appId,
                                    appKey: e.app_key || e.appKey
                                }), n.v = t
                            } catch (e) {
                                var l = "https://github.com/xCss/Valine/issues";
                                return void(n.el ? n.nodata.show('<pre style="color:red;text-align:left;">' + e + "<br>Valine:<b>" + n.version + "</b><br>反馈：" + l + "</pre>") : console && console.log("%c" + e + "\n%cValine%c" + n.version + " " + l, "color:red;", "background:#000;padding:5px;line-height:30px;color:#fff;", "background:#456;line-height:30px;padding:5px;color:#fff;"))
                            }
                            var c = n.el.querySelector(".vloading");
                            c.innerHTML = '<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>', n.loading = {
                                show: function () {
                                    c.setAttribute("style", "display:block;"), n.nodata.hide()
                                }, hide: function () {
                                    c.setAttribute("style", "display:none;"), 0 === n.el.querySelectorAll(".vcard").length && n.nodata.show()
                                }
                            };
                            var v = n.el.querySelector(".vmark");
                            n.alert = {
                                show: function (e) {
                                    v.innerHTML = '<div class="valert txt-center"><div class="vtext">' + e.text + '</div><div class="vbtns"></div></div>';
                                    var t = v.querySelector(".vbtns"),
                                        r = '<button class="vcancel vbtn">' + (e && e.ctxt || "我再看看") + "</button>",
                                        i = '<button class="vsure vbtn">' + (e && e.otxt || "继续提交") + "</button>";
                                    if (t.innerHTML = "" + r + (e.type && i), v.querySelector(".vcancel").addEventListener("click", function (e) {
                                        n.alert.hide()
                                    }), v.setAttribute("style", "display:block;"), e && e.type) {
                                        var a = v.querySelector(".vsure");
                                        p.on("click", a, function (t) {
                                            n.alert.hide(), e.cb && e.cb()
                                        })
                                    }
                                }, hide: function () {
                                    v.setAttribute("style", "display:none;")
                                }
                            }, n.loading.show();
                            var d = new n.v.Query("Comment");
                            d.select(["nick", "comment", "link", "rid", "isSpam", "emailHash", "like", "pin"]), d.equalTo("url", s), d.descending("createdAt"), d.limit("1000"), d.find().then(function (e) {
                                var t = e.length;
                                if (n.el.querySelector(".count").innerHTML = "" + t, t)
                                    for (var r = t - 1; r > -1; r--) {
                                        var i = e[r];
                                        if (!i.get("isSpam")) {
                                            var a = document.createElement("li");
                                            a.setAttribute("class", "vcard"), a.setAttribute("id", i.id);
                                            var o = "https://gravatar.cat.net/avatar/" + i.get("emailHash") + "?size=96";
                                            a.innerHTML = '<img class="vavatar" src="' + o + '"/>\n                                        <div class="text-wrapper">\n                                            <div class="vhead" >\n                                                <a href="' + (i.get("link") || "javascript:void(0);") + '" target="_blank" rel="nofollow" > ' + i.get("nick") + '</a>\n                                                <span class="spacer">•</span><span class="vtime">' + h(i.get("createdAt")) + '</span>\n                                            </div>\n                                            <div class="vcomment">' + i.get("comment") + "</div>\n                                            <a rid='" + i.id + "' at='@" + i.get("nick") + '\' class="vat">回复</a>\n                                        </div>';
                                            var l = n.el.querySelector(".vlist"),
                                                s = l.querySelectorAll("li"),
                                                c = a.querySelector(".vat"),
                                                u = a.querySelectorAll("a");
                                            for (var v in u)
                                                if (u.hasOwnProperty(v)) {
                                                    var d = u[v];
                                                    "at" != d.getAttribute("class") && (d.setAttribute("target", "_blank"), d.setAttribute("rel", "nofollow"))
                                                }
                                            n.bindAt(c), l.insertBefore(a, s[1])
                                        }
                                    }
                                n.loading.hide()
                            }).catch(function (e) {
                                n.loading.hide()
                            }), n.bind()
                        }
                    }, {
                        key: "bind",
                        value: function () {
                            var e = this,
                                n = {
                                    veditor: "comment",
                                    vnick: "nick",
                                    vlink: "link",
                                    vmail: "mail"
                                },
                                t = {};
                            for (var r in n) n.hasOwnProperty(r) && function () {
                                var i = n[r],
                                    a = e.el.querySelector("." + r);
                                t[i] = a, p.on("input", a, function (e) {
                                    c[i] = m.encode(a.value.replace(/(^\s*)|(\s*$)/g, ""))
                                })
                            }();
                            var i = function () {
                                var n = v && v.getItem("ValineCache");
                                if (n) {
                                    n = JSON.parse(n);
                                    var t = ["nick", "link", "mail"];
                                    for (var r in t) {
                                        var i = t[r];
                                        e.el.querySelector(".v" + i).value = n[i], c[i] = n[i]
                                    }
                                }
                            };
                            i(), e.reset = function () {
                                for (var t in n)
                                    if (n.hasOwnProperty(t)) {
                                        var r = n[t],
                                            a = e.el.querySelector("." + t);
                                        a.value = "", c[r] = ""
                                    }
                                c.rid = "", c.nick = "神秘人", i()
                            };
                            var a = e.el.querySelector(".vsubmit"),
                                s = function (n) {
                                    if (a.getAttribute("disabled")) return void e.alert.show({
                                        type: 0,
                                        text: '再等等，评论正在提交中ヾ(๑╹◡╹)ﾉ"',
                                        ctxt: "好的"
                                    });
                                    if ("" == c.comment) return void t.comment.focus();
                                    if ("" == c.nick && (c.nick = "神秘人"), c.comment = (0, o.default)(c.comment), c.comment.indexOf(c.at) > -1 && "" != c.at) {
                                        var r = '<a class="at" href=\'#' + c.rid + "'>" + c.at + "</a>";
                                        c.comment = c.comment.replace(c.at, r)
                                    }
                                    var i = f.mail(c.mail),
                                        l = f.link(c.link);
                                    i.k || 0 === c.link.length || l.k ? i.k ? 0 === c.link.length || l.k ? (c.mail = i.v, c.link = l.v, d()) : (c.link = "", c.mail = i.v, e.alert.show({
                                        type: 1,
                                        text: "您的网址格式不正确, 是否继续提交?",
                                        cb: function () {
                                            d()
                                        }
                                    })) : (c.mail = "", c.link = l.v, e.alert.show({
                                        type: 1,
                                        text: "您的邮箱格式不正确, 是否继续提交?留下您的邮箱可收到回复提醒~",
                                        cb: function () {
                                            d()
                                        }
                                    })) : (c.mail = "", c.link = "", e.alert.show({
                                        type: 1,
                                        text: "您的网址和邮箱格式不正确, 是否继续提交?留下您的邮箱可收到回复提醒~",
                                        cb: function () {
                                            d()
                                        }
                                    }))
                                },
                                u = function () {
                                    var n = new e.v.ACL;
                                    return n.setPublicReadAccess(!0), n.setPublicWriteAccess(!1), n
                                },
                                d = function () {
                                    a.setAttribute("disabled", !0), e.loading.show();
                                    var n = e.v.Object.extend("Comment"),
                                        t = new n;
                                    for (var r in c)
                                        if (c.hasOwnProperty(r)) {
                                            if ("at" === r) continue;
                                            var i = c[r];
                                            t.set(r, i)
                                        }
                                    t.set("emailHash", l(c.mail.toLowerCase().trim())), t.setACL(u()), t.save().then(function (n) {
                                        v && v.setItem("ValineCache", JSON.stringify({
                                            nick: c.nick,
                                            link: c.link,
                                            mail: c.mail
                                        }));
                                        var t = e.el.querySelector(".count");
                                        t.innerText = Number(t.innerText) + 1;
                                        var r = document.createElement("li");
                                        r.setAttribute("class", "vcard"), r.setAttribute("id", n.id);
                                        var i = "https://gravatar.cat.net/avatar/" + n.get("emailHash") + "?size=96";
                                        r.innerHTML = '<img class="vavatar" src="' + i + '"/>\n                                    <div class="text-wrapper">\n                                    <div class="vhead" >\n                                    <a href="' + (n.get("link") || "javascript:void(0);") + '" target="_blank" rel="nofollow" >' + n.get("nick") + '</a>\n                                    <span class="spacer">•</span><span class="vtime">' + h(n.get("createdAt")) + '</span>\n                                    </div>\n                                    <div class="vcomment">' + n.get("comment") + "</div>\n                                    <a rid='" + n.id + "' at='@" + n.get("nick") + '\' class="vat">回复</a>\n                                    </div>';
                                        var o = e.el.querySelector(".vlist"),
                                            l = o.querySelectorAll("li"),
                                            s = r.querySelectorAll("a");
                                        for (var u in s)
                                            if (s.hasOwnProperty(u)) {
                                                var d = s[u];
                                                "at" !== d.getAttribute("class") && (d.setAttribute("target", "_blank"), d.setAttribute("rel", "nofollow"))
                                            }
                                        var p = r.querySelector(".vat");
                                        e.bindAt(p), o.insertBefore(r, l[1]), a.removeAttribute("disabled"), e.loading.hide(), e.reset()
                                    }).catch(function (n) {
                                        e.loading.hide()
                                    })
                                };
                            e.bindAt = function (e) {
                                p.on("click", e, function (n) {
                                    var r = e.getAttribute("at"),
                                        i = e.getAttribute("rid");
                                    c.rid = i, c.at = r, t.comment.value = r + " ，" + t.comment.value, t.comment.focus()
                                })
                            }, p.off("click", a, s), p.on("click", a, s)
                        }
                    }]), e
                }(),
                p = {
                    on: function (e, n, t, r) {
                        n.addEventListener ? n.addEventListener(e, t, r || !1) : n.attachEvent ? n.attachEvent("on" + e, t) : n["on" + e] = t
                    }, off: function (e, n, t, r) {
                        n.removeEventListener ? n.removeEventListener(e, t, r || !1) : n.detachEvent ? n.detachEvent("on" + e, t) : n["on" + e] = null
                    }
                },
                f = {
                    mail: function (e) {
                        return {
                            k: /[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(e),
                            v: e
                        }
                    }, link: function (e) {
                        return e.length > 0 && (e = /^(http|https)/.test(e) ? e : "http://" + e), {
                            k: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/.test(e),
                            v: e
                        }
                    }
                },
                m = {
                    encode: function (e) {
                        return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : ""
                    }, decode: function (e) {
                        return e ? e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"') : ""
                    }
                },
                h = function (e) {
                    var n = g(e.getDate(), 2),
                        t = g(e.getMonth() + 1, 2);
                    return g(e.getFullYear(), 2) + "-" + t + "-" + n
                },
                g = function (e, n) {
                    for (var t = e.toString(); t.length < n;) t = "0" + t;
                    return t
                },
                b = function () {
                    $.getJSON("https://api.ip.sb/jsonip?callback=?", function (e) {
                        c.ip = e.ip
                    })
                };
            e.exports = d
        },
        function (e, n, t) {
            n = e.exports = t(5)(void 0), n.push([e.i, '.valine {\n  /************ Loading ************/ }\n  .valine * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-family: PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,STHeitiSC-Light,simsun,WenQuanYi Zen Hei,WenQuanYi Micro Hei,"sans-serif";\n    font-size: 100%;\n    font-weight: normal;\n    line-height: 1.42857143;\n    color: #3c484e;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    margin: 0;\n    padding: 0; }\n  .valine .vwrap {\n    overflow: hidden;\n    position: relative; }\n    .valine .vwrap .textarea-wrapper {\n      margin-bottom: 0.625em; }\n      .valine .vwrap .textarea-wrapper textarea {\n        color: #4b5b62;\n        width: 100%;\n        background: #fafdff;\n        border: .06em solid #edf4f8;\n        border-radius: .2em;\n        padding: .4em .5em;\n        min-height: 10em;\n        resize: none; }\n        .valine .vwrap .textarea-wrapper textarea:focus {\n          border-color: #c4c8cb;\n          outline: 0; }\n    .valine .vwrap .auth-section {\n      display: -webkit-box;\n      display: flex;\n      display: -ms-flexbox; }\n      .valine .vwrap .auth-section .input-wrapper {\n        -ms-flex: 1 1 27%;\n        -webkit-box-flex: 1;\n                flex: 1 1 27%;\n        padding-right: 0.6em;\n        width: 27%;\n        margin: 0 0 .6em; }\n        .valine .vwrap .auth-section .input-wrapper input {\n          color: #4b5b62;\n          background: #fafdff;\n          border: .06em solid #edf4f8;\n          border-radius: .2em;\n          padding: .4em .5em;\n          line-height: 2;\n          font-size: 1em !important; }\n          .valine .vwrap .auth-section .input-wrapper input:focus {\n            border-color: #c4c8cb;\n            outline: 0; }\n      .valine .vwrap .auth-section input {\n        width: 100%; }\n      .valine .vwrap .auth-section .post-action {\n        -ms-flex: 1 1 19%;\n        -webkit-box-flex: 1;\n                flex: 1 1 19%;\n        width: 19%;\n        margin: 0 0 .6em; }\n        .valine .vwrap .auth-section .post-action button {\n          color: #fff;\n          width: 100%;\n          line-height: 2;\n          font-weight: bolder;\n          background: #33b1ff;\n          border: .06em solid #edf4f8;\n          border-radius: .2em;\n          padding: .4em .5em;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          font-size: 1em !important; }\n      @media screen and (max-width: 720px) {\n        .valine .vwrap .auth-section {\n          display: block; }\n          .valine .vwrap .auth-section .input-wrapper, .valine .vwrap .auth-section .post-action {\n            -ms-flex: 1 1 100%;\n            -webkit-box-flex: 1;\n                    flex: 1 1 100%;\n            padding-right: 0;\n            width: 100%; } }\n    .valine .vwrap .vmark {\n      position: absolute;\n      background: rgba(0, 0, 0, 0.65);\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0; }\n      .valine .vwrap .vmark .valert {\n        padding: 3em 0 0 0; }\n        .valine .vwrap .vmark .valert .vtext {\n          color: #fff;\n          padding: 15px; }\n        .valine .vwrap .vmark .valert .vcode {\n          width: 75px;\n          border-radius: 5px;\n          background: #dedede; }\n          .valine .vwrap .vmark .valert .vcode:focus {\n            border-color: #3090e4;\n            background-color: #fff; }\n      @media screen and (max-width: 720px) {\n        .valine .vwrap .vmark .valert {\n          padding: 8em 0; }\n          .valine .vwrap .vmark .valert .vtext {\n            color: #fff;\n            padding: 10px; } }\n  .valine .info {\n    padding: 5px; }\n    .valine .info .col {\n      display: inline-block;\n      vertical-align: middle; }\n    .valine .info svg {\n      margin-right: 2px;\n      overflow: hidden;\n      fill: currentColor; }\n    .valine .info .count {\n      font-size: 1.5em; }\n  .valine .power {\n    color: #999;\n    font-size: 0.625em !important; }\n  .valine a {\n    text-decoration: none;\n    color: #3eb0ef; }\n  .valine ul,\n  .valine li {\n    list-style: none; }\n  .valine .txt-center {\n    text-align: center; }\n  .valine .float-right {\n    float: right !important; }\n  .valine .pd5 {\n    padding: 5px; }\n  .valine .pd10 {\n    padding: 10px; }\n  .valine .vbtn {\n    display: inline-block;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: #33b1ff;\n    border: .06em solid #33b1ff;\n    border-radius: .2em;\n    color: #fff;\n    padding: .5em 1.5em;\n    cursor: pointer;\n    white-space: nowrap;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none;\n    min-width: 60px;\n    max-width: 100%;\n    margin: 0 1em; }\n  .valine .vbtn:active,\n  .valine .vbtn:hover {\n    border-color: #33b1ff; }\n  .valine .vlist {\n    padding: 0; }\n    .valine .vlist .vcard {\n      display: -webkit-box;\n      display: flex;\n      display: -ms-flexbox;\n      padding-top: 2em; }\n      .valine .vlist .vcard .vavatar {\n        -webkit-box-flex: 0;\n                flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n        margin-right: 1em;\n        margin-top: 0.1em;\n        display: inline-block;\n        height: 3em;\n        width: 3em;\n        position: relative;\n        border-radius: 50%; }\n        .valine .vlist .vcard .vavatar:hover {\n          transform: rotate(1turn);\n          -webkit-transform: rotate(1turn); }\n      .valine .vlist .vcard .text-wrapper .vhead {\n        line-height: 1; }\n        .valine .vlist .vcard .text-wrapper .vhead a {\n          font-weight: bolder;\n          font-size: 1em;\n          color: rgba(0, 0, 0, 0.7); }\n        .valine .vlist .vcard .text-wrapper .vhead .spacer {\n          color: #ccc;\n          margin-left: .3em;\n          margin-right: .3em; }\n        .valine .vlist .vcard .text-wrapper .vhead .vtime {\n          color: #a9a4a4;\n          display: inline-block; }\n      .valine .vlist .vcard .text-wrapper .vcomment {\n        word-wrap: break-word;\n        white-space: pre-wrap;\n        word-break: break-all;\n        text-align: justify;\n        line-height: 1.8;\n        margin-top: 0.3em;\n        margin-bottom: .6em; }\n        .valine .vlist .vcard .text-wrapper .vcomment pre.code {\n          overflow: auto; }\n      .valine .vlist .vcard .text-wrapper .vat {\n        color: #33b1ff;\n        cursor: pointer; }\n      .valine .vlist .vcard .text-wrapper .vat:hover {\n        color: #005e99; }\n    .valine .vlist .vempty {\n      padding: 20px;\n      text-align: center;\n      color: #999; }\n  .valine .spinner {\n    margin: 10px auto;\n    width: 50px;\n    height: 30px;\n    text-align: center;\n    font-size: 10px; }\n  .valine .spinner > div {\n    background-color: #9c9c9c;\n    height: 100%;\n    width: 6px;\n    margin-right: 3px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  .valine .spinner .r2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  .valine .spinner .r3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  .valine .spinner .r4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  .valine .spinner .r5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n', ""])
        },
        function (e, n) {
            function t(e, n) {
                var t = e[1] || "",
                    i = e[3];
                if (!i) return t;
                if (n && "function" == typeof btoa) {
                    var a = r(i);
                    return [t].concat(i.sources.map(function (e) {
                        return "/*# sourceURL=" + i.sourceRoot + e + " */"
                    })).concat([a]).join("\n")
                }
                return [t].join("\n")
            }

            function r(e) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
            }
            e.exports = function (e) {
                var n = [];
                return n.toString = function () {
                    return this.map(function (n) {
                        var r = t(n, e);
                        return n[2] ? "@media " + n[2] + "{" + r + "}" : r
                    }).join("")
                }, n.i = function (e, t) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    for (var r = {}, i = 0; i < this.length; i++) {
                        var a = this[i][0];
                        "number" == typeof a && (r[a] = !0)
                    }
                    for (i = 0; i < e.length; i++) {
                        var o = e[i];
                        "number" == typeof o[0] && r[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), n.push(o))
                    }
                }, n
            }
        },
        function (e, n, t) {
            function r(e, n) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t],
                        i = f[r.id];
                    if (i) {
                        i.refs++;
                        for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++) i.parts.push(u(r.parts[a], n))
                    } else {
                        for (var o = [], a = 0; a < r.parts.length; a++) o.push(u(r.parts[a], n));
                        f[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: o
                        }
                    }
                }
            }

            function i(e, n) {
                for (var t = [], r = {}, i = 0; i < e.length; i++) {
                    var a = e[i],
                        o = n.base ? a[0] + n.base : a[0],
                        l = a[1],
                        s = a[2],
                        c = a[3],
                        u = {
                            css: l,
                            media: s,
                            sourceMap: c
                        };
                    r[o] ? r[o].parts.push(u) : t.push(r[o] = {
                        id: o,
                        parts: [u]
                    })
                }
                return t
            }

            function a(e, n) {
                var t = h(e.insertInto);
                if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = w[w.length - 1];
                if ("top" === e.insertAt) r ? r.nextSibling ? t.insertBefore(n, r.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), w.push(n);
                else {
                    if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    t.appendChild(n)
                }
            }

            function o(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var n = w.indexOf(e);
                n >= 0 && w.splice(n, 1)
            }

            function l(e) {
                var n = document.createElement("style");
                return e.attrs.type = "text/css", c(n, e.attrs), a(e, n), n
            }

            function s(e) {
                var n = document.createElement("link");
                return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(n, e.attrs), a(e, n), n
            }

            function c(e, n) {
                Object.keys(n).forEach(function (t) {
                    e.setAttribute(t, n[t])
                })
            }

            function u(e, n) {
                var t, r, i, a;
                if (n.transform && e.css) {
                    if (!(a = n.transform(e.css))) return function () {};
                    e.css = a
                }
                if (n.singleton) {
                    var c = b++;
                    t = g || (g = l(n)), r = v.bind(null, t, c, !1), i = v.bind(null, t, c, !0)
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = s(n), r = p.bind(null, t, n), i = function () {
                    o(t), t.href && URL.revokeObjectURL(t.href)
                }) : (t = l(n), r = d.bind(null, t), i = function () {
                    o(t)
                });
                return r(e),
                    function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            r(e = n)
                        } else i()
                    }
            }

            function v(e, n, t, r) {
                var i = t ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = x(n, i);
                else {
                    var a = document.createTextNode(i),
                        o = e.childNodes;
                    o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(a, o[n]) : e.appendChild(a)
                }
            }

            function d(e, n) {
                var t = n.css,
                    r = n.media;
                if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }

            function p(e, n, t) {
                var r = t.css,
                    i = t.sourceMap,
                    a = void 0 === n.convertToAbsoluteUrls && i;
                (n.convertToAbsoluteUrls || a) && (r = y(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var o = new Blob([r], {
                        type: "text/css"
                    }),
                    l = e.href;
                e.href = URL.createObjectURL(o), l && URL.revokeObjectURL(l)
            }
            var f = {},
                m = function (e) {
                    var n;
                    return function () {
                        return void 0 === n && (n = e.apply(this, arguments)), n
                    }
                }(function () {
                    return window && document && document.all && !window.atob
                }),
                h = function (e) {
                    var n = {};
                    return function (t) {
                        return void 0 === n[t] && (n[t] = e.call(this, t)), n[t]
                    }
                }(function (e) {
                    return document.querySelector(e)
                }),
                g = null,
                b = 0,
                w = [],
                y = t(7);
            e.exports = function (e, n) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                n = n || {}, n.attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || (n.singleton = m()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
                var t = i(e, n);
                return r(t, n),
                    function (e) {
                        for (var a = [], o = 0; o < t.length; o++) {
                            var l = t[o],
                                s = f[l.id];
                            s.refs--, a.push(s)
                        }
                        if (e) {
                            r(i(e, n), n)
                        }
                        for (var o = 0; o < a.length; o++) {
                            var s = a[o];
                            if (0 === s.refs) {
                                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                                delete f[s.id]
                            }
                        }
                    }
            };
            var x = function () {
                var e = [];
                return function (n, t) {
                    return e[n] = t, e.filter(Boolean).join("\n")
                }
            }()
        },
        function (e, n) {
            e.exports = function (e) {
                var n = "undefined" != typeof window && window.location;
                if (!n) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var t = n.protocol + "//" + n.host,
                    r = t + n.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, n) {
                    var i = n.trim().replace(/^"(.*)"$/, function (e, n) {
                        return n
                    }).replace(/^'(.*)'$/, function (e, n) {
                        return n
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
                    var a;
                    return a = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? t + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")"
                })
            }
        }
    ])
});
//# sourceMappingURL=Valine.min.js.map
