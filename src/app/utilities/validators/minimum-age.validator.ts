import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minimumAgeValidator(minimumAge: number): ValidatorFn {
	return (abstractControl: AbstractControl): ValidationErrors | null => {
		const value: string = abstractControl.value as string;

		if(Boolean(value) === false) {
			return null;
		}

		const today: Date = new Date();
		const birthDate: Date = new Date(value);

		let age: number = today.getFullYear() - birthDate.getFullYear();
		const monthDifference: number = today.getMonth() - birthDate.getMonth();

		if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
			age --;
		}

		return age >= minimumAge ? null : { 
			minimumAge: {
				requiredAge: minimumAge,
				actualAge: age
			}
		};
	}
}