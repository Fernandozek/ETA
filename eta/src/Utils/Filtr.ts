export default {
    filtr(Q: number, q: number, Nd: number, L: number, Lcl: number, deefar: number, deefant: number, d10ar: number, d10ant: number, cuar: number,
        cuant: number, roar: number, roant: number, e0ar: number, e0ant: number, ecs: number, qdar: number, ncalhas: number, lar: number, lant: number, lcs: number, twar: number,
        twant: number, twcs: number, d10cs: number, d90cs: number) {
        
            
        var At = (Q * 86400) / q


        var N = 1.2 * (Math.sqrt(Q * 86400 / 3785))
        var NN = Math.ceil(N)
        var Nn = 2 * Nd
        var nad;
        if (Nn > NN){ 
                nad = Nn
        }else{
            nad = NN
        }


        var Af = At / nad

        var y = Af / ((L / 2) - Lcl)

        var Lb = (L / 2) - Lcl



        var areia1 = lar / (deefar * Math.pow(10,-3))
        var antracito1 = lant / (deefant * 10 ^ -3)
        var Vg = areia1 + antracito1

        var d90ar = d10ar * (10 ^ (1.67 * Math.log10(cuar)))

        var Gaar = (Math.pow((d90ar * 10 ^ -3), 3) * 1000 * (roar - 1000) * 9.81) / Math.pow((1.01 * Math.pow(10, -3)), 2)

        var Remfar = Math.sqrt(Math.pow(33.7, 2) + (0.048 * Gaar)) - 33.7

        var Vmfar = (Remfar * Math.pow(10, -6)) / (d90ar * Math.pow(10, -3))



        var d90ant = d10ant * (10 ^ (1.67 * Math.log10(cuant)))

        var Gaant = ((d90ant * 10 ^ -3) ^ 3 * 1000 * (roant - 1000) * 9.81) / (1.01 * 10 ^ -3) ^ 2

        var Remfant = Math.sqrt(Math.pow(33.7, 2) + (0.048 * Gaant)) - 33.7

        var Vmfant = (Remfant * 10 ^ -6) / (d90ant * 10 ^ -3)

        var vtar = lar * Af

        var Mar = (1 - e0ar) * vtar * roar

        var vtan = lant * Af

        var Mant = (1 - e0ant) * vtan * roant

        var MT = Mar + Mant

        var X2 = Mar / MT
        var vmf1;
        var vmf2;
        var VMF;
        if (Vmfar > Vmfant){
            vmf1 = Vmfar
            vmf2 = Vmfant
            VMF = vmf1 * Math.pow(Math.pow((vmf2 / vmf1), X2), 1.69);
        }
        if (Vmfant > Vmfar){
            vmf1 = Vmfant
            vmf2 = Vmfar
            VMF = vmf1 * Math.pow(Math.pow((vmf2 / vmf1), X2), 1.69);
        }


        var Qal = (1.3 * 10 ^ -2) * Af

        var Vl = Qal * (10 * 60)


        var Vr = 2 * Vl

        var d = Math.sqrt((4 * Qal) / (Math.PI * 2.5))
        var dd = d * 10
        var dde = Math.ceil(dd)
        var D = dde * 100

        var Qdar = qdar * Af

        var Qcalha = Qal / ncalhas

        var B = Lcl / (ncalhas - 1)

        var h0 = (Qcalha / (1.38 * B)) ^ (1 / 1.5)

        var liinf = (0.5 * (lar + lant)) + B

        var lisup = (lar + lant) + B

        var H0 = (liinf + lisup) / 2

        var sliinf = 1.5 * H0

        var slisup = 2.5 * H0

        var S = y / ncalhas



        var deqar = Math.sqrt(d10ar * d90ar)

        var hfar = (180) * (1.01 * Math.pow(10, -3)) * Math.pow((1 - e0ar), 2) * (q / 86400) * lar / ((9810) * Math.pow(e0ar, 3) * Math.pow(twar, 2) * Math.pow(Math.pow(deqar * 10, -3), 2))

        var deqant = Math.sqrt(d10ant * d90ant)

        var hfant = (180) * (1.01 * Math.pow(10, -3)) * Math.pow((1 - e0ant), 2) * (q / 86400) * lant / ((9810) * Math.pow(e0ant, 3) * Math.pow(twant, 2) * Math.pow((deqant * Math.pow(10, -3)), 2))

        var hft = hfar + hfant


        var deqcs = Math.sqrt(d10cs * d90cs)

        var hfcs = (180) * (1.01 * Math.pow(10, -3)) * Math.pow((1 - ecs), 2) * (q / 86400) * lcs / ((9810) * Math.pow(ecs, 3) * Math.pow(twcs, 2) * Math.pow((deqcs * Math.pow(10, -3)), 2))

        var hla = 2.55 - (hfcs + hft)

        var Bv = Lcl

        var hv0 = ((Q / nad) / (1.84 * Bv)) ^ (1 / 1.5)


        

        var hf = [hfar, hfant, hft, hfcs]

        var vMf = [Vmfar, Vmfant, VMF]
       

    }
}