import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder-practice',
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder-practice.html',
  styleUrl: './form-builder-practice.css'
})
export class FormBuilderPractice {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  public profileForm = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.formBuilder.group(
        {
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }
      ),
      aliases: this.formBuilder.array([this.formBuilder.control('')])
    }
  );

  public get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  public addAlias(): void {
    this.aliases.push(this.formBuilder.control(''));
  }

  public onSubmit(): void {
    console.warn(this.profileForm);
  }
}
