import jsPDF from 'jspdf';
export default {
  jsPdfGenerator(V: number[], H: number[]: O: number[]) {

    var doc = new jsPDF('p', 'pt');
    doc.setFont('courier');
    doc.setFontSize(10);
    doc.text('Universidade Federal Rural do SemiÁrido - UFERSA', 80, 50);
    doc.text('Esta programa é destinado à realização de um pré-dimensionamento de', 80, 63);
    doc.text('clarificação em uma estação de tratamento de água convencional', 80, 76);

    doc.setLineWidth(0.5);
    doc.line(485, 89, 80, 89);

    doc.text('Resultados da Coagulação', 80, 105);

    doc.text('Velocidades Obtidas (m/s)', 80, 135);
    doc.text(`V  = ${V[0].toFixed(4)}`, 100, 158);
    doc.setFontSize(8);
    doc.text('s', 105, 160);
    doc.setFontSize(10);
    doc.text(`V  = ${V[1].toFixed(4)}`, 100, 171);
    doc.setFontSize(8);
    doc.text('1', 105, 173);
    doc.setFontSize(10);
    doc.text(`V  = ${V[2].toFixed(4)}`, 100, 184);
    doc.setFontSize(8);
    doc.text('2', 105, 186);
    doc.setFontSize(10);
    doc.text(`V  = ${V[3].toFixed(4)}`, 100, 197);
    doc.setFontSize(8);
    doc.text('3', 105, 199);
    doc.setFontSize(10);

    doc.line(485, 230, 80, 230);

    doc.text('Alturas obtidas (m)', 80, 260);
    doc.text(`H  = ${H[0].toFixed(4)}`, 100, 283);
    doc.setFontSize(8);
    doc.text('0', 106, 285);
    doc.setFontSize(10);
    doc.text(`H  = ${H[1].toFixed(4)}`, 100, 296);
    doc.setFontSize(8);
    doc.text('1', 106, 298);
    doc.setFontSize(10);
    doc.text(`H  = ${H[2].toFixed(4)}`, 100, 309);
    doc.setFontSize(8);
    doc.text('2', 106, 311);
    doc.setFontSize(10);
    doc.text(`H  = ${H[3].toFixed(4)}`, 100, 321);
    doc.setFontSize(8);
    doc.text('3', 106, 323);
    doc.setFontSize(10);

    doc.line(485, 350, 80, 350);

    doc.text(`D'(m) = ${O[0].toFixed(4)}`, 100, 375);
    doc.text(`q (m³/s/m) = ${O[1].toFixed(4)}`, 100, 388);
    doc.text(`E (m) = ${O[2].toFixed(4)}`, 100, 401);
    doc.setFontSize(8);
    doc.text('0', 106, 403);
    doc.setFontSize(10);
    doc.text(`Fr = ${O[3].toFixed(4)}`, 100, 414);
    doc.setFontSize(8);
    doc.text('1', 111, 416);
    doc.setFontSize(10);
    doc.text(`hf (m) = ${O[4].toFixed(4)}`, 100, 427);

    doc.line(485, 450, 80, 450);

    doc.text('Tempo de mistura (s)', 80, 470);
    doc.text(`T = ${O[5].toFixed(4)}`, 100, 483);
    doc.text('Gradiente de velocidade (s-1)', 80, 509);
    doc.text(`G = ${O[5].toFixed(4)}`, 100, 522);

    doc.save('Resultados Coagulacao.pdf');
  }
}