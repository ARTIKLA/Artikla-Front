import { GrupoValidaciones } from 'src/app/interfaces/interface.validators';
import { Validators } from '@angular/forms';

export class VALIDACIONES_USUARIO {
    
    public NombreUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            //isNotLetter(),
            Validators.maxLength(20),
            Validators.minLength(3)
        ],
        validatorsMsg : {
            required: "Ingresa el nombre de usuario",
            isNotLetter: "Nombre incorrecto",
            maxLength: "Nombre incorrecto",
            minLength: "Nombre incorrecto"
        },
        showMsg: ""
    }

    public PasswordUsuarioVal : GrupoValidaciones = {
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