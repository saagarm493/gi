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