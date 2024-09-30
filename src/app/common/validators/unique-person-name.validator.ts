import {
  AbstractControl,
  FormArray,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function uniquePersonNamesValidator(): ValidatorFn {
  return (formArray: AbstractControl): ValidationErrors | null => {
    const controls = (formArray as FormArray).controls;
    const nameSet = new Set();

    controls.forEach((group: AbstractControl) => {
      const nameControl = group.get('name');
      const name = nameControl?.value?.trim().toLowerCase();

      if (name && nameSet.has(name)) {
        nameControl?.setErrors({ duplicateName: true });
      } else {
        nameSet.add(name);
        if (nameControl?.hasError('duplicateName')) {
          nameControl.setErrors(null);
        }
      }
    });

    return null;
  };
}
