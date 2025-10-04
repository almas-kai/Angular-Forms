import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
	return (abstractControl: AbstractControl): ValidationErrors | null => {
		const value: string = abstractControl.value as string;

		if(Boolean(value) === false) {
			return null;
		}
		
		const hasUppercase: boolean = /[A-Z]/.test(value);

		const hasSpecial: boolean = /[!#$%&]/.test(value);

		const isValid: boolean = hasUppercase && hasSpecial;

		return isValid ? null : { passwordStrength: true };
	}
}