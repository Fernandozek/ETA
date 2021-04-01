import { multiply, inv } from 'mathjs';

export default {
    floc(Q: number, Ttf: number, Nc: number, H: number, Nd: number, L: number, G1: number, G2: number, G3: number, G4: number, FC: number) {
        var Tf = Ttf * 60;
        var am = [[1, 1, 1, 1],
        [G1, -G2, 0, 0],
        [0, G2, -G3, 0],
        [0, 0, G3, -G4]];

        var bm = [[Ttf], [0], [0], [0]];


        var inve = inv(am);
        var rm1 = multiply(inve, bm);

        var rm = <any>[];
        rm = rm1;

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
        var dhd1 = Math.pow(((q * 0.013) / ((a * e1) * Math.pow(rh1, (2 / 3)))), 2 )* l1;

        var l2 = t2 * 60 * V12;
        var rh2 = a * e2 / (2 * (a + e2));
        var dhd2 = Math.pow(((q * 0.013) / ((a * e2) * Math.pow(rh2, (2 / 3)))), 2) * l2;

        var l3 = t3 * 60 * V13;
        var rh3 = a * e3 / (2 * (a + e3));
        var dhd3 = Math.pow(((q * 0.013) / ((a * e3) * Math.pow(rh3, (2 / 3)))), 2) * l3;

        var l4 = t4 * 60 * V14;
        var rh4 = a * e4 / (2 * (a + e4));
        var dhd4 = Math.pow(((q * 0.013) / ((a * e4) * Math.pow(rh4, (2 / 3)))), 2)* l4;

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
        var warndlg;
        if (Gg1 <= 70 && Gg2 <= 70 && Gg3 <= 70 && Gg4 <= 70) {
            warndlg = "Dimensionamento realizado com sucesso";
        }
        //alert("dhl =  " +dhl1 + ", " + dhl2 + ", " + dhl3 + ", " + dhl4);

        var M22;
        var M2;
        if (Gg1 > 70) {
            warndlg = "Dimensionamento não foi realizado com sucesso";
            var GG1 = 70 - (70 * (FC / 100));
            var nnn1 = 0.045 * Math.pow((Math.pow((a * L * GG1 / q), 2) * t1), (1 / 3));
            var nn1 = Math.ceil(nnn1);
            var ee1 = L / nn1;
            var Vv11 = q / (a * ee1);
            var Vv21 = (2 / 3) * Vv11;
            var ll1 = t1 * 60 * Vv11;
            var rrh1 = a * ee1 / (2 * (a + ee1));
            var ddhd1 = Math.pow(((q * 0.013) / ((a * ee1) * (Math.pow(rrh1, (2 / 3))))), 2) * ll1;
            var ddhl1 = ((nn1 * Math.pow(Vv11, 2)) + (nn1 - 1) * (Math.pow(Vv21, 2))) / (2 * 9.81);
            var ddh1 = ddhd1 + ddhl1;
            var GGg1 = Math.sqrt((9.81 * ddh1) / (Math.pow(10, -6) * t1 * 60));
            M2 = [[nn1, n2, n3, n4], [ee1, e2, e3, e4], [Vv11, V12, V13, V14], [Vv21, V22, V23, V24], [ddhd1, dhd2, dhd3, dhd4], [ddhl1, dhl2, dhl3, dhl4], [ddh1, dh2, dh3, dh4], [GGg1, Gg2, Gg3, Gg4]];
            M22 = M2;
        }

        if (Gg2 > 70) {
            warndlg = "Dimensionamento não foi realizado com sucesso";
            var GG2 = 70 - (70 * (FC / 100));
            var nnn2 = 0.045 * Math.pow((Math.pow((a * L * GG2 / q), 2) * t2), (1 / 3));
            var nn2 = Math.ceil(nnn2);
            var ee2 = L / nn2;
            var Vv12 = q / (a * ee2);
            var Vv22 = (2 / 3) * Vv12;
            var ll2 = t2 * 60 * Vv12;
            var rrh2 = a * ee2 / (2 * (a + ee2));
            var ddhd2 = Math.pow(((q * 0.013) / ((a * ee2) * Math.pow(rrh2, (2 / 3)))), 2) * ll2;
            var ddhl2 = ((nn2 * Math.pow(Vv12, 2)) + (nn2 - 1) * (Math.pow(Vv22, 2))) / (2 * 9.81);
            var ddh2 = ddhd2 + ddhl2;
            var GGg2 = Math.sqrt((9.81 * ddh2) / (Math.pow(10, -6) * t2 * 60));
            M2 = [[n1, nn2, n3, n4], [e1, ee2, e3, e4], [V11, Vv12, V13, V14], [V21, Vv22, V23, V24], [dhd1, ddhd2, dhd3, dhd4], [dhl1, ddhl2, dhl3, dhl4], [dh1, ddh2, dh3, dh4], [Gg1, GGg2, Gg3, Gg4]];
            M22 = M2;
        }
        if (Gg3 > 70) {
            warndlg = "Dimensionamento não foi realizado com sucesso";
            var GG3 = 70 - (70 * (FC / 100));
            var nnn3 = 0.045 * Math.pow((Math.pow((a * L * GG3 / q), 2) * t3), (1 / 3));
            var nn3 = Math.ceil(nnn3);
            var ee3 = L / nn3;
            var Vv13 = q / (a * ee3);
            var Vv23 = (2 / 3) * Vv13;
            var ll3 = t3 * 60 * Vv13;
            var rrh3 = a * ee3 / (2 * (a + ee3));
            var ddhd3 = Math.pow(((q * 0.013) / ((a * ee3) * Math.pow(rrh3, (2 / 3)))), 2) * ll3;
            var ddhl3 = ((nn3 * Math.pow(Vv13, 2)) + (nn3 - 1) * (Math.pow(Vv23, 2))) / (2 * 9.81);
            var ddh3 = ddhd3 + ddhl3;
            var GGg3 = Math.sqrt((9.81 * ddh3) / (Math.pow(10, -6) * t3 * 60));
            M2 = [[n1, n2, nn3, n4], [e1, e2, ee3, e4], [V11, V12, Vv13, V14], [V21, V22, Vv23, V24], [dhd1, dhd2, ddhd3, dhd4], [dhl1, dhl2, ddhl3, dhl4], [dh1, dh2, ddh3, dh4], [Gg1, Gg2, GGg3, Gg4]];
            M22 = M1;
        }

        return [M22, M2, M11, q, Vol, A, B, a];
    },
    m22(M22: any) {
        var V21 = M22[0];
        var V22 = M22[1];
        var V23 = M22[2];
        var V24 = M22[3];
        var V25 = M22[4];
        var V26 = M22[5];
        var V27 = M22[6];
        var V28 = M22[7];
        return [V21, V22, V23, V24, V25, V26, V27, V28];
    },
    m11(M22: any) {
        var V11 = M22[0];
        var V12 = M22[1];
        var V13 = M22[2];
        var V14 = M22[3];
        var V15 = M22[4];
        var V16 = M22[5];
        var V17 = M22[6];
        var V18 = M22[7];
        return [V11, V12, V13, V14, V15, V16, V17, V18];
    }

}