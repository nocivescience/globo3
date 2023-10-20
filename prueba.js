let elemento;
function primerPaso(){
    elemento =  []
}
primerPaso();
function segundoPaso(){
    elemento.push(1);
    elemento.push(2);
}
segundoPaso();
function tercerPaso(){
    const probando= elemento.length-1?'hay algo':'no hay nada';
    return probando;
};
const proband=tercerPaso();
console.log(proband);