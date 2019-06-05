(function (e) {
    function t(t) {
        for (var r, a, i = t[0], s = t[1], c = t[2], l = 0, f = []; l < i.length; l++) a = i[l], o[a] && f.push(o[a][0]), o[a] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        d && d(t);
        while (f.length) f.shift()();
        return u.push.apply(u, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < u.length; t++) {
            for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
                var i = n[a];
                0 !== o[i] && (r = !1)
            }
            r && (u.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }

    var r = {}, a = {app: 0}, o = {app: 0}, u = [];

    function i(e) {
        return s.p + "js/" + ({Multiplexing: "Multiplexing", about: "about"}[e] || e) + "." + {
            Multiplexing: "ff9c212a",
            about: "e2f6b30e"
        }[e] + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.e = function (e) {
        var t = [], n = {about: 1};
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise(function (t, n) {
            for (var r = "css/" + ({
                Multiplexing: "Multiplexing",
                about: "about"
            }[e] || e) + "." + {
                Multiplexing: "31d6cfe0",
                about: "6599fc1b"
            }[e] + ".css", o = s.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
                var c = u[i], l = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (l === r || l === o)) return t()
            }
            var f = document.getElementsByTagName("style");
            for (i = 0; i < f.length; i++) {
                c = f[i], l = c.getAttribute("data-href");
                if (l === r || l === o) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
                var r = t && t.target && t.target.src || o,
                    u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                u.request = r, delete a[e], d.parentNode.removeChild(d), n(u)
            }, d.href = o;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d)
        }).then(function () {
            a[e] = 0
        }));
        var r = o[e];
        if (0 !== r) if (r) t.push(r[2]); else {
            var u = new Promise(function (t, n) {
                r = o[e] = [t, n]
            });
            t.push(r[2] = u);
            var c, l = document.createElement("script");
            l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = i(e), c = function (t) {
                l.onerror = l.onload = null, clearTimeout(f);
                var n = o[e];
                if (0 !== n) {
                    if (n) {
                        var r = t && ("load" === t.type ? "missing" : t.type), a = t && t.target && t.target.src,
                            u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + a + ")");
                        u.type = r, u.request = a, n[1](u)
                    }
                    o[e] = void 0
                }
            };
            var f = setTimeout(function () {
                c({type: "timeout", target: l})
            }, 12e4);
            l.onerror = l.onload = c, document.head.appendChild(l)
        }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) s.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function (e) {
        throw console.error(e), e
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], l = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var f = 0; f < c.length; f++) t(c[f]);
    var d = l;
    u.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "034f": function (e, t, n) {
        "use strict";
        var r = n("64a9"), a = n.n(r);
        a.a
    }, "0c36": function (e, t, n) {
        "use strict";
        var r = n("bc98"), a = n.n(r);
        a.a
    }, "18b1": function (e, t, n) {
        "use strict";
        var r = n("4b9f"), a = n.n(r);
        a.a
    }, "1be0": function (e, t, n) {
    }, "24ab": function (e, t, n) {
        e.exports = {theme: "#1890ff"}
    }, "4b9f": function (e, t, n) {
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var r = n("2b0e"), a = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "app"}}, [n("router-view")], 1)
            }, o = [], u = n("795b"), i = n.n(u), s = n("bc3a"), c = n.n(s), l = "http://www.laixiubang.com", f = "",
            d = Object({NODE_ENV: "production", VUE_APP_CLI_UI_URL: "", BASE_URL: "/"});
        "development" == d.NODE_ENV ? f = "http://180.76.101.155:3000" : "production" == d.NODE_ENV ? f = l : "test" == d.NODE_ENV && (f = "");
        var p = {
                method: "post",
                baseURL: f,
                headers: {"Content-Type": "application/json;charset=UTF-8"},
                data: {},
                timeout: 1e4,
                withCredentials: !0,
                responseType: "json"
            }, m = n("75fc"), h = n("8c4f"), b = [{
                path: "*", name: "404", component: function () {
                    return n.e("Multiplexing").then(n.bind(null, "4768"))
                }
            }, {
                path: "/403", name: "403", component: function () {
                    return n.e("Multiplexing").then(n.bind(null, "fc4e"))
                }
            }, {
                path: "/500", name: "500", component: function () {
                    return n.e("Multiplexing").then(n.bind(null, "a189"))
                }
            }], v = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("my-header"), n("router-view"), n("tool-bar")], 1)
            }, g = [], _ = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "header"}, [e._v("\n  头部\n  "), n("header-time")], 1)
            }, y = [], w = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("p", [e._v(e._s(e.time))]), n("p", [e._v(e._s(e.date))])])
            }, E = [], O = n("5a0c"), k = n.n(O), x = {
                name: "header-time", data: function () {
                    return {time: k()().format("HH:mm"), date: k()().format("YYYY/MM/DD")}
                }, mounted: function () {
                    var e = this;
                    this.timer = setInterval(function () {
                        e.time = k()().format("HH:mm"), e.date = k()().format("YYYY/MM/DD")
                    }, 1e3)
                }, beforeDestroy: function () {
                    this.timer && clearInterval(this.timer)
                }
            }, j = x, T = n("2877"), C = Object(T["a"])(j, w, E, !1, null, null, null), M = C.exports,
            N = {name: "my-header", components: {HeaderTime: M}}, P = N,
            S = (n("18b1"), Object(T["a"])(P, _, y, !1, null, "1bfccce5", null)), L = S.exports, D = function () {
                var e = this, t = e.$createElement;
                e._self._c;
                return e._m(0)
            }, H = [function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "tool"}, [e._v("\n  工具栏\n  "), n("div", {staticClass: "tool-main"})])
            }], U = {name: "tool-bar"}, A = U, Y = (n("0c36"), Object(T["a"])(A, D, H, !1, null, "d7762ae8", null)),
            R = Y.exports, $ = {name: "home", components: {myHeader: L, ToolBar: R}}, I = $,
            B = Object(T["a"])(I, v, g, !1, null, null, null), G = B.exports, V = [{
                path: "/",
                component: G,
                children: [{path: "/", name: "wel", redirect: "/wel"}, {
                    path: "wel",
                    name: "welcome",
                    component: function () {
                        return n.e("about").then(n.bind(null, "d386"))
                    }
                }]
            }, {
                path: "/about", name: "about", component: function () {
                    return n.e("about").then(n.bind(null, "f820"))
                }
            }];
        r["default"].use(h["a"]);
        var q = new h["a"]({mode: "history"});
        q.addRoutes([].concat(Object(m["a"])(b), Object(m["a"])(V)));
        var J = q, F = n("5c96"), z = n.n(F);

        function K(e) {
            return new i.a(function (t, n) {
                console.log(p.baseURL);
                var r = c.a.create({
                    baseURL: p.baseURL,
                    timeout: p.timeout,
                    headers: p.headers,
                    withCredentials: p.withCredentials
                });
                r.interceptors.request.use(function (e) {
                    return e
                }, function (e) {
                    return i.a.reject(e)
                }), r.interceptors.response.use(function (e) {
                    var t;
                    switch (t = void 0 == e.data ? e.request.responseText : e.data, t.code) {
                        case"110":
                            Object(F["Message"])({message: t.message || "error", type: "error", duration: 5e3});
                            break;
                        default:
                    }
                    return t
                }, function (e) {
                    if (e.response && e.response.status) switch (e.response.status) {
                        case 400:
                            e.message = "请求错误";
                            break;
                        case 401:
                            e.message = "未授权，请登录", J.push({path: "/login"});
                            break;
                        case 403:
                            e.message = "拒绝访问", J.push({path: "/403"});
                            break;
                        case 404:
                            e.message = "请求地址出错: ".concat(e.response.config.url), J.push({path: "/404"});
                            break;
                        case 408:
                            e.message = "请求超时";
                            break;
                        case 500:
                            e.message = "服务器内部错误";
                            break;
                        case 501:
                            e.message = "服务未实现";
                            break;
                        case 502:
                            e.message = "网关错误";
                            break;
                        case 503:
                            e.message = "服务不可用";
                            break;
                        case 504:
                            e.message = "网关超时";
                            break;
                        case 505:
                            e.message = "HTTP版本不受支持";
                            break;
                        default:
                    }
                    return i.a.reject(e)
                }), r(e).then(function (e) {
                    return t(e), e
                }).catch(function (e) {
                    n(e)
                })
            })
        }

        var Q = function (e) {
                return K({url: "/login/cellphone", method: "GET", params: e})
            }, W = {
                name: "app", mounted: function () {
                    Q().then(function (e) {
                        console.log(e)
                    })
                }
            }, X = W, Z = (n("034f"), Object(T["a"])(X, a, o, !1, null, null, null)), ee = Z.exports, te = n("2f62"),
            ne = {state: {uaserName: ""}, actions: {}, mutations: {}}, re = ne, ae = n("24ab"), oe = n.n(ae), ue = {
                state: {theme: oe.a.theme}, mutations: {
                    CHANGE_SETTING: function (e, t) {
                        var n = t.key, r = t.value;
                        e.hasOwnProperty(n) && (e[n] = r)
                    }
                }, actions: {
                    changeSetting: function (e, t) {
                        var n = e.commit;
                        n("CHANGE_SETTING", t)
                    }
                }
            }, ie = ue;
        r["default"].use(te["a"]);
        var se = new te["a"].Store({modules: {user: re, settings: ie}}), ce = se, le = {
            bind: function (e, t) {
                function n(n) {
                    if (e.contains(n.target)) return !1;
                    t.expression && t.value(n)
                }

                e.__vueClickOutside__ = n, document.addEventListener("click", n)
            }, update: function () {
            }, unbind: function (e) {
                document.removeEventListener("click", e.__vueClickOutside__), delete e.__vueClickOutside__
            }
        }, fe = {ClickOutside: le}, de = fe, pe = function (e) {
            e.directive("ClickOutside", de.ClickOutside)
        }, me = pe;
        r["default"].use(z.a), J.beforeEach(function (e, t, n) {
            n()
        });
        n("1be0");
        me(r["default"]), r["default"].config.productionTip = !1, new r["default"]({
            router: J,
            store: ce,
            render: function (e) {
                return e(ee)
            }
        }).$mount("#app")
    }, "64a9": function (e, t, n) {
    }, bc98: function (e, t, n) {
    }
});
//# sourceMappingURL=app.8b8a5f42.js.map