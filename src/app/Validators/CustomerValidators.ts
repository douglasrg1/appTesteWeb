import { FormControl } from '@angular/forms';

export class CustomValidator{
    static EmailValidator(control:FormControl){
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

        if(!re.test(control.value)){
            return {"E-mail Inválido":true};
        }

        return null;
    }

    static SelectValidator(control:FormControl){
        const value:number = control.value.toString();

        if(value == 0){
            return {"Selecione uma opção":true};
        }

        return null;
    }
}