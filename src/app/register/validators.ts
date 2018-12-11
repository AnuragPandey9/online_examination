import{AbstractControl} from '@angular/forms';

export function ValidateItems(control:AbstractControl){
    console.log(control.value);
    return null;
}