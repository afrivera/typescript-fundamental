"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var ForceLevel;
    (function (ForceLevel) {
        ForceLevel[ForceLevel["aquaman"] = 0] = "aquaman";
        ForceLevel[ForceLevel["batman"] = 1] = "batman";
        ForceLevel[ForceLevel["flash"] = 5] = "flash";
        ForceLevel[ForceLevel["superman"] = 100] = "superman";
    })(ForceLevel || (ForceLevel = {}));
    var fuerzaFlash = ForceLevel.flash;
    var fuerzaSuperman = ForceLevel.superman;
    var fuerzaBatman = ForceLevel.batman;
    var fuerzaAcuaman = ForceLevel.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
