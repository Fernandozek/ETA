export default {
    dec(Q:number, vs:number, Ns:number, H:number) {

        var Qq = Q / Ns;
        var As = (Qq / vs) * (86400);

        var t = (As * H) / Qq;

        var b = Math.sqrt(As / 4);
        var B = Math.ceil(b);
        var L = As / B;
        var cc = L / B;

        var V0 = Qq / (B * H);
        var v0 = V0 * 100;

        var RH = (B * H) / (B + 2 * H);
        var Re = V0 * RH / (Math.pow(10, -6));

        var ql = 0.018 * H * vs;
        var Ql;
        if (ql > 2.5) {
            Ql = 2.5;
        } else {
            Ql = ql;
        }

        var lv = (Qq * 1000) / Ql;

        var Lc = 0.2 * L;

        var n = lv / (2 * Lc)

        var nn = Math.ceil(n);
        var lvv = nn * Lc * 2;
        var Qll = (Qq * 1000) / lvv;

        var e = B / nn;

        var V1 = [As, t, B, L, v0];
        var V2 = [Qll, lvv, Lc, nn, e];
        var V3 = [Re,cc, Qq];
        return [V1,V2,V3];
    }
}