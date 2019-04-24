window.Player = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 8)
}([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = d(n(10)),
        i = d(n(3)),
        a = d(n(27)),
        s = d(n(6)),
        l = d(n(4)),
        c = d(n(28)),
        u = n(5);

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var f = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            if (n.config = i.default.deepCopy({
                    width: 600,
                    height: 337.5,
                    ignores: [],
                    whitelist: [],
                    lang: (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase(),
                    inactive: 3e3,
                    volume: .6,
                    controls: !0,
                    controlsList: ["nodownload"]
                }, e), n.version = u.version, n.userTimer = null, n.waitTimer = null, n.database = new a.default, n.history = [], n.isProgressMoving = !1, n.root = i.default.findDom(document, "#" + n.config.id), n.controls = i.default.createDom("xg-controls", "", {
                    unselectable: "on",
                    onselectstart: "return false"
                }, "xgplayer-controls"), !n.root) {
                var r = n.config.el;
                if (!r || 1 !== r.nodeType) return n.emit("error", new l.default("use", n.config.vid, {
                    line: 32,
                    handle: "Constructor",
                    msg: "container id can't be empty"
                })), !1, p(n, !1);
                n.root = r
            }
            if (i.default.addClass(n.root, "xgplayer xgplayer-" + s.default.device + " xgplayer-nostart " + (n.config.controls ? "" : "no-controls")), n.root.appendChild(n.controls), n.config.fluid ? (n.root.style["max-width"] = "100%", n.root.style.width = "100%", n.root.style.height = "0", n.root.style["padding-top"] = 100 * n.config.height / n.config.width + "%", n.video.style.position = "absolute", n.video.style.top = "0", n.video.style.left = "0") : (n.root.style.width = n.config.width + "px", n.root.style.height = n.config.height + "px"), n.config.controlStyle && "String" === i.default.typeOf(n.config.controlStyle)) {
                var o = n;
                fetch(o.config.controlStyle, {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                }).then(function (e) {
                    e.ok && e.json().then(function (e) {
                        for (var t in e) e.hasOwnProperty(t) && (o.config[t] = e[t]);
                        o.pluginsCall()
                    })
                }).catch(function (e) {
                    console.log("Fetch错误:" + e)
                })
            } else n.pluginsCall();
            n.ev.forEach(function (e) {
                var t = Object.keys(e)[0],
                    r = n[e[t]];
                r && n.on(t, r)
            }), ["focus", "blur"].forEach(function (e) {
                n.on(e, n["on" + e.charAt(0).toUpperCase() + e.slice(1)])
            });
            var c = n;
            return n.mousemoveFunc = function () {
                c.emit("focus"), c.config.closeFocusVideoFocus || c.video.focus()
            }, n.root.addEventListener("mousemove", n.mousemoveFunc), n.playFunc = function () {
                c.emit("focus"), c.config.closePlayVideoFocus || c.video.focus()
            }, c.once("play", n.playFunc), setTimeout(function () {
                n.emit("ready")
            }, 0), n.config.keyShortcut && "on" !== n.config.keyShortcut || ["video", "controls"].forEach(function (e) {
                c[e].addEventListener("keydown", function (e) {
                    c.onKeydown(e, c)
                })
            }), n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.default), r(t, [{
            key: "start",
            value: function () {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.url,
                    r = this.root,
                    o = this;
                n && "" !== n || this.emit("urlNull"), this.logParams.playSrc = n, this.canPlayFunc = function () {
                    var e = o.video.play();
                    void 0 !== e && e && e.then(function () {
                        o.emit("autoplay started")
                    }).catch(function () {
                        o.emit("autoplay was prevented"), t.util.addClass(o.root, "xgplayer-is-autoplay")
                    }), o.off("canplay", o.canPlayFunc)
                }, "String" === i.default.typeOf(n) ? this.video.src = n : n.forEach(function (t) {
                    e.video.appendChild(i.default.createDom("source", "", {
                        src: "" + t.src,
                        type: "" + (t.type || "")
                    }))
                }), this.logParams.pt = (new Date).getTime(), this.logParams.vt = this.logParams.pt, this.loadeddataFunc = function () {
                    o.logParams.vt = (new Date).getTime(), o.logParams.pt > o.logParams.vt && (o.logParams.pt = o.logParams.vt), o.logParams.vd = o.video.duration
                }, this.once("loadeddata", this.loadeddataFunc), this.config.autoplay && this.on("canplay", this.canPlayFunc), r.insertBefore(this.video, r.firstChild), setTimeout(function () {
                    e.emit("complete")
                }, 1)
            }
        }, {
            key: "reload",
            value: function () {
                this.video.load(), this.reloadFunc = function () {
                    this.play()
                }, this.once("loadeddata", this.reloadFunc)
            }
        }, {
            key: "destroy",
            value: function () {
                var e = this,
                    n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    r = this,
                    o = this.root.parentNode;
                for (var i in clearInterval(this.bulletResizeTimer), this._interval) clearInterval(this._interval[i]), this._interval[i] = null;

                function a() {
                    for (var e in this.emit("destroy"), this.video.removeAttribute("src"), this.video.load(), n && o.removeChild(this.root), this) delete this[e];
                    this.off("pause", a)
                }
                this.ev.forEach(function (t) {
                        var n = Object.keys(t)[0],
                            r = e[t[n]];
                        r && e.off(n, r)
                    }), this.loadeddataFunc && this.off("loadeddata", this.loadeddataFunc), this.reloadFunc && this.off("loadeddata", this.reloadFunc), this.replayFunc && this.off("play", this.replayFunc), this.playFunc && this.off("play", this.playFunc), ["focus", "blur"].forEach(function (t) {
                        e.off(t, e["on" + t.charAt(0).toUpperCase() + t.slice(1)])
                    }), this.config.keyShortcut && "on" !== this.config.keyShortcut || ["video", "controls"].forEach(function (t) {
                        e[t] && e[t].removeEventListener("keydown", function (e) {
                            r.onKeydown(e, r)
                        })
                    }), this.paused ? a.call(this) : (this.pause(), this.once("pause", a)),
                    function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(t);
                            return null === i ? void 0 : e(i, n, r)
                        }
                        if ("value" in o) return o.value;
                        var a = o.get;
                        return void 0 !== a ? a.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
            }
        }, {
            key: "replay",
            value: function () {
                var e = this,
                    t = this._replay;
                i.default.removeClass(this.root, "xgplayer-ended"), this.logParams = {
                    bc: 0,
                    bu_acu_t: 0,
                    played: [],
                    pt: (new Date).getTime(),
                    vt: (new Date).getTime(),
                    vd: 0
                }, this.logParams.pt = (new Date).getTime(), this.logParams.vt = this.logParams.pt, this.replayFunc = function () {
                    e.logParams.vt = (new Date).getTime(), e.logParams.pt > e.logParams.vt && (e.logParams.pt = e.logParams.vt), e.logParams.vd = e.video.duration
                }, this.once("play", this.replayFunc), this.logParams.playSrc = this.video.currentSrc, t && t instanceof Function ? t() : (this.currentTime = 0, this.play())
            }
        }, {
            key: "pluginsCall",
            value: function () {
                var e = this;
                if (t.plugins) {
                    var n = this.config.ignores;
                    Object.keys(t.plugins).forEach(function (r) {
                        var o = t.plugins[r];
                        n.some(function (e) {
                            return r === e
                        }) || (["pc", "tablet", "mobile"].some(function (e) {
                            return e === r
                        }) ? r === s.default.device && o.call(e, e) : o.call(e, e))
                    })
                }
            }
        }, {
            key: "getPIP",
            value: function () {
                var e = this.root.getBoundingClientRect(),
                    t = e.top,
                    n = e.left,
                    r = i.default.createDom("xg-pip-lay", "<div></div>", {}, "xgplayer-pip-lay");
                this.root.appendChild(r);
                var o = i.default.createDom("xg-pip-drag", '<div class="drag-handle"><span>点击按住可拖动视频</span></div>', {
                    tabindex: 9
                }, "xgplayer-pip-drag");
                this.root.appendChild(o);
                new c.default(".xgplayer", {
                    handle: ".drag-handle"
                });
                i.default.addClass(this.root, "xgplayer-pip-active"), this.root.style.right = 0, this.root.style.bottom = "200px", this.root.style.top = "", this.root.style.left = "", this.config.fluid && (this.root.style["padding-top"] = "");
                var a = this;
                ["click", "touchstart"].forEach(function (e) {
                    r.addEventListener(e, function (e) {
                        e.preventDefault(), e.stopPropagation(), a.exitPIP(), a.root.style.top = t + "px", a.root.style.left = n + "px"
                    })
                })
            }
        }, {
            key: "exitPIP",
            value: function () {
                i.default.removeClass(this.root, "xgplayer-pip-active"), this.root.style.right = "", this.root.style.bottom = "", this.root.style.top = "", this.root.style.left = "", this.config.fluid && (this.root.style["padding-top"] = 100 * this.config.height / this.config.width + "%")
            }
        }, {
            key: "onFocus",
            value: function () {
                var e = this;
                i.default.removeClass(this.root, "xgplayer-inactive"), e.userTimer && clearTimeout(e.userTimer), e.userTimer = setTimeout(function () {
                    e.emit("blur")
                }, e.config.inactive)
            }
        }, {
            key: "onBlur",
            value: function () {
                this.paused || this.ended || i.default.addClass(this.root, "xgplayer-inactive")
            }
        }, {
            key: "onPlay",
            value: function () {
                i.default.addClass(this.root, "xgplayer-playing"), i.default.removeClass(this.root, "xgplayer-pause")
            }
        }, {
            key: "onPause",
            value: function () {
                i.default.addClass(this.root, "xgplayer-pause"), this.userTimer && clearTimeout(this.userTimer), this.emit("focus")
            }
        }, {
            key: "onEnded",
            value: function () {
                i.default.addClass(this.root, "xgplayer-ended"), i.default.removeClass(this.root, "xgplayer-playing")
            }
        }, {
            key: "onSeeking",
            value: function () {}
        }, {
            key: "onSeeked",
            value: function () {
                this.waitTimer && clearTimeout(this.waitTimer), i.default.removeClass(this.root, "xgplayer-isloading")
            }
        }, {
            key: "onWaiting",
            value: function () {
                var e = this;
                e.waitTimer && clearTimeout(e.waitTimer), e.waitTimer = setTimeout(function () {
                    i.default.addClass(e.root, "xgplayer-isloading")
                }, 500)
            }
        }, {
            key: "onPlaying",
            value: function () {
                this.waitTimer && clearTimeout(this.waitTimer), i.default.removeClass(this.root, "xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay"), i.default.addClass(this.root, "xgplayer-playing")
            }
        }, {
            key: "onKeydown",
            value: function (e, t) {
                var n = e || window.event;
                if (!n || 37 !== n.keyCode && 38 !== n.keyCode && 39 !== n.keyCode && 40 !== n.keyCode && 32 !== n.keyCode || t.emit("focus"), !n || 40 !== n.keyCode && 38 !== n.keyCode) n && 39 === n.keyCode ? t.currentTime + 10 <= t.duration ? t.currentTime += 10 : t.currentTime = t.duration - 1 : n && 37 === n.keyCode ? t.currentTime - 10 >= 0 ? t.currentTime -= 10 : t.currentTime = 0 : n && 32 === n.keyCode && (t.paused ? t.play() : t.pause());
                else {
                    if (t.controls) {
                        var r = t.controls.querySelector(".xgplayer-slider");
                        r && (i.default.hasClass(r, "xgplayer-none") && i.default.removeClass(r, "xgplayer-none"), t.sliderTimer && clearTimeout(t.sliderTimer), t.sliderTimer = setTimeout(function () {
                            i.default.addClass(r, "xgplayer-none")
                        }, t.config.inactive))
                    }
                    n && 40 === n.keyCode ? t.volume - .1 >= 0 ? t.volume -= .1 : t.volume = 0 : n && 38 === n.keyCode && (t.volume + .1 <= 1 ? t.volume += .1 : t.volume = 1)
                }
            }
        }], [{
            key: "install",
            value: function (e, n) {
                t.plugins || (t.plugins = {}), t.plugins[e] = n
            }
        }]), t
    }();
    f.util = i.default, f.sniffer = s.default, f.Errors = l.default, t.default = f, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r = n(19)();
    e.exports = function (e) {
        return e !== r && null !== e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(34),
        a = (r = i) && r.__esModule ? r : {
            default: r
        };
    n(35);
    var s = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.from = t.from, this.to = t.to, this.easing = t.easing || function (e) {
                return e * e
            }, this.duration = t.duration || 150, this.curPath = "", this.progress = t.progress, this.state = 0
        }
        return o(e, [{
            key: "animate",
            value: function () {
                var e = this,
                    t = new Date,
                    n = e.duration,
                    r = null,
                    o = e.path2shapes(e.from),
                    i = e.path2shapes(e.to),
                    a = e._preprocessing(o, i);
                e.state = 1;
                ! function o() {
                    var s = new Date - t;
                    if (s >= n || 2 === e.state) return r = i, e.progress(r, 1), window.cancelAnimationFrame(e.tickId), void(e.state = 0);
                    var l = e.easing(s / n);
                    r = e._lerp(a[0], a[1], l), e.progress(r, l), e.tickId = window.requestAnimationFrame(o)
                }()
            }
        }, {
            key: "toSVGString",
            value: function (e) {
                return e.map(function (e) {
                    return e.forEach(function (e, t) {
                        t ? e.splice(0, 2, "C") : (e.splice(2, 0, "C"), e.unshift("M"))
                    }), e.map(function (e) {
                        return e.join(" ")
                    }).join("")
                }).join("")
            }
        }, {
            key: "start",
            value: function () {
                this.animate()
            }
        }, {
            key: "stop",
            value: function () {
                0 !== this.state && (this.state = 2), window.cancelAnimationFrame(self.tickId), this.state = 0
            }
        }, {
            key: "reverse",
            value: function () {
                0 !== this.state && this.stop();
                var e = this.from;
                this.from = this.to, this.to = e, this.animate()
            }
        }, {
            key: "reset",
            value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.from;
                0 !== this.state && this.stop(), this.from = t, this.to = e, this.animate()
            }
        }]), e
    }();
    for (var l in a.default) a.default[l] instanceof Function && !s.prototype[l] && (s.prototype[l] = a.default[l]);
    t.default = s, e.exports = t.default
}, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var util = {
        createDom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                o = document.createElement(e);
            return o.className = r, o.innerHTML = t, Object.keys(n).forEach(function (t) {
                var r = t,
                    i = n[t];
                "video" === e || "audio" === e ? i && o.setAttribute(r, i) : o.setAttribute(r, i)
            }), o
        },
        hasClass: function (e, t) {
            return e.classList ? Array.prototype.some.call(e.classList, function (e) {
                return e === t
            }) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        },
        addClass: function (e, t) {
            e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
                t && e.classList.add(t)
            }) : util.hasClass(e, t) || (e.className += " " + t)
        },
        removeClass: function (e, t) {
            e.classList ? t.split(/\s+/g).forEach(function (t) {
                e.classList.remove(t)
            }) : util.hasClass(e, t) && t.split(/\s+/g).forEach(function (t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ")
            })
        },
        toggleClass: function (e, t) {
            t.split(/\s+/g).forEach(function (t) {
                util.hasClass(e, t) ? util.removeClass(e, t) : util.addClass(e, t)
            })
        },
        findDom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                t = arguments[1],
                n = void 0;
            try {
                n = e.querySelector(t)
            } catch (r) {
                t.startsWith("#") && (n = e.getElementById(t.slice(1)))
            }
            return n
        },
        padStart: function (e, t, n) {
            for (var r = String(n), o = t >> 0, i = Math.ceil(o / r.length), a = [], s = String(e); i--;) a.push(r);
            return a.join("").substring(0, o - s.length) + s
        },
        format: function (e) {
            if (window.isNaN(e)) return "";
            var t = util.padStart(Math.floor(e / 3600), 2, 0),
                n = util.padStart(Math.floor((e - 3600 * t) / 60), 2, 0),
                r = util.padStart(Math.floor(e - 3600 * t - 60 * n), 2, 0);
            return ("00" === t ? [n, r] : [t, n, r]).join(":")
        },
        event: function (e) {
            if (e.touches) {
                var t = e.touches[0] || e.changedTouches[0];
                e.clientX = t.clientX || 0, e.clientY = t.clientY || 0, e.offsetX = t.pageX - t.target.offsetLeft, e.offsetY = t.pageY - t.target.offsetTop
            }
            e._target = e.target || e.srcElement
        },
        typeOf: function (e) {
            return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]
        },
        deepCopy: function (e, t) {
            if ("Object" === util.typeOf(t) && "Object" === util.typeOf(e)) return Object.keys(t).forEach(function (n) {
                "Object" !== util.typeOf(t[n]) || t[n] instanceof Node ? "Array" === util.typeOf(t[n]) ? e[n] = "Array" === util.typeOf(e[n]) ? e[n].concat(t[n]) : t[n] : e[n] = t[n] : e[n] ? util.deepCopy(e[n], t[n]) : e[n] = t[n]
            }), e
        },
        getBgImage: function (e) {
            var t = (e.currentStyle || window.getComputedStyle(e, null)).backgroundImage;
            if (!t || "none" === t) return "";
            var n = document.createElement("a");
            return n.href = t.replace(/url\("|"\)/g, ""), n.href
        },
        copyDom: function (e) {
            if (e && 1 === e.nodeType) {
                var t = document.createElement(e.tagName);
                return Array.prototype.forEach.call(e.attributes, function (e) {
                    t.setAttribute(e.name, e.value)
                }), e.innerHTML && (t.innerHTML = e.innerHTML), t
            }
            return ""
        },
        setInterval: function (e, t, n, r) {
            e._interval[t] || (e._interval[t] = setInterval(n.bind(e), r))
        },
        clearInterval: function (e, t) {
            clearInterval(e._interval[t]), e._interval[t] = null
        },
        createImgBtn: function (e, t, n, r) {
            var o = util.createDom("xg-" + e, "", {}, "xgplayer-" + e + "-img");
            if (o.style.backgroundImage = 'url("' + t + '")', n && r) {
                var i = void 0,
                    a = void 0,
                    s = void 0;
                ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function (e) {
                    return !(n.indexOf(e) > -1 && r.indexOf(e) > -1) || (i = parseFloat(n.slice(0, n.indexOf(e)).trim()), a = parseFloat(r.slice(0, r.indexOf(e)).trim()), s = e, !1)
                }), o.style.width = "" + i + s, o.style.height = "" + a + s, o.style.backgroundSize = "" + i + s + " " + a + s, o.style.margin = "start" === e ? "-" + a / 2 + s + " auto auto -" + i / 2 + s : "auto 5px auto 5px"
            }
            return o
        },
        Hex2RGBA: function (hex, alpha) {
            var rgb = [];
            if (/^\#[0-9A-F]{3}$/i.test(hex)) {
                var sixHex = "#";
                hex.replace(/[0-9A-F]/gi, function (e) {
                    sixHex += e + e
                }), hex = sixHex
            }
            return /^#[0-9A-F]{6}$/i.test(hex) ? (hex.replace(/[0-9A-F]{2}/gi, function (kw) {
                rgb.push(eval("0x" + kw))
            }), "rgba(" + rgb.join(",") + ", " + alpha + ")") : "rgba(255, 255, 255, 0.1)"
        }
    };
    exports.default = util, module.exports = exports.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    var o = {
        network: {
            code: 1,
            msg: "视频下载错误",
            remark: "只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在"
        },
        mse: {
            code: 2,
            msg: "流追加错误",
            remark: "追加流的时候如果类型不对、无法被正确解码则会触发此类错误"
        },
        parse: {
            code: 3,
            msg: "解析错误",
            remark: "mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误"
        },
        format: {
            code: 4,
            msg: "格式错误",
            remark: "如果浏览器不支持的格式导致播放错误"
        },
        decoder: {
            code: 5,
            msg: "解码错误",
            remark: "浏览器解码异常会抛出此类型错误"
        },
        runtime: {
            code: 6,
            msg: "语法错误",
            remark: "播放器语法错误"
        },
        timeout: {
            code: 7,
            msg: "播放超时",
            remark: "播放过程中无法正常请求下一个分段导致播放中断"
        },
        other: {
            code: 8,
            msg: "其他错误",
            remark: "不可知的错误或被忽略的错误类型"
        }
    };
    t.default = function e(t, n, i, a, s, l, c, u) {
        var d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {
            line: "",
            handle: "",
            msg: "",
            version: ""
        };
        ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var p = {};
        return p.playerVersion = r.version, p.errorType = t, p.domain = document.domain, p.duration = i, p.currentTime = n, p.networkState = a, p.readyState = s, p.currentSrc = c, p.src = l, p.ended = u, p.errd = d, p.ex = (o[t] || {}).msg, p
    }, e.exports = t.default
}, function (e) {
    e.exports = {
        name: "xgplayer",
        version: "1.1.5-beta.22",
        description: "video player",
        main: "./dist/index.js",
        scripts: {
            prepare: "npm run build",
            build: "webpack --progress --display-chunks -p",
            watch: "webpack --progress --display-chunks -p --watch --mode development",
            test: "karma start --single-run",
            "test:watch": "karma start"
        },
        keywords: ["video", "player"],
        babel: {
            presets: ["es2015"],
            plugins: ["add-module-exports", "babel-plugin-bulk-import"]
        },
        repository: {
            type: "git",
            url: "git+https://github.com/bytedance/xgplayer.git"
        },
        author: "yinguohui@bytedance.com",
        license: "MIT",
        dependencies: {
            "danmu.js": "0.0.12",
            deepmerge: "^1.5.0",
            downloadjs: "1.4.7",
            draggabilly: "^2.2.0",
            "event-emitter": "^0.3.5",
            pasition: "^1.0.1",
            "request-frame": "^1.5.3"
        },
        browserslist: ["> 5%", "IE 9", "iOS 7", "Firefox > 20"],
        devDependencies: {
            autoprefixer: "^9.1.5",
            "babel-core": "^6.26.3",
            "babel-loader": "^7.1.4",
            "babel-plugin-add-module-exports": "^0.2.1",
            "babel-plugin-bulk-import": "^1.0.2",
            "babel-plugin-transform-object-rest-spread": "^6.26.0",
            "babel-plugin-transform-runtime": "^6.23.0",
            "babel-preset-es2015": "^6.24.1",
            chai: "^4.1.2",
            "core-js": "^2.5.4",
            "css-loader": "^0.28.11",
            "json-loader": "^0.5.7",
            karma: "^3.0.0",
            "karma-chrome-launcher": "^2.2.0",
            "karma-mocha": "^1.3.0",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-spec-reporter": "0.0.32",
            "karma-webpack": "^4.0.0-rc.1",
            mocha: "^5.2.0",
            "node-sass": "^4.8.3",
            "postcss-cssnext": "^3.1.0",
            "postcss-loader": "^2.1.5",
            "sass-loader": "^6.0.7",
            "style-loader": "^0.20.3",
            sugarss: "^1.0.1",
            webpack: "^4.11.0",
            "webpack-cli": "^3.0.2",
            zlib: "^1.0.5"
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        get device() {
            return r.os.isPc ? "pc" : "mobile"
        },
        get browser() {
            var e = navigator.userAgent.toLowerCase(),
                t = {
                    ie: /rv:([\d.]+)\) like gecko/,
                    firfox: /firefox\/([\d.]+)/,
                    chrome: /chrome\/([\d.]+)/,
                    opera: /opera.([\d.]+)/,
                    safari: /version\/([\d.]+).*safari/
                };
            return [].concat(Object.keys(t).filter(function (n) {
                return t[n].test(e)
            }))[0]
        },
        get os() {
            var e = navigator.userAgent,
                t = /(?:Windows Phone)/.test(e),
                n = /(?:SymbianOS)/.test(e) || t,
                r = /(?:Android)/.test(e),
                o = /(?:Firefox)/.test(e),
                i = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || o && /(?:Tablet)/.test(e),
                a = /(?:iPhone)/.test(e) && !i;
            return {
                isTablet: i,
                isPhone: a,
                isAndroid: r,
                isPc: !(a || r || n || i),
                isSymbian: n,
                isWindowsPhone: t,
                isFireFox: o
            }
        }
    };
    t.default = r, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var i = void 0,
        a = function e() {
            var t = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.set = function (e, n) {
                var r = e,
                    o = n;
                if (null === o) return !1;
                var i = "";
                if (r.indexOf(".") > -1) {
                    var a = r.split(".");
                    i = a[0], r = a[1]
                }
                "os_version" === r && (o = "" + o), i ? "user" === i || "header" === i ? t.envInfo[i][r] = o : "headers" === i ? t.envInfo.header.headers[r] = o : t.envInfo.header.headers.custom[r] = o : t.envInfo.user.hasOwnProperty(r) ? ["user_type", "device_id", "ip_addr_id"].indexOf(r) > -1 ? t.envInfo.user[r] = Number(o) : ["user_id", "web_id", "user_unique_id", "ssid"].indexOf(r) > -1 ? t.envInfo.user[r] = String(o) : ["user_is_auth", "user_is_login"].indexOf(r) > -1 && (t.envInfo.user[r] = Boolean(o)) : t.envInfo.header.hasOwnProperty(r) ? t.envInfo.header[r] = o : t.envInfo.header.headers.hasOwnProperty(r) ? t.envInfo.header.headers[r] = o : t.envInfo.header.headers.custom[r] = o
            }, this.get = function () {
                var e = {
                        user: {},
                        header: {
                            headers: {
                                custom: {}
                            }
                        }
                    },
                    n = t.envInfo,
                    r = n.user,
                    a = Object.keys(r),
                    s = Array.isArray(a),
                    l = 0;
                for (a = s ? a : a[Symbol.iterator]();;) {
                    var c;
                    if (s) {
                        if (l >= a.length) break;
                        c = a[l++]
                    } else {
                        if ((l = a.next()).done) break;
                        c = l.value
                    }
                    var u = c;
                    r[u] !== i && (e.user[u] = r[u])
                }
                var d = n.header,
                    p = Object.keys(d),
                    f = Array.isArray(p),
                    h = 0;
                for (p = f ? p : p[Symbol.iterator]();;) {
                    var g;
                    if (f) {
                        if (h >= p.length) break;
                        g = p[h++]
                    } else {
                        if ((h = p.next()).done) break;
                        g = h.value
                    }
                    var v = g;
                    d[v] !== i && "headers" !== v && (e.header[v] = d[v])
                }
                var y = n.header.headers,
                    m = Object.keys(y),
                    b = Array.isArray(m),
                    x = 0;
                for (m = b ? m : m[Symbol.iterator]();;) {
                    var w;
                    if (b) {
                        if (x >= m.length) break;
                        w = m[x++]
                    } else {
                        if ((x = m.next()).done) break;
                        w = x.value
                    }
                    var _ = w;
                    "custom" !== _ && y[_] !== i && (e.header.headers[_] = y[_])
                }
                var k = n.header.headers.custom,
                    E = Object.keys(k);
                if (E.length) {
                    var C = E,
                        S = Array.isArray(C),
                        P = 0;
                    for (C = S ? C : C[Symbol.iterator]();;) {
                        var T;
                        if (S) {
                            if (P >= C.length) break;
                            T = C[P++]
                        } else {
                            if ((P = C.next()).done) break;
                            T = P.value
                        }
                        var M = T;
                        e.header.headers.custom[M] = k[M]
                    }
                }
                return {
                    user: e.user,
                    header: o({}, e.header, {
                        headers: e.header.headers
                    })
                }
            }, this.envInfo = {
                user: {
                    user_unique_id: i,
                    user_type: i,
                    user_id: i,
                    user_is_auth: i,
                    user_is_login: i,
                    device_id: i,
                    web_id: i,
                    ip_addr_id: i,
                    ssid: i
                },
                header: {
                    app_id: i,
                    app_name: i,
                    app_install_id: i,
                    app_package: i,
                    app_channel: i,
                    app_version: i,
                    os_name: i,
                    os_version: i,
                    device_model: i,
                    ab_client: i,
                    ab_version: i,
                    traffic_type: i,
                    utm_source: i,
                    utm_medium: i,
                    utm_campaign: i,
                    client_ip: i,
                    device_brand: i,
                    os_api: i,
                    access: i,
                    language: i,
                    region: i,
                    app_language: i,
                    app_region: i,
                    creative_id: i,
                    ad_id: i,
                    campaign_id: i,
                    log_type: i,
                    rnd: i,
                    platform: i,
                    sdk_version: i,
                    province: i,
                    city: i,
                    timezone: i,
                    tz_offset: i,
                    tz_name: i,
                    sim_region: i,
                    carrier: i,
                    resolution: i,
                    browser: i,
                    browser_version: i,
                    referrer: i,
                    referrer_host: i,
                    headers: {
                        utm_term: i,
                        utm_content: i,
                        custom: {}
                    }
                }
            }
        },
        s = function (e) {
            var t = document.createElement("a");
            return t.href = e, t
        },
        l = screen.width || 0,
        c = screen.height || 0,
        u = l + " x " + c,
        d = navigator.appVersion,
        p = navigator.userAgent,
        f = navigator.language,
        h = document.referrer,
        g = s(h).hostname,
        v = function (e) {
            var t = s(e).search;
            t = t.slice(1);
            var n = {};
            return t.split("&").forEach(function (e) {
                var t = e.split("="),
                    r = t[0],
                    o = t[1];
                n[r] = decodeURIComponent(void 0 === o ? "" : o)
            }), n
        }(location.href),
        y = "",
        m = "",
        b = "",
        x = "" + parseFloat(d),
        w = void 0,
        _ = void 0; - 1 !== (w = p.indexOf("Opera")) && (b = "Opera", x = p.substring(w + 6), -1 !== (w = p.indexOf("Version")) && (x = p.substring(w + 8))), -1 !== (w = p.indexOf("Edge")) ? (b = "Microsoft Edge", x = p.substring(w + 5)) : -1 !== (w = p.indexOf("MSIE")) ? (b = "Microsoft Internet Explorer", x = p.substring(w + 5)) : -1 !== (w = p.indexOf("Chrome")) ? (b = "Chrome", x = p.substring(w + 7)) : -1 !== (w = p.indexOf("Safari")) ? (b = "Safari", x = p.substring(w + 7), -1 !== (w = p.indexOf("Version")) && (x = p.substring(w + 8))) : -1 !== (w = p.indexOf("Firefox")) && (b = "Firefox", x = p.substring(w + 8)), -1 !== (_ = x.indexOf(";")) && (x = x.substring(0, _)), -1 !== (_ = x.indexOf(" ")) && (x = x.substring(0, _)), -1 !== (_ = x.indexOf(")")) && (x = x.substring(0, _));
    for (var k, E, C = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(d) ? "wap" : "web", S = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Linux",
            r: /(Linux|X11)/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }], P = 0; P < S.length; P++) {
        var T = S[P];
        if (T.r.test(p)) {
            y = T.s;
            break
        }
    }

    function M(e, t) {
        var n = e.exec(t);
        return n && n[1] ? n[1] : ""
    }
    switch (/Windows/.test(y) && (m = M(/Windows (.*)/, y), y = "windows"), y) {
        case "Mac OS X":
            m = M(/Mac OS X (10[\.\_\d]+)/, p), y = "mac";
            break;
        case "Android":
            (E = M(/Android ([\.\_\d]+)/, k = p)) || (E = M(/Android\/([\.\_\d]+)/, k)), m = E, y = "android";
            break;
        case "iOS":
            m = (m = /OS (\d+)_(\d+)_?(\d+)?/.exec(d)) ? m[1] + "." + m[2] + "." + (0 | m[3]) : "", y = "ios"
    }
    var O = {
            screen_size: u,
            browser: b,
            browser_version: x,
            platform: C,
            os_name: y,
            os_version: m,
            userAgent: p,
            screen_width: l,
            screen_height: c,
            device_model: y,
            language: f,
            referrer: h,
            referrer_host: g,
            utm_source: v.utm_source,
            utm_medium: v.utm_medium,
            utm_campaign: v.utm_campaign,
            utm_term: v.utm_term,
            utm_content: v.utm_content
        },
        L = {
            get: function (e) {
                var t = localStorage.getItem(e),
                    n = t;
                try {
                    t && "string" == typeof t && (n = JSON.parse(t))
                } catch (e) {}
                return n
            },
            set: function (e, t) {
                try {
                    var n = "string" == typeof t ? t : JSON.stringify(t);
                    localStorage.setItem(e, n)
                } catch (e) {}
            }
        },
        D = "__tea_cache_",
        z = 4001,
        R = 4e3,
        A = 4002,
        j = 4003,
        I = 500,
        B = 5001,
        q = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : r(e)
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
        };
    var F = function e() {
            var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.init = function (e) {
                t.isLog = e
            }, this.info = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                var i;
                t.isLog && (i = console).log.apply(i, [t.prefix + e].concat(r))
            }, this.warn = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                var i;
                t.isLog && (i = console).warn.apply(i, [t.prefix + e].concat(r))
            }, this.error = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                var i;
                t.isLog && (i = console).error.apply(i, [t.prefix + e].concat(r))
            }, this.dir = function () {
                var e;
                t.isLog && (e = console).dir.apply(e, arguments)
            }, this.table = function (e) {
                t.isLog && console.table(e)
            }, this.logJSON = function (e) {
                "object" === (void 0 === e ? "undefined" : q(e)) && t.isLog && t.info("", JSON.stringify(e, null, 2))
            }, this.deprecated = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                t.warn.apply(t, ["[DEPRECATED]" + e].concat(r))
            }, this.throw = function (e) {
                throw t.error(t.prefix), new Error(e)
            };
            var r = n ? "[" + n + "]" : "";
            this.prefix = "[tea-sdk]" + r
        },
        N = new F,
        U = function (e, t, n, r) {
            var o = new XMLHttpRequest;
            o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/json; charset=utf-8"), o.onload = function () {
                try {
                    var e = JSON.parse(o.responseText);
                    n && n(e)
                } catch (e) {
                    r && r()
                }
            }, o.onerror = function () {
                r && r()
            }, o.send(JSON.stringify(t))
        };
    var H = (new Date).getTimezoneOffset(),
        W = parseInt(-H / 60, 10),
        V = 60 * H,
        K = void 0;
    try {
        K = "3.2.7"
    } catch (k) {
        K = "2.x"
    }
    var J = new(function (e) {
        function t() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
            }(this, e.call(this));
            return n.initClientEnv = function () {
                n.set("os_name", O.os_name), n.set("os_version", O.os_version), n.set("device_model", O.device_model), n.set("platform", O.platform), n.set("sdk_version", K), n.set("browser", O.browser), n.set("browser_version", O.browser_version), n.set("language", O.language), n.set("timezone", W), n.set("tz_offset", V), n.set("resolution", O.screen_width + "x" + O.screen_height), n.set("screen_width", O.screen_width), n.set("screen_height", O.screen_height), n.set("referrer", O.referrer), n.set("referrer_host", O.referrer_host), n.set("utm_source", O.utm_source), n.set("utm_medium", O.utm_medium), n.set("utm_campaign", O.utm_campaign), n.set("utm_term", O.utm_term), n.set("utm_content", O.utm_content)
            }, n.initClientEnv(), n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), t
    }(a));
    var X = new(function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return e.prototype.isString = function (e) {
            return "String" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isNumber = function (e) {
            return "Number" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isBoolean = function (e) {
            return "Boolean" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isFunction = function (e) {
            return "Function" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isNull = function (e) {
            return "Null" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isUndefined = function (e) {
            return "Undefined" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isObj = function (e) {
            return "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isArray = function (e) {
            return "Array" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isFalse = function (e) {
            return "" === e || null == e || "null" === e || "undefined" === e || 0 === e || !1 === e || NaN === e
        }, e.prototype.isTrue = function (e) {
            return !this.isFalse(e)
        }, e.prototype.isLowIE = function () {
            return window.XDomainRequest
        }, e
    }());
    var Q = function (e) {
        return function (e, t, n) {
            if ("string" == typeof e && "number" == typeof t && "number" == typeof n) {
                var r, o = [];
                n = n <= 25 ? n : n % 25;
                var i = String.fromCharCode(n + 97);
                r = e.split(i);
                for (var a = 0; a < r.length; a++) {
                    var s = parseInt(r[a], n);
                    s = 1 * s ^ t;
                    var l = String.fromCharCode(s);
                    o.push(l)
                }
                return o.join("")
            }
        }(e, 64, 25)
    };

    function $(e) {
        return e ? (e ^ 16 * Math.random() >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, $)
    }
    var Y = function () {
            return $().replace(/-/g, "").slice(0, 19)
        },
        G = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Z = {
            cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k",
            sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
            va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"
        },
        ee = function (e) {
            try {
                var t = document.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
                return decodeURIComponent(t ? t[1] : "")
            } catch (e) {
                return ""
            }
        },
        te = function (e) {
            function t() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
                }(this, e.call(this));
                return n.init = function (e) {
                    var t = e.app_id,
                        r = e.channel,
                        o = e.log,
                        i = e.channel_domain,
                        a = e.name;
                    if ("number" != typeof t) throw new Error("app_id 必须是一个数字，注意检查是否是以`string`的方式传入的？");
                    n.logger = new F(a), n.logger.init(o), n.initConfigs(e), n.initUrls(r, i), n.setEnv("app_id", t)
                }, n.initConfigs = function (e) {
                    var t = e.app_id,
                        r = e.disable_ssid,
                        o = e.disable_webid,
                        i = e.disable_sdk_monitor;
                    n.app_id = t, n.evtDataCacheKey = D + "events_" + t, r && (n.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。"), n.isSsidDisabled = !0), o && (n.logger.info("webid服务已禁用，ssid同时被禁用。将本地生成webid。"), n.isWebidDisabled = !0, n.isSsidDisabled = !0), i && (n.logger.info("SDK监控已禁用。"), n.isSdkMonitorDisabled = !0)
                }, n.initUrls = function (e, t) {
                    if ("internal" === e && (n.logger.warn("channel 的值 internal 已被废弃，已自动改为 cn。"), e = "cn"), !t && !Z[e]) throw new Error("channel 变量只能是 `cn`, `sg`,`va`");
                    var r = t || Q(Z[e]);
                    r = r.replace(/\/+$/, ""), n.reportUrl = r + "/v1/list", n.userTokensPrefix = "" + r
                }, n.setEnv = function (e, t) {
                    if ("app_id" === e && n.checkUserToken(t), "user_unique_id" === e) {
                        if (n.blackUuid.some(function (e) {
                                return e === String(t)
                            })) return void n.logger.warn('设置了无效的值 {user_unique_id："%s"}。该操作已忽略。', t);
                        n.verifyTokens(t)
                    }
                    if ("web_id" === e) {
                        if (!t) return;
                        (!n.envInfo.user.user_unique_id || n.envInfo.user.user_unique_id && n.envInfo.user.user_unique_id === n.envInfo.user.web_id) && n.set("user_unique_id", t)
                    }
                    n.set(e, t)
                }, n.transferFromCookie = function () {
                    var e = n.tokensCacheKey,
                        t = ee("tt_webid"),
                        r = ee("__tea_sdk__ssid"),
                        o = ee("__tea_sdk__user_unique_id");
                    if (X.isLowIE()) {
                        if (t) {
                            var i = {
                                web_id: t,
                                ssid: t,
                                user_unique_id: t
                            };
                            L.set(e, JSON.stringify(i))
                        }
                        return !1
                    }
                    if (t && r && o) {
                        var a = {
                            web_id: t,
                            ssid: r,
                            user_unique_id: o
                        };
                        L.set(e, JSON.stringify(a))
                    }
                }, n.purifyBlackUuid = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (n.blackUuid.some(function (t) {
                            return t === e.user_unique_id
                        })) {
                        var t = {};
                        return n.setUserTokens(t), n.logger.warn('检测到无效的用户标识，已重置用户状态。{user_unique_id: "%s"}', e.user_unique_id), t
                    }
                    return e
                }, n.getUserTokens = function () {
                    return L.get(n.tokensCacheKey) || {}
                }, n.setUserTokens = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return L.set(n.tokensCacheKey, e)
                }, n.checkUserToken = function (e) {
                    var t = D + "tokens_" + e;
                    n.tokensCacheKey = t, n.transferFromCookie();
                    var r = n.purifyBlackUuid(n.getUserTokens());
                    r.user_unique_id && r.web_id ? (n.envInfo.user.user_unique_id = r.user_unique_id, n.envInfo.user.web_id = r.web_id, n.envInfo.user.ssid = r.ssid || "", n.logger.info("初始化已经检测到了 webid user_unique_id，一般情况下不需要再次验证 id 了"), n.unlock()) : n.requestWebId(e)
                }, n.saveTokenToStorage = function (e) {
                    var t = e.web_id,
                        r = e.ssid,
                        o = e.user_unique_id;
                    n.setUserTokens({
                        web_id: t,
                        ssid: r,
                        user_unique_id: o
                    })
                }, n.requestWebId = function () {
                    n.isRequestWebId = !0;
                    var e = function (e) {
                        var t = n.envInfo.user.web_id || e.web_id,
                            r = e.ssid;
                        n.isRequestWebId = !1, n.envInfo.user.ssid = r, n.envInfo.user.web_id = t, n.envInfo.user.user_unique_id = t, n.saveTokenToStorage({
                            web_id: t,
                            ssid: r,
                            user_unique_id: t
                        }), n.waitForVerifyTokens ? (n.lock(), n.verifyTokens(n.realUuid)) : (n.unlock(), n.callback && n.callback())
                    };
                    n.isWebidDisabled ? e({
                        web_id: Y(),
                        ssid: ""
                    }) : function () {
                        var t = n.userTokensPrefix + "/v1/user/webid";
                        U(t, {
                            app_id: n.app_id,
                            url: location.href,
                            user_agent: O.userAgent,
                            referer: O.referrer,
                            user_unique_id: ""
                        }, function (t) {
                            0 !== t.e ? n.logger.error("请求 webid 失败。请联系管理员。") : e(t)
                        }, function () {
                            n.isRequestWebId = !1, n.logger.error("获取 webid 失败，数据将不会被上报")
                        })
                    }()
                }, n.verifyTokens = function (e) {
                    var t = n.tokensCacheKey;
                    if (n.waitForVerifyTokens = !1, n.realUuid = "" + e, n.isRequestWebId) return n.waitForVerifyTokens = !0, n.logger.info("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用"), !1;
                    var r = n.getUserTokens();
                    if (r.user_unique_id === n.realUuid && r.ssid && r.web_id) n.logger.info("传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求"), n.unlock();
                    else {
                        n.lock(), n.envInfo.user.user_unique_id = n.realUuid;
                        var o = G({}, n.getUserTokens(), {
                            user_unique_id: n.realUuid
                        });
                        if (L.set(t, JSON.stringify(o)), X.isLowIE()) return n.unlock(), !1;
                        n.isSsidDisabled ? (n.unlock(), n.callback && n.callback()) : n.requestSsid()
                    }
                }, n.requestSsid = function () {
                    var e = n.getUserTokens(),
                        t = n.userTokensPrefix + "/v1/user/ssid";
                    U(t, {
                        app_id: n.app_id,
                        web_id: e.web_id,
                        user_unique_id: "" + e.user_unique_id
                    }, function (t) {
                        if (n.unlock(), 0 !== t.e) n.logger.error("请求 ssid 失败~");
                        else {
                            n.envInfo.user.ssid = t.ssid;
                            var r = G({}, e, {
                                ssid: t.ssid
                            });
                            n.setUserTokens(r), n.logger.info("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去"), n.callback && n.callback()
                        }
                    }, function () {
                        n.unlock(), n.logger.error("根据 user_unique_id 获取新 ssid 失败")
                    })
                }, n.setEvtParams = function (e) {
                    var t = G({}, e);
                    Object.keys(t).forEach(function (e) {
                        n.evtParams[e] = t[e]
                    })
                }, n.mergeEnvToEvents = function (e) {
                    var t = n.mergeEnv(),
                        r = [],
                        o = 0,
                        i = void 0;
                    return e.forEach(function (e) {
                        var t = !!e.params.__disable_storage__;
                        void 0 === i ? i = t : (t !== i || r[o].length >= 5) && (o += 1, i = !i), r[o] = r[o] || [], r[o].push(e)
                    }), r.map(function (e) {
                        return {
                            events: e.map(function (e) {
                                var t = G({}, n.evtParams, e.params);
                                return delete t.__disable_storage__, G({}, e, {
                                    params: JSON.stringify(t)
                                })
                            }),
                            user: t.user,
                            header: t.header,
                            verbose: n.debugMode ? 1 : void 0,
                            __disable_storage__: e[0].params.__disable_storage__
                        }
                    })
                }, n.mergeEnv = function () {
                    var e = n.get(),
                        t = J.get(),
                        r = G({}, e.user),
                        o = G({}, t.header.headers.custom, e.header.headers.custom),
                        i = G({}, t.header.headers, e.header.headers, {
                            custom: o
                        }),
                        a = G({}, t.header, e.header);
                    return {
                        user: r,
                        header: G({}, a, {
                            headers: JSON.stringify(i)
                        })
                    }
                }, n.evtParams = {}, n.reportUrl = "", n.userTokensPrefix = "", n.isSsidDisabled = !1, n.isWebidDisabled = !1, n.isSdkMonitorDisabled = !1, n.debugMode = !1, n.blackUuid = ["null", "undefined", "0", "", "None"], n.logger = function () {}, n
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.lock = function () {
                this.isUserTokensReady = !1
            }, t.prototype.unlock = function () {
                this.isUserTokensReady = !0
            }, t.prototype.enableDebugMode = function (e) {
                this.debugMode = e
            }, t
        }(a);
    var ne = function e() {
            var t = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.set = function (e, n) {
                t.cache[e] = n
            }, this.get = function (e) {
                return t.cache[e]
            }, this.clean = function (e) {
                t.cache[e] = void 0
            }, this.cache = {}
        },
        re = new ne;
    var oe = function () {
            function e(t) {
                var n = t.disable_storage,
                    r = void 0 !== n && n;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._isPersistent = !r, this._storage = this._isPersistent ? L : new ne, this._storageKey = "", this._data = void 0
            }
            return e.prototype.setStorageKey = function (e) {
                this._storageKey = e
            }, e.prototype.getAllEvents = function () {
                var e = this.getData();
                Object.keys(e).reduce(function (t, n) {
                    return t.concat(e[n] || [])
                }, [])
            }, e.prototype.getData = function () {
                return this._checkIsDataInit(), this._data
            }, e.prototype.add = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                this._checkIsDataInit(), 0 !== t.length && (this._data[e] = t, this._save())
            }, e.prototype.delete = function (e) {
                this._checkIsDataInit(), this._data[e] && (delete this._data[e], this._save())
            }, e.prototype._checkIsDataInit = function () {
                if (void 0 === this._data) try {
                    var e, t = this._getDataFromStorage();
                    if (X.isArray(t)) this._data = ((e = {})[Y()] = t, e), this._save();
                    else this._data = t
                } catch (e) {
                    this._data = {}
                }
            }, e.prototype._checkStorageKey = function () {
                if (!this._storageKey) throw new Error("must call setStorageKey('xxx') first")
            }, e.prototype._getDataFromStorage = function () {
                return this._checkStorageKey(), this._storage.get(this._storageKey) || {}
            }, e.prototype._save = function () {
                this._checkStorageKey(), this._storage.set(this._storageKey, this._data)
            }, e
        }(),
        ie = function (e, t) {
            try {
                var n = e.split("v1")[0];
                t.forEach(function (e) {
                    var t = function (e) {
                            var t = "";
                            for (var n in e) e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent(JSON.stringify(e[n])));
                            return t = "&" === t[0] ? t.slice(1) : t
                        }(e),
                        r = new Image(1, 1);
                    r.onload = function () {
                        r = null
                    }, r.onerror = function () {
                        r = null
                    }, r.src = n + "/v1/gif?" + t
                })
            } catch (e) {}
        },
        ae = function (e, t) {
            if (window.XDomainRequest) return ie(e, t);
            var n = new XMLHttpRequest;
            n.open("POST", e + "?rdn=" + Math.random(), !0), n.onload = function () {}, n.onerror = function () {
                n.abort()
            }, n.send(JSON.stringify(t))
        },
        se = function e(t, n, r, o) {
            try {
                var i = t.split("v1")[0];
                if (!i) return void o(t, n, z);
                n.forEach(function (e) {
                    var a = function (e) {
                            var t = "";
                            for (var n in e) e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent(JSON.stringify(e[n])));
                            return t = "&" === t[0] ? t.slice(1) : t
                        }(e),
                        s = new Image(1, 1);
                    s.onload = function () {
                        s = null, r()
                    }, s.onerror = function () {
                        s = null, o(t, n, R)
                    }, s.src = i + "/v1/gif?" + a
                })
            } catch (e) {
                o(t, n, A, e.message)
            }
        };
    var le = function e(t) {
            var n = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.send = function (e) {
                var t = e.url,
                    r = e.data,
                    o = e.success,
                    i = e.fail,
                    a = e.eventError;
                if (function (e) {
                        var t = e.url,
                            n = e.data,
                            r = e.success,
                            o = e.fail,
                            i = e.notSure,
                            a = e.isUnload,
                            s = n;
                        if (window.XDomainRequest) se(t, s, r, o);
                        else {
                            if (a) return window.navigator && window.navigator.sendBeacon ? (i(), void(window.navigator.sendBeacon(t, JSON.stringify(s)) ? r() : o(t, n, j))) : void se(t, s, r, o);
                            var l = new XMLHttpRequest;
                            l.open("POST", t + "?rdn=" + Math.random(), !0), l.onload = function () {
                                r(t, s, l.responseText)
                            }, l.onerror = function () {
                                l.abort(), o(t, s, I)
                            }, l.send(JSON.stringify(s))
                        }
                    }({
                        url: t,
                        data: r,
                        success: function (e, t, r) {
                            o();
                            try {
                                var i = JSON.parse(r).e;
                                if (0 !== i) {
                                    var s = "未知错误"; - 2 === i && (s = "事件格式错误！请检查字段类型是否正确。"), n.logger.error("数据上报失败！", "错误码：" + i + "。错误信息：" + s), a(t, i), ue(e, t, i)
                                }
                            } catch (n) {
                                ue(e, t, B)
                            }
                        },
                        fail: function (e, t, r) {
                            n.logger.error("数据上报失败！", "错误码：" + r), i(t, r), ue(e, t, r)
                        },
                        notSure: e.notSure,
                        isUnload: e.isUnload
                    }), !n.isSdkMonitorDisabled && !n.isSdkOnLoadEventReady) {
                    n.isSdkOnLoadEventReady = !0;
                    try {
                        var s = r[0].header,
                            l = r[0].user;
                        ce(t, {
                            app_id: s.app_id,
                            app_name: s.app_name,
                            sdk_version: s.sdk_version,
                            web_id: l.web_id
                        })
                    } catch (e) {}
                }
            }, this.logger = t.logger || N, this.isSdkOnLoadEventReady = !1, this.isSdkMonitorDisabled = !1
        },
        ce = function (e, t) {
            try {
                var n = {
                    events: [{
                        event: "onload",
                        params: JSON.stringify({
                            app_id: t.app_id,
                            app_name: t.app_name || "",
                            sdk_version: t.sdk_version
                        }),
                        local_time_ms: Date.now()
                    }],
                    user: {
                        user_unique_id: t.web_id
                    },
                    header: {
                        app_id: 1338
                    }
                };
                setTimeout(function () {
                    ae(e, [n])
                }, 16)
            } catch (e) {}
        },
        ue = function (e, t, n) {
            try {
                var r = t[0].user,
                    o = t[0].header,
                    i = [];
                t.forEach(function (e) {
                    e.events.forEach(function (e) {
                        i.push(e)
                    })
                });
                var a = {
                    events: i.map(function (e) {
                        return {
                            event: "on_error",
                            params: JSON.stringify({
                                error_code: n,
                                app_id: o.app_id,
                                app_name: o.app_name || "",
                                error_event: e.event,
                                local_time_ms: e.local_time_ms,
                                tea_event_index: Date.now(),
                                params: e.params,
                                header: JSON.stringify(o),
                                user: JSON.stringify(r)
                            }),
                            local_time_ms: Date.now()
                        }
                    }),
                    user: {
                        user_unique_id: r.user_unique_id
                    },
                    header: {
                        app_id: 1338
                    }
                };
                setTimeout(function () {
                    ae(e, [a])
                }, 16)
            } catch (e) {}
        };
    var de = function (e) {
            function t(n) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t
                }(this, e.call(this));
                o.addListener = function () {
                    window.addEventListener("unload", function () {
                        o.report(!0)
                    }, !1), window.addEventListener("beforeunload", function () {
                        o.report(!0)
                    }, !1), document.addEventListener("visibilitychange", function () {
                        "hidden" === document.visibilityState && o.report(!0)
                    }, !1)
                }, o.setReady = function (e) {
                    o.isReady = e, o.eventSender.isSdkMonitorDisabled = o.isSdkMonitorDisabled, o.checkAndSendCachedStorageEvents(), o.report()
                }, o.eventReportTimer = null, o.event = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = re.get(o.evtDataCacheKey) || [],
                        r = t ? [].concat(e, n) : [].concat(n, e);
                    re.set(o.evtDataCacheKey, r), r.length >= 5 ? o.report() : (o.eventReportTimer && clearTimeout(o.eventReportTimer), o.eventReportTimer = setTimeout(function () {
                        o.report(), o.eventReportTimer = null
                    }, o.waitForBatchTime))
                }, o.report = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!o.isUserTokensReady) return !1;
                    if (!o.isReady) return !1;
                    var t = re.get(o.evtDataCacheKey) || [];
                    re.clean(o.evtDataCacheKey);
                    var n = o.mergeEnvToEvents(t);
                    o.sendData(n, e)
                }, o.sendData = function (e, t) {
                    var n = [],
                        r = 0,
                        i = void 0;
                    e.forEach(function (e) {
                        var t = !!e.__disable_storage__;
                        void 0 === i ? i = t : (t !== i || n[r].length >= 5) && (r += 1, i = !i), n[r] = n[r] || [], n[r].push(e)
                    }), n.forEach(function (e) {
                        var n = Y();
                        e[0].__disable_storage__ || o.eventStorage.add(n, e), o._sendData(n, e, t)
                    })
                }, o.checkAndSendCachedStorageEvents = function () {
                    var e = o.eventStorage.getData(),
                        t = Object.keys(e);
                    t.length > 0 && t.forEach(function (t) {
                        o._sendData(t, e[t])
                    })
                }, o._sendData = function (e, t, n) {
                    o.isReporting = !0;
                    var r = function () {
                        o.isReporting = !1
                    };
                    o.eventSender.send({
                        url: o.reportUrl,
                        data: t,
                        success: function () {
                            r(), o.sendDataSuccess(e)
                        },
                        fail: function (e, t) {
                            r(), o.reportErrorCallback(e, t), setTimeout(function () {
                                o.report()
                            }, 3e3)
                        },
                        eventError: function (e, t) {
                            o.reportErrorCallback(e, t)
                        },
                        notSure: r,
                        isUnload: n
                    })
                }, o.sendDataSuccess = function (e) {
                    o.eventStorage.delete(e), o.report()
                };
                var i = n.log,
                    a = n.disable_storage,
                    s = n.max_batch_num,
                    l = void 0 === s ? 5 : s,
                    c = n.batch_time,
                    u = void 0 === c ? 30 : c;
                return o.init(n), o.maxBatchNum = l, o.waitForBatchTime = u, o.isReady = !1, o.addListener(), o.enableDebugMode(!!i), o.eventStorage = new oe({
                    disable_storage: a
                }), o.eventStorage.setStorageKey(o.evtDataCacheKey), o.eventSender = new le({
                    logger: o.logger
                }), o.reportErrorCallback = function () {}, o
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t
        }(te),
        pe = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var fe = function () {
            var e = +Date.now() + Number(("" + Math.random()).slice(2, 8));
            return function () {
                return e += 1
            }
        }(),
        he = function e(t) {
            var n = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.init = function (e) {
                if (!X.isObj(e)) throw new Error("init 的参数必须是Object类型");
                n.logger.init(e.log), n.channel = new de(pe({}, e, {
                    name: n.name
                })), n.channel.callback = function () {
                    n.callbackSend && n.start()
                }
            }, this.config = function (e) {
                X.isObj(e) || n.logger.throw("config 参数必须是 {} 的格式"), e.log && (n.logger.init(!0), n.channel.enableDebugMode(!0), e.log = null);
                var t = Object.keys(e);
                if (!t.length) return !1;
                var r = t,
                    o = Array.isArray(r),
                    i = 0;
                for (r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if ((i = r.next()).done) break;
                        a = i.value
                    }
                    var s = a,
                        l = e[s];
                    switch (s) {
                        case "evtParams":
                            n.channel.setEvtParams(l);
                            break;
                        case "disable_ssid":
                            n.logger.deprecated("(disable_ssid)请通过init函数来设置。"), l && (n.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。"), n.channel.isSsidDisabled = l);
                            break;
                        case "disable_auto_pv":
                            l && (n.logger.info("已禁止默认上报predefine_pageview事件，需手动上报。"), n._autoSendPV = !1);
                            break;
                        case "_staging_flag":
                            "" + l == "1" && n.logger.info("根据_staging_flag设置，数据将会上报到stag 表。"), n.channel.setEvtParams({
                                _staging_flag: Number(l)
                            });
                            break;
                        case "reportErrorCallback":
                            "function" == typeof l && (n.channel.reportErrorCallback = l);
                            break;
                        default:
                            n.channel.setEnv(s, l)
                    }
                }
            }, this.send = function () {
                n.start()
            }, this.start = function () {
                if (n.channel.isUserTokensReady) {
                    if (n._isSendFuncCalled) return;
                    n._isSendFuncCalled = !0, n.logger.info("看到本提示，意味着用户信息已完全就绪，上报通道打开。用户标识如下："), n.logger.logJSON(n.channel.get().user), n._autoSendPV && n.predefinePageView(), n.channel.setReady(!0)
                } else n.callbackSend = !0
            }, this.predefinePageView = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {
                        title: document.title || location.pathname,
                        url: location.href,
                        url_path: location.pathname
                    },
                    r = pe({}, t, e);
                n.event("predefine_pageview", r, !0)
            }, this.event = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var o = X.isBoolean(t[t.length - 1]),
                    i = !!o && t[t.length - 1],
                    a = o ? t.slice(0, t.length - 1) : t,
                    s = a[0],
                    l = [];
                X.isArray(s) ? l = a : l[0] = a, l = l.map(function (e) {
                    return function (e, t) {
                        var n = e;
                        /^event\./.test(e) && (n = e.slice(6));
                        var r = t;
                        return X.isObj(r) || (r = {}), r.event_index = fe(), {
                            event: n,
                            params: r,
                            local_time_ms: +new Date
                        }
                    }.apply(void 0, e)
                }), n.channel.event(l, i)
            }, this._isSendFuncCalled = !1, this._autoSendPV = !0, this.name = t, this.logger = new F(t)
        };
    he.exportMethods = ["init", "config", "send", "start", "predefinePageView"];
    t.default = function e(t) {
        var n = this;
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this._exportCollect = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            n._isQueueProcessed ? n._executeCmd.apply(n, t) : (n.cmdQueue.push(t), n._processCmdQueue())
        }, this._processCmdQueue = function () {
            if (0 !== n.cmdQueue.length) {
                var e, t, r, o, i = (e = n.cmdQueue, t = "init", r = "0", o = -1, e.forEach(function (e, n) {
                    (void 0 !== r ? e[r] : e) === t && (o = n)
                }), o); - 1 !== i && (n._isQueueProcessed = !0, n._executeCmd.apply(n, n.cmdQueue[i]), n.cmdQueue.forEach(function (e, t) {
                    t !== i && n._executeCmd.apply(n, e)
                }), n.cmdQueue = [])
            }
        }, this._executeCmd = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            var o, i, a = t[0];
            he.exportMethods.indexOf(a) > -1 ? (o = n.colloctor)[a].apply(o, t.slice(1)) : (i = n.colloctor).event.apply(i, t)
        }, this.name = t || "Collector" + +new Date, this.cmdQueue = [], this.colloctor = new he(this.name), this._isQueueProcessed = !1, this._processCmdQueue(), this._exportCollect.init = this._exportCollect.bind(this, "init"), this._exportCollect.config = this._exportCollect.bind(this, "config"), this._exportCollect.send = this._exportCollect.bind(this, "send"), this._exportCollect.start = this._exportCollect.bind(this, "start"), this._exportCollect.predefinePageView = this._exportCollect.bind(this, "predefinePageView"), this._exportCollect
    }, e.exports = t.default
}, function (e, t, n) {
    e.exports = n(9)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = O(n(0)),
        o = O(n(33)),
        i = O(n(36)),
        a = O(n(37)),
        s = O(n(38)),
        l = O(n(39)),
        c = O(n(40)),
        u = O(n(41)),
        d = O(n(42)),
        p = O(n(43)),
        f = O(n(44)),
        h = O(n(45)),
        g = O(n(46)),
        v = O(n(47)),
        y = O(n(48)),
        m = O(n(49)),
        b = O(n(50)),
        x = O(n(51)),
        w = O(n(52)),
        _ = O(n(53)),
        k = O(n(54)),
        E = O(n(55)),
        C = O(n(56)),
        S = O(n(59)),
        P = O(n(60)),
        T = O(n(63)),
        M = O(n(7));

    function O(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n(64);
    var L = {};

    function D(e, t, n) {
        var r = e;
        t.map(function (e, o) {
            r[e] = o == t.length - 1 ? n : r[e] || {}, r = r[e]
        })
    }
    D(L, ["control", "collect"], M.default), D(L, ["control", "cssFullscreen"], T.default), D(L, ["control", "danmu"], P.default), D(L, ["control", "definition"], S.default), D(L, ["control", "download"], C.default), D(L, ["control", "error"], E.default), D(L, ["control", "flex"], k.default), D(L, ["control", "fullscreen"], _.default), D(L, ["control", "i18n"], w.default), D(L, ["control", "loading"], x.default), D(L, ["control", "localPreview"], b.default), D(L, ["control", "logger"], m.default), D(L, ["control", "mobile"], y.default), D(L, ["control", "pc"], v.default), D(L, ["control", "pip"], g.default), D(L, ["control", "play"], h.default), D(L, ["control", "playbackRate"], f.default), D(L, ["control", "playNext"], p.default), D(L, ["control", "poster"], d.default), D(L, ["control", "progress"], u.default), D(L, ["control", "replay"], c.default), D(L, ["control", "rotate"], l.default), D(L, ["control", "screenShot"], s.default), D(L, ["control", "textTrack"], a.default), D(L, ["control", "time"], i.default), D(L, ["control", "volume"], o.default), t.default = r.default, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = s(n(11)),
        i = s(n(3)),
        a = s(n(4));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = function () {
        function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.logParams = {
                bc: 0,
                bu_acu_t: 0,
                played: []
            }, this._hasStart = !1, this.videoConfig = {
                controls: !1,
                autoplay: t.autoplay,
                playsinline: t.playsinline,
                "webkit-playsinline": t.playsinline,
                "x5-playsinline": t.playsinline,
                "x5-video-player-type": t["x5-video-player-type"],
                "x5-video-player-fullscreen": t["x5-video-player-fullscreen"],
                "x5-video-orientation": t["x5-video-orientation"],
                airplay: t.airplay,
                "webkit-airplay": t.airplay,
                tabindex: 2,
                mediaType: t.mediaType || "video"
            }, t.loop && (this.videoConfig.loop = "loop");
            var n = "";
            if (t.textTrack && Array.isArray(t.textTrack) && (navigator.userAgent.indexOf("Chrome") > -1 || navigator.userAgent.indexOf("Firefox") > -1) && (t.textTrack.some(function (e) {
                    if (e.src && e.label && e.default) return n += '<track src="' + e.src + '" ', e.kind && (n += 'kind="' + e.kind + '" '), n += 'label="' + e.label + '" ', e.srclang && (n += 'srclang="' + e.srclang + '" '), n += (e.default ? "default" : "") + ">", !0
                }), this.videoConfig.crossorigin = "anonymous"), t.textTrackStyle) {
                var r = document.createElement("style");
                this.textTrackStyle = r, document.head.appendChild(r);
                var s = "";
                for (var l in t.textTrackStyle) s += l + ": " + t.textTrackStyle[l] + ";";
                var c = t.id ? "#" + t.id : t.el.id ? "#" + t.el.id : "." + t.el.className;
                r.sheet.insertRule ? r.sheet.insertRule(c + " video::cue { " + s + " }", 0) : r.sheet.addRule && r.sheet.addRule(c + " video::cue", s)
            }
            this.video = i.default.createDom(this.videoConfig.mediaType, n, this.videoConfig, ""), t.autoplay && (this.video.autoplay = !0, t.autoplayMuted && (this.video.muted = !0)), this.ev = ["play", "playing", "pause", "ended", "error", "seeking", "seeked", "timeupdate", "waiting", "canplay", "canplaythrough", "durationchange", "volumechange", "loadeddata"].map(function (e) {
                return t = {}, n = e, r = "on" + e.charAt(0).toUpperCase() + e.slice(1), n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r
            }), (0, o.default)(this), this._interval = {};
            var u = "0,0",
                d = this;
            this.ev.forEach(function (e) {
                d.evItem = Object.keys(e)[0];
                var t = Object.keys(e)[0];
                d.video.addEventListener(Object.keys(e)[0], function () {
                    d.logParams && ("play" === t ? d.hasStart = !0 : "waiting" === t ? (d.logParams.bc++, d.inWaitingStart = (new Date).getTime()) : "playing" === t ? d.inWaitingStart && (d.logParams.bu_acu_t += (new Date).getTime() - d.inWaitingStart, d.inWaitingStart = void 0) : "loadeddata" === t ? d.logParams.played.push({
                        begin: 0,
                        end: -1
                    }) : "seeking" === t ? d.logParams.played.push({
                        begin: d.video.currentTime,
                        end: -1
                    }) : "timeupdate" === t && (d.logParams.played.length < 1 && d.logParams.played.push({
                        begin: d.video.currentTime,
                        end: -1
                    }), d.logParams.played[d.logParams.played.length - 1].end = d.video.currentTime), "error" === t ? d.video.error && d.emit(t, new a.default("other", d.currentTime, d.duration, d.networkState, d.readyState, d.currentSrc, d.src, d.ended, {
                        line: 41,
                        msg: d.error,
                        handle: "Constructor"
                    })) : d.emit(t, d), d.hasOwnProperty("_interval") && (["ended", "error", "timeupdate"].indexOf(t) < 0 ? (clearInterval(d._interval.bufferedChange), i.default.setInterval(d, "bufferedChange", function () {
                        for (var e = [], t = 0, n = d.video.buffered.length; t < n; t++) e.push([d.video.buffered.start(t), d.video.buffered.end(t)]);
                        e.toString() !== u && (u = e.toString(), d.emit("bufferedChange", e))
                    }, 200)) : "timeupdate" !== t && i.default.clearInterval(d, "bufferedChange")))
                }, !1)
            })
        }
        return r(e, [{
            key: "destroy",
            value: function () {
                this.textTrackStyle && this.textTrackStyle.parentNode.removeChild(this.textTrackStyle)
            }
        }, {
            key: "play",
            value: function () {
                this.video.play()
            }
        }, {
            key: "pause",
            value: function () {
                this.video.pause()
            }
        }, {
            key: "canPlayType",
            value: function () {
                this.video.canPlayType()
            }
        }, {
            key: "getBufferedRange",
            value: function () {
                var e = [0, 0],
                    t = this.video,
                    n = t.buffered,
                    r = t.currentTime;
                if (n)
                    for (var o = 0, i = n.length; o < i && (e[0] = n.start(o), e[1] = n.end(o), !(e[0] <= r && r <= e[1])); o++);
                return e[0] - r <= 0 && r - e[1] <= 0 ? e : [0, 0]
            }
        }, {
            key: "hasStart",
            get: function () {
                return this._hasStart
            },
            set: function (e) {
                "boolean" != typeof e || !0 !== e || this._hasStart || (this._hasStart = !0, this.emit("hasstart"))
            }
        }, {
            key: "autoplay",
            set: function (e) {
                this.video.autoplay = e
            },
            get: function () {
                return this.video.autoplay
            }
        }, {
            key: "buffered",
            get: function () {
                return this.video.buffered
            }
        }, {
            key: "crossOrigin",
            get: function () {
                return this.video.crossOrigin
            },
            set: function (e) {
                this.video.crossOrigin = e
            }
        }, {
            key: "currentSrc",
            get: function () {
                return this.video.currentSrc
            },
            set: function (e) {
                this.video.currentSrc = e
            }
        }, {
            key: "currentTime",
            get: function () {
                return this.video.currentTime
            },
            set: function (e) {
                this.video.currentTime = e
            }
        }, {
            key: "defaultMuted",
            get: function () {
                return this.video.defaultMuted
            },
            set: function (e) {
                this.video.defaultMuted = e
            }
        }, {
            key: "duration",
            get: function () {
                return this.video.duration
            }
        }, {
            key: "ended",
            get: function () {
                return this.video.ended
            }
        }, {
            key: "error",
            get: function () {
                var e = this.video.error;
                if (!e) return null;
                var t = [{
                    en: "MEDIA_ERR_ABORTED",
                    cn: "取回过程被用户中止"
                }, {
                    en: "MEDIA_ERR_NETWORK",
                    cn: "当下载时发生错误"
                }, {
                    en: "MEDIA_ERR_DECODE",
                    cn: "当解码时发生错误"
                }, {
                    en: "MEDIA_ERR_SRC_NOT_SUPPORTED",
                    cn: "不支持音频/视频"
                }];
                return this.lang ? this.lang[t[e.code - 1].en] : t[e.code - 1].en
            }
        }, {
            key: "loop",
            get: function () {
                return this.video.loop
            },
            set: function (e) {
                this.video.loop = e
            }
        }, {
            key: "muted",
            get: function () {
                return this.video.muted
            },
            set: function (e) {
                this.video.muted = e
            }
        }, {
            key: "networkState",
            get: function () {
                var e = [{
                    en: "NETWORK_EMPTY",
                    cn: "音频/视频尚未初始化"
                }, {
                    en: "NETWORK_IDLE",
                    cn: "音频/视频是活动的且已选取资源，但并未使用网络"
                }, {
                    en: "NETWORK_LOADING",
                    cn: "浏览器正在下载数据"
                }, {
                    en: "NETWORK_NO_SOURCE",
                    cn: "未找到音频/视频来源"
                }];
                return this.lang ? this.lang[e[this.video.networkState].en] : e[this.video.networkState].en
            }
        }, {
            key: "paused",
            get: function () {
                return this.video.paused
            }
        }, {
            key: "playbackRate",
            get: function () {
                return this.video.playbackRate
            },
            set: function (e) {
                this.video.playbackRate = e
            }
        }, {
            key: "played",
            get: function () {
                return this.video.played
            }
        }, {
            key: "preload",
            get: function () {
                return this.video.preload
            },
            set: function (e) {
                this.video.preload = e
            }
        }, {
            key: "readyState",
            get: function () {
                var e = [{
                    en: "HAVE_NOTHING",
                    cn: "没有关于音频/视频是否就绪的信息"
                }, {
                    en: "HAVE_METADATA",
                    cn: "关于音频/视频就绪的元数据"
                }, {
                    en: "HAVE_CURRENT_DATA",
                    cn: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒"
                }, {
                    en: "HAVE_FUTURE_DATA",
                    cn: "当前及至少下一帧的数据是可用的"
                }, {
                    en: "HAVE_ENOUGH_DATA",
                    cn: "可用数据足以开始播放"
                }];
                return this.lang ? this.lang[e[this.video.readyState].en] : e[this.video.readyState]
            }
        }, {
            key: "seekable",
            get: function () {
                return this.video.seekable
            }
        }, {
            key: "seeking",
            get: function () {
                return this.video.seeking
            }
        }, {
            key: "src",
            get: function () {
                return this.video.src
            },
            set: function (e) {
                var t = this;
                i.default.hasClass(this.root, "xgplayer-ended") || this.emit("urlchange", JSON.parse(JSON.stringify(t.logParams))), this.logParams = {
                    bc: 0,
                    bu_acu_t: 0,
                    played: [],
                    pt: (new Date).getTime(),
                    vt: (new Date).getTime(),
                    vd: 0
                }, this.video.pause(), this.video.src = e, this.logParams.playSrc = e, this.logParams.pt = (new Date).getTime(), this.logParams.vt = this.logParams.pt, this.once("loadeddata", function e() {
                    t.logParams.vt = (new Date).getTime(), t.logParams.pt > t.logParams.vt && (t.logParams.pt = t.logParams.vt), t.logParams.vd = t.video.duration, t.off("loadeddata", e)
                })
            }
        }, {
            key: "volume",
            get: function () {
                return this.video.volume
            },
            set: function (e) {
                this.video.volume = e
            }
        }, {
            key: "fullscreen",
            get: function () {
                return i.default.hasClass(this.root, "xgplayer-is-fullscreen") || i.default.hasClass(this.root, "xgplayer-fullscreen-active")
            }
        }, {
            key: "bullet",
            get: function () {
                return !!i.default.findDom(this.root, "xg-bullet") && i.default.hasClass(i.default.findDom(this.root, "xg-bullet"), "xgplayer-has-bullet")
            }
        }, {
            key: "textTrack",
            get: function () {
                return i.default.hasClass(this.root, "xgplayer-is-textTrack")
            }
        }, {
            key: "pip",
            get: function () {
                return i.default.hasClass(this.root, "xgplayer-pip-active")
            }
        }]), e
    }();
    t.default = l, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, s, l, c, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        d = n(12),
        p = n(26),
        f = Function.prototype.apply,
        h = Function.prototype.call,
        g = Object.create,
        v = Object.defineProperty,
        y = Object.defineProperties,
        m = Object.prototype.hasOwnProperty,
        b = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    o = function (e, t) {
        var n, o;
        return p(t), o = this, r.call(this, e, n = function () {
            i.call(o, e, n), f.call(t, this, arguments)
        }), n.__eeOnceListener__ = t, this
    }, s = {
        on: r = function (e, t) {
            var n;
            return p(t), m.call(this, "__ee__") ? n = this.__ee__ : (n = b.value = g(null), v(this, "__ee__", b), b.value = null), n[e] ? "object" === u(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
        },
        once: o,
        off: i = function (e, t) {
            var n, r, o, i;
            if (p(t), !m.call(this, "__ee__")) return this;
            if (!(n = this.__ee__)[e]) return this;
            if ("object" === (void 0 === (r = n[e]) ? "undefined" : u(r)))
                for (i = 0; o = r[i]; ++i) o !== t && o.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[i ? 0 : 1] : r.splice(i, 1));
            else r !== t && r.__eeOnceListener__ !== t || delete n[e];
            return this
        },
        emit: a = function (e) {
            var t, n, r, o, i;
            if (m.call(this, "__ee__") && (o = this.__ee__[e]))
                if ("object" === (void 0 === o ? "undefined" : u(o))) {
                    for (n = arguments.length, i = new Array(n - 1), t = 1; t < n; ++t) i[t - 1] = arguments[t];
                    for (o = o.slice(), t = 0; r = o[t]; ++t) f.call(r, this, i)
                } else switch (arguments.length) {
                    case 1:
                        h.call(o, this);
                        break;
                    case 2:
                        h.call(o, this, arguments[1]);
                        break;
                    case 3:
                        h.call(o, this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (n = arguments.length, i = new Array(n - 1), t = 1; t < n; ++t) i[t - 1] = arguments[t];
                        f.call(o, this, i)
                }
        }
    }, l = {
        on: d(r),
        once: d(o),
        off: d(i),
        emit: d(a)
    }, c = y({}, l), e.exports = t = function (e) {
        return null == e ? g(c) : y(Object(e), l)
    }, t.methods = s
}, function (e, t, n) {
    "use strict";
    var r = n(13),
        o = n(21),
        i = n(22),
        a = n(23);
    (e.exports = function (e, t) {
        var n, i, s, l, c;
        return arguments.length < 2 || "string" != typeof e ? (l = t, t = e, e = null) : l = arguments[2], null == e ? (n = s = !0, i = !1) : (n = a.call(e, "c"), i = a.call(e, "e"), s = a.call(e, "w")), c = {
            value: t,
            configurable: n,
            enumerable: i,
            writable: s
        }, l ? r(o(l), c) : c
    }).gs = function (e, t, n) {
        var s, l, c, u;
        return "string" != typeof e ? (c = n, n = t, t = e, e = null) : c = arguments[3], null == t ? t = void 0 : i(t) ? null == n ? n = void 0 : i(n) || (c = n, n = void 0) : (c = t, t = n = void 0), null == e ? (s = !0, l = !1) : (s = a.call(e, "c"), l = a.call(e, "e")), u = {
            get: t,
            set: n,
            configurable: s,
            enumerable: l
        }, c ? r(o(c), u) : u
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(14)() ? Object.assign : n(15)
}, function (e, t, n) {
    "use strict";
    e.exports = function () {
        var e, t = Object.assign;
        return "function" == typeof t && (t(e = {
            foo: "raz"
        }, {
            bar: "dwa"
        }, {
            trzy: "trzy"
        }), e.foo + e.bar + e.trzy === "razdwatrzy")
    }
}, function (e, t, n) {
    "use strict";
    var r = n(16),
        o = n(20),
        i = Math.max;
    e.exports = function (e, t) {
        var n, a, s, l = i(arguments.length, 2);
        for (e = Object(o(e)), s = function (r) {
                try {
                    e[r] = t[r]
                } catch (e) {
                    n || (n = e)
                }
            }, a = 1; a < l; ++a) t = arguments[a], r(t).forEach(s);
        if (void 0 !== n) throw n;
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(17)() ? Object.keys : n(18)
}, function (e, t, n) {
    "use strict";
    e.exports = function () {
        try {
            return Object.keys("primitive"), !0
        } catch (e) {
            return !1
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = Object.keys;
    e.exports = function (e) {
        return o(r(e) ? Object(e) : e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function () {}
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e) {
        if (!r(e)) throw new TypeError("Cannot use null or undefined");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = Array.prototype.forEach,
        i = Object.create;
    e.exports = function (e) {
        var t = i(null);
        return o.call(arguments, function (e) {
            r(e) && function (e, t) {
                var n;
                for (n in e) t[n] = e[n]
            }(Object(e), t)
        }), t
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(24)() ? String.prototype.contains : n(25)
}, function (e, t, n) {
    "use strict";
    var r = "razdwatrzy";
    e.exports = function () {
        return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
    }
}, function (e, t, n) {
    "use strict";
    var r = String.prototype.indexOf;
    e.exports = function (e) {
        return r.call(this, e, arguments[1]) > -1
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        return e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var o = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                name: "xgplayer",
                version: 1,
                db: null,
                ojstore: {
                    name: "xg-m4a",
                    keypath: "vid"
                }
            };
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.indexedDB = window.indexedDB || window.webkitindexedDB, this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange, this.myDB = t
        }
        return r(e, [{
            key: "openDB",
            value: function (e) {
                var t = this,
                    n = this,
                    r = this.myDB.version || 1,
                    o = n.indexedDB.open(n.myDB.name, r);
                o.onerror = function (e) {}, o.onsuccess = function (r) {
                    t.myDB.db = r.target.result, e.call(n)
                }, o.onupgradeneeded = function (e) {
                    var t = e.target.result;
                    e.target.transaction;
                    t.objectStoreNames.contains(n.myDB.ojstore.name) || t.createObjectStore(n.myDB.ojstore.name, {
                        keyPath: n.myDB.ojstore.keypath
                    })
                }
            }
        }, {
            key: "deletedb",
            value: function () {
                this.indexedDB.deleteDatabase(this.myDB.name)
            }
        }, {
            key: "closeDB",
            value: function () {
                this.myDB.db.close()
            }
        }, {
            key: "addData",
            value: function (e, t) {
                for (var n = this.myDB.db.transaction(e, "readwrite").objectStore(e), r = void 0, o = 0; o < t.length; o++)(r = n.add(t[o])).onerror = function () {}, r.onsuccess = function () {}
            }
        }, {
            key: "putData",
            value: function (e, t) {
                for (var n = this.myDB.db.transaction(e, "readwrite").objectStore(e), r = void 0, o = 0; o < t.length; o++)(r = n.put(t[o])).onerror = function () {}, r.onsuccess = function () {}
            }
        }, {
            key: "getDataByKey",
            value: function (e, t, n) {
                var r = this,
                    o = this.myDB.db.transaction(e, "readwrite").objectStore(e).get(t);
                o.onerror = function () {
                    n.call(r, null)
                }, o.onsuccess = function (e) {
                    var t = e.target.result;
                    n.call(r, t)
                }
            }
        }, {
            key: "deleteData",
            value: function (e, t) {
                this.myDB.db.transaction(e, "readwrite").objectStore(e).delete(t)
            }
        }, {
            key: "clearData",
            value: function (e) {
                this.myDB.db.transaction(e, "readwrite").objectStore(e).clear()
            }
        }]), e
    }();
    t.default = o, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r, o;
    "function" == typeof Symbol && Symbol.iterator;
    /*!
     * Draggabilly v2.2.0
     * Make that shiz draggable
     * https://draggabilly.desandro.com
     * MIT license
     */
    ! function (i, a) {
        r = [n(29), n(30)], void 0 === (o = function (e, t) {
            return function (e, t, n) {
                function r(e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                }
                var o = e.jQuery;

                function i(e, t) {
                    this.element = "string" == typeof e ? document.querySelector(e) : e, o && (this.$element = o(this.element)), this.options = r({}, this.constructor.defaults), this.option(t), this._create()
                }
                var a = i.prototype = Object.create(n.prototype);
                i.defaults = {}, a.option = function (e) {
                    r(this.options, e)
                };
                var s = {
                    relative: !0,
                    absolute: !0,
                    fixed: !0
                };

                function l(e, t, n) {
                    return n = n || "round", t ? Math[n](e / t) * t : e
                }
                a._create = function () {
                    this.position = {}, this._getPosition(), this.startPoint = {
                        x: 0,
                        y: 0
                    }, this.dragPoint = {
                        x: 0,
                        y: 0
                    }, this.startPosition = r({}, this.position);
                    var e = getComputedStyle(this.element);
                    s[e.position] || (this.element.style.position = "relative"), this.on("pointerDown", this.onPointerDown), this.on("pointerMove", this.onPointerMove), this.on("pointerUp", this.onPointerUp), this.enable(), this.setHandles()
                }, a.setHandles = function () {
                    this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element], this.bindHandles()
                }, a.dispatchEvent = function (e, t, n) {
                    var r = [t].concat(n);
                    this.emitEvent(e, r), this.dispatchJQueryEvent(e, t, n)
                }, a.dispatchJQueryEvent = function (t, n, r) {
                    var o = e.jQuery;
                    if (o && this.$element) {
                        var i = o.Event(n);
                        i.type = t, this.$element.trigger(i, r)
                    }
                }, a._getPosition = function () {
                    var e = getComputedStyle(this.element),
                        t = this._getPositionCoord(e.left, "width"),
                        n = this._getPositionCoord(e.top, "height");
                    this.position.x = isNaN(t) ? 0 : t, this.position.y = isNaN(n) ? 0 : n, this._addTransformPosition(e)
                }, a._getPositionCoord = function (e, n) {
                    if (-1 != e.indexOf("%")) {
                        var r = t(this.element.parentNode);
                        return r ? parseFloat(e) / 100 * r[n] : 0
                    }
                    return parseInt(e, 10)
                }, a._addTransformPosition = function (e) {
                    var t = e.transform;
                    if (0 === t.indexOf("matrix")) {
                        var n = t.split(","),
                            r = 0 === t.indexOf("matrix3d") ? 12 : 4,
                            o = parseInt(n[r], 10),
                            i = parseInt(n[r + 1], 10);
                        this.position.x += o, this.position.y += i
                    }
                }, a.onPointerDown = function (e, t) {
                    this.element.classList.add("is-pointer-down"), this.dispatchJQueryEvent("pointerDown", e, [t])
                }, a.dragStart = function (e, t) {
                    this.isEnabled && (this._getPosition(), this.measureContainment(), this.startPosition.x = this.position.x, this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, this.dragPoint.y = 0, this.element.classList.add("is-dragging"), this.dispatchEvent("dragStart", e, [t]), this.animate())
                }, a.measureContainment = function () {
                    var e = this.getContainer();
                    if (e) {
                        var n = t(this.element),
                            r = t(e),
                            o = this.element.getBoundingClientRect(),
                            i = e.getBoundingClientRect(),
                            a = r.borderLeftWidth + r.borderRightWidth,
                            s = r.borderTopWidth + r.borderBottomWidth,
                            l = this.relativeStartPosition = {
                                x: o.left - (i.left + r.borderLeftWidth),
                                y: o.top - (i.top + r.borderTopWidth)
                            };
                        this.containSize = {
                            width: r.width - a - l.x - n.width,
                            height: r.height - s - l.y - n.height
                        }
                    }
                }, a.getContainer = function () {
                    var e = this.options.containment;
                    if (e) return e instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : this.element.parentNode
                }, a.onPointerMove = function (e, t, n) {
                    this.dispatchJQueryEvent("pointerMove", e, [t, n])
                }, a.dragMove = function (e, t, n) {
                    if (this.isEnabled) {
                        var r = n.x,
                            o = n.y,
                            i = this.options.grid,
                            a = i && i[0],
                            s = i && i[1];
                        r = l(r, a), o = l(o, s), r = this.containDrag("x", r, a), o = this.containDrag("y", o, s), r = "y" == this.options.axis ? 0 : r, o = "x" == this.options.axis ? 0 : o, this.position.x = this.startPosition.x + r, this.position.y = this.startPosition.y + o, this.dragPoint.x = r, this.dragPoint.y = o, this.dispatchEvent("dragMove", e, [t, n])
                    }
                }, a.containDrag = function (e, t, n) {
                    if (!this.options.containment) return t;
                    var r = "x" == e ? "width" : "height",
                        o = l(-this.relativeStartPosition[e], n, "ceil"),
                        i = this.containSize[r];
                    return i = l(i, n, "floor"), Math.max(o, Math.min(i, t))
                }, a.onPointerUp = function (e, t) {
                    this.element.classList.remove("is-pointer-down"), this.dispatchJQueryEvent("pointerUp", e, [t])
                }, a.dragEnd = function (e, t) {
                    this.isEnabled && (this.element.style.transform = "", this.setLeftTop(), this.element.classList.remove("is-dragging"), this.dispatchEvent("dragEnd", e, [t]))
                }, a.animate = function () {
                    if (this.isDragging) {
                        this.positionDrag();
                        var e = this;
                        requestAnimationFrame(function () {
                            e.animate()
                        })
                    }
                }, a.setLeftTop = function () {
                    this.element.style.left = this.position.x + "px", this.element.style.top = this.position.y + "px"
                }, a.positionDrag = function () {
                    this.element.style.transform = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)"
                }, a.staticClick = function (e, t) {
                    this.dispatchEvent("staticClick", e, [t])
                }, a.setPosition = function (e, t) {
                    this.position.x = e, this.position.y = t, this.setLeftTop()
                }, a.enable = function () {
                    this.isEnabled = !0
                }, a.disable = function () {
                    this.isEnabled = !1, this.isDragging && this.dragEnd()
                }, a.destroy = function () {
                    this.disable(), this.element.style.transform = "", this.element.style.left = "", this.element.style.top = "", this.element.style.position = "", this.unbindHandles(), this.$element && this.$element.removeData("draggabilly")
                }, a._init = function () {}, o && o.bridget && o.bridget("draggabilly", i);
                return i
            }(i, e, t)
        }.apply(t, r)) || (e.exports = o)
    }(window)
}, function (e, t, n) {
    "use strict";
    var r, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    window, void 0 === (o = "function" == typeof (r = function () {
        function e(e) {
            var t = parseFloat(e),
                n = -1 == e.indexOf("%") && !isNaN(t);
            return n && t
        }
        var t = "undefined" == typeof console ? function () {} : function (e) {
                console.error(e)
            },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = n.length;

        function o(e) {
            var n = getComputedStyle(e);
            return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n
        }
        var a, s = !1;

        function l(t) {
            if (function () {
                    if (!s) {
                        s = !0;
                        var t = document.createElement("div");
                        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                        var n = document.body || document.documentElement;
                        n.appendChild(t);
                        var r = o(t);
                        a = 200 == Math.round(e(r.width)), l.isBoxSizeOuter = a, n.removeChild(t)
                    }
                }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (void 0 === t ? "undefined" : i(t)) && t.nodeType) {
                var c = o(t);
                if ("none" == c.display) return function () {
                    for (var e = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, t = 0; t < r; t++) {
                        var o = n[t];
                        e[o] = 0
                    }
                    return e
                }();
                var u = {};
                u.width = t.offsetWidth, u.height = t.offsetHeight;
                for (var d = u.isBorderBox = "border-box" == c.boxSizing, p = 0; p < r; p++) {
                    var f = n[p],
                        h = c[f],
                        g = parseFloat(h);
                    u[f] = isNaN(g) ? 0 : g
                }
                var v = u.paddingLeft + u.paddingRight,
                    y = u.paddingTop + u.paddingBottom,
                    m = u.marginLeft + u.marginRight,
                    b = u.marginTop + u.marginBottom,
                    x = u.borderLeftWidth + u.borderRightWidth,
                    w = u.borderTopWidth + u.borderBottomWidth,
                    _ = d && a,
                    k = e(c.width);
                !1 !== k && (u.width = k + (_ ? 0 : v + x));
                var E = e(c.height);
                return !1 !== E && (u.height = E + (_ ? 0 : y + w)), u.innerWidth = u.width - (v + x), u.innerHeight = u.height - (y + w), u.outerWidth = u.width + m, u.outerHeight = u.height + b, u
            }
        }
        return l
    }) ? r.call(t, n, t, e) : r) || (e.exports = o)
}, function (e, t, n) {
    "use strict";
    var r, o;
    "function" == typeof Symbol && Symbol.iterator;
    /*!
     * Unidragger v2.3.0
     * Draggable base class
     * MIT license
     */
    ! function (i, a) {
        r = [n(31)], void 0 === (o = function (e) {
            return function (e, t) {
                function n() {}
                var r = n.prototype = Object.create(t.prototype);
                r.bindHandles = function () {
                    this._bindHandles(!0)
                }, r.unbindHandles = function () {
                    this._bindHandles(!1)
                }, r._bindHandles = function (t) {
                    for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", r = t ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                        var i = this.handles[o];
                        this._bindStartEvent(i, t), i[n]("click", this), e.PointerEvent && (i.style.touchAction = r)
                    }
                }, r._touchActionValue = "none", r.pointerDown = function (e, t) {
                    var n = this.okayPointerDown(e);
                    n && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]))
                };
                var o = {
                        TEXTAREA: !0,
                        INPUT: !0,
                        SELECT: !0,
                        OPTION: !0
                    },
                    i = {
                        radio: !0,
                        checkbox: !0,
                        button: !0,
                        submit: !0,
                        image: !0,
                        file: !0
                    };
                return r.okayPointerDown = function (e) {
                    var t = o[e.target.nodeName],
                        n = i[e.target.type],
                        r = !t || n;
                    return r || this._pointerReset(), r
                }, r.pointerDownBlur = function () {
                    var e = document.activeElement;
                    e && e.blur && e != document.body && e.blur()
                }, r.pointerMove = function (e, t) {
                    var n = this._dragPointerMove(e, t);
                    this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n)
                }, r._dragPointerMove = function (e, t) {
                    var n = {
                        x: t.pageX - this.pointerDownPointer.pageX,
                        y: t.pageY - this.pointerDownPointer.pageY
                    };
                    return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n
                }, r.hasDragStarted = function (e) {
                    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
                }, r.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
                }, r._dragPointerUp = function (e, t) {
                    this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
                }, r._dragStart = function (e, t) {
                    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t)
                }, r.dragStart = function (e, t) {
                    this.emitEvent("dragStart", [e, t])
                }, r._dragMove = function (e, t, n) {
                    this.isDragging && this.dragMove(e, t, n)
                }, r.dragMove = function (e, t, n) {
                    e.preventDefault(), this.emitEvent("dragMove", [e, t, n])
                }, r._dragEnd = function (e, t) {
                    this.isDragging = !1, setTimeout(function () {
                        delete this.isPreventingClicks
                    }.bind(this)), this.dragEnd(e, t)
                }, r.dragEnd = function (e, t) {
                    this.emitEvent("dragEnd", [e, t])
                }, r.onclick = function (e) {
                    this.isPreventingClicks && e.preventDefault()
                }, r._staticClick = function (e, t) {
                    this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
                        delete this.isIgnoringMouseUp
                    }.bind(this), 400)))
                }, r.staticClick = function (e, t) {
                    this.emitEvent("staticClick", [e, t])
                }, n.getPointerPoint = t.getPointerPoint, n
            }(i, e)
        }.apply(t, r)) || (e.exports = o)
    }(window)
}, function (e, t, n) {
    "use strict";
    var r, o;
    "function" == typeof Symbol && Symbol.iterator;
    /*!
     * Unipointer v2.3.0
     * base class for doing one thing with pointer event
     * MIT license
     */
    ! function (i, a) {
        r = [n(32)], void 0 === (o = function (e) {
            return function (e, t) {
                function n() {}
                var r = n.prototype = Object.create(t.prototype);
                r.bindStartEvent = function (e) {
                    this._bindStartEvent(e, !0)
                }, r.unbindStartEvent = function (e) {
                    this._bindStartEvent(e, !1)
                }, r._bindStartEvent = function (t, n) {
                    var r = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
                        o = "mousedown";
                    e.PointerEvent ? o = "pointerdown" : "ontouchstart" in e && (o = "touchstart"), t[r](o, this)
                }, r.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e)
                }, r.getTouch = function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.identifier == this.pointerIdentifier) return n
                    }
                }, r.onmousedown = function (e) {
                    var t = e.button;
                    t && 0 !== t && 1 !== t || this._pointerDown(e, e)
                }, r.ontouchstart = function (e) {
                    this._pointerDown(e, e.changedTouches[0])
                }, r.onpointerdown = function (e) {
                    this._pointerDown(e, e)
                }, r._pointerDown = function (e, t) {
                    e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
                }, r.pointerDown = function (e, t) {
                    this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
                };
                var o = {
                    mousedown: ["mousemove", "mouseup"],
                    touchstart: ["touchmove", "touchend", "touchcancel"],
                    pointerdown: ["pointermove", "pointerup", "pointercancel"]
                };
                return r._bindPostStartEvents = function (t) {
                    if (t) {
                        var n = o[t.type];
                        n.forEach(function (t) {
                            e.addEventListener(t, this)
                        }, this), this._boundPointerEvents = n
                    }
                }, r._unbindPostStartEvents = function () {
                    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
                        e.removeEventListener(t, this)
                    }, this), delete this._boundPointerEvents)
                }, r.onmousemove = function (e) {
                    this._pointerMove(e, e)
                }, r.onpointermove = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
                }, r.ontouchmove = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerMove(e, t)
                }, r._pointerMove = function (e, t) {
                    this.pointerMove(e, t)
                }, r.pointerMove = function (e, t) {
                    this.emitEvent("pointerMove", [e, t])
                }, r.onmouseup = function (e) {
                    this._pointerUp(e, e)
                }, r.onpointerup = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
                }, r.ontouchend = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerUp(e, t)
                }, r._pointerUp = function (e, t) {
                    this._pointerDone(), this.pointerUp(e, t)
                }, r.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t])
                }, r._pointerDone = function () {
                    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
                }, r._pointerReset = function () {
                    this.isPointerDown = !1, delete this.pointerIdentifier
                }, r.pointerDone = function () {}, r.onpointercancel = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
                }, r.ontouchcancel = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerCancel(e, t)
                }, r._pointerCancel = function (e, t) {
                    this._pointerDone(), this.pointerCancel(e, t)
                }, r.pointerCancel = function (e, t) {
                    this.emitEvent("pointerCancel", [e, t])
                }, n.getPointerPoint = function (e) {
                    return {
                        x: e.pageX,
                        y: e.pageY
                    }
                }, n
            }(i, e)
        }.apply(t, r)) || (e.exports = o)
    }(window)
}, function (e, t, n) {
    "use strict";
    var r, o;
    "function" == typeof Symbol && Symbol.iterator;
    "undefined" != typeof window && window, void 0 === (o = "function" == typeof (r = function () {
        function e() {}
        var t = e.prototype;
        return t.on = function (e, t) {
            if (e && t) {
                var n = this._events = this._events || {},
                    r = n[e] = n[e] || [];
                return -1 == r.indexOf(t) && r.push(t), this
            }
        }, t.once = function (e, t) {
            if (e && t) {
                this.on(e, t);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[e] = n[e] || {})[t] = !0, this
            }
        }, t.off = function (e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var r = n.indexOf(t);
                return -1 != r && n.splice(r, 1), this
            }
        }, t.emitEvent = function (e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                n = n.slice(0), t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                    var i = n[o];
                    r && r[i] && (this.off(e, i), delete r[i]), i.apply(this, t)
                }
                return this
            }
        }, t.allOff = function () {
            delete this._events, delete this._onceEvents
        }, e
    }) ? r.call(t, n, t, e) : r) || (e.exports = o)
}, function (e, t, n) {
    "use strict";
    var r = i(n(0)),
        o = i(n(2));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("volume", function () {
        var e = this,
            t = r.default.util,
            n = r.default.sniffer;

        function i() {
            e.config.autoplay && e.config.autoplayMuted ? e.volume = 0 : e.volume = e.config.volume
        }
        e.config.autoplayMuted && (e.config.volume = e.config.autoplay ? 0 : e.config.volume), e.once("canplay", i);
        var a = e.config.volume;
        if ("mobile" !== n.device) {
            var s = {
                    muted: "M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",
                    small: "M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z",
                    large: "M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"
                },
                l = function (e) {
                    return 0 === e ? "muted" : e < .5 ? "small" : "large"
                },
                c = s[l(a)],
                u = s[l(a)],
                d = t.createDom("xg-volume", '<xg-icon class="xgplayer-icon">\n                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                        <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                        <path transform="scale(0.0220625 0.0220625)" d="' + u + '"></path>\n                                                    </svg>\n                                                </xg-icon>\n                                                <xg-slider class="xgplayer-slider" tabindex="2">\n                                                    <xg-bar class="xgplayer-bar">\n                                                        <xg-drag class="xgplayer-drag"></xg-drag>\n                                                    </xg-bar>\n                                                </xg-slider>', {}, "xgplayer-volume");
            e.controls.appendChild(d);
            var p = void 0,
                f = d.querySelector(".xgplayer-slider"),
                h = d.querySelector(".xgplayer-bar"),
                g = d.querySelector(".xgplayer-drag"),
                v = d.querySelector(".xgplayer-icon");
            g.style.height = 100 * e.config.volume + "%";
            var y = d.querySelectorAll("path")[1],
                m = new o.default({
                    progress: function (e, t) {
                        var n = m.toSVGString(e);
                        y.setAttribute("d", n), c = n
                    },
                    from: c,
                    to: s.large
                }),
                b = null;
            f.volume = e.config.volume, ["touchstart", "mousedown"].forEach(function (n) {
                h.addEventListener(n, function (n) {
                    n.preventDefault(), n.stopPropagation(), e.video.muted = !1, f.focus(), t.event(n), p = h.getBoundingClientRect().height, n.clientX;
                    var r = n.clientY,
                        o = g.getBoundingClientRect().height,
                        i = !1,
                        a = function (n) {
                            n.preventDefault(), n.stopPropagation(), t.event(n), i = !0;
                            var a = o - n.clientY + r,
                                s = a / p;
                            g.style.height = a + "px", e.volume = Math.max(Math.min(s, 1), .01)
                        },
                        s = function n(r) {
                            if (r.preventDefault(), r.stopPropagation(), t.event(r), window.removeEventListener("mousemove", a), window.removeEventListener("touchmove", a), window.removeEventListener("mouseup", n), window.removeEventListener("touchend", n), b || (b = h.getBoundingClientRect()), !i) {
                                var o = b.height - (r.clientY - b.top),
                                    s = o / b.height;
                                g.style.height = o + "px", s <= 0 && (e.volume > 0 ? g.volume = e.video.volume : s = g.volume), e.volume = Math.max(Math.min(s, 1), .01)
                            }
                            f.volume = e.volume, i = !1
                        };
                    return window.addEventListener("mousemove", a), window.addEventListener("touchmove", a), window.addEventListener("mouseup", s), window.addEventListener("touchend", s), !1
                })
            }), ["touchstart", "mousedown"].forEach(function (t) {
                v.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.video.muted = !1, 0 === e.volume ? e.volume = f.volume : e.volume = 0
                })
            }), v.addEventListener("mouseenter", function (n) {
                n.preventDefault(), n.stopPropagation(), t.addClass(e.root, "xgplayer-volume-active"), d.focus()
            }), d.addEventListener("blur", function (n) {
                n.preventDefault(), n.stopPropagation(), t.removeClass(e.root, "xgplayer-volume-active")
            }), d.addEventListener("mouseleave", function (n) {
                n.preventDefault(), n.stopPropagation(), t.removeClass(e.root, "xgplayer-volume-active")
            });
            var x = null;
            e.on("volumechange", M), e.once("destroy", function t() {
                e.off("canplay", i), e.off("volumechange", M), e.off("destroy", t)
            })
        } else {
            var w = {
                    muted: "M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",
                    large: "M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"
                },
                _ = function (e) {
                    return 0 === e ? "muted" : "large"
                },
                k = w[_(a)],
                E = w[_(a)],
                C = t.createDom("xg-volume", '<xg-icon class="xgplayer-icon">\n                                                      <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                          <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                          <path transform="scale(0.0220625 0.0220625)" d="' + E + '"></path>\n                                                      </svg>\n                                                  </xg-icon>', {}, "xgplayer-volume");
            e.controls.appendChild(C);
            var S = C.querySelector(".xgplayer-icon"),
                P = C.querySelectorAll("path")[1],
                T = new o.default({
                    progress: function (e, t) {
                        var n = T.toSVGString(e);
                        P.setAttribute("d", n), k = n
                    },
                    from: k,
                    to: w.large
                });
            ["touchend", "mousedown"].forEach(function (t) {
                S.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.video.muted ? (e.video.muted = !1, e.volume = 1, T.reset(w.large, w.muted), k = w.large) : (e.volume = 0, e.video.muted = !0, T.reset(w.muted, w.large), k = w.muted)
                })
            })
        }

        function M() {
            x && clearTimeout(x), x = setTimeout(function () {
                m.reset(s[l(e.volume)], c), c = s[l[e.volume]], p || (p = h.getBoundingClientRect().height || 76), g.style.height = e.volume * p + "px"
            }, 50)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function () {
        var e = function () {
                return function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function (e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            t = 2 * Math.PI,
            n = function (e, t, n, r, o, i, a) {
                var s = e.x,
                    l = e.y;
                return {
                    x: r * (s *= t) - o * (l *= n) + i,
                    y: o * s + r * l + a
                }
            },
            r = function (e, t) {
                var n = 4 / 3 * Math.tan(t / 4),
                    r = Math.cos(e),
                    o = Math.sin(e),
                    i = Math.cos(e + t),
                    a = Math.sin(e + t);
                return [{
                    x: r - o * n,
                    y: o + r * n
                }, {
                    x: i + a * n,
                    y: a - i * n
                }, {
                    x: i,
                    y: a
                }]
            },
            o = function (e, t, n, r) {
                var o = e * r - t * n < 0 ? -1 : 1,
                    i = (e * n + t * r) / (Math.sqrt(e * e + t * t) * Math.sqrt(e * e + t * t));
                return i > 1 && (i = 1), i < -1 && (i = -1), o * Math.acos(i)
            },
            i = function (i) {
                var a = i.px,
                    s = i.py,
                    l = i.cx,
                    c = i.cy,
                    u = i.rx,
                    d = i.ry,
                    p = i.xAxisRotation,
                    f = void 0 === p ? 0 : p,
                    h = i.largeArcFlag,
                    g = void 0 === h ? 0 : h,
                    v = i.sweepFlag,
                    y = void 0 === v ? 0 : v,
                    m = [];
                if (0 === u || 0 === d) return [];
                var b = Math.sin(f * t / 360),
                    x = Math.cos(f * t / 360),
                    w = x * (a - l) / 2 + b * (s - c) / 2,
                    _ = -b * (a - l) / 2 + x * (s - c) / 2;
                if (0 === w && 0 === _) return [];
                u = Math.abs(u), d = Math.abs(d);
                var k = Math.pow(w, 2) / Math.pow(u, 2) + Math.pow(_, 2) / Math.pow(d, 2);
                k > 1 && (u *= Math.sqrt(k), d *= Math.sqrt(k));
                var E = function (e, n, r, i, a, s, l, c, u, d, p, f) {
                        var h = Math.pow(a, 2),
                            g = Math.pow(s, 2),
                            v = Math.pow(p, 2),
                            y = Math.pow(f, 2),
                            m = h * g - h * y - g * v;
                        m < 0 && (m = 0), m /= h * y + g * v;
                        var b = (m = Math.sqrt(m) * (l === c ? -1 : 1)) * a / s * f,
                            x = m * -s / a * p,
                            w = d * b - u * x + (e + r) / 2,
                            _ = u * b + d * x + (n + i) / 2,
                            k = (p - b) / a,
                            E = (f - x) / s,
                            C = (-p - b) / a,
                            S = (-f - x) / s,
                            P = o(1, 0, k, E),
                            T = o(k, E, C, S);
                        return 0 === c && T > 0 && (T -= t), 1 === c && T < 0 && (T += t), [w, _, P, T]
                    }(a, s, l, c, u, d, g, y, b, x, w, _),
                    C = e(E, 4),
                    S = C[0],
                    P = C[1],
                    T = C[2],
                    M = C[3],
                    O = Math.max(Math.ceil(Math.abs(M) / (t / 4)), 1);
                M /= O;
                for (var L = 0; L < O; L++) m.push(r(T, M)), T += M;
                return m.map(function (e) {
                    var t = n(e[0], u, d, x, b, S, P),
                        r = t.x,
                        o = t.y,
                        i = n(e[1], u, d, x, b, S, P),
                        a = i.x,
                        s = i.y,
                        l = n(e[2], u, d, x, b, S, P);
                    return {
                        x1: r,
                        y1: o,
                        x2: a,
                        y2: s,
                        x: l.x,
                        y: l.y
                    }
                })
            },
            a = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            s = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
            l = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;

        function c(e) {
            var t = e[0][0],
                n = e[0][1],
                r = t,
                o = n;
            return e.forEach(function (e) {
                var i = e[0],
                    a = e[2],
                    s = e[4],
                    l = e[6],
                    c = e[1],
                    u = e[3],
                    d = e[5],
                    p = e[7];
                t = Math.min(t, i, a, s, l), n = Math.min(n, c, u, d, p), r = Math.max(r, i, a, s, l), o = Math.max(o, c, u, d, p)
            }), [t, n, r, o]
        }

        function u(e, t) {
            var n = function (e) {
                    for (var t = [], n = 0; n < e; n++) {
                        for (var r = [], o = 0; o < e; o++) {
                            var i = o + n;
                            i > e - 1 && (i -= e), r[i] = o
                        }
                        t.push(r)
                    }
                    return t
                }(e.length),
                r = [];
            n.forEach(function (n) {
                var o = 0,
                    i = 0;
                n.forEach(function (n) {
                    var r, a, s, l, c, u, d, p, f, h, g, v, y, m, b, x, w, _;
                    o += (r = e[n], a = t[i++], s = r[0], l = r[2], c = r[4], u = r[6], d = r[1], p = r[3], f = r[5], h = r[7], g = a[0], v = a[2], y = a[4], m = a[6], b = a[1], x = a[3], w = a[5], _ = a[7], Math.sqrt(Math.pow(g - s, 2) + Math.pow(b - d, 2)) + Math.sqrt(Math.pow(v - l, 2) + Math.pow(x - p, 2)) + Math.sqrt(Math.pow(y - c, 2) + Math.pow(w - f, 2)) + Math.sqrt(Math.pow(m - u, 2) + Math.pow(_ - h, 2)))
                }), r.push({
                    index: n,
                    distance: o
                })
            }), r.sort(function (e, t) {
                return e.distance - t.distance
            });
            var o = [];
            return r[0].index.forEach(function (t) {
                o.push(e[t])
            }), o
        }

        function d(e, t) {
            var n = function (e) {
                    for (var t = [], n = 0; n < e; n++) t.push(n);
                    return function (e) {
                        var t = [],
                            n = [];
                        return function e(r) {
                            var o, i;
                            for (o = 0; o < r.length; o++) i = r.splice(o, 1)[0], n.push(i), 0 == r.length && t.push(n.slice()), e(r), r.splice(o, 0, i), n.pop();
                            return t
                        }(e)
                    }(t)
                }(e.length),
                r = [];
            n.forEach(function (n) {
                var o = 0;
                n.forEach(function (n) {
                    var r, i;
                    o += (r = c(e[n]), i = c(t[n]), Math.sqrt(Math.pow(r[0] - i[0], 2) + Math.pow(r[1] - i[1], 2)) + Math.sqrt(Math.pow(r[2] - i[2], 2) + Math.pow(r[3] - i[3], 2)))
                }), r.push({
                    index: n,
                    distance: o
                })
            }), r.sort(function (e, t) {
                return e.distance - t.distance
            });
            var o = [];
            return r[0].index.forEach(function (t) {
                o.push(e[t])
            }), o
        }
        var p = {};

        function f(e, t, n, r, o, i, a, s, l, c) {
            var u = (n - e) * l + e,
                d = (r - t) * l + t,
                p = (o - n) * l + n,
                f = (i - r) * l + r,
                h = (p - u) * l + u,
                g = (f - d) * l + d,
                v = (((a - o) * l + o - p) * l + p - h) * l + h,
                y = (((s - i) * l + i - f) * l + f - g) * l + g;
            return c ? [v, y, h, g, u, d, e, t] : [e, t, u, d, h, g, v, y]
        }
        return p.parser = function (e) {
            var t = [];
            return e.replace(s, function (e, n, r) {
                var o = n.toLowerCase();
                for (r = function (e) {
                        var t = e.match(l);
                        return t ? t.map(Number) : []
                    }(r), "m" == o && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), o = "l", n = "m" == n ? "l" : "L");;) {
                    if (r.length == a[o]) return r.unshift(n), t.push(r);
                    if (r.length < a[o]) throw new Error("malformed path data");
                    t.push([n].concat(r.splice(0, a[o])))
                }
            }), t
        }, p.lerpCurve = function (e, t, n) {
            return p.lerpPoints(e[0], e[1], t[0], t[1], n).concat(p.lerpPoints(e[2], e[3], t[2], t[3], n)).concat(p.lerpPoints(e[4], e[5], t[4], t[5], n)).concat(p.lerpPoints(e[6], e[7], t[6], t[7], n))
        }, p.lerpPoints = function (e, t, n, r, o) {
            return [e + (n - e) * o, t + (r - t) * o]
        }, p.q2b = function (e, t, n, r, o, i) {
            return [e, t, (e + 2 * n) / 3, (t + 2 * r) / 3, (o + 2 * n) / 3, (i + 2 * r) / 3, o, i]
        }, p.path2shapes = function (e) {
            for (var t = p.parser(e), n = 0, r = 0, o = 0, a = t.length, s = [], l = null, c = void 0, u = void 0, d = void 0, f = void 0, h = void 0, g = void 0, v = void 0; o < a; o++) {
                var y = t[o],
                    m = y[0],
                    b = t[o - 1];
                switch (m) {
                    case "m":
                        s[h = s.length] = [], l = s[h], n += y[1], r += y[2];
                        break;
                    case "M":
                        s[h = s.length] = [], l = s[h], n = y[1], r = y[2];
                        break;
                    case "l":
                        l.push([n, r, n, r, n, r, n + y[1], r + y[2]]), n += y[1], r += y[2];
                        break;
                    case "L":
                        l.push([n, r, y[1], y[2], y[1], y[2], y[1], y[2]]), n = y[1], r = y[2];
                        break;
                    case "h":
                        l.push([n, r, n, r, n, r, n + y[1], r]), n += y[1];
                        break;
                    case "H":
                        l.push([n, r, y[1], r, y[1], r, y[1], r]), n = y[1];
                        break;
                    case "v":
                        l.push([n, r, n, r, n, r, n, r + y[1]]), r += y[1];
                        break;
                    case "V":
                        l.push([n, r, n, y[1], n, y[1], n, y[1]]), r = y[1];
                        break;
                    case "C":
                        l.push([n, r, y[1], y[2], y[3], y[4], y[5], y[6]]), n = y[5], r = y[6];
                        break;
                    case "S":
                        "C" === b[0] || "c" === b[0] ? l.push([n, r, n + b[5] - b[3], r + b[6] - b[4], y[1], y[2], y[3], y[4]]) : "S" !== b[0] && "s" !== b[0] || l.push([n, r, n + b[3] - b[1], r + b[4] - b[2], y[1], y[2], y[3], y[4]]), n = y[3], r = y[4];
                        break;
                    case "c":
                        l.push([n, r, n + y[1], r + y[2], n + y[3], r + y[4], n + y[5], r + y[6]]), n += y[5], r += y[6];
                        break;
                    case "s":
                        "C" === b[0] || "c" === b[0] ? l.push([n, r, n + b[5] - b[3], r + b[6] - b[4], n + y[1], r + y[2], n + y[3], r + y[4]]) : "S" !== b[0] && "s" !== b[0] || l.push([n, r, n + b[3] - b[1], r + b[4] - b[2], n + y[1], r + y[2], n + y[3], r + y[4]]), n += y[3], r += y[4];
                        break;
                    case "a":
                        v = (g = i({
                            rx: y[1],
                            ry: y[2],
                            px: n,
                            py: r,
                            xAxisRotation: y[3],
                            largeArcFlag: y[4],
                            sweepFlag: y[5],
                            cx: n + y[6],
                            cy: n + y[7]
                        }))[g.length - 1], g.forEach(function (e, t) {
                            0 === t ? l.push([n, r, e.x1, e.y1, e.x2, e.y2, e.x, e.y]) : l.push([g[t - 1].x, g[t - 1].y, e.x1, e.y1, e.x2, e.y2, e.x, e.y])
                        }), n = v.x, r = v.y;
                        break;
                    case "A":
                        v = (g = i({
                            rx: y[1],
                            ry: y[2],
                            px: n,
                            py: r,
                            xAxisRotation: y[3],
                            largeArcFlag: y[4],
                            sweepFlag: y[5],
                            cx: y[6],
                            cy: y[7]
                        }))[g.length - 1], g.forEach(function (e, t) {
                            0 === t ? l.push([n, r, e.x1, e.y1, e.x2, e.y2, e.x, e.y]) : l.push([g[t - 1].x, g[t - 1].y, e.x1, e.y1, e.x2, e.y2, e.x, e.y])
                        }), n = v.x, r = v.y;
                        break;
                    case "Q":
                        l.push(p.q2b(n, r, y[1], y[2], y[3], y[4])), n = y[3], r = y[4];
                        break;
                    case "q":
                        l.push(p.q2b(n, r, n + y[1], r + y[2], y[3] + n, y[4] + r)), n += y[3], r += y[4];
                        break;
                    case "T":
                        "Q" === b[0] || "q" === b[0] ? (d = n + b[3] - b[1], f = r + b[4] - b[2], l.push(p.q2b(n, r, d, f, y[1], y[2]))) : "T" !== b[0] && "t" !== b[0] || (l.push(p.q2b(n, r, n + n - d, r + r - f, y[1], y[2])), d = n + n - d, f = r + r - f), n = y[1], r = y[2];
                        break;
                    case "t":
                        "Q" === b[0] || "q" === b[0] ? (d = n + b[3] - b[1], f = r + b[4] - b[2], l.push(p.q2b(n, r, d, f, n + y[1], r + y[2]))) : "T" !== b[0] && "t" !== b[0] || (l.push(p.q2b(n, r, n + n - d, r + r - f, n + y[1], r + y[2])), d = n + n - d, f = r + r - f), n += y[1], r += y[2];
                        break;
                    case "Z":
                    case "z":
                        c = l[0][0], u = l[0][1], l.push([n, r, c, u, c, u, c, u])
                }
            }
            return s
        }, p._upCurves = function (e, t) {
            for (var n = 0, r = 0, o = e.length; n < t; n++) e.push(e[r].slice(0)), ++r > o - 1 && (r -= o)
        }, p._splitCurves = function (e, t) {
            for (var n, r, o, i, a, s, l, c, u, d = 0, p = 0; d < t; d++) {
                var h = e[p],
                    g = (n = h[0], r = h[1], o = h[2], i = h[3], a = h[4], s = h[5], l = h[6], c = h[7], {
                        left: f(n, r, o, i, a, s, l, c, u = .5),
                        right: f(l, c, a, s, o, i, n, r, 1 - u, !0)
                    });
                e.splice(p, 1), e.splice(p, 0, g.left, g.right), (p += 2) >= e.length - 1 && (p = 0)
            }
        }, p._upShapes = function (e, t) {
            for (var n = function (t) {
                    var n = e[e.length - 1],
                        r = [];
                    n.forEach(function (e) {
                        r.push(e.slice(0))
                    }), e.push(r)
                }, r = 0; r < t; r++) n()
        }, p._subShapes = function (e, t, n) {
            for (var r = function (e) {
                    var n = t[t.length - 1],
                        r = [],
                        o = n[0][0],
                        i = n[0][1];
                    n.forEach(function () {
                        r.push([o, i, o, i, o, i, o, i])
                    }), t.push(r)
                }, o = 0; o < n; o++) r()
        }, p.lerp = function (e, t, n) {
            return p._lerp(p.path2shapes(e), p.path2shapes(t), n)
        }, p.MIM_CURVES_COUNT = 100, p._preprocessing = function (e, t) {
            var n = e.length,
                r = t.length,
                o = JSON.parse(JSON.stringify(e)),
                i = JSON.parse(JSON.stringify(t));
            return n > r ? p._subShapes(o, i, n - r) : n < r && p._upShapes(o, r - n), (o = d(o, i)).forEach(function (e, t) {
                var n = e.length,
                    r = i[t].length;
                n > r ? n < p.MIM_CURVES_COUNT ? (p._splitCurves(e, p.MIM_CURVES_COUNT - n), p._splitCurves(i[t], p.MIM_CURVES_COUNT - r)) : p._splitCurves(i[t], n - r) : n < r && (r < p.MIM_CURVES_COUNT ? (p._splitCurves(e, p.MIM_CURVES_COUNT - n), p._splitCurves(i[t], p.MIM_CURVES_COUNT - r)) : p._splitCurves(e, r - n))
            }), o.forEach(function (e, t) {
                o[t] = u(e, i[t])
            }), [o, i]
        }, p._lerp = function (e, t, n) {
            var r = [];
            return e.forEach(function (e, o) {
                var i = [];
                e.forEach(function (e, r) {
                    i.push(p.lerpCurve(e, t[o][r], n))
                }), r.push(i)
            }), r
        }, p.animate = function (e) {
            var t = p.path2shapes(e.from),
                n = p.path2shapes(e.to),
                r = p._preprocessing(t, n),
                o = new Date,
                i = e.end || function () {},
                a = e.progress || function () {},
                s = e.begin || function () {},
                l = e.easing || function (e) {
                    return e
                },
                c = null,
                u = null,
                d = e.time;
            s(t);
            ! function e() {
                var t = new Date - o;
                if (t >= d) return a(u = n, 1), i(u), void cancelAnimationFrame(c);
                var s = l(t / d);
                u = p._lerp(r[0], r[1], s), a(u, s), c = requestAnimationFrame(e)
            }()
        }, p
    }, "object" === a(t) && void 0 !== e ? e.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
}, function (e, t, n) {
    "use strict";
    ! function () {
        for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
            var r = (new Date).getTime(),
                o = Math.max(0, 16 - (r - e)),
                i = window.setTimeout(function () {
                    t(r + o)
                }, o);
            return e = r + o, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }()
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("time", function () {
        var e = this,
            t = i.default.util,
            n = t.format,
            r = t.createDom("xg-time", "<span>" + (e.currentTime || n(0)) + "</span><em>" + (e.duration || n(0)) + "</em>", {}, "xgplayer-time");
        e.controls.appendChild(r);
        var o = function () {
            "audio" === e.videoConfig.mediaType && e.isProgressMoving && e.dash || (r.innerHTML = "<span>" + n(e.currentTime || 0) + "</span><em>" + n(e.duration))
        };
        e.on("durationchange", o), e.on("timeupdate", o), e.once("destroy", function t() {
            e.off("durationchange", o), e.off("timeupdate", o), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("textTrack", function () {
        if (-1 !== navigator.userAgent.indexOf("Chrome")) {
            var e = this,
                t = i.default.util,
                n = (i.default.sniffer, t.createDom("xg-textTrack", "", {
                    tabindex: 7
                }, "xgplayer-textTrack")),
                r = e.controls,
                o = e.config.textTrack;
            o && Array.isArray(o) && o.length > 1 && (t.addClass(e.root, "xgplayer-is-textTrack"), e.on("canplay", function () {
                var i = ["<ul>"];
                i.push("<li class=''}'>关闭</li>"), o.forEach(function (e) {
                    i.push("<li class='" + (e.default ? "textTrack" : "") + "'>" + e.label + "</li>")
                });
                var a = e.config.lang && "zh-cn" === e.config.lang ? "字幕" : "Caption";
                i.push('</ul><p class="name"><em>' + a + "</em></p>");
                var s = r.querySelector(".xgplayer-textTrack");
                s ? (s.innerHTML = i.join(""), s.querySelector(".name").addEventListener("mouseenter", function (n) {
                    n.preventDefault(), n.stopPropagation(), t.addClass(e.root, "xgplayer-textTrack-active"), s.focus()
                })) : (n.innerHTML = i.join(""), n.querySelector(".name").addEventListener("mouseenter", function (r) {
                    r.preventDefault(), r.stopPropagation(), t.addClass(e.root, "xgplayer-textTrack-active"), n.focus()
                }), r.appendChild(n))
            })), ["touchend", "click"].forEach(function (r) {
                n.addEventListener(r, function (n) {
                    n.preventDefault(), n.stopPropagation();
                    var r = n.target || n.srcElement;
                    if (r && "li" === r.tagName.toLocaleLowerCase()) {
                        Array.prototype.forEach.call(r.parentNode.childNodes, function (e) {
                            t.removeClass(e, "textTrack")
                        }), t.addClass(r, "textTrack");
                        var i = e.root.getElementsByTagName("Track");
                        "关闭" === r.innerHTML ? (i[0].track.mode = "hidden", t.removeClass(e.root, "xgplayer-textTrack-active")) : (t.hasClass(e.root, "xgplayer-textTrack-active") || t.addClass(e.root, "xgplayer-textTrack-active"), i[0].track.mode = "showing", o.some(function (e) {
                            if (e.label === r.innerHTML) return i[0].src = e.src, e.kind && (i[0].kind = e.kind), i[0].label = e.label, e.srclang && (i[0].srclang = e.srclang), !0
                        }), e.emit("textTrackChange", r.innerHTML))
                    }
                }, !1)
            }), n.addEventListener("mouseleave", function (n) {
                n.preventDefault(), n.stopPropagation(), t.removeClass(e.root, "xgplayer-textTrack-active")
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("screenShot", function () {
        var e = this,
            t = i.default.util;
        if (e.config.screenShot) {
            var n = t.createDom("xg-screenShot", '<p class="name"><span>截图</span></p>', {
                    tabindex: 11
                }, "xgplayer-screenShot"),
                r = document.createElement("canvas"),
                o = r.getContext("2d"),
                a = new Image;
            r.width = this.config.width || 600, r.height = this.config.height || 337.5, e.controls.appendChild(n), ["click", "touchstart"].forEach(function (t) {
                n.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), a.onload = (o.drawImage(e.video, 0, 0, r.width, r.height), a.setAttribute("crossOrigin", "anonymous"), a.src = r.toDataURL("image/png").replace("image/png", "image/octet-stream"), void
                        function (e, t) {
                            var n = document.createElement("a");
                            n.href = e, n.download = t;
                            var r = document.createEvent("MouseEvents");
                            r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(r)
                        }(a.src.replace(/^data:image\/[^;]+/, "data:application/octet-stream"), "截图.png"))
                })
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("rotate", function () {
        var e = this;
        if (this.config.rotate) {
            !0 === this.config.rotate && (this.config.rotate = {});
            var t = i.default.util,
                n = t.createDom("xg-rotate", '<xg-icon class="xgplayer-icon xgplayer-rotate-img"></xg-icon>', {}, "xgplayer-rotate"),
                r = e.config.lang && "zh-cn" === e.config.lang ? "旋转" : "Rotate",
                o = t.createDom("xg-tips", r, {}, "xgplayer-tips");
            n.appendChild(o), e.controls.appendChild(n);
            var a = 0;
            e.rotate = function () {
                var t = e.root.offsetWidth,
                    n = e.root.offsetHeight;
                e.config.rotate.innerRotate || (e.root.style.width = n + "px", e.root.style.height = t + "px");
                var r = e.config.rotate.clockwise ? 1 : -1,
                    o = void 0;
                o = .25 == (a = (a + 1 + .25 * r) % 1) || .75 === a ? e.config.rotate.innerRotate ? t >= n ? (n / t).toFixed(2) : (t / n).toFixed(2) : t >= n ? (t / n).toFixed(2) : (n / t).toFixed(2) : 1, e.video.style.transformOrigin = "center center", e.video.style.transform = "rotate(" + a + "turn) scale(" + o + ")", e.video.style.webKitTransform = "rotate(" + a + "turn) scale(" + o + ")", e.emit("rotate", 360 * a)
            }, n.addEventListener("mouseenter", function (t) {
                t.preventDefault(), t.stopPropagation(), o.style.left = "50%";
                var n = o.getBoundingClientRect(),
                    r = e.root.getBoundingClientRect();
                n.right > r.right && (o.style.left = -n.right + r.right + 16 + "px")
            }), n.addEventListener("click", e.rotate)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("replay", function () {
        var e = this,
            t = i.default.util,
            n = e.config.centerBtn ? e.config.centerBtn : {},
            r = void 0,
            o = void 0,
            a = void 0,
            s = void 0;
        if (!(navigator.userAgent.indexOf("iPhone OS 9") > -1)) {
            if ("img" === n.type) {
                if (o = t.createDom("xg-replay", '<div class="xgplayer-replay-img"></div>', {}, "xgplayer-replay"), (a = o.querySelector(".xgplayer-replay-img")).style.backgroundImage = 'url("' + n.url.replay + '")', n.width && n.height) {
                    var l = void 0,
                        c = void 0,
                        u = void 0;
                    ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function (e) {
                        return !(n.width.indexOf(e) > -1 && n.height.indexOf(e) > -1 && (l = parseFloat(n.width.slice(0, n.width.indexOf(e)).trim()), c = parseFloat(n.height.slice(0, n.height.indexOf(e)).trim()), u = e, 1))
                    }), a.style.width = "" + l + u, a.style.height = "" + c + u, a.style.backgroundSize = "" + l + u + " " + c + u, a.style.margin = "-" + c / 2 + u + " auto auto -" + l / 2 + u
                }
            } else r = {
                replay: n.replayPath ? n.replayPath : "M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"
            }, s = (o = t.createDom("xg-replay", '\n          <svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n            <path d="' + r.replay + '"></path>\n          </svg>\n          <xg-replay-txt class="xgplayer-replay-txt">重播</xg-replay-txt>\n          ', {}, "xgplayer-replay")).querySelector(".xgplayer-replay-svg");
            var d = e.root;
            d.appendChild(o), e.on("ended", p), (s || a).addEventListener("click", function (n) {
                n.preventDefault(), t.removeClass(d, "replay"), e.replay()
            }), e.once("destroy", function t() {
                e.off("ended", p), e.off("destroy", t)
            })
        }

        function p() {
            if ("img" === n.type) a.style.backgroundImage = 'url("' + n.url.replay + '")';
            else {
                o.querySelector(".xgplayer-replay-txt").textContent = e.lang.REPLAY;
                var r = o.querySelector("path"),
                    i = window.getComputedStyle(r).getPropertyValue("transform");
                "none" !== i && r.setAttribute("transform", i)
            }
            e.config.loop || t.addClass(d, "replay")
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("progress", function () {
        var e = this,
            t = i.default.util,
            n = t.createDom("xg-progress", '<xg-outer class="xgplayer-progress-outer"><xg-cache class="xgplayer-progress-cache"></xg-cache><xg-played class="xgplayer-progress-played"></xgplayer-played><xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn><xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point><xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail></xg-outer>', {
                tabindex: 1
            }, "xgplayer-progress"),
            r = e.controls,
            o = void 0;
        r.appendChild(n);
        var a = n.querySelector(".xgplayer-progress-played"),
            s = n.querySelector(".xgplayer-progress-btn"),
            l = n.querySelector(".xgplayer-progress-outer"),
            c = n.querySelector(".xgplayer-progress-cache"),
            u = n.querySelector(".xgplayer-progress-point"),
            d = n.querySelector(".xgplayer-progress-thumbnail");

        function p(r, o) {
            r.addEventListener("mouseenter", function (e) {
                o && (t.addClass(r, "xgplayer-progress-dot-show"), t.addClass(n, "xgplayer-progress-dot-active"))
            }), r.addEventListener("mouseleave", function (e) {
                o && (t.removeClass(r, "xgplayer-progress-dot-show"), t.removeClass(n, "xgplayer-progress-dot-active"))
            }), r.addEventListener("touchend", function (i) {
                i.preventDefault(), i.stopPropagation(), o && (t.hasClass(r, "xgplayer-progress-dot-show") || Object.keys(e.dotArr).forEach(function (n) {
                    e.dotArr[n] && t.removeClass(e.dotArr[n], "xgplayer-progress-dot-show")
                }), t.toggleClass(r, "xgplayer-progress-dot-show"), t.toggleClass(n, "xgplayer-progress-dot-active"))
            })
        }

        function f() {
            e.config.progressDot && "Array" === t.typeOf(e.config.progressDot) && e.config.progressDot.forEach(function (n) {
                if (n.time >= 0 && n.time <= e.duration) {
                    var r = t.createDom("xg-progress-dot", n.text ? '<span class="xgplayer-progress-tip">' + n.text + "</span>" : "", {}, "xgplayer-progress-dot");
                    r.style.left = n.time / e.duration * 100 + "%", l.appendChild(r), e.dotArr[n.time] = r, p(r, n.text)
                }
            })
        }
        e.dotArr = {}, e.once("canplay", f), e.addProgressDot = function (n, r) {
            if (!e.dotArr[n] && n >= 0 && n <= e.duration) {
                var o = t.createDom("xg-progress-dot", "", {}, "xgplayer-progress-dot");
                o.style.left = n / e.duration * 100 + "%", l.appendChild(o), e.dotArr[n] = o, p(o, r)
            }
        }, e.removeProgressDot = function (t) {
            if (t >= 0 && t <= e.duration && e.dotArr[t]) {
                var n = e.dotArr[t];
                n.parentNode.removeChild(n), n = null, e.dotArr[t] = null
            }
        }, e.removeAllProgressDot = function () {
            Object.keys(e.dotArr).forEach(function (t) {
                if (e.dotArr[t]) {
                    var n = e.dotArr[t];
                    n.parentNode.removeChild(n), n = null, e.dotArr[t] = null
                }
            })
        };
        var h = 0,
            g = 0,
            v = 0,
            y = 0,
            m = 0,
            b = 0,
            x = [];
        e.config.thumbnail && (h = e.config.thumbnail.pic_num, g = e.config.thumbnail.width, v = e.config.thumbnail.height, y = e.config.thumbnail.col, m = e.config.thumbnail.row, x = e.config.thumbnail.urls, d.style.width = g + "px", d.style.height = v + "px"), ["touchstart", "mousedown"].forEach(function (i) {
            n.addEventListener(i, function (i) {
                if (i.preventDefault(), i.stopPropagation(), t.event(i), i._target === u || e.ended) return !1;
                n.focus(), o = n.getBoundingClientRect().width;
                var l = a.getBoundingClientRect().left,
                    c = function (n) {
                        n.preventDefault(), n.stopPropagation(), t.event(n), e.isProgressMoving = !0;
                        var i = n.clientX - l > o ? o : n.clientX - l,
                            c = i / o * e.duration;
                        if (a.style.width = 100 * i / o + "%", i - 7 < 0 ? (s.style.left = "0px", s.style.transform = "") : i + 7 > o ? (s.style.left = o - 14 + "px", s.style.transform = "") : (s.style.left = "100%", s.style.transform = "translate(-50%, 0)"), "video" !== e.videoConfig.mediaType || e.dash || e.config.closeMoveSeek) {
                            var u = t.findDom(r, ".xgplayer-time");
                            u && (u.innerHTML = "<span>" + t.format(c || 0) + "</span><em>" + t.format(e.duration))
                        } else e.currentTime = Number(c).toFixed(1);
                        e.emit("focus")
                    },
                    d = function r(i) {
                        if (i.preventDefault(), i.stopPropagation(), t.event(i), window.removeEventListener("mousemove", c), window.removeEventListener("touchmove", c, {
                                passive: !1
                            }), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r), n.blur(), !e.isProgressMoving || "audio" === e.videoConfig.mediaType || e.dash || e.config.closeMoveSeek) {
                            var u = i.clientX - l,
                                d = u / o * e.duration;
                            a.style.width = 100 * u / o + "%", u - 7 < 0 ? (s.style.left = "0px", s.style.transform = "") : u + 7 > o ? (s.style.left = o - 14 + "px", s.style.transform = "") : (s.style.left = "100%", s.style.transform = "translate(-50%, 0)"), e.currentTime = Number(d).toFixed(1)
                        }
                        e.emit("focus"), e.isProgressMoving = !1
                    };
                return window.addEventListener("mousemove", c), window.addEventListener("touchmove", c, {
                    passive: !1
                }), window.addEventListener("mouseup", d), window.addEventListener("touchend", d), !1
            })
        }), n.addEventListener("mouseenter", function (r) {
            if (e.ended) return !1;
            var o = n.getBoundingClientRect().left,
                i = n.getBoundingClientRect().width,
                a = function (r) {
                    var a = (r.clientX - o) / i * e.duration;
                    a = a < 0 ? 0 : a, u.textContent = t.format(a);
                    var s = u.getBoundingClientRect().width;
                    if (e.config.thumbnail) {
                        b = e.duration / h;
                        var l = Math.floor(a / b);
                        d.style.backgroundImage = "url(" + x[Math.ceil((l + 1) / (y * m)) - 1] + ")";
                        var c = l + 1 - y * m * (Math.ceil((l + 1) / (y * m)) - 1),
                            p = Math.ceil(c / m) - 1,
                            f = c - p * m - 1;
                        d.style["background-position"] = "-" + f * g + "px -" + p * v + "px";
                        var w = r.clientX - o - g / 2;
                        w = (w = w > 0 ? w : 0) < i - g ? w : i - g, d.style.left = w + "px", d.style.top = -10 - v + "px", d.style.display = "block", u.style.left = w + g / 2 - s / 2 + "px"
                    } else {
                        var _ = r.clientX - o - s / 2;
                        _ = (_ = _ > 0 ? _ : 0) > i - s ? i - s : _, u.style.left = _ + "px"
                    }
                    t.hasClass(n, "xgplayer-progress-dot-active") ? u.style.display = "none" : u.style.display = "block"
                },
                s = function (e) {
                    a(e)
                };
            n.addEventListener("mousemove", s, !1), n.addEventListener("mouseleave", function e(t) {
                n.removeEventListener("mousemove", s, !1), n.removeEventListener("mouseleave", e, !1), a(t), u.style.display = "none", d.style.display = "none"
            }, !1), a(r)
        }, !1);
        var w = !1,
            _ = function () {
                if (!o && n && (o = n.getBoundingClientRect().width), "audio" !== e.videoConfig.mediaType || !e.isProgressMoving || !e.dash) {
                    a.style.width = 100 * e.currentTime / e.duration + "%";
                    var t = e.currentTime / e.duration * o - 7;
                    if (t < 0) s.style.left = "0px", s.style.transform = "", w = !1;
                    else if (t + 14 > o) s.style.left = o - 14 + "px", s.style.transform = "", w = !1;
                    else {
                        if (w) return;
                        s.style.left = "100%", s.style.transform = "translate(-50%, 0)", w = !0
                    }
                }
            };
        e.on("timeupdate", _);
        var k = function () {
                var t = e.buffered;
                if (t && t.length > 0) {
                    for (var n = t.end(t.length - 1), r = 0, o = t.length; r < o; r++)
                        if (e.currentTime >= t.start(r) && e.currentTime <= t.end(r)) {
                            n = t.end(r);
                            for (var i = r + 1; i < t.length; i++)
                                if (t.start(i) - t.end(i - 1) >= 2) {
                                    n = t.end(i - 1);
                                    break
                                } break
                        } c.style.width = n / e.duration * 100 + "%"
                }
            },
            E = ["bufferedChange", "cacheupdate", "ended", "timeupdate"];
        E.forEach(function (t) {
            e.on(t, k)
        }), e.once("destroy", function t() {
            e.removeAllProgressDot(), e.off("canplay", f), e.off("timeupdate", _), E.forEach(function (t) {
                e.off(t, k)
            }), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("poster", function () {
        var e = this,
            t = i.default.util.createDom("xg-poster", "", {}, "xgplayer-poster"),
            n = e.root;

        function r() {
            t.style.display = "none"
        }
        e.config.poster && (t.style.backgroundImage = "url(" + e.config.poster + ")", n.appendChild(t)), e.on("play", r), e.once("destroy", function t() {
            e.off("play", r), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("playNext", function () {
        var e = this,
            t = i.default.util,
            n = e.controls,
            r = e.config.playNextBtn,
            o = -1;
        if (r && r.urlList) {
            var a = void 0;
            a = "img" === r.type ? i.default.util.createImgBtn("playNext", r.url, r.width, r.height) : t.createDom("xg-playNext", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                <path transform="scale(0.025 0.025)"\n                d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n            </svg></xg-icon>', {}, "xgplayer-playNext"), n.appendChild(a), ["click", "touchend"].forEach(function (t) {
                a.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), o + 1 < r.urlList.length ? (o++, e.video.pause(), e.currentTime = 0, e.video.autoplay = !0, e.src = r.urlList[o], e.emit("playerNext", o + 1)) : e.emit("urlList last")
                }, !1)
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("playbackRate", function () {
        var e = this,
            t = i.default.util,
            n = 0,
            r = 1,
            o = [];
        if (!e.config.playbackRate) return !1;
        e.config.playbackRate.sort(function (e, t) {
            return e - t
        }), e.config.playbackRate.forEach(function (t, i) {
            e.config.defaultPlaybackRate && e.config.defaultPlaybackRate === t ? (n = i, r = t, e.once("playing", function () {
                e.video.playbackRate = t
            })) : 1 !== t && "1" !== t || (n = i), o.push(t + "x")
        });
        var a = e.config.lang && "zh-cn" === e.config.lang ? "倍速" : "Speed",
            s = t.createDom("xg-playback", "<p class='name'><span>" + r + "x</span></p>", {}, "xgplayer-playback"),
            l = e.controls,
            c = t.createDom("xg-tips", a, {}, "xgplayer-tips");
        s.appendChild(c), l.appendChild(s), ["touchstart", "click"].forEach(function (t) {
            s.addEventListener(t, function (t) {
                t.preventDefault(), t.stopPropagation();
                var r = t.target || t.srcElement;
                !r || "p" !== r.tagName.toLocaleLowerCase() && "span" !== r.tagName.toLocaleLowerCase() || (n = n + 1 === o.length ? 0 : n + 1, s.querySelector("p").innerHTML = "<span>" + o[n] + "</span>", e.video.playbackRate = 1 * o[n].replace(/x$/g, ""))
            }, !1)
        }), s.addEventListener("mouseenter", function (t) {
            t.preventDefault(), t.stopPropagation(), c.style.left = "50%";
            var n = c.getBoundingClientRect(),
                r = e.root.getBoundingClientRect();
            n.right > r.right && (c.style.left = -n.right + r.right + 16 + "px")
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = i(n(0)),
        o = i(n(2));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("play", function () {
        var e = this,
            t = e.controls,
            n = r.default.util,
            i = e.config.iconScale || .0320625,
            a = {
                play: "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
                pause: "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
            },
            s = e.config.playBtn ? e.config.playBtn : {},
            l = void 0,
            c = void 0,
            u = void 0;
        "img" === s.type ? l = r.default.util.createImgBtn("play", s.url.play, s.width, s.height) : (l = n.createDom("xg-play", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(' + i + " " + i + ')" d="' + a.play + '"></path>\n          </svg></xg-icon>', {}, "xgplayer-play"), c = l.querySelector("path"), u = new o.default({
            progress: function (e, t) {
                c.setAttribute("d", u.toSVGString(e))
            },
            from: a.pause,
            to: a.play,
            duration: 50
        }));
        var d = e.config.lang && "zh-cn" === e.config.lang ? "播放" : "Play",
            p = e.config.lang && "zh-cn" === e.config.lang ? "暂停" : "Pause",
            f = n.createDom("xg-tips", d, {}, "xgplayer-tips");
        l.appendChild(f);

        function h() {
            "img" === s.type ? l.style.backgroundImage = 'url("' + s.url.pause + '")' : setTimeout(function () {
                f.textContent = p, u.to !== a.pause && u.reset(a.pause, a.play)
            }, 80)
        }

        function g() {
            "img" === s.type ? l.style.backgroundImage = 'url("' + s.url.play + '")' : setTimeout(function () {
                f.textContent = d, u.to !== a.play && u.reset(a.play, a.pause)
            }, 80)
        }
        t.appendChild(l), ["click", "touchstart"].forEach(function (t) {
            l.addEventListener(t, function (t) {
                t.preventDefault(), t.stopPropagation(), e.ended || (e.paused ? e.play() : e.pause())
            }, !1)
        }), e.on("play", h), e.on("pause", g), e.once("destroy", function t() {
            e.off("play", h), e.off("pause", g), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("pip", function () {
        var e = this,
            t = i.default.util;
        if (e.config.pip) {
            var n = t.createDom("xg-pip", '<p class="name"><span>画中画</span></p>', {
                    tabindex: 9
                }, "xgplayer-pip"),
                r = e.controls,
                o = e.root;
            r.appendChild(n), ["click", "touchstart"].forEach(function (r) {
                n.addEventListener(r, function (n) {
                    n.preventDefault(), n.stopPropagation(), t.hasClass(o, "xgplayer-pip-active") ? e.exitPIP(e) : e.getPIP(e)
                })
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("pc", function () {
        var e = this,
            t = i.default.util,
            n = e.controls,
            r = e.root,
            o = 0,
            a = void 0,
            s = e.config.centerBtn ? e.config.centerBtn : {},
            l = void 0,
            c = void 0,
            u = void 0;
        "img" === s.type ? c = i.default.util.createImgBtn("start", s.url.play, s.width, s.height) : (l = {
            pause: s.pausePath ? s.pausePath : "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
            play: s.playPath ? s.playPath : "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
        }, c = t.createDom("xg-start", '\n          <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.04,0.04)" d="' + l.pause + '"></path>\n          </svg>', {}, "xgplayer-start"), u = c.querySelector("path"));
        var d = t.createDom("xg-enter", '<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>', {}, "xgplayer-enter"),
            p = d.querySelector(".xgplayer-enter-logo");
        r.appendChild(c), r.appendChild(d);
        var f = d.querySelector(".xgplayer-enter-tips"),
            h = new Image;

        function g() {
            t.removeClass(r, "xgplayer-is-enter")
        }

        function v() {
            t.removeClass(r, "xgplayer-is-enter")
        }

        function y() {
            "img" === s.type ? c.style.backgroundImage = 'url("' + s.url.pause + '")' : u.setAttribute("d", l.pause), c.style.display = "inline-block", t.addClass(c, "xgplayer-start-interact")
        }

        function m() {
            "img" === s.type ? c.style.backgroundImage = 'url("' + s.url.play + '")' : u.setAttribute("d", l.play), c.style.display = "inline-block", t.addClass(c, "xgplayer-start-interact")
        }

        function b(t) {
            e.config.autoplay && e.start()
        }
        h.onload = function () {
            f.style.display = "block"
        }, e.config.enterLogo && e.config.enterLogo.url && e.config.enterLogo.width && e.config.enterLogo.height ? (h.src = e.config.enterLogo.url, p.style.backgroundImage = 'url("' + e.config.enterLogo.url + '")', p.style.width = e.config.enterLogo.width + "px", p.style.height = e.config.enterLogo.height + "px", p.style.backgroundSize = e.config.enterLogo.width + "px " + e.config.enterLogo.height + "px", p.style.margin = "-" + e.config.enterLogo.height / 2 + "px auto auto -" + e.config.enterLogo.width / 2 + "px", f.style.margin = e.config.enterLogo.height - 6 + "px auto auto -62px") : h.src = t.getBgImage(p), e.config.enterTips && e.config.enterTips.background && (f.style.background = "" + e.config.enterTips.background), e.config.enterBg && (e.config.enterBg.url ? d.style.backgroundImage = 'url("' + e.config.enterBg.url + '")' : e.config.enterBg.color && (d.style.background = e.config.enterBg.color)), ["click", "touchend"].forEach(function (n) {
            c.addEventListener(n, function (n) {
                ! function (n) {
                    n.preventDefault(), n.stopPropagation(), t.hasClass(r, "xgplayer-nostart") ? (t.removeClass(r, "xgplayer-nostart"), t.addClass(r, "xgplayer-is-enter"), e.on("canplay", g), e.once("playing", v), r.querySelector("video") || e.start(), e.play()) : e.paused && (t.removeClass(r, "xgplayer-nostart xgplayer-isloading"), setTimeout(function () {
                        e.play()
                    }, 10))
                }(n)
            }, !1)
        }), c.addEventListener("animationend", function (e) {
            ! function (e) {
                e.preventDefault(), t.removeClass(c, "xgplayer-start-interact"), c.style.display = "none"
            }(e)
        }), e.on("play", y), e.on("pause", m), e.video.addEventListener("click", function (n) {
            ! function (n) {
                n.preventDefault(), n.stopPropagation(), document.activeElement === e.video ? e.config.closeVideoClick || (o++, a && clearTimeout(a), 1 === o ? a = setTimeout(function () {
                    if (t.hasClass(e.root, "xgplayer-nostart")) return !1;
                    e.ended || (e.paused ? e.play() : e.pause()), o = 0
                }, 200) : o = 0) : e.video.focus()
            }(n)
        }, !1), e.video.addEventListener("dblclick", function (t) {
            ! function (t) {
                if (t.preventDefault(), t.stopPropagation(), document.activeElement === e.video) {
                    if (!e.config.closeVideoDblclick) {
                        var r = n.querySelector(".xgplayer-fullscreen");
                        if (r) {
                            var o = void 0;
                            document.createEvent ? (o = document.createEvent("Event")).initEvent("click", !0, !0) : o = new Event("click"), r.dispatchEvent(o)
                        }
                    }
                } else e.video.focus()
            }(t)
        }, !1), r.addEventListener("mouseenter", function () {
            clearTimeout(e.leavePlayerTimer), e.emit("focus", e)
        }, !1), r.addEventListener("mouseleave", function () {
            e.config.closePlayerBlur || (e.leavePlayerTimer = setTimeout(function () {
                e.emit("blur", e)
            }, e.config.leavePlayerTime || 0))
        }, !1), n.addEventListener("mouseenter", function (t) {
            e.userTimer && clearTimeout(e.userTimer)
        }, !1), n.addEventListener("mouseleave", function (t) {
            e.config.closeControlsBlur || e.emit("focus", e)
        }, !1), e.once("ready", b), e.once("destroy", function t() {
            e.off("canplay", g), e.off("playing", v), e.off("play", y), e.off("pause", m), e.off("ready", b), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = i(n(0)),
        o = i(n(2));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("mobile", function () {
        var e = this,
            t = r.default.util,
            n = e.root,
            i = function (e) {
                var t = r.default.util;
                return e.some(function (e) {
                    return "Function" === t.typeOf(e) ? e.call(void 0, navigator.userAgent) : "RegExp" === t.typeOf(e) ? e.test(navigator.userAgent) : "String" === t.typeOf(e) && navigator.userAgent.indexOf(e) > -1
                })
            }(e.config.whitelist);
        e.mobilePass = i;
        var a = e.config.centerBtn ? e.config.centerBtn : {},
            s = void 0,
            l = void 0,
            c = void 0,
            u = void 0;
        "img" === a.type ? l = r.default.util.createImgBtn("start", a.url.play, a.width, a.height) : (s = {
            pause: a.pausePath ? a.pausePath : "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
            play: a.playPath ? a.playPath : "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
        }, l = t.createDom("xg-start", '\n          <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.04,0.04)" d="' + s.pause + '"></path>\n          </svg>', {}, "xgplayer-start"), c = l.querySelector("path"), u = new o.default({
            from: s.play,
            to: s.pause,
            progress: function (e, t) {
                c.setAttribute("d", u.toSVGString(e))
            }
        }));
        var d = t.createDom("xg-enter", '<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>', {}, "xgplayer-enter"),
            p = d.querySelector(".xgplayer-enter-logo");
        n.appendChild(l), n.appendChild(d);
        var f = d.querySelector(".xgplayer-enter-tips"),
            h = new Image;
        h.onload = function () {
            f.style.display = "block"
        }, e.config.enterLogo && e.config.enterLogo.url && e.config.enterLogo.width && e.config.enterLogo.height ? (h.src = e.config.enterLogo.url, p.style.backgroundImage = 'url("' + e.config.enterLogo.url + '")', p.style.width = e.config.enterLogo.width + "px", p.style.height = e.config.enterLogo.height + "px", p.style.backgroundSize = e.config.enterLogo.width + "px " + e.config.enterLogo.height + "px", p.style.margin = "-" + e.config.enterLogo.height / 2 + "px auto auto -" + e.config.enterLogo.width / 2 + "px", f.style.margin = e.config.enterLogo.height - 6 + "px auto auto -62px") : h.src = t.getBgImage(p), e.config.enterTips && e.config.enterTips.background && (f.style.background = "" + e.config.enterTips.background), e.config.enterBg && (e.config.enterBg.url ? d.style.backgroundImage = 'url("' + e.config.enterBg.url + '")' : e.config.enterBg.color && (d.style.background = e.config.enterBg.color)), e.start(), i ? (e.video.addEventListener("touchend", function (r) {
            r.preventDefault(), t.hasClass(n, "xgplayer-inactive") ? e.emit("focus") : e.emit("blur"), e.config.closeVideoTouch || e.ended || (e.paused ? e.play() : e.pause())
        }, !1), l.addEventListener("touchend", function (r) {
            r.preventDefault(), t.hasClass(n, "xgplayer-nostart") ? (t.removeClass(n, "xgplayer-nostart"), t.addClass(n, "xgplayer-is-enter"), e.on("canplay", function () {
                t.removeClass(n, "xgplayer-is-enter")
            }), e.once("playing", function () {
                t.removeClass(n, "xgplayer-is-enter")
            }), e.play()) : e.paused ? e.play() : e.pause()
        }), e.on("play", function () {
            "img" === a.type ? l.style.backgroundImage = 'url("' + a.url.pause + '")' : u.reset(s.play, s.pause)
        }), e.on("pause", function () {
            "img" === a.type ? l.style.backgroundImage = 'url("' + a.url.play + '")' : u.reset(s.pause, s.play)
        })) : (t.addClass(n, "xgplayer-mobile-npassed"), e.once("ready", function () {
            e.video.controls = e.config.controls, e.video.controlsList = e.config.controlsList.join(" "), e.config.poster && (e.video.poster = e.config.poster)
        })), e.config.debug && function (e) {
            var t = {};
            Object.assign(t, {
                host: "127.0.0.1",
                port: 9090
            }, e);
            var n = document.createElement("script"),
                r = document.createElement("h4");
            r.style.cssText = "position:fixed;bottom:0;padding:10px;width:100%;background-color:#fff;text-align:center", r.textContent = "weinre --boundHost " + t.host + " --httpPort " + t.port + "\r\n 启动服务后，刷新页面", n.anonymous = !0, n.async = !0, n.src = "http://" + t.host + ":" + t.port + "/target/target-script-min.js#anonymous", n.onload = function () {
                r.parentNode.removeChild(r)
            }, document.body.appendChild(n), document.body.appendChild(r)
        }(e.config.debug)
    })
}, function (e, t, n) {
    "use strict";
    var r = a(n(0)),
        o = a(n(6)),
        i = a(n(7));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("logger", function () {
        var e = this,
            t = r.default.util;
        if (!0 !== e.config.noLog) {
            var n = function () {
                    e.video.played;
                    var t = l(e.logParams.played),
                        n = (new Date).getTime();
                    c();
                    var r = {
                        url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                        vid: e.config.vid,
                        bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                        bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                        bu_acu_t: e.logParams.bu_acu_t,
                        pt: e.logParams.pt,
                        vt: e.logParams.vt,
                        vd: 1e3 * e.logParams.vd,
                        watch_dur: parseFloat((1e3 * t).toFixed(3)),
                        cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3)),
                        et: n
                    };
                    window.__xigua_log_sdk__("c", r)
                },
                a = function () {
                    e.video.played;
                    var t = l(e.logParams.played),
                        n = (new Date).getTime();
                    c();
                    var r = {
                        url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                        vid: e.config.vid,
                        bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                        bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                        bu_acu_t: e.logParams.bu_acu_t,
                        pt: e.logParams.pt,
                        vt: e.logParams.vt,
                        vd: 1e3 * e.logParams.vd,
                        watch_dur: parseFloat((1e3 * t).toFixed(3)),
                        cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3)),
                        lt: n
                    };
                    window.__xigua_log_sdk__("d", r)
                },
                s = function (t) {
                    e.video.played;
                    var n = l(e.logParams.played);
                    c();
                    var r = (new Date).getTime();
                    if (!(e.logParams.lastErrLog && r - e.logParams.lastErrLog <= 3e3)) {
                        e.logParams.lastErrLog = r;
                        var o = {
                            url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                            vid: e.config.vid,
                            bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                            bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                            bu_acu_t: e.logParams.bu_acu_t,
                            pt: e.logParams.pt,
                            vt: e.logParams.vt,
                            vd: 1e3 * e.logParams.vd,
                            watch_dur: parseFloat((1e3 * n).toFixed(3)),
                            err_msg: t.errd.msg,
                            line: t.errd.line,
                            et: r,
                            cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3))
                        };
                        if (e.logParams.nologFunc && e.logParams.nologFunc(e)) return !0;
                        window.__xigua_log_sdk__("e", o)
                    }
                };
            window.__xigua_log_sdk__ || (window.__xigua_log_sdk__ = new i.default("tracker"), window.__xigua_log_sdk__.init({
                app_id: 1300,
                channel: "cn",
                log: !1,
                disable_sdk_monitor: !0
            }), window.__xigua_log_sdk__("config", {
                evtParams: {
                    log_type: "logger",
                    page_url: document.URL,
                    domain: window.location.host,
                    pver: e.version,
                    ua: navigator.userAgent.toLowerCase()
                },
                disable_auto_pv: !0
            }), window.__xigua_log_sdk__.start()), e.config.uid && window.__xigua_log_sdk__("config", {
                user_unique_id: e.config.uid
            });
            var l = function () {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = [], n = 0; n < e.length; n++)
                        if (!(!e[n].end || e[n].begin < 0 || e[n].end < 0 || e[n].end < e[n].begin))
                            if (t.length < 1) t.push({
                                begin: e[n].begin,
                                end: e[n].end
                            });
                            else
                                for (var r = 0; r < t.length; r++) {
                                    var o = e[n].begin,
                                        i = e[n].end;
                                    if (i < t[r].begin) {
                                        t.splice(r, 0, {
                                            begin: o,
                                            end: i
                                        });
                                        break
                                    }
                                    if (!(o > t[r].end)) {
                                        var a = t[r].begin,
                                            s = t[r].end;
                                        t[r].begin = Math.min(o, a), t[r].end = Math.max(i, s);
                                        break
                                    }
                                    if (r > t.length - 2) {
                                        t.push({
                                            begin: o,
                                            end: i
                                        });
                                        break
                                    }
                                }
                    for (var l = 0, c = 0; c < t.length; c++) l += t[c].end - t[c].begin;
                    return l
                },
                c = function () {
                    e.logParams.pt && e.logParams.vt || (e.logParams.pt = (new Date).getTime(), e.logParams.vt = e.logParams.pt), e.logParams.pt > e.logParams.vt && (e.logParams.pt = e.logParams.vt)
                },
                u = function (n) {
                    if (t.hasClass(e.root, "xgplayer-is-enter")) {
                        var r = (new Date).getTime(),
                            o = {
                                url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                                vid: e.config.vid,
                                pt: e.logParams.pt,
                                lt: r
                            };
                        window.__xigua_log_sdk__("b", o)
                    } else if (t.hasClass(e.root, "xgplayer-playing")) {
                        var i = l(e.logParams.played),
                            a = (new Date).getTime();
                        c();
                        var s = {
                            url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                            vid: e.config.vid,
                            bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                            bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                            bu_acu_t: e.logParams.bu_acu_t,
                            pt: e.logParams.pt,
                            vt: e.logParams.vt,
                            vd: 1e3 * e.logParams.vd,
                            watch_dur: parseFloat((1e3 * i).toFixed(3)),
                            cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3)),
                            lt: a
                        };
                        window.__xigua_log_sdk__("d", s)
                    }
                };
            "pc" === o.default.device ? window.addEventListener("beforeunload", u, !1) : "mobile" === o.default.device && window.addEventListener("pagehide", u, !1), e.on("routechange", u), e.on("ended", n), e.on("urlchange", a), e.on("error", s), e.once("destroy", function t() {
                "pc" === o.default.device ? window.removeEventListener("beforeunload", u) : "mobile" === o.default.device && window.removeEventListener("pagehide", u), e.off("routechange", u), e.off("ended", n), e.off("urlchange", a), e.off("error", s), e.off("destroy", t)
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("localPreview", function () {
        var e = this,
            t = i.default.util,
            n = t.createDom("xg-preview", '<input type="file">', {}, "xgplayer-preview"),
            r = n.querySelector("input");
        e.config.preview && e.config.preview.uploadEl && (e.config.preview.uploadEl.appendChild(n), r.onchange = function () {
            e.uploadFile = r.files[0];
            var n = URL.createObjectURL(e.uploadFile);
            t.hasClass(e.root, "xgplayer-nostart") ? (e.config.url = n, e.start()) : (e.src = n, e.play())
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("loading", function () {
        var e = i.default.util.createDom("xg-loading", '\n    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n      <path d="M100,50A50,50,0,1,1,50,0"></path>\n    </svg>\n    ', {}, "xgplayer-loading");
        this.root.appendChild(e)
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0);
    ((r = o) && r.__esModule ? r : {
        default: r
    }).default.install("i18n", function () {
        var e = this,
            t = {},
            n = e.constructor.util;
        t.en = {
            HAVE_NOTHING: "There is no information on whether audio/video is ready",
            HAVE_METADATA: "audio/video metadata is ready ",
            HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
            HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
            HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
            NETWORK_EMPTY: "Audio/video has not been initialized",
            NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
            NETWORK_LOADING: "The browser is downloading the data",
            NETWORK_NO_SOURCE: "No audio/video source was found",
            MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
            MEDIA_ERR_NETWORK: "An error occurred while downloading",
            MEDIA_ERR_DECODE: "An error occurred while decoding",
            MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
            REPLAY: "Replay",
            ERROR: "network is offline"
        }, t["zh-cn"] = {
            HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
            HAVE_METADATA: "音频/视频的元数据已就绪",
            HAVE_CURRENT_DATA: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
            HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
            HAVE_ENOUGH_DATA: "可用数据足以开始播放",
            NETWORK_EMPTY: "音频/视频尚未初始化",
            NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
            NETWORK_LOADING: "浏览器正在下载数据",
            NETWORK_NO_SOURCE: "未找到音频/视频来源",
            MEDIA_ERR_ABORTED: "取回过程被用户中止",
            MEDIA_ERR_NETWORK: "当下载时发生错误",
            MEDIA_ERR_DECODE: "当解码时发生错误",
            MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
            REPLAY: "重播",
            ERROR: "网络连接似乎出现了问题"
        }, Object.defineProperty(e, "lang", {
            get: function () {
                return t[e.config.lang] || t.en
            },
            set: function (e) {
                "Object" === n.typeOf(e) && Object.keys(e).forEach(function (n) {
                    t[n] = e[n]
                })
            }
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("fullscreen", function () {
        var e = this,
            t = i.default.util,
            n = "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
            r = "M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z",
            o = t.createDom("xg-fullscreen", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.03 0.03)" d="' + r + '"></path>\n        </svg></xg-icon>', {}, "xgplayer-fullscreen"),
            a = e.config.lang && "zh-cn" === e.config.lang ? "全屏" : "Full screen",
            s = e.config.lang && "zh-cn" === e.config.lang ? "退出全屏" : "Exit full screen",
            l = e.controls,
            c = e.root,
            u = t.createDom("xg-tips", a, {}, "xgplayer-tips"),
            d = o.querySelector("path");
        o.appendChild(u);
        l.appendChild(o), ["click", "touchend"].forEach(function (r) {
            o.addEventListener(r, function (r) {
                var o, i;
                r.preventDefault(), r.stopPropagation(), t.hasClass(c, "xgplayer-fullscreen-active") || t.hasClass(c, "xgplayer-is-fullscreen") ? function (n) {
                    var r = t.findDom(e.controls, "xg-cssfullscreen"),
                        o = "M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z";
                    if (r) {
                        var i = t.findDom(r, "xg-tips"),
                            s = r.querySelector("path");
                        r.style.display = "block", i.textContent = e.config.lang && "zh-cn" === e.config.lang ? "样式全屏" : "Full screen", s.setAttribute("d", o)
                    }
                    t.removeClass(n, "xgplayer-cssfullscreen-active"), d.setAttribute("d", o), u.textContent = a, document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : t.removeClass(n, "xgplayer-fullscreen-active")
                }(c) : (o = c, (i = t.findDom(e.controls, "xg-cssfullscreen")) && (i.style.display = "none"), d.setAttribute("d", n), u.textContent = s, o.requestFullscreen ? o.requestFullscreen() : o.mozRequestFullScreen ? o.mozRequestFullScreen() : o.webkitRequestFullscreen ? o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.video.webkitSupportsFullscreen ? e.video.webkitEnterFullscreen() : o.msRequestFullscreen ? o.msRequestFullscreen() : t.addClass(o, "xgplayer-fullscreen-active"))
            })
        }), e.video.addEventListener("webkitendfullscreen", function () {
            e.emit("exitFullscreen"), d.setAttribute("d", r)
        });
        var p = function (o) {
            var i = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            i && i === c ? (t.addClass(c, "xgplayer-is-fullscreen"), d.setAttribute("d", n), u.textContent = s, e.emit("requestFullscreen")) : (t.removeClass(c, "xgplayer-is-fullscreen"), d.setAttribute("d", r), u.textContent = a, e.emit("exitFullscreen"))
        };
        o.addEventListener("mouseenter", function (e) {
            e.preventDefault(), e.stopPropagation(), u.style.left = "50%";
            var t = u.getBoundingClientRect(),
                n = c.getBoundingClientRect();
            t.right > n.right && (u.style.left = -t.right + n.right + 16 + "px")
        }), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
            document.addEventListener(e, p)
        }), e.once("destroy", function t() {
            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
                document.removeEventListener(e, p)
            }), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("__flex__", function () {
        var e = i.default.util.createDom("xg-placeholder", "", {}, "xgplayer-placeholder");
        this.controls.appendChild(e)
    })
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("error", function () {
        var e = this,
            t = i.default.util,
            n = t.createDom("xg-error", '<em class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</em>', {}, "xgplayer-error");
        e.root.appendChild(n);
        var r = n.querySelector(".xgplayer-error-text"),
            o = null;

        function a() {
            e.controls.style.display = "none", e.error ? r.innerHTML = e.error : e.config.lang && "zh-cn" === e.config.lang ? r.innerHTML = e.lang.ERROR + '，请<span class="xgplayer-error-refresh">刷新</span>试试' : r.innerHTML = e.lang.ERROR + '，please try to <span class="xgplayer-error-refresh">refresh</span>', t.addClass(e.root, "xgplayer-is-error"), (o = n.querySelector(".xgplayer-error-refresh")) && ["touchend", "click"].forEach(function (t) {
                o.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var n = t.target || t.srcElement;
                    n && "span" === n.tagName.toLocaleLowerCase() && (e.controls.style.display = "flex", e.reload())
                })
            })
        }
        e.on("error", a), e.once("destroy", function t() {
            e.off("error", a), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = a(n(0)),
        o = n(57),
        i = a(n(58));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("download", function () {
        var e = this;
        if (this.config.download) {
            var t = e.root,
                n = r.default.util,
                a = n.createDom("xgplayer-download", '<xg-icon class="xgplayer-download-img"></xg-icon>', {}, "xgplayer-download");
            e.controls.appendChild(a);
            var s = e.config.lang && "zh-cn" === e.config.lang ? "下载" : "Download",
                l = n.createDom("xg-tips", s, {}, "xgplayer-tips");
            a.appendChild(l), e.download = function () {
                var t = (0, o.getAbsoluteURL)(e.config.url);
                (0, i.default)(t)
            }, a.addEventListener("click", function (t) {
                t.stopPropagation(), e.download()
            }), a.addEventListener("mouseenter", function (e) {
                e.preventDefault(), e.stopPropagation(), l.style.left = "50%";
                var n = l.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                n.right > r.right && (l.style.left = -n.right + r.right + 16 + "px")
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getAbsoluteURL = function (e) {
        if (!e.match(/^https?:\/\//)) {
            var t = document.createElement("div");
            t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i;
    "function" == typeof Symbol && Symbol.iterator;
    o = [], void 0 === (i = "function" == typeof (r = function () {
        return function e(t, n, r) {
            var o, i, a = window,
                s = "application/octet-stream",
                l = r || s,
                c = t,
                u = !n && !r && c,
                d = document.createElement("a"),
                p = function (e) {
                    return String(e)
                },
                f = a.Blob || a.MozBlob || a.WebKitBlob || p,
                h = n || "download";
            if (f = f.call ? f.bind(a) : Blob, "true" === String(this) && (l = (c = [c, l])[0], c = c[1]), u && u.length < 2048 && (h = u.split("/").pop().split("?")[0], d.href = u, -1 !== d.href.indexOf(u))) {
                var g = new XMLHttpRequest;
                return g.open("GET", u, !0), g.responseType = "blob", g.onload = function (t) {
                    e(t.target.response, h, s)
                }, setTimeout(function () {
                    g.send()
                }, 0), g
            }
            if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)) {
                if (!(c.length > 2096103.424 && f !== p)) return navigator.msSaveBlob ? navigator.msSaveBlob(b(c), h) : x(c);
                c = b(c), l = c.type || s
            } else if (/([\x80-\xff])/.test(c)) {
                for (var v = 0, y = new Uint8Array(c.length), m = y.length; v < m; ++v) y[v] = c.charCodeAt(v);
                c = new f([y], {
                    type: l
                })
            }

            function b(e) {
                for (var t = e.split(/[:;,]/), n = t[1], r = "base64" == t[2] ? atob : decodeURIComponent, o = r(t.pop()), i = o.length, a = 0, s = new Uint8Array(i); a < i; ++a) s[a] = o.charCodeAt(a);
                return new f([s], {
                    type: n
                })
            }

            function x(e, t) {
                if ("download" in d) return d.href = e, d.setAttribute("download", h), d.className = "download-js-link", d.innerHTML = "downloading...", d.style.display = "none", document.body.appendChild(d), setTimeout(function () {
                    d.click(), document.body.removeChild(d), !0 === t && setTimeout(function () {
                        a.URL.revokeObjectURL(d.href)
                    }, 250)
                }, 66), !0;
                if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, s)), window.open(e) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = e), !0;
                var n = document.createElement("iframe");
                document.body.appendChild(n), !t && /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, s)), n.src = e, setTimeout(function () {
                    document.body.removeChild(n)
                }, 333)
            }
            if (o = c instanceof f ? c : new f([c], {
                    type: l
                }), navigator.msSaveBlob) return navigator.msSaveBlob(o, h);
            if (a.URL) x(a.URL.createObjectURL(o), !0);
            else {
                if ("string" == typeof o || o.constructor === p) try {
                    return x("data:" + l + ";base64," + a.btoa(o))
                } catch (e) {
                    return x("data:" + l + "," + encodeURIComponent(o))
                }(i = new FileReader).onload = function (e) {
                    x(this.result)
                }, i.readAsDataURL(o)
            }
            return !0
        }
    }) ? r.apply(t, o) : r) || (e.exports = i)
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("definition", function () {
        var e = this,
            t = i.default.util,
            n = i.default.sniffer,
            r = t.createDom("xg-definition", "", {
                tabindex: 3
            }, "xgplayer-definition"),
            o = e.controls;
        "mobile" === n.device && (e.config.definitionActive = "click");
        var a = [];

        function s() {
            var n = ["<ul>"],
                i = e.config.url,
                s = document.createElement("a");
            e.switchURL ? ["mp4", "hls", "flv", "dash"].every(function (t) {
                return !e[t] || (s.href = e[t].url, i = s.href, !1)
            }) : i = e.currentSrc || e.src, a.forEach(function (t) {
                s.href = t.url, e.dash ? n.push("<li url='" + t.url + "' cname='" + t.name + "' class='" + (t.selected ? "definition" : "") + "'>" + t.name + "</li>") : n.push("<li url='" + t.url + "' cname='" + t.name + "' class='" + (s.href === i ? "definition" : "") + "'>" + t.name + "</li>")
            });
            var l = a.filter(function (t) {
                return s.href = t.url, e.dash ? !0 === t.selected : s.href === i
            });
            n.push("</ul><p class='name'>" + (l[0] || {
                name: ""
            }).name + "</p>");
            var c = o.querySelector(".xgplayer-definition");
            if (c) {
                c.innerHTML = n.join("");
                var u = c.querySelector(".name");
                e.config.definitionActive && "hover" !== e.config.definitionActive || u.addEventListener("mouseenter", function (n) {
                    n.preventDefault(), n.stopPropagation(), t.addClass(e.root, "xgplayer-definition-active"), c.focus()
                })
            } else {
                r.innerHTML = n.join("");
                var d = r.querySelector(".name");
                e.config.definitionActive && "hover" !== e.config.definitionActive || d.addEventListener("mouseenter", function (n) {
                    n.preventDefault(), n.stopPropagation(), t.addClass(e.root, "xgplayer-definition-active"), r.focus()
                }), o.appendChild(r)
            }
        }

        function l(n) {
            (a = n) && a instanceof Array && a.length > 1 && (t.addClass(e.root, "xgplayer-is-definition"), e.on("canplay", s))
        }
        e.on("resourceReady", l), ["touchend", "click"].forEach(function (o) {
            r.addEventListener(o, function (o) {
                o.preventDefault(), o.stopPropagation();
                var i = o.target || o.srcElement,
                    s = document.createElement("a");
                if (i && "li" === i.tagName.toLocaleLowerCase()) {
                    if (e.emit("beforeDefinitionChange", s.href), Array.prototype.forEach.call(i.parentNode.childNodes, function (e) {
                            t.removeClass(e, "definition")
                        }), e.dash && a.forEach(function (e) {
                            e.selected = !1, e.name === i.innerHTML && (e.selected = !0)
                        }), t.addClass(i, "definition"), i.parentNode.nextSibling.innerHTML = "" + i.getAttribute("cname"), s.href = i.getAttribute("url"), e.switchURL) {
                        var l = document.createElement("a");
                        ["mp4", "hls", "flv", "dash"].every(function (t) {
                            return !e[t] || (l = e[t].url, !1)
                        }), l.href === s.href || e.ended || e.switchURL(s.href)
                    } else if (s.href !== e.currentSrc) {
                        var c = e.currentTime,
                            u = e.paused;
                        e.ended || (e.src = s.href, e.once("canplay", function () {
                            e.currentTime = c, u || e.play()
                        }))
                    }
                    e.emit("definitionChange", s.href), "mobile" === n.device && t.removeClass(e.root, "xgplayer-definition-active")
                } else "click" !== e.config.definitionActive || !i || "p" !== i.tagName.toLocaleLowerCase() && "em" !== i.tagName.toLocaleLowerCase() || (t.addClass(e.root, "xgplayer-definition-active"), r.focus());
                e.emit("focus")
            }, !1)
        }), r.addEventListener("mouseleave", function (n) {
            n.preventDefault(), n.stopPropagation(), t.removeClass(e.root, "xgplayer-definition-active")
        }), e.once("destroy", function t() {
            e.off("canplay", s), e.off("resourceReady", l), e.off("destroy", t)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = i(n(0)),
        o = i(n(61));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("danmu", function () {
        var e = this;
        if (e.config.danmu) {
            var t = r.default.util.createDom("xg-bullet", "", {}, "xgplayer-bullet");
            e.root.appendChild(t), t.style.height = "100%";
            var n = r.default.util.deepCopy({
                container: t,
                player: e.video,
                comments: [],
                area: {
                    start: 0,
                    end: 1
                }
            }, e.config.danmu);
            e.once("complete", function () {
                var i = new o.default(n);
                r.default.util.addClass(t, "xgplayer-has-bullet"), e.config.danmu.closeDefaultBtn || (e.bulletBtn = r.default.util.copyDom(i.bulletBtn.createSwitch(!0)), e.controls.appendChild(e.bulletBtn), ["click", "touchend"].forEach(function (n) {
                    e.bulletBtn.addEventListener(n, function (n) {
                        n.preventDefault(), n.stopPropagation(), r.default.util.toggleClass(e.bulletBtn, "danmu-switch-active"), r.default.util.hasClass(e.bulletBtn, "danmu-switch-active") ? (r.default.util.addClass(t, "xgplayer-has-bullet"), e.once("timeupdate", function () {
                            i.start()
                        })) : (r.default.util.removeClass(t, "xgplayer-has-bullet"), i.stop())
                    }, !1)
                }), e.on("pause", function () {
                    r.default.util.hasClass(e.bulletBtn, "danmu-switch-active") && i.pause()
                }), e.on("play", function () {
                    r.default.util.hasClass(e.bulletBtn, "danmu-switch-active") && i.play()
                }), e.on("seeked", function () {
                    r.default.util.hasClass(e.bulletBtn, "danmu-switch-active") && (i.stop(), i.start())
                })), e.danmu = i
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n, r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        window, i = function () {
            return function (e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = e, n.c = t, n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function (e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == (void 0 === e ? "undefined" : a(e)) && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, function (t) {
                            return e[t]
                        }.bind(null, o));
                    return r
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 2)
            }([function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = {
                    createDom: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            o = document.createElement(e);
                        return o.className = r, o.innerHTML = t, Object.keys(n).forEach(function (t) {
                            var r = t,
                                i = n[t];
                            "video" === e || "audio" === e ? i && o.setAttribute(r, i) : o.setAttribute(r, i)
                        }), o
                    },
                    hasClass: function (e, t) {
                        return e.classList ? Array.prototype.some.call(e.classList, function (e) {
                            return e === t
                        }) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
                    },
                    addClass: function (e, t) {
                        e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
                            t && e.classList.add(t)
                        }) : r.hasClass(e, t) || (e.className += " " + t)
                    },
                    removeClass: function (e, t) {
                        e.classList ? t.split(/\s+/g).forEach(function (t) {
                            e.classList.remove(t)
                        }) : r.hasClass(e, t) && t.split(/\s+/g).forEach(function (t) {
                            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                            e.className = e.className.replace(n, " ")
                        })
                    },
                    toggleClass: function (e, t) {
                        t.split(/\s+/g).forEach(function (t) {
                            r.hasClass(e, t) ? r.removeClass(e, t) : r.addClass(e, t)
                        })
                    },
                    findDom: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            t = arguments[1],
                            n = void 0;
                        try {
                            n = e.querySelector(t)
                        } catch (r) {
                            t.startsWith("#") && (n = e.getElementById(t.slice(1)))
                        }
                        return n
                    },
                    deepCopy: function (e, t) {
                        if ("Object" === r.typeOf(t) && "Object" === r.typeOf(e)) return Object.keys(t).forEach(function (n) {
                            "Object" !== r.typeOf(t[n]) || t[n] instanceof Node ? "Array" === r.typeOf(t[n]) ? e[n] = "Array" === r.typeOf(e[n]) ? e[n].concat(t[n]) : t[n] : e[n] = t[n] : e[n] ? r.deepCopy(e[n], t[n]) : e[n] = t[n]
                        }), e
                    },
                    typeOf: function (e) {
                        return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]
                    },
                    copyDom: function (e) {
                        if (e && 1 === e.nodeType) {
                            var t = document.createElement(e.tagName);
                            return Array.prototype.forEach.call(e.attributes, function (e) {
                                t.setAttribute(e.name, e.value)
                            }), e.innerHTML && (t.innerHTML = e.innerHTML), t
                        }
                        return ""
                    },
                    formatTime: function (e) {
                        var t = Math.floor(e);
                        return 1e3 * t + (e - t)
                    }
                };
                t.default = r, e.exports = t.default
            }, function (e, t, n) {
                var r = n(13)();
                e.exports = function (e) {
                    return e !== r && null !== e
                }
            }, function (e, t, n) {
                e.exports = n(3)
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = (r = n(4)) && r.__esModule ? r : {
                    default: r
                };
                n(25), t.default = o.default, e.exports = t.default
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = s(n(5)),
                    i = s(n(21)),
                    a = s(n(0));

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var l = function () {
                    function e(t) {
                        var n = this;
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.config = a.default.deepCopy({
                            overlap: !1,
                            area: {
                                start: 0,
                                end: 1
                            },
                            live: !1,
                            comments: [],
                            direction: "r2l"
                        }, t), this.hideArr = [], (0, o.default)(this);
                        var r = this;
                        if (this.config.comments.forEach(function (e) {
                                e.duration = e.duration < 5e3 ? 5e3 : e.duration, e.mode || (e.mode = "scroll")
                            }), !this.config.container || 1 !== this.config.container.nodeType) return this.emit("error", "container id can't be empty"), !1;
                        if (this.container = this.config.container, this.config.containerStyle) {
                            var s = this.config.containerStyle;
                            Object.keys(s).forEach(function (e) {
                                r.container.style[e] = s[e]
                            })
                        }
                        this.live = this.config.live, this.player = this.config.player, this.direction = this.config.direction, a.default.addClass(this.container, "danmu"), this.bulletBtn = new i.default(this), ["touchend", "click", "dblclick"].forEach(function (e) {
                            n.container.addEventListener(e, function (t) {
                                if (t.preventDefault(), t.stopPropagation(), r.player) {
                                    var n = void 0;
                                    document.createEvent ? (n = document.createEvent("Event")).initEvent(e, !0, !0) : n = new Event(e), r.player.dispatchEvent(n)
                                }
                            }, !1)
                        }), this.emit("ready")
                    }
                    return r(e, [{
                        key: "start",
                        value: function () {
                            this.bulletBtn.main.start()
                        }
                    }, {
                        key: "pause",
                        value: function () {
                            this.bulletBtn.main.pause()
                        }
                    }, {
                        key: "play",
                        value: function () {
                            this.bulletBtn.main.play()
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            this.bulletBtn.main.stop()
                        }
                    }, {
                        key: "sendComment",
                        value: function (e) {
                            e && e.id && e.duration && (e.el || e.txt) && (e.duration = e.duration < 5e3 ? 5e3 : e.duration, this.bulletBtn.main.data.push(e))
                        }
                    }, {
                        key: "setCommentID",
                        value: function (e, t) {
                            var n = this.container.getBoundingClientRect();
                            e && t && (this.bulletBtn.main.data.some(function (n) {
                                return n.id === e && (n.id = t, !0)
                            }), this.bulletBtn.main.queue.some(function (r) {
                                return r.id === e && (r.id = t, r.pauseMove(n), r.startMove(n), !0)
                            }))
                        }
                    }, {
                        key: "setCommentDuration",
                        value: function (e, t) {
                            var n = this.container.getBoundingClientRect();
                            e && t && (t = t < 5e3 ? 5e3 : t, this.bulletBtn.main.data.some(function (n) {
                                return n.id === e && (n.duration = t, !0)
                            }), this.bulletBtn.main.queue.some(function (r) {
                                return r.id === e && (r.duration = t, r.pauseMove(n), r.startMove(n), !0)
                            }))
                        }
                    }, {
                        key: "setAllDuration",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
                                t = arguments[1],
                                n = this.container.getBoundingClientRect();
                            t && (t = t < 5e3 ? 5e3 : t, this.bulletBtn.main.data.forEach(function (n) {
                                e === n.mode && (n.duration = t)
                            }), this.bulletBtn.main.queue.forEach(function (r) {
                                e === r.mode && (r.duration = t, r.pauseMove(n), r.startMove(n))
                            }))
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";
                            this.hideArr.indexOf(e) < 0 && this.hideArr.push(e), this.bulletBtn.main.queue.filter(function (t) {
                                return e === t.mode || "color" === e && t.color
                            }).forEach(function (e) {
                                return e.remove()
                            })
                        }
                    }, {
                        key: "show",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
                                t = this.hideArr.indexOf(e);
                            t > -1 && this.hideArr.splice(t, 1)
                        }
                    }, {
                        key: "setDirection",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "r2l";
                            this.emit("changeDirection", e)
                        }
                    }]), e
                }();
                t.default = l, e.exports = t.default
            }, function (e, t, n) {
                var r, o, i, s, l, c, u, d = n(6),
                    p = n(20),
                    f = Function.prototype.apply,
                    h = Function.prototype.call,
                    g = Object.create,
                    v = Object.defineProperty,
                    y = Object.defineProperties,
                    m = Object.prototype.hasOwnProperty,
                    b = {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    };
                o = function (e, t) {
                    var n, o;
                    return p(t), o = this, r.call(this, e, n = function () {
                        i.call(o, e, n), f.call(t, this, arguments)
                    }), n.__eeOnceListener__ = t, this
                }, l = {
                    on: r = function (e, t) {
                        var n;
                        return p(t), m.call(this, "__ee__") ? n = this.__ee__ : (n = b.value = g(null), v(this, "__ee__", b), b.value = null), n[e] ? "object" == a(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
                    },
                    once: o,
                    off: i = function (e, t) {
                        var n, r, o, i;
                        if (p(t), !m.call(this, "__ee__")) return this;
                        if (!(n = this.__ee__)[e]) return this;
                        if ("object" == a(r = n[e]))
                            for (i = 0; o = r[i]; ++i) o !== t && o.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[i ? 0 : 1] : r.splice(i, 1));
                        else r !== t && r.__eeOnceListener__ !== t || delete n[e];
                        return this
                    },
                    emit: s = function (e) {
                        var t, n, r, o, i;
                        if (m.call(this, "__ee__") && (o = this.__ee__[e]))
                            if ("object" == (void 0 === o ? "undefined" : a(o))) {
                                for (n = arguments.length, i = new Array(n - 1), t = 1; t < n; ++t) i[t - 1] = arguments[t];
                                for (o = o.slice(), t = 0; r = o[t]; ++t) f.call(r, this, i)
                            } else switch (arguments.length) {
                                case 1:
                                    h.call(o, this);
                                    break;
                                case 2:
                                    h.call(o, this, arguments[1]);
                                    break;
                                case 3:
                                    h.call(o, this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    for (n = arguments.length, i = new Array(n - 1), t = 1; t < n; ++t) i[t - 1] = arguments[t];
                                    f.call(o, this, i)
                            }
                    }
                }, c = {
                    on: d(r),
                    once: d(o),
                    off: d(i),
                    emit: d(s)
                }, u = y({}, c), e.exports = t = function (e) {
                    return null == e ? g(u) : y(Object(e), c)
                }, t.methods = l
            }, function (e, t, n) {
                var r = n(7),
                    o = n(15),
                    i = n(16),
                    a = n(17);
                (e.exports = function (e, t) {
                    var n, i, s, l, c;
                    return arguments.length < 2 || "string" != typeof e ? (l = t, t = e, e = null) : l = arguments[2], null == e ? (n = s = !0, i = !1) : (n = a.call(e, "c"), i = a.call(e, "e"), s = a.call(e, "w")), c = {
                        value: t,
                        configurable: n,
                        enumerable: i,
                        writable: s
                    }, l ? r(o(l), c) : c
                }).gs = function (e, t, n) {
                    var s, l, c, u;
                    return "string" != typeof e ? (c = n, n = t, t = e, e = null) : c = arguments[3], null == t ? t = void 0 : i(t) ? null == n ? n = void 0 : i(n) || (c = n, n = void 0) : (c = t, t = n = void 0), null == e ? (s = !0, l = !1) : (s = a.call(e, "c"), l = a.call(e, "e")), u = {
                        get: t,
                        set: n,
                        configurable: s,
                        enumerable: l
                    }, c ? r(o(c), u) : u
                }
            }, function (e, t, n) {
                e.exports = n(8)() ? Object.assign : n(9)
            }, function (e, t, n) {
                e.exports = function () {
                    var e, t = Object.assign;
                    return "function" == typeof t && (t(e = {
                        foo: "raz"
                    }, {
                        bar: "dwa"
                    }, {
                        trzy: "trzy"
                    }), e.foo + e.bar + e.trzy === "razdwatrzy")
                }
            }, function (e, t, n) {
                var r = n(10),
                    o = n(14),
                    i = Math.max;
                e.exports = function (e, t) {
                    var n, a, s, l = i(arguments.length, 2);
                    for (e = Object(o(e)), s = function (r) {
                            try {
                                e[r] = t[r]
                            } catch (e) {
                                n || (n = e)
                            }
                        }, a = 1; a < l; ++a) t = arguments[a], r(t).forEach(s);
                    if (void 0 !== n) throw n;
                    return e
                }
            }, function (e, t, n) {
                e.exports = n(11)() ? Object.keys : n(12)
            }, function (e, t, n) {
                e.exports = function () {
                    try {
                        return Object.keys("primitive"), !0
                    } catch (e) {
                        return !1
                    }
                }
            }, function (e, t, n) {
                var r = n(1),
                    o = Object.keys;
                e.exports = function (e) {
                    return o(r(e) ? Object(e) : e)
                }
            }, function (e, t, n) {
                e.exports = function () {}
            }, function (e, t, n) {
                var r = n(1);
                e.exports = function (e) {
                    if (!r(e)) throw new TypeError("Cannot use null or undefined");
                    return e
                }
            }, function (e, t, n) {
                var r = n(1),
                    o = Array.prototype.forEach,
                    i = Object.create;
                e.exports = function (e) {
                    var t = i(null);
                    return o.call(arguments, function (e) {
                        r(e) && function (e, t) {
                            var n;
                            for (n in e) t[n] = e[n]
                        }(Object(e), t)
                    }), t
                }
            }, function (e, t, n) {
                e.exports = function (e) {
                    return "function" == typeof e
                }
            }, function (e, t, n) {
                e.exports = n(18)() ? String.prototype.contains : n(19)
            }, function (e, t, n) {
                var r = "razdwatrzy";
                e.exports = function () {
                    return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo")
                }
            }, function (e, t, n) {
                var r = String.prototype.indexOf;
                e.exports = function (e) {
                    return r.call(this, e, arguments[1]) > -1
                }
            }, function (e, t, n) {
                e.exports = function (e) {
                    if ("function" != typeof e) throw new TypeError(e + " is not a function");
                    return e
                }
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = a(n(0)),
                    i = a(n(22));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var s = function () {
                    function e(t) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.danmu = t, this.main = new i.default(t), t.config.defaultOff || this.main.start()
                    }
                    return r(e, [{
                        key: "createSwitch",
                        value: function () {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return this.switchBtn = o.default.createDom("dk-switch", '<span class="txt">弹</span>', {}, "danmu-switch " + (e ? "danmu-switch-active" : "")), this.switchBtn
                        }
                    }]), e
                }();
                t.default = s, e.exports = t.default
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = s(n(23)),
                    i = s(n(24)),
                    a = s(n(0));

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var l = function () {
                    function e(t) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.danmu = t, this.container = t.container, this.channel = new o.default(t), this.data = [].concat(t.config.comments), this.queue = [], this.timer = null, this.retryTimer = null, this.interval = 2e3, this.status = "idle", t.on("bullet_remove", this.updateQueue.bind(this));
                        var n = this;
                        this.danmu.on("changeDirection", function (e) {
                            n.danmu.direction = e
                        })
                    }
                    return r(e, [{
                        key: "updateQueue",
                        value: function (e) {
                            var t = this;
                            t.queue.some(function (n, r) {
                                return n.id === e.bullet.id && (t.queue.splice(r, 1), !0)
                            })
                        }
                    }, {
                        key: "init",
                        value: function (e, t) {
                            t || (t = this), t.data.sort(function (e, t) {
                                return e.start - t.start
                            }), t.retryTimer || (t.retryTimer = setInterval(function () {
                                t.readData(), t.dataHandle()
                            }, t.interval - 1e3))
                        }
                    }, {
                        key: "start",
                        value: function () {
                            this.status = "playing", this.queue = [], this.container.innerHTML = "", this.channel.resetWithCb(this.init, this)
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            this.status = "closed", clearInterval(this.retryTimer), this.retryTimer = null, this.channel.reset(), this.queue = [], this.container.innerHTML = ""
                        }
                    }, {
                        key: "play",
                        value: function () {
                            this.status = "playing";
                            var e = this.channel.channels,
                                t = this.danmu.container.getBoundingClientRect();
                            e && e.length > 0 && ["scroll", "top", "bottom"].forEach(function (n) {
                                for (var r = 0; r < e.length; r++) e[r].queue[n].forEach(function (e) {
                                    e.resized || (e.startMove(t), e.resized = !0)
                                });
                                for (var o = 0; o < e.length; o++) e[o].queue[n].forEach(function (e) {
                                    e.resized = !1
                                })
                            })
                        }
                    }, {
                        key: "pause",
                        value: function () {
                            this.status = "paused";
                            var e = this.channel.channels,
                                t = this.danmu.container.getBoundingClientRect();
                            e && e.length > 0 && ["scroll", "top", "bottom"].forEach(function (n) {
                                for (var r = 0; r < e.length; r++) e[r].queue[n].forEach(function (e) {
                                    e.pauseMove(t)
                                })
                            })
                        }
                    }, {
                        key: "dataHandle",
                        value: function () {
                            var e = this;
                            "paused" !== this.status && "closed" !== this.status && e.queue.length && e.queue.forEach(function (t) {
                                "waiting" !== t.status && "paused" !== t.status || t.startMove(e.channel.containerPos)
                            })
                        }
                    }, {
                        key: "readData",
                        value: function () {
                            var e = this,
                                t = this.danmu,
                                n = 0;
                            t.player && t.player.currentTime && (n = a.default.formatTime(t.player.currentTime));
                            var r = void 0,
                                o = e.interval,
                                s = e.channel,
                                l = void 0;
                            t.player ? (l = e.data.filter(function (t) {
                                return !t.start && e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0) && (t.start = n), e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0) && t.start - o <= n && n <= t.start + o
                            }), t.live && (e.data = e.data.filter(function (e) {
                                return e.start || (e.start = n), e.start > n - 3 * o
                            }))) : l = e.data.filter(function (t) {
                                return e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0)
                            }), l.length > 0 && l.forEach(function (n) {
                                (r = new i.default(t, n)).attach(), s.addBullet(r).result ? (e.queue.push(r), r.topInit()) : r.detach()
                            })
                        }
                    }]), e
                }();
                t.default = l, e.exports = t.default
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = function () {
                        function e(t) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.danmu = t, this.reset();
                            var n = this;
                            this.danmu.on("bullet_remove", function (e) {
                                n.removeBullet(e.bullet)
                            }), this.direction = t.direction, this.danmu.on("changeDirection", function (e) {
                                n.direction = e
                            }), this.containerPos = this.danmu.container.getBoundingClientRect(), this.containerWidth = this.containerPos.width, this.containerHeight = this.containerPos.height, this.containerLeft = this.containerPos.left, this.containerRight = this.containerPos.right, this.danmu.bulletResizeTimer = setInterval(function () {
                                n.containerPos = n.danmu.container.getBoundingClientRect(), (Math.abs(n.containerPos.width - n.containerWidth) >= 2 || Math.abs(n.containerPos.height - n.containerHeight) >= 2 || Math.abs(n.containerPos.left - n.containerLeft) >= 2 || Math.abs(n.containerPos.right - n.containerRight) >= 2) && (n.containerWidth = n.containerPos.width, n.containerHeight = n.containerPos.height, n.containerLeft = n.containerPos.left, n.containerRight = n.containerPos.right, n.resize(!0))
                            }, 50)
                        }
                        return r(e, [{
                            key: "resize",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = this.danmu.container,
                                    n = this;
                                setTimeout(function () {
                                    n.danmu.bulletBtn.main.data && n.danmu.bulletBtn.main.data.forEach(function (e) {
                                        e.bookChannelId && delete e.bookChannelId
                                    });
                                    var r = t.getBoundingClientRect();
                                    n.width = r.width, n.height = r.height, n.danmu.config.area && n.danmu.config.area.start >= 0 && n.danmu.config.area.end >= n.danmu.config.area.start && ("b2t" === n.direction ? n.width = n.width * (n.danmu.config.area.end - n.danmu.config.area.start) : n.height = n.height * (n.danmu.config.area.end - n.danmu.config.area.start)), n.container = t;
                                    var o, i = /mobile/gi.test(navigator.userAgent) ? 10 : 12;
                                    o = "b2t" === n.direction ? Math.floor(n.width / i) : Math.floor(n.height / i);
                                    for (var a = [], s = 0; s < o; s++) a[s] = {
                                        id: s,
                                        queue: {
                                            scroll: [],
                                            top: [],
                                            bottom: []
                                        },
                                        operating: {
                                            scroll: !1,
                                            top: !1,
                                            bottom: !1
                                        },
                                        bookId: {}
                                    };
                                    if (n.channels && n.channels.length <= a.length) {
                                        for (var l = function (t) {
                                                a[t] = {
                                                    id: t,
                                                    queue: {
                                                        scroll: [],
                                                        top: [],
                                                        bottom: []
                                                    },
                                                    operating: {
                                                        scroll: !1,
                                                        top: !1,
                                                        bottom: !1
                                                    },
                                                    bookId: {}
                                                }, ["scroll", "top"].forEach(function (r) {
                                                    n.channels[t].queue[r].forEach(function (o) {
                                                        o.el && (a[t].queue[r].push(o), o.resized || (o.pauseMove(n.containerPos, e), o.startMove(n.containerPos), o.resized = !0))
                                                    })
                                                }), n.channels[t].queue.bottom.forEach(function (r) {
                                                    if (r.el) {
                                                        if (a[t + a.length - n.channels.length].queue.bottom.push(r), r.channel_id[0] + r.channel_id[1] - 1 === t) {
                                                            var o = [].concat(r.channel_id);
                                                            r.channel_id = [o[0] - n.channels.length + a.length, o[1]], r.top = r.channel_id[0] * i, n.danmu.config.area && n.danmu.config.area.start && (r.top += n.containerHeight * n.danmu.config.area.start), r.topInit()
                                                        }
                                                        r.resized || (r.pauseMove(n.containerPos, e), r.startMove(n.containerPos), r.resized = !0)
                                                    }
                                                })
                                            }, c = 0; c < n.channels.length; c++) l(c);
                                        for (var u = function (e) {
                                                ["scroll", "top", "bottom"].forEach(function (t) {
                                                    a[e].queue[t].forEach(function (e) {
                                                        e.resized = !1
                                                    })
                                                })
                                            }, d = 0; d < a.length; d++) u(d);
                                        n.channels = a, "b2t" === n.direction ? n.channelWidth = i : n.channelHeight = i
                                    } else if (n.channels && n.channels.length > a.length) {
                                        for (var p = function (t) {
                                                a[t] = {
                                                    id: t,
                                                    queue: {
                                                        scroll: [],
                                                        top: [],
                                                        bottom: []
                                                    },
                                                    operating: {
                                                        scroll: !1,
                                                        top: !1,
                                                        bottom: !1
                                                    },
                                                    bookId: {}
                                                }, ["scroll", "top", "bottom"].forEach(function (r) {
                                                    if ("top" === r && t > Math.floor(a.length / 2));
                                                    else if ("bottom" === r && t <= Math.floor(a.length / 2));
                                                    else {
                                                        var o = "bottom" === r ? t - a.length + n.channels.length : t;
                                                        n.channels[o].queue[r].forEach(function (s, l) {
                                                            if (s.el) {
                                                                if (a[t].queue[r].push(s), "bottom" === r && s.channel_id[0] + s.channel_id[1] - 1 === o) {
                                                                    var c = [].concat(s.channel_id);
                                                                    s.channel_id = [c[0] - n.channels.length + a.length, c[1]], s.top = s.channel_id[0] * i, n.danmu.config.area && n.danmu.config.area.start && (s.top += n.containerHeight * n.danmu.config.area.start), s.topInit()
                                                                }
                                                                s.resized || (s.pauseMove(n.containerPos, e), s.startMove(n.containerPos), s.resized = !0)
                                                            }
                                                            n.channels[o].queue[r].splice(l, 1)
                                                        })
                                                    }
                                                })
                                            }, f = 0; f < a.length; f++) p(f);
                                        for (var h = function (e) {
                                                ["scroll", "top", "bottom"].forEach(function (t) {
                                                    n.channels[e].queue[t].forEach(function (e) {
                                                        e.pauseMove(n.containerPos), e.remove()
                                                    })
                                                })
                                            }, g = a.length; g < n.channels.length; g++) h(g);
                                        for (var v = function (e) {
                                                ["scroll", "top", "bottom"].forEach(function (t) {
                                                    a[e].queue[t].forEach(function (e) {
                                                        e.resized = !1
                                                    })
                                                })
                                            }, y = 0; y < a.length; y++) v(y);
                                        n.channels = a, "b2t" === n.direction ? n.channelWidth = i : n.channelHeight = i
                                    }
                                }, 10)
                            }
                        }, {
                            key: "addBullet",
                            value: function (e) {
                                var t = this.danmu,
                                    n = this.channels,
                                    r = void 0,
                                    o = void 0,
                                    i = void 0;
                                if ("b2t" === this.direction ? (o = this.channelWidth, i = Math.ceil(e.width / o)) : (r = this.channelHeight, i = Math.ceil(e.height / r)), i > n.length) return {
                                    result: !1,
                                    message: "exceed channels.length, occupy=" + i + ",channelsSize=" + n.length
                                };
                                for (var a = !0, s = void 0, l = -1, c = 0, u = n.length; c < u; c++)
                                    if (n[c].queue[e.mode].some(function (t) {
                                            return t.id === e.id
                                        })) return {
                                        result: !1,
                                        message: "exsited, channelOrder=" + c + ",danmu_id=" + e.id
                                    };
                                if ("scroll" === e.mode)
                                    for (var d = 0, p = n.length - i; d <= p; d++) {
                                        a = !0;
                                        for (var f = d; f < d + i; f++) {
                                            if ((s = n[f]).operating.scroll) {
                                                a = !1;
                                                break
                                            }
                                            if ((s.bookId.scroll || e.prior) && s.bookId.scroll !== e.id) {
                                                a = !1;
                                                break
                                            }
                                            s.operating.scroll = !0;
                                            var h = s.queue.scroll[0];
                                            if (h) {
                                                var g = h.el.getBoundingClientRect();
                                                if ("b2t" === this.direction) {
                                                    if (g.bottom > this.containerPos.bottom) {
                                                        a = !1, s.operating.scroll = !1;
                                                        break
                                                    }
                                                } else if (g.right > this.containerPos.right) {
                                                    a = !1, s.operating.scroll = !1;
                                                    break
                                                }
                                                var v, y = void 0,
                                                    m = void 0,
                                                    b = void 0,
                                                    x = void 0;
                                                if ("b2t" === this.direction ? (m = (g.top - this.containerPos.top + g.height) / (y = (this.containerPos.height + g.height) / h.duration), b = this.containerPos.height, x = (this.containerPos.height + e.height) / e.duration) : (m = (g.left - this.containerPos.left + g.width) / (y = (this.containerPos.width + g.width) / h.duration), b = this.containerPos.width, x = (this.containerPos.width + e.width) / e.duration), v = b / x, t.config.bOffset || (t.config.bOffset = 0), y < x && m + t.config.bOffset > v) {
                                                    a = !1, s.operating.scroll = !1;
                                                    break
                                                }
                                            }
                                            s.operating.scroll = !1
                                        }
                                        if (a) {
                                            l = d;
                                            break
                                        }
                                    } else if ("top" === e.mode)
                                        for (var w = 0, _ = n.length - i; w <= _; w++) {
                                            a = !0;
                                            for (var k = w; k < w + i; k++) {
                                                if (k > Math.floor(n.length / 2)) {
                                                    a = !1;
                                                    break
                                                }
                                                if ((s = n[k]).operating[e.mode]) {
                                                    a = !1;
                                                    break
                                                }
                                                if ((s.bookId[e.mode] || e.prior) && s.bookId[e.mode] !== e.id) {
                                                    a = !1;
                                                    break
                                                }
                                                if (s.operating[e.mode] = !0, s.queue[e.mode].length > 0) {
                                                    a = !1, s.operating[e.mode] = !1;
                                                    break
                                                }
                                                s.operating[e.mode] = !1
                                            }
                                            if (a) {
                                                l = w;
                                                break
                                            }
                                        } else if ("bottom" === e.mode)
                                            for (var E = n.length - i; E >= 0; E--) {
                                                a = !0;
                                                for (var C = E; C < E + i; C++) {
                                                    if (C <= Math.floor(n.length / 2)) {
                                                        a = !1;
                                                        break
                                                    }
                                                    if ((s = n[C]).operating[e.mode]) {
                                                        a = !1;
                                                        break
                                                    }
                                                    if ((s.bookId[e.mode] || e.prior) && s.bookId[e.mode] !== e.id) {
                                                        a = !1;
                                                        break
                                                    }
                                                    if (s.operating[e.mode] = !0, s.queue[e.mode].length > 0) {
                                                        a = !1, s.operating[e.mode] = !1;
                                                        break
                                                    }
                                                    s.operating[e.mode] = !1
                                                }
                                                if (a) {
                                                    l = E;
                                                    break
                                                }
                                            }
                                if (-1 !== l) {
                                    for (var S = l, P = l + i; S < P; S++)(s = n[S]).operating[e.mode] = !0, s.queue[e.mode].unshift(e), e.prior && delete s.bookId[e.mode], s.operating[e.mode] = !1;
                                    return e.prior && (delete e.bookChannelId, t.bulletBtn.main.data.some(function (t) {
                                        return t.id === e.id && (delete t.bookChannelId, !0)
                                    })), e.channel_id = [l, i], "b2t" === this.direction ? (e.top = l * o, this.danmu.config.area && this.danmu.config.area.start && (e.top += this.containerWidth * this.danmu.config.area.start)) : (e.top = l * r, this.danmu.config.area && this.danmu.config.area.start && (e.top += this.containerHeight * this.danmu.config.area.start)), {
                                        result: e,
                                        message: "success"
                                    }
                                }
                                if (e.prior)
                                    if (e.bookChannelId) t.bulletBtn.main.data.some(function (t) {
                                        return t.id === e.id && (t.start += 2e3, !0)
                                    });
                                    else {
                                        l = -1;
                                        for (var T = 0, M = n.length - i; T <= M; T++) {
                                            a = !0;
                                            for (var O = T; O < T + i; O++)
                                                if (n[O].bookId[e.mode]) {
                                                    a = !1;
                                                    break
                                                } if (a) {
                                                l = T;
                                                break
                                            }
                                        }
                                        if (-1 !== l) {
                                            for (var L = l; L < l + i; L++) n[L].bookId[e.mode] = e.id;
                                            t.bulletBtn.main.data.some(function (t) {
                                                return t.id === e.id && (t.start += 2e3, t.bookChannelId = [l, i], !0)
                                            })
                                        }
                                    } return {
                                    result: !1,
                                    message: "no surplus will right"
                                }
                            }
                        }, {
                            key: "removeBullet",
                            value: function (e) {
                                for (var t = this.channels, n = e.channel_id, r = void 0, o = n[0], i = n[0] + n[1]; o < i; o++)
                                    if (r = t[o]) {
                                        r.operating[e.mode] = !0;
                                        var a = -1;
                                        r.queue[e.mode].some(function (t, n) {
                                            return t.id === e.id && (a = n, !0)
                                        }), a > -1 && r.queue[e.mode].splice(a, 1), r.operating[e.mode] = !1
                                    }
                            }
                        }, {
                            key: "resetArea",
                            value: function () {
                                var e = this.danmu.container,
                                    t = this,
                                    n = e.getBoundingClientRect();
                                t.width = n.width, t.height = n.height, t.danmu.config.area && t.danmu.config.area.start >= 0 && t.danmu.config.area.end >= t.danmu.config.area.start && ("b2t" === t.direction ? t.width = t.width * (t.danmu.config.area.end - t.danmu.config.area.start) : t.height = t.height * (t.danmu.config.area.end - t.danmu.config.area.start)), t.container = e;
                                var r, o = /mobile/gi.test(navigator.userAgent) ? 10 : 12;
                                r = "b2t" === t.direction ? Math.floor(t.width / o) : Math.floor(t.height / o);
                                for (var i = [], a = 0; a < r; a++) i[a] = {
                                    id: a,
                                    queue: {
                                        scroll: [],
                                        top: [],
                                        bottom: []
                                    },
                                    operating: {
                                        scroll: !1,
                                        top: !1,
                                        bottom: !1
                                    },
                                    bookId: {}
                                };
                                if (t.channels && t.channels.length <= i.length) {
                                    for (var s = function (e) {
                                            i[e] = {
                                                id: e,
                                                queue: {
                                                    scroll: [],
                                                    top: [],
                                                    bottom: []
                                                },
                                                operating: {
                                                    scroll: !1,
                                                    top: !1,
                                                    bottom: !1
                                                },
                                                bookId: {}
                                            }, ["scroll", "top"].forEach(function (n) {
                                                t.channels[e].queue[n].forEach(function (r) {
                                                    r.el && (i[e].queue[n].push(r), r.resized || (r.pauseMove(t.containerPos, !1), r.startMove(t.containerPos), r.resized = !0))
                                                })
                                            }), t.channels[e].queue.bottom.forEach(function (n) {
                                                if (n.el) {
                                                    if (i[e + i.length - t.channels.length].queue.bottom.push(n), n.channel_id[0] + n.channel_id[1] - 1 === e) {
                                                        var r = [].concat(n.channel_id);
                                                        n.channel_id = [r[0] - t.channels.length + i.length, r[1]], n.top = n.channel_id[0] * o, t.danmu.config.area && t.danmu.config.area.start && (n.top += t.containerHeight * t.danmu.config.area.start), n.topInit()
                                                    }
                                                    n.resized || (n.pauseMove(t.containerPos, !1), n.startMove(t.containerPos), n.resized = !0)
                                                }
                                            })
                                        }, l = 0; l < t.channels.length; l++) s(l);
                                    for (var c = function (e) {
                                            ["scroll", "top", "bottom"].forEach(function (t) {
                                                i[e].queue[t].forEach(function (e) {
                                                    e.resized = !1
                                                })
                                            })
                                        }, u = 0; u < i.length; u++) c(u);
                                    t.channels = i, "b2t" === t.direction ? t.channelWidth = o : t.channelHeight = o
                                } else if (t.channels && t.channels.length > i.length) {
                                    for (var d = function (e) {
                                            i[e] = {
                                                id: e,
                                                queue: {
                                                    scroll: [],
                                                    top: [],
                                                    bottom: []
                                                },
                                                operating: {
                                                    scroll: !1,
                                                    top: !1,
                                                    bottom: !1
                                                },
                                                bookId: {}
                                            }, ["scroll", "top", "bottom"].forEach(function (n) {
                                                if ("top" === n && e > Math.floor(i.length / 2));
                                                else if ("bottom" === n && e <= Math.floor(i.length / 2));
                                                else {
                                                    var r = "bottom" === n ? e - i.length + t.channels.length : e;
                                                    t.channels[r].queue[n].forEach(function (a, s) {
                                                        if (a.el) {
                                                            if (i[e].queue[n].push(a), "bottom" === n && a.channel_id[0] + a.channel_id[1] - 1 === r) {
                                                                var l = [].concat(a.channel_id);
                                                                a.channel_id = [l[0] - t.channels.length + i.length, l[1]], a.top = a.channel_id[0] * o, t.danmu.config.area && t.danmu.config.area.start && (a.top += t.containerHeight * t.danmu.config.area.start), a.topInit()
                                                            }
                                                            a.resized || (a.pauseMove(t.containerPos, !1), a.startMove(t.containerPos), a.resized = !0)
                                                        }
                                                        t.channels[r].queue[n].splice(s, 1)
                                                    })
                                                }
                                            })
                                        }, p = 0; p < i.length; p++) d(p);
                                    for (var f = function (e) {
                                            ["scroll", "top", "bottom"].forEach(function (t) {
                                                i[e].queue[t].forEach(function (e) {
                                                    e.resized = !1
                                                })
                                            })
                                        }, h = 0; h < i.length; h++) f(h);
                                    t.channels = i, "b2t" === t.direction ? t.channelWidth = o : t.channelHeight = o
                                }
                            }
                        }, {
                            key: "reset",
                            value: function () {
                                var e = this.danmu.container,
                                    t = this;
                                t.channels && t.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function (e) {
                                    for (var n = 0; n < t.channels.length; n++) t.channels[n].queue[e].forEach(function (e) {
                                        e.pauseMove(t.containerPos), e.remove()
                                    })
                                }), setTimeout(function () {
                                    var n = e.getBoundingClientRect();
                                    t.width = n.width, t.height = n.height, t.danmu.config.area && t.danmu.config.area.start >= 0 && t.danmu.config.area.end >= t.danmu.config.area.start && ("b2t" === t.direction ? t.width = t.width * (t.danmu.config.area.end - t.danmu.config.area.start) : t.height = t.height * (t.danmu.config.area.end - t.danmu.config.area.start)), t.container = e;
                                    var r, o = /mobile/gi.test(navigator.userAgent) ? 10 : 12;
                                    r = "b2t" === t.direction ? Math.floor(t.width / o) : Math.floor(t.height / o);
                                    for (var i = [], a = 0; a < r; a++) i[a] = {
                                        id: a,
                                        queue: {
                                            scroll: [],
                                            top: [],
                                            bottom: []
                                        },
                                        operating: {
                                            scroll: !1,
                                            top: !1,
                                            bottom: !1
                                        },
                                        bookId: {}
                                    };
                                    t.channels = i, "b2t" === t.direction ? t.channelWidth = o : t.channelHeight = o
                                }, 200)
                            }
                        }, {
                            key: "resetWithCb",
                            value: function (e, t) {
                                var n = this.danmu.container,
                                    r = this;
                                r.channels && r.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function (e) {
                                    for (var t = 0; t < r.channels.length; t++) r.channels[t].queue[e].forEach(function (e) {
                                        e.pauseMove(r.containerPos), e.remove()
                                    })
                                });
                                var o = n.getBoundingClientRect();
                                r.width = o.width, r.height = o.height, r.danmu.config.area && r.danmu.config.area.start >= 0 && r.danmu.config.area.end >= r.danmu.config.area.start && ("b2t" === r.direction ? r.width = r.width * (r.danmu.config.area.end - r.danmu.config.area.start) : r.height = r.height * (r.danmu.config.area.end - r.danmu.config.area.start)), r.container = n;
                                var i, a = /mobile/gi.test(navigator.userAgent) ? 10 : 12;
                                i = "b2t" === r.direction ? Math.floor(r.width / a) : Math.floor(r.height / a);
                                for (var s = [], l = 0; l < i; l++) s[l] = {
                                    id: l,
                                    queue: {
                                        scroll: [],
                                        top: [],
                                        bottom: []
                                    },
                                    operating: {
                                        scroll: !1,
                                        top: !1,
                                        bottom: !1
                                    },
                                    bookId: {}
                                };
                                r.channels = s, r.channelHeight = a, e && e(!0, t)
                            }
                        }]), e
                    }();
                t.default = o, e.exports = t.default
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    i = (r = n(0)) && r.__esModule ? r : {
                        default: r
                    },
                    a = function () {
                        function e(t, n) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.danmu = t, this.duration = n.duration, this.id = n.id, this.container = t.container, this.start = n.start, this.prior = n.prior, this.color = n.color, this.bookChannelId = n.bookChannelId, this.direction = t.direction;
                            var r = this;
                            this.danmu.on("changeDirection", function (e) {
                                r.direction = e
                            });
                            var o = void 0;
                            if (n.el && 1 === n.el.nodeType) o = i.default.copyDom(n.el);
                            else if ((o = document.createElement("div")).textContent = n.txt, n.style) {
                                var a = n.style;
                                Object.keys(a).forEach(function (e) {
                                    o.style[e] = a[e]
                                })
                            }
                            "top" === n.mode || "bottom" === n.mode ? this.mode = n.mode : this.mode = "scroll", this.el = o, this.status = "waiting";
                            var s = this.container.getBoundingClientRect();
                            this.el.style.left = s.width + "px"
                        }
                        return o(e, [{
                            key: "attach",
                            value: function () {
                                this.container.appendChild(this.el), this.elPos = this.el.getBoundingClientRect(), "b2t" === this.direction ? (this.width = this.elPos.height, this.height = this.elPos.width) : (this.width = this.elPos.width, this.height = this.elPos.height)
                            }
                        }, {
                            key: "detach",
                            value: function () {
                                this.container && this.el && this.container.removeChild(this.el);
                                var e = this;
                                this.danmu.off("changeDirection", function (t) {
                                    e.direction = t
                                }), this.el = null
                            }
                        }, {
                            key: "topInit",
                            value: function () {
                                if ("b2t" === this.direction) {
                                    var e = this.container.getBoundingClientRect();
                                    this.el.style.transformOrigin = "left top", this.el.style.transform = "translateX(-" + this.top + "px) translateY(" + e.height + "px) translateZ(0px) rotate(90deg)", this.el.style.transition = "transform 0s linear 0s"
                                } else this.el.style.top = this.top + "px"
                            }
                        }, {
                            key: "pauseMove",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if ("paused" !== this.status && (this.status = "paused", clearTimeout(this.removeTimer), this.el))
                                    if (this.el.style.willChange = "auto", "scroll" === this.mode) {
                                        if (t) {
                                            var n, r = ((new Date).getTime() - this.moveTime) / 1e3 * this.moveV;
                                            n = this.moveMoreS - r >= 0 ? "b2t" === this.direction ? (this.moveMoreS - r) / this.moveContainerHeight * e.height : (this.moveMoreS - r) / this.moveContainerWidth * e.width : this.moveMoreS - r, "b2t" === this.direction ? this.el.style.transform = "translateX(-" + this.top + "px) translateY(" + n + "px) translateZ(0px) rotate(90deg)" : this.el.style.left = n + "px"
                                        } else "b2t" === this.direction ? this.el.style.transform = "translateX(-" + this.top + "px) translateY(" + (this.el.getBoundingClientRect().top - e.top) + "px) translateZ(0px) rotate(90deg)" : this.el.style.left = this.el.getBoundingClientRect().left - e.left + "px";
                                        "b2t" === this.direction ? this.el.style.transition = "transform 0s linear 0s" : (this.el.style.transform = "translateX(0px) translateY(0px) translateZ(0px)", this.el.style.transition = "transform 0s linear 0s")
                                    } else this.pastDuration && this.startTime ? this.pastDuration = this.pastDuration + (new Date).getTime() - this.startTime : this.pastDuration = 1
                            }
                        }, {
                            key: "startMove",
                            value: function (e) {
                                var t = this;
                                if (this.el && "start" !== this.status)
                                    if (this.status = "start", this.el.style.willChange = "transform", "scroll" === this.mode)
                                        if ("b2t" === this.direction) {
                                            this.moveV = (e.height + this.height) / this.duration * 1e3;
                                            var n = (t.el.getBoundingClientRect().bottom - e.top) / this.moveV;
                                            this.el.style.transition = "transform " + n + "s linear 0s", setTimeout(function () {
                                                t.el && (t.el.style.transform = "translateX(-" + t.top + "px) translateY(-" + t.height + "px) translateZ(0px) rotate(90deg)", t.moveTime = (new Date).getTime(), t.moveMoreS = t.el.getBoundingClientRect().top - e.top, t.moveContainerHeight = e.height, t.removeTimer = setTimeout(i, 1e3 * n))
                                            }, 20)
                                        } else {
                                            this.moveV = (e.width + this.width) / this.duration * 1e3;
                                            var r = (t.el.getBoundingClientRect().right - e.left) / this.moveV;
                                            this.el.style.transition = "transform " + r + "s linear 0s", setTimeout(function () {
                                                t.el && (t.el.style.transform = "translateX(-" + (t.el.getBoundingClientRect().right - e.left) + "px) translateY(0px) translateZ(0px)", t.moveTime = (new Date).getTime(), t.moveMoreS = t.el.getBoundingClientRect().left - e.left, t.moveContainerWidth = e.width, t.removeTimer = setTimeout(i, 1e3 * r))
                                            }, 20)
                                        }
                                else {
                                    this.el.style.left = "50%", this.el.style.margin = "0 0 0 -" + this.width / 2 + "px", this.pastDuration || (this.pastDuration = 1);
                                    var o = this.duration >= this.pastDuration ? this.duration - this.pastDuration : 0;
                                    this.removeTimer = setTimeout(i, o), this.startTime = (new Date).getTime()
                                }

                                function i() {
                                    if (t.el)
                                        if ("scroll" === t.mode) {
                                            var e = t.danmu.container.getBoundingClientRect(),
                                                n = t.el.getBoundingClientRect();
                                            "b2t" === t.direction ? n && n.bottom <= e.top + 100 ? (t.status = "end", t.remove()) : (t.pauseMove(e), t.startMove(e)) : n && n.right <= e.left + 100 ? (t.status = "end", t.remove()) : (t.pauseMove(e), t.startMove(e))
                                        } else t.status = "end", t.remove()
                                }
                            }
                        }, {
                            key: "remove",
                            value: function () {
                                var e = this;
                                this.removeTimer && clearTimeout(this.removeTimer), e.el && e.el.parentNode && (e.el.style.willChange = "auto", this.danmu.off("changeDirection", function (t) {
                                    e.direction = t
                                }), e.el.parentNode.removeChild(e.el), e.el = null, e.danmu.emit("bullet_remove", {
                                    bullet: e
                                }))
                            }
                        }]), e
                    }();
                t.default = a, e.exports = t.default
            }, function (e, t, n) {
                var r = n(26);
                "string" == typeof r && (r = [
                    [e.i, r, ""]
                ]);
                n(28)(r, {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                }), r.locals && (e.exports = r.locals)
            }, function (e, t, n) {
                (e.exports = n(27)(!1)).push([e.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n", ""])
            }, function (e, t) {
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map(function (t) {
                            var n = function (e, t) {
                                var n, r = e[1] || "",
                                    o = e[3];
                                if (!o) return r;
                                if (t && "function" == typeof btoa) {
                                    var i = (n = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                        a = o.sources.map(function (e) {
                                            return "/*# sourceURL=" + o.sourceRoot + e + " */"
                                        });
                                    return [r].concat(a).concat([i]).join("\n")
                                }
                                return [r].join("\n")
                            }(t, e);
                            return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                        }).join("")
                    }, t.i = function (e, n) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            "number" == typeof i && (r[i] = !0)
                        }
                        for (o = 0; o < e.length; o++) {
                            var a = e[o];
                            "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                        }
                    }, t
                }
            }, function (e, t, n) {
                var r, o, i = {},
                    s = (r = function () {
                        return window && document && document.all && !window.atob
                    }, function () {
                        return void 0 === o && (o = r.apply(this, arguments)), o
                    }),
                    l = function (e) {
                        var t = {};
                        return function (e) {
                            if ("function" == typeof e) return e();
                            if (void 0 === t[e]) {
                                var n = function (e) {
                                    return document.querySelector(e)
                                }.call(this, e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                                t[e] = n
                            }
                            return t[e]
                        }
                    }(),
                    c = null,
                    u = 0,
                    d = [],
                    p = n(29);

                function f(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = i[r.id];
                        if (o) {
                            o.refs++;
                            for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                            for (; a < r.parts.length; a++) o.parts.push(b(r.parts[a], t))
                        } else {
                            var s = [];
                            for (a = 0; a < r.parts.length; a++) s.push(b(r.parts[a], t));
                            i[r.id] = {
                                id: r.id,
                                refs: 1,
                                parts: s
                            }
                        }
                    }
                }

                function h(e, t) {
                    for (var n = [], r = {}, o = 0; o < e.length; o++) {
                        var i = e[o],
                            a = t.base ? i[0] + t.base : i[0],
                            s = {
                                css: i[1],
                                media: i[2],
                                sourceMap: i[3]
                            };
                        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                            id: a,
                            parts: [s]
                        })
                    }
                    return n
                }

                function g(e, t) {
                    var n = l(e.insertInto);
                    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var r = d[d.length - 1];
                    if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), d.push(t);
                    else if ("bottom" === e.insertAt) n.appendChild(t);
                    else {
                        if ("object" != a(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                        var o = l(e.insertInto + " " + e.insertAt.before);
                        n.insertBefore(t, o)
                    }
                }

                function v(e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                    var t = d.indexOf(e);
                    t >= 0 && d.splice(t, 1)
                }

                function y(e) {
                    var t = document.createElement("style");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), g(e, t), t
                }

                function m(e, t) {
                    Object.keys(t).forEach(function (n) {
                        e.setAttribute(n, t[n])
                    })
                }

                function b(e, t) {
                    var n, r, o, i;
                    if (t.transform && e.css) {
                        if (!(i = t.transform(e.css))) return function () {};
                        e.css = i
                    }
                    if (t.singleton) {
                        var a = u++;
                        n = c || (c = y(t)), r = _.bind(null, n, a, !1), o = _.bind(null, n, a, !0)
                    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
                        var t = document.createElement("link");
                        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), g(e, t), t
                    }(t), r = function (e, t, n) {
                        var r = n.css,
                            o = n.sourceMap,
                            i = void 0 === t.convertToAbsoluteUrls && o;
                        (t.convertToAbsoluteUrls || i) && (r = p(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                        var a = new Blob([r], {
                                type: "text/css"
                            }),
                            s = e.href;
                        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                    }.bind(null, n, t), o = function () {
                        v(n), n.href && URL.revokeObjectURL(n.href)
                    }) : (n = y(t), r = function (e, t) {
                        var n = t.css,
                            r = t.media;
                        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
                        else {
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n))
                        }
                    }.bind(null, n), o = function () {
                        v(n)
                    });
                    return r(e),
                        function (t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                r(e = t)
                            } else o()
                        }
                }
                e.exports = function (e, t) {
                    if ("undefined" != typeof DEBUG && DEBUG && "object" != ("undefined" == typeof document ? "undefined" : a(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
                    (t = t || {}).attrs = "object" == a(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                    var n = h(e, t);
                    return f(n, t),
                        function (e) {
                            for (var r = [], o = 0; o < n.length; o++) {
                                var a = n[o];
                                (s = i[a.id]).refs--, r.push(s)
                            }
                            for (e && f(h(e, t), t), o = 0; o < r.length; o++) {
                                var s;
                                if (0 === (s = r[o]).refs) {
                                    for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                                    delete i[s.id]
                                }
                            }
                        }
                };
                var x, w = (x = [], function (e, t) {
                    return x[e] = t, x.filter(Boolean).join("\n")
                });

                function _(e, t, n, r) {
                    var o = n ? "" : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = w(t, o);
                    else {
                        var i = document.createTextNode(o),
                            a = e.childNodes;
                        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                    }
                }
            }, function (e, t) {
                e.exports = function (e) {
                    var t = "undefined" != typeof window && window.location;
                    if (!t) throw new Error("fixUrls requires window.location");
                    if (!e || "string" != typeof e) return e;
                    var n = t.protocol + "//" + t.host,
                        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                        var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                            return t
                        }).replace(/^'(.*)'$/, function (e, t) {
                            return t
                        });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
                    })
                }
            }])
        }, "object" == a(t) && "object" == a(e) ? e.exports = i() : (r = [], void 0 === (o = "function" == typeof (n = i) ? n.apply(t, r) : n) || (e.exports = o))
    }).call(this, n(62)(e))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    i.default.install("cssFullscreen", function () {
        var e = i.default.util;
        if (this.config.cssFullscreen) {
            var t = "M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z",
                n = "M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z",
                r = e.createDom("xg-cssfullscreen", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.03 0.03)" d="' + n + '"></path>\n        </svg></xg-icon>', {}, "xgplayer-cssfullscreen"),
                o = this.config.lang && "zh-cn" === this.config.lang ? "样式全屏" : "Full screen",
                a = this.config.lang && "zh-cn" === this.config.lang ? "退出全屏" : "Exit full screen",
                s = this.controls,
                l = this.root,
                c = e.createDom("xg-tips", o, {}, "xgplayer-tips"),
                u = r.querySelector("path");
            r.appendChild(c), s.appendChild(r), ["click", "touchend"].forEach(function (i) {
                r.addEventListener(i, function (r) {
                    var i;
                    r.preventDefault(), r.stopPropagation(), e.hasClass(l, "xgplayer-cssfullscreen-active") || e.hasClass(l, "xgplayer-is-fullscreen") ? (i = l, u.setAttribute("d", n), c.textContent = o, e.removeClass(i, "xgplayer-cssfullscreen-active")) : function (n) {
                        u.setAttribute("d", t), c.textContent = a, e.addClass(n, "xgplayer-cssfullscreen-active")
                    }(l)
                })
            }), r.addEventListener("mouseenter", function (e) {
                e.preventDefault(), e.stopPropagation(), c.style.left = "50%";
                var t = c.getBoundingClientRect(),
                    n = l.getBoundingClientRect();
                t.right > n.right && (c.style.left = -t.right + n.right + 16 + "px")
            })
        }
    })
}, function (e, t, n) {
    var r = n(65);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(67)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(66)(!1)).push([e.i, "@-webkit-keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@-webkit-keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer-download{position:relative;width:36px;height:40px;-webkit-order:8;-moz-box-ordinal-group:9;order:8;cursor:pointer}.xgplayer-inactive .xgplayer-download,.xgplayer-nostart .xgplayer-download{display:none}.xgplayer-download:hover .xgplayer-tips{display:block}.xgplayer-download-img{display:inline-block;width:24px;height:24px;margin-top:7px!important;margin-left:4px!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Crect x='11' y='4' width='2' height='12' rx='1'/%3E%3Crect x='3' y='18' width='18' height='2' rx='1'/%3E%3Crect transform='rotate(90 4 17.5)' x='1.5' y='16.5' width='5' height='2' rx='1'/%3E%3Crect transform='rotate(90 20 17.5)' x='17.5' y='16.5' width='5' height='2' rx='1'/%3E%3Cpath d='M11.988 14.3l-4.243-4.242a1 1 0 0 0-1.414 1.414l4.95 4.95a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 1 0-1.414-1.414L11.988 14.3z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%/100% 100%}.xgplayer-rotate{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;display:inline-block;cursor:pointer;margin:0 4px}.xgplayer-rotate:hover .xgplayer-tips{display:block}.xgplayer-rotate-img{width:20px;height:20px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23a)' fill='%23fff'%3E%3Cpath d='M11.666 9.167h-7.5a2.5 2.5 0 0 0-2.5 2.5v4.166a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-4.166a2.5 2.5 0 0 0-2.5-2.5z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.881 4.063a.83.83 0 0 0 .105 1.193L6.99 8.06A.833.833 0 1 0 8.128 6.84L6.62 5.435l3.199-.013a6.667 6.667 0 0 1 6.374 9.322.833.833 0 0 0 1.528.665A8.334 8.334 0 0 0 9.8 3.756l-3.367.013 1.53-1.64A.833.833 0 1 0 6.743.992L3.903 4.04a.83.83 0 0 0-.021.023z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h20v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:10px 10px}.xgplayer{background:rgba(0,0,0,.26);width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer video{width:100%;height:100%;outline:none}.xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(-1deg,rgba(0,0,0,.3),transparent);z-index:10}.xgplayer-nostart .xgplayer-controls{display:none}.no-controls .xgplayer-controls{display:none!important}.xgplayer-inactive .xgplayer-controls,.xgplayer-is-live .xgplayer-controls>*{display:none}.xgplayer-is-live .xgplayer-controls .xgplayer-fullscreen,.xgplayer-is-live .xgplayer-controls .xgplayer-live,.xgplayer-is-live .xgplayer-controls .xgplayer-placeholder,.xgplayer-is-live .xgplayer-controls .xgplayer-play,.xgplayer-is-live .xgplayer-controls .xgplayer-play-img,.xgplayer-is-live .xgplayer-controls .xgplayer-volume{display:block}.xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:0;right:0;outline:none;top:-10px;z-index:35}.xgplayer.xgplayer-definition-active .xgplayer-progress,.xgplayer.xgplayer-textTrack-active .xgplayer-progress,.xgplayer.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-progress-cache,.xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-progress-btn{display:none;position:absolute;left:0;top:-6px;width:14px;height:16px;border-radius:6px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26)}.xgplayer-progress-point{position:absolute}.xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;left:0;top:-40px;height:auto;line-height:30px;width:auto;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-progress:hover .xgplayer-progress-btn{display:block}.xgplayer-play,.xgplayer-play-img{position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer}.xgplayer-play-img .xgplayer-icon,.xgplayer-play .xgplayer-icon{margin-top:3px}.xgplayer-play-img:hover,.xgplayer-play:hover{opacity:.85}.xgplayer-play-img:hover .xgplayer-tips,.xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-playNext,.xgplayer-playNext-img{-webkit-order:1;-moz-box-ordinal-group:2;order:1;cursor:pointer}.xgplayer-playNext-img:hover,.xgplayer-playNext:hover{opacity:.85}.xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;display:inline-block}.xgplayer-time span:after{content:\"/\";display:inline-block;padding:0 3px}.xgplayer-time em{color:hsla(0,0%,100%,.5)}.xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:28px;height:140px;display:inline-block;position:relative;margin-top:-100px;z-index:18}.xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-slider{display:none;position:absolute;width:28px;height:88px;background:rgba(0,0,0,.54);border-radius:1px;bottom:50px;outline:none;left:0}.xgplayer.xgplayer-volume-active .xgplayer-slider{display:block}.xgplayer-slider:after{content:\" \";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-bar,.xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-drag:after{content:\" \";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:hsla(0,0%,100%,.3);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:1000;margin:-55px auto auto -35px;cursor:pointer}.xgplayer-inactive .xgplayer-start,.xgplayer-nostart .xgplayer-start{margin:-35px auto auto -35px}.xgplayer-start svg{fill:hsla(0,0%,100%,.7);margin:14px}.xgplayer-start.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start:hover{background:hsla(0,0%,100%,.5)}.xgplayer-start:hover svg{fill:hsla(0,0%,100%,.6)}.xgplayer-start-img{display:none;position:absolute;left:50%;top:50%;z-index:1000;cursor:pointer}.xgplayer-nostart .xgplayer-start-img{display:block}.xgplayer-start-img.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start-img:hover{opacity:.85}.xgplayer-textTrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px;margin-bottom:11px}.xgplayer-textTrack ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer.xgplayer-textTrack-active .xgplayer-textTrack ul{display:block}.xgplayer-textTrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-textTrack ul li.textTrack,.xgplayer-textTrack ul li:hover{color:#fff;opacity:1}.xgplayer-textTrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-textTrack .xgplayer-textTrack{display:block}.xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px;margin-bottom:11px}.xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer.xgplayer-definition-active .xgplayer-definition ul{display:block}.xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-definition ul li.definition,.xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-playback{-webkit-order:8;-moz-box-ordinal-group:9;order:8;position:relative;outline:none;display:block;cursor:pointer;margin:10px;height:20px}.xgplayer-playback .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-playback .name span{width:40px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-playback:hover .xgplayer-tips{display:block;top:-40px}.xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer.xgplayer-pip-active{position:fixed!important;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:999!important}.xgplayer.xgplayer-pip-active .xgplayer-controls,.xgplayer.xgplayer-pip-active xg-bullet{display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-pip-lay{position:absolute;top:26px;left:0;z-index:1450;cursor:pointer;background-color:transparent;display:none}.xgplayer-pip-lay,.xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:1500;display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer.xgplayer-inactive .xgplayer-pip-drag{display:none}.xgplayer-fullscreen{-webkit-order:12;-moz-box-ordinal-group:13;order:12;position:relative;display:inline-block;cursor:pointer}.xgplayer-fullscreen .xgplayer-icon{margin:4px -4px 0 0}.xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer.xgplayer-fullscreen-active{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.xgplayer-cssfullscreen{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;display:inline-block;cursor:pointer;left:6px}.xgplayer-cssfullscreen .xgplayer-icon{margin:4px -4px 0 0}.xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer.xgplayer-cssfullscreen-active{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26;margin:10px auto}.xgplayer-bullet{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-bullet>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-has-bullet{display:block}.xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-70px auto auto -50px}.xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:500;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;cursor:pointer}.xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-replay svg:hover path{fill:#fff}.xgplayer-replay .xgplayer-replay-img{position:absolute;left:50%;top:50%;cursor:pointer}.xgplayer-replay .xgplayer-replay-img:hover{opacity:.85}.xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px;cursor:pointer}.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-replay-img{display:none;position:absolute;left:50%;top:50%;z-index:500;cursor:pointer}.xgplayer-replay-img:hover{opacity:.85}.xgplayer.xgplayer-ended .xgplayer-replay-img{display:block}@keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:url(\"//s2.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.2/bg.svg\") no-repeat 50%/cover;z-index:1100}.xgplayer-enter .xgplayer-enter-logo{display:block;position:absolute;left:50%;top:50%;width:130px;height:44px;margin:-22px auto auto -65px;background-size:130px 44px;background-image:url(\"//s3.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.1/xg-logo-new.png\")}.xgplayer-enter .xgplayer-enter-tips{display:none;position:absolute;left:50%;top:50%;width:120px;height:1px;background:linear-gradient(90deg,#000,red,red,red,#000);margin:32px auto auto -62px}.xgplayer-enter .xgplayer-enter-tips:before{content:\" \";display:block;width:5px;height:1px;border-radius:50%;position:absolute;left:0;top:0;-webkit-animation:enterTips 1.6s linear infinite;animation:enterTips 1.6s linear infinite;background:#fff}.xgplayer-is-enter .xgplayer-enter,.xgplayer-is-enter .xgplayer-enter .xgplayer-enter-tips{display:block}.xgplayer-screenShot{-webkit-order:10;-moz-box-ordinal-group:11;order:10;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-screenShot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-screenShot .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-poster{position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer .xgplayer-none{display:none}.xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1200;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-mobile .xgplayer-progress-btn{display:block}.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px;margin-top:8.5px}.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-dot{height:3px}.xgplayer-mobile.xgplayer-ended .xgplayer-start,.xgplayer-mobile.xgplayer-ended .xgplayer-start-img,.xgplayer-mobile.xgplayer-inactive .xgplayer-start,.xgplayer-mobile.xgplayer-inactive .xgplayer-start-img{display:none}.xgplayer-mobile .xgplayer-start{width:60px;height:60px;line-height:60px;display:none;margin:-50px auto auto -30px}.xgplayer-mobile .xgplayer-start svg{margin:10px}.xgplayer-mobile .xgplayer-start-img{display:none}.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-mobile.xgplayer-nostart .xgplayer-start{margin:-30px auto auto -30px;display:block}.xgplayer-mobile.xgplayer-nostart .xgplayer-start-img{display:block}.xgplayer-mobile .xgplayer-loading{-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-controls,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-poster,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start-img{display:none}", ""])
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = r.sources.map(function (e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    var r, o, i = {},
        a = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }),
        s = function (e) {
            var t = {};
            return function (e) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var n = function (e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        l = null,
        c = 0,
        u = [],
        d = n(68);

    function p(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(m(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], t));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function f(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = t.base ? i[0] + t.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function h(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, o)
        }
    }

    function g(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function v(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", y(t, e.attrs), h(e, t), t
    }

    function y(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function m(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = t.transform(e.css))) return function () {};
            e.css = i
        }
        if (t.singleton) {
            var a = c++;
            n = l || (l = v(t)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", y(t, e.attrs), h(e, t), t
        }(t), r = function (e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = d(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), o = function () {
            g(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = v(t), r = function (e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function () {
            g(n)
        });
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = f(e, t);
        return p(n, t),
            function (e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--, r.push(s)
                }
                e && p(f(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete i[s.id]
                    }
                }
            }
    };
    var b, x = (b = [], function (e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}]);
//# sourceMappingURL=index.js.map