import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserValidators{
    static cannotContainSpace(control: AbstractControl):ValidationErrors|null{
        if((control.value).indexOf(' ')>=0)
           return{cannotContainSpace : true}
        return null;
    }
}