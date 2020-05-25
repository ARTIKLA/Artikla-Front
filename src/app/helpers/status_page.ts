import { Router } from '@angular/router';
import { RespuestaWS } from '../interfaces/respueta.ws';
import { RespuestasWS } from './Constantes/respuestasWS';
import { _respWS } from './Constantes/Enums/cod_respuestasWS';

export class StatusPage {
    constructor(public router : Router) {}
    public loading : Boolean;
    public success : Boolean = false;
    public modal : Boolean;
    public requestMsj : Array<string>

    onRedirect(redirect : string, ...param) {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            if(redirect.includes("http")) window.location.href = redirect;
            else if(param.length > 0) {
                this.router.navigate([redirect, {p: param}]);
            } else this.router.navigateByUrl(redirect);
        }, 0);
    }
    
    mensajePorMostrar(MsgResponse : RespuestaWS) : boolean {
        let showMsg = false;
        Object.values(new RespuestasWS()).forEach((r : RespuestaWS) => {
            //El WS retorna el key del enum
            if(_respWS[r.codigo] == MsgResponse.codigo.toString() && MsgResponse.mensaje != null 
                && MsgResponse.mensaje != undefined && r.mostrar) {
                showMsg = true;
                return;
            }
        });
        return showMsg;
    }

    showModal() {
        this.modal = true;
    }

    closeModal() {
        this.modal = false;
    }
    
    viewPass(eye, inputID) {
        eye.classList.toggle("fa-eye");
        eye.classList.toggle("fa-eye-slash");
        var input = document.getElementById(inputID);
        if (input.getAttribute("type") == "password") {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    }

    onMove($f , $r){
        $r.style.transition = "all .5s";
        if($f == true) {
          $r.style.marginLeft = "19em"
          $r.style.width = "100%";
        } else
          $r.style.marginLeft = "12em";
        $r.style.width = "60em";
    }
}