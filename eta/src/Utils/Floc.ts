import math from 'mathjs';

export default {
    multi(a: any, b: any) {
        var aNumRows = a.length, aNumCols = a[0].length,
            bNumRows = b.length, bNumCols = b[0].length,
            m = new Array(aNumRows);  // initialize array of rows
        for (var r = 0; r < aNumRows; ++r) {
            m[r] = new Array(bNumCols); // initialize the current row
            for (var c = 0; c < bNumCols; ++c) {
                m[r][c] = 0;             // initialize the current cell
                for (var i = 0; i < aNumCols; ++i) {
                    m[r][c] += a[r][i] * b[i][c];
                }
            }
        }
        return m;
    },
    floc(Q: number, Ttf: number, H: number, Nd: number, L: number, G1: number, G2: number, G3: number, G4: number, FC: number) {
        var Nc = 4;
        var Tf = Ttf * 60;

        var am = [[1, 1, 1, 1],
        [G1, -G2, 0, 0],
        [0, G2, -G3, 0],
        [0, 0, G3, -G4]];
        var bm = [[Ttf], [0], [0], [0]];
        var oq = FC;

        var rm = [4];
        var t1 = rm[0];
        var t2 = rm[1];
        var t3 = rm[2];
        var t4 = rm[3];

        var q = Q / Nd;
        var Vol = q * Tf;

        var A = Vol / H;

        var B = A / L;
        var a = B / Nc;

        var nn1 = 0.045 * Math.pow((Math.pow((a * L * G1 / q), 2) * t1), (1 / 3));
        var n1 = Math.ceil(nn1);
        var nn2 = 0.045 * Math.pow((Math.pow((a * L * G2 / q), 2) * t2), (1 / 3));
        var n2 = Math.ceil(nn2);
        var nn3 = 0.045 * Math.pow((Math.pow((a * L * G3 / q), 2) * t3), (1 / 3));
        var n3 = Math.ceil(nn3);
        var nn4 = 0.045 * Math.pow((Math.pow((a * L * G4 / q), 2) * t4), (1 / 3));
        var n4 = Math.ceil(nn4);

        var e1 = L / n1;
        var e2 = L / n2;
        var e3 = L / n3;
        var e4 = L / n4;

        var V11 = q / (a * e1);
        var V21 = (2 / 3) * V11;

        var V12 = q / (a * e2);
        var V22 = (2 / 3) * V12;

        var V13 = q / (a * e3);
        var V23 = (2 / 3) * V13;

        var V14 = q / (a * e4);
        var V24 = (2 / 3) * V14;

        var l1 = t1 * 60 * V11;
        var rh1 = a * e1 / (2 * (a + e1));
        var dhd1 = Math.pow(((q * 0.013) / ((a * e1) * (Math.pow(rh1, (2 / 3))))), 2 * l1);

        var l2 = t2 * 60 * V12;
        var rh2 = a * e2 / (2 * (a + e2));
        var dhd2 = Math.pow(((q * 0.013) / ((a * e2) * (Math.pow(rh2, (2 / 3))))), 2 * l2);

        var l3 = t3 * 60 * V13;
        var rh3 = a * e3 / (2 * (a + e3));
        var dhd3 = Math.pow(((q * 0.013) / ((a * e3) * (Math.pow(rh3, (2 / 3))))), 2 * l3);

        var l4 = t4 * 60 * V14;
        var rh4 = a * e4 / (2 * (a + e4));
        var dhd4 = Math.pow(((q * 0.013) / ((a * e4) * (Math.pow(rh4, (2 / 3))))), 2 * l4);

        var dhl1 = ((n1 * (Math.pow(V11, 2)) + (n1 - 1) * (Math.pow(V21, 2)))) / (2 * 9.81);
        var dhl2 = ((n2 * (Math.pow(V12, 2))) + ((n2 - 1) * (Math.pow(V22, 2)))) / (2 * 9.81);
        var dhl3 = ((n3 * (Math.pow(V13, 2))) + ((n3 - 1) * (Math.pow(V23, 2)))) / (2 * 9.81);
        var dhl4 = ((n4 * (Math.pow(V14, 2))) + ((n4 - 1) * (Math.pow(V24, 2)))) / (2 * 9.81);

        var dh1 = dhd1 + dhl1;
        var dh2 = dhd2 + dhl2;
        var dh3 = dhd3 + dhl3;
        var dh4 = dhd4 + dhl4;

        var Gg1 = Math.sqrt((9.81 * dh1) / (Math.pow(10, -6) * t1 * 60));
        var Gg2 = Math.sqrt((9.81 * dh2) / (Math.pow(10, -6) * t2 * 60));
        var Gg3 = Math.sqrt((9.81 * dh3) / (Math.pow(10, -6) * t3 * 60));
        var Gg4 = Math.sqrt((9.81 * dh4) / (Math.pow(10, -6) * t4 * 60));

        var M1 = [[n1, n2, n3, n4], [e1, e2, e3, e4], [V11, V12, V13, V14], [V21, V22, V23, V24], [dhd1, dhd2, dhd3, dhd4], [dhl1, dhl2, dhl3, dhl4], [dh1, dh2, dh3, dh4], [Gg1, Gg2, Gg3, Gg4]];
        var M11 = M1;

        return 0;
    }

}