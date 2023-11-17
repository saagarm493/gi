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