function qa(a, b, c) {
    var d = [],
        e = c.timeout;
    ia(b);
    var d = ka(a.a, c, a.c),
        f = new W(a.c, b, e);
    a.h = d.length;
    b = 0;
    for (c = d.length; b < c; b++)
        d[b].load(function(b, d, c) {
            ra(a, f, b, d, c)
        })
}
;
function sa(a, b) {
    this.c = a;
    this.a = b
}
function ta(a, b, c) {
    var d = z(a.c);
    a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
    return d + "//" + a + "/" + b + ".js" + (c ? "?v=" + c : "")
}
sa.prototype.load = function(a) {
    function b() {
        if (f["__mti_fntLst" + d]) {
            var c = f["__mti_fntLst" + d](),
                e = [],
                h;
            if (c)
                for (var m = 0; m < c.length; m++) {
                    var l = c[m].fontfamily;
                    void 0 != c[m].fontStyle && void 0 != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l))
                }
            a(e)
        } else
            setTimeout(function() {
                b()
            }, 50)
    }
    var c = this,
        d = c.a.projectId,
        e = c.a.version;
    if (d) {
        var f = c.c.m;
        B(this.c, ta(c, d, e), function(e) {
            e ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
                return c.a
            }, b())
        }).id = "__MonotypeAPIScript__" +
        d
    } else
        a([])
};
function ua(a, b) {
    this.c = a;
    this.a = b
}
ua.prototype.load = function(a) {
    var b,
        c,
        d = this.a.urls || [],
        e = this.a.families || [],
        f = this.a.testStrings || {},
        g = new C;
    b = 0;
    for (c = d.length; b < c; b++)
        A(this.c, d[b], D(g));
    var k = [];
    b = 0;
    for (c = e.length; b < c; b++)
        if (d = e[b].split(":"), d[1])
            for (var h = d[1].split(","), m = 0; m < h.length; m += 1)
                k.push(new H(d[0], h[m]));
        else
            k.push(new H(d[0]));
    F(g, function() {
        a(k, f)
    })
};
function va(a, b, c) {
    a ? this.c = a : this.c = b + wa;
    this.a = [];
    this.f = [];
    this.g = c || ""
}
var wa = "//fonts.googleapis.com/css";
function xa(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
        var e = b[d].split(":");
        3 == e.length && a.f.push(e.pop());
        var f = "";
        2 == e.length && "" != e[1] && (f = ":");
        a.a.push(e.join(f))
    }
}
function ya(a) {
    if (0 == a.a.length)
        throw Error("No fonts to load!");
    if (-1 != a.c.indexOf("kit="))
        return a.c;
    for (var b = a.a.length, c = [], d = 0; d < b; d++)
        c.push(a.a[d].replace(/ /g, "+"));
    b = a.c + "?family=" + c.join("%7C");
    0 < a.f.length && (b += "&subset=" + a.f.join(","));
    0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
    return b
}
;
function za(a) {
    this.f = a;
    this.a = [];
    this.c = {}
}
var Aa = {
        latin: "BESbswy",
        "latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
        cyrillic: "\u0439\u044f\u0416",
        greek: "\u03b1\u03b2\u03a3",
        khmer: "\u1780\u1781\u1782",
        Hanuman: "\u1780\u1781\u1782"
    },
    Ba = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    },
    Ca = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    },
    Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Ea(a) {
    for (var b = a.f.length, c = 0; c < b; c++) {
        var d = a.f[c].split(":"),
            e = d[0].replace(/\+/g, " "),
            f = ["n4"];
        if (2 <= d.length) {
            var g;
            var k = d[1];
            g = [];
            if (k)
                for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
                    var l;
                    l = k[m];
                    if (l.match(/^[\w-]+$/)) {
                        var n = Da.exec(l.toLowerCase());
                        if (null == n)
                            l = "";
                        else {
                            l = n[2];
                            l = null == l || "" == l ? "n" : Ca[l];
                            n = n[1];
                            if (null == n || "" == n)
                                n = "4";
                            else
                                var r = Ba[n],
                                    n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                            l = [l, n].join("")
                        }
                    } else
                        l = "";
                    l && g.push(l)
                }
            0 < g.length && (f = g);
            3 == d.length && (d = d[2], g = [], d = d ? d.split(",") :
            g, 0 < d.length && (d = Aa[d[0]]) && (a.c[e] = d))
        }
        a.c[e] || (d = Aa[e]) && (a.c[e] = d);
        for (d = 0; d < f.length; d += 1)
            a.a.push(new H(e, f[d]))
    }
}
;
function Fa(a, b) {
    this.c = a;
    this.a = b
}
var Ga = {
    Arimo: !0,
    Cousine: !0,
    Tinos: !0
};
Fa.prototype.load = function(a) {
    var b = new C,
        c = this.c,
        d = new va(this.a.api, z(c), this.a.text),
        e = this.a.families;
    xa(d, e);
    var f = new za(e);
    Ea(f);
    A(c, ya(d), D(b));
    F(b, function() {
        a(f.a, f.c, Ga)
    })
};
function Ha(a, b) {
    this.c = a;
    this.a = b
}
Ha.prototype.load = function(a) {
    var b = this.a.id,
        c = this.c.m;
    b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b) {
        if (b)
            a([]);
        else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b = c.Typekit.config.fn;
            for (var e = [], f = 0; f < b.length; f += 2)
                for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++)
                    e.push(new H(g, k[h]));
            try {
                c.Typekit.load({
                    events: !1,
                    classes: !1,
                    async: !0
                })
            } catch (m) {}
            a(e)
        }
    }, 2E3) : a([])
};
function Ia(a, b) {
    this.c = a;
    this.f = b;
    this.a = []
}
Ia.prototype.load = function(a) {
    var b = this.f.id,
        c = this.c.m,
        d = this;
    b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b, c) {
        for (var g = 0, k = c.fonts.length; g < k; ++g) {
            var h = c.fonts[g];
            d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)))
        }
        a(d.a)
    }, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b) {
        b && a([])
    })) : a([])
};
var Y = new pa(window);
Y.a.c.custom = function(a, b) {
    return new ua(b, a)
};
Y.a.c.fontdeck = function(a, b) {
    return new Ia(b, a)
};
Y.a.c.monotype = function(a, b) {
    return new sa(b, a)
};
Y.a.c.typekit = function(a, b) {
    return new Ha(b, a)
};
Y.a.c.google = function(a, b) {
    return new Fa(b, a)
};
var Z = {
    load: p(Y.load, Y)
};
"function" === typeof define && define.amd ? define(function() {
    return Z
}) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
;