export class Validationforms {

    EmailIsValid(text: string): boolean {

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (text == '') return false;

        return emailRegex.test(text);
    }

    OnlyInteger(text: string): boolean {


        return /^\d+$/.test(text);


    }

    PhoneValid(text: string) {

        const phoneRegex = /^\d{10}$/;

        if (text == '') return false;

        return phoneRegex.test(text);

    }


    calcularDigitoVerificacion(myNit: string) {
        var vpri,
            x: number,
            y: number,
            z;

        // Se limpia el Nit
        myNit = myNit.replace(/\s/g, ""); // Espacios
        myNit = myNit.replace(/,/g, ""); // Comas
        myNit = myNit.replace(/\./g, ""); // Puntos
        myNit = myNit.replace(/-/g, ""); // Guiones

        // Se valida el nit
        if (isNaN(parseInt(myNit))) {
            console.log("El nit/cédula '" + myNit + "' no es válido(a).");
            return "";
        };

        // Procedimiento
        vpri = new Array(16);
        z = myNit.length;

        vpri[1] = 3;
        vpri[2] = 7;
        vpri[3] = 13;
        vpri[4] = 17;
        vpri[5] = 19;
        vpri[6] = 23;
        vpri[7] = 29;
        vpri[8] = 37;
        vpri[9] = 41;
        vpri[10] = 43;
        vpri[11] = 47;
        vpri[12] = 53;
        vpri[13] = 59;
        vpri[14] = 67;
        vpri[15] = 71;

        x = 0;
        y = 0;
        for (var i = 0; i < z; i++) {
            y = parseInt((myNit.substr(i, 1)));
            // console.log ( y + "x" + vpri[z-i] + ":" ) ;

            x += (y * (vpri[z - i] as number));
            // console.log ( x ) ;    
        }

        y = x % 11;
        // console.log ( y ) ;

        return (y > 1) ? 11 - y : y;
    }

}