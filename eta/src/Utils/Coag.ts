export default {
    coag(Q: number) {
        const k = 0.608;
        const n = 0.639;
        const N = 0.229;
        const D = 1.572;
        const K = 0.076;
        const Gg = 0.915;
        const C = 1.22;
        const W = 0.915;

        var h0 = k * Math.pow(Q, n);

        var D1 = ((2 / 3) * (D - W)) + W;

        var Vs = Q / (D1 * h0);

        var q = Q / W;

        var EO = (Math.pow(Vs, 2) / (2 * 9.81)) + h0 + N;

        var angf = -(9.81 * q) / Math.pow(((2 / 3) * 9.81 * EO), 1.5);
        var ang = Math.acos(angf);
        var TETA = (ang * 180 / Math.PI);

        var V1 = 2 * (Math.sqrt(2 * 9.81 * EO/3) * Math.cos(ang / 3));

        var h1 = q / V1;

        var Fr1 = V1 / (Math.sqrt(9.81 * h1));

        var h2 = (h1 / 2) * (Math.sqrt(1 + 8 * Math.pow(Fr1, 2)) - 1);

        var V2 = Q / (W * h2);
        
        var h3 = h2 - (N - K);

        var V3 = Q / (C * h3);

        var hf = Math.pow((h2 - h1), 3) / (4 * h1 * h2);

        var T = (2 * Gg) / (V2 + V3);

        var G = Math.sqrt((9810 / 0.00101) * (hf / T))

        var V = [Vs, V1, V2, V3];
        var H = [h0, h1, h2, h3];
        var O = [D1,q,EO,Fr1,hf,T,G];
        return [V, H, O];

    }

}