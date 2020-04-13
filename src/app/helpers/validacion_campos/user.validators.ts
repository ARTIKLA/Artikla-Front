import { GrupoValidaciones } from 'src/app/interfaces/interface.validators';
import { Validators } from '@angular/forms';

export class VALIDACIONES_USUARIO {
    
    public correoUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.email,
            Validators.maxLength(50),
            Validators.minLength(3)
        ],
        validatorsMsg : {
            required: "Ingresa tu correo electrónico",
            maxLength: "Correo incorrecto",
            minLength: "Correo incorrecto",
            email: "Correo incorrecto"
        },
        showMsg: ""
    }

    public passwordUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(8),
            Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        ],
        validatorsMsg : {
            required: "Ingresa la contraseña",
            maxLength: "La contraseña debe contener de 8 a 15 caracteres",
            minLength: "La contraseña debe contener de 8 a 15 caracteres",
            pattern: `La contraseña debe contener al menos:
                    1 letra mayúscula
                    1 letra minúscula
                    1 número
                    1 caracter especial (#?!@$%^&*-)`
        },
        showMsg: ""
    }
    
}