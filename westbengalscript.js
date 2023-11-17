function B(a, b, c, d) {
    var e = a.c.getElementsByTagName("head")[0];
    if (e) {
        var f = t(a, "script", {
                src: b
            }),
            g = !1;
        f.onload = f.onreadystatechange = function() {
            g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
        };
        e.appendChild(f);
        setTimeout(function() {
            g || (g = !0, c && c(Error("Script load timeout")))
        }, d || 5E3);
        return f
    }
    return null
}
;
function C() {
    this.a = 0;
    this.c = null
}
function D(a) {
    a.a++;
    return function() {
        a.a--;
        E(a)
    }
}
function F(a, b) {
    a.c = b;
    E(a)
}
function E(a) {
    0 == a.a && a.c && (a.c(), a.c = null)
}
;
function G(a) {
    this.a = a || "-"
}
G.prototype.c = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++)
        b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    return b.join(this.a)
};
function H(a, b) {
    this.c = a;
    this.f = 4;
    this.a = "n";
    var c = (b || "n4").match(/^([nio])([1-9])$/i);
    c && (this.a = c[1], this.f = parseInt(c[2], 10))
}
function fa(a) {
    return I(a) + " " + (a.f + "00") + " 300px " + J(a.c)
}
function J(a) {
    var b = [];
    a = a.split(/,\s*/);
    for (var c = 0; c < a.length; c++) {
        var d = a[c].replace(/['"]/g, "");
        -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
    }
    return b.join(",")
}
function K(a) {
    return a.a + a.f
}
function I(a) {
    var b = "normal";
    "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
    return b
}
function ga(a) {
    var b = 4,
        c = "n",
        d = null;
    a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
    return c + b
}
;
function ha(a, b) {
    this.c = a;
    this.f = a.m.document.documentElement;
    this.h = b;
    this.a = new G("-");
    this.j = !1 !== b.events;
    this.g = !1 !== b.classes
}
function ia(a) {
    a.g && w(a.f, [a.a.c("wf", "loading")]);
    L(a, "loading")
}
function M(a) {
    if (a.g) {
        var b = y(a.f, a.a.c("wf", "active")),
            c = [],
            d = [a.a.c("wf", "loading")];
        b || c.push(a.a.c("wf", "inactive"));
        w(a.f, c, d)
    }
    L(a, "inactive")
}
function L(a, b, c) {
    if (a.j && a.h[b])
        if (c)
            a.h[b](c.c, K(c));
        else
            a.h[b]()
}
;
function ja() {
    this.c = {}
}
function ka(a, b, c) {
    var d = [],
        e;
    for (e in b)
        if (b.hasOwnProperty(e)) {
            var f = a.c[e];
            f && d.push(f(b[e], c))
        }
    return d
}
;
function N(a, b) {
    this.c = a;
    this.f = b;
    this.a = t(this.c, "span", {
        "aria-hidden": "true"
    }, this.f)
}
function O(a) {
    u(a.c, "body", a.a)
}
function P(a) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";")
}
;
function Q(a, b, c, d, e, f) {
    this.g = a;
    this.j = b;
    this.a = d;
    this.c = c;
    this.f = e || 3E3;
    this.h = f || void 0
}
Q.prototype.start = function() {
    var a = this.c.m.document,
        b = this,
        c = q(),
        d = new Promise(function(d, e) {
            function k() {
                q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function(a) {
                    1 <= a.length ? d() : setTimeout(k, 25)
                }, function() {
                    e()
                })
            }
            k()
        }),
        e = new Promise(function(a, d) {
            setTimeout(d, b.f)
        });
    Promise.race([e, d]).then(function() {
        b.g(b.a)
    }, function() {
        b.j(b.a)
    })
};
function R(a, b, c, d, e, f, g) {
    this.v = a;
    this.B = b;
    this.c = c;
    this.a = d;
    this.s = g || "BESbswy";
    this.f = {};
    this.w = e || 3E3;
    this.u = f || null;
    this.o = this.j = this.h = this.g = null;
    this.g = new N(this.c, this.s);
    this.h = new N(this.c, this.s);
    this.j = new N(this.c, this.s);
    this.o = new N(this.c, this.s);
    a = new H(this.a.c + ",serif", K(this.a));
    a = P(a);
    this.g.a.style.cssText = a;
    a = new H(this.a.c + ",sans-serif", K(this.a));
    a = P(a);
    this.h.a.style.cssText = a;
    a = new H("serif", K(this.a));
    a = P(a);
    this.j.a.style.cssText = a;
    a = new H("sans-serif", K(this.a));
    a =
    P(a);
    this.o.a.style.cssText = a;
    O(this.g);
    O(this.h);
    O(this.j);
    O(this.o)
}
var S = {
        D: "serif",
        C: "sans-serif"
    },
    T = null;
function U() {
    if (null === T) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
    }
    return T
}
R.prototype.start = function() {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.o.a.offsetWidth;
    this.A = q();
    la(this)
};
function ma(a, b, c) {
    for (var d in S)
        if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]])
            return !0;
    return !1
}
function la(a) {
    var b = a.g.a.offsetWidth,
        c = a.h.a.offsetWidth,
        d;
    (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c));
    d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v)
}
function na(a) {
    setTimeout(p(function() {
        la(this)
    }, a), 50)
}
function V(a, b) {
    setTimeout(p(function() {
        v(this.g.a);
        v(this.h.a);
        v(this.j.a);
        v(this.o.a);
        b(this.a)
    }, a), 0)
}
;
function W(a, b, c) {
    this.c = a;
    this.a = b;
    this.f = 0;
    this.o = this.j = !1;
    this.s = c
}
var X = null;
W.prototype.g = function(a) {
    var b = this.a;
    b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);
    L(b, "fontactive", a);
    this.o = !0;
    oa(this)
};
W.prototype.h = function(a) {
    var b = this.a;
    if (b.g) {
        var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")),
            d = [],
            e = [b.a.c("wf", a.c, K(a).toString(), "loading")];
        c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));
        w(b.f, d, e)
    }
    L(b, "fontinactive", a);
    oa(this)
};
function oa(a) {
    0 == --a.f && a.j && (a.o ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a))
}
;