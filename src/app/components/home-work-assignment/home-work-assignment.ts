import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { minimumAgeValidator } from '../../utilities/validators/minimum-age.validator';
import { passwordValidator } from '../../utilities/validators/password.validator';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-work-assignment',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home-work-assignment.html',
  styleUrl: './home-work-assignment.css'
})
export class HomeWorkAssignment implements OnInit, OnDestroy { 
  public sumbittedData: object | null = null;

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public signupForm: FormGroup = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      birthdate: ['', [Validators.required, minimumAgeValidator(14)]],
      password: ['', [Validators.required, Validators.minLength(3), passwordValidator()]],
      hobbies: this.formBuilder.array<string | null>([''])
    }
  );

  public get hobbies(): FormArray<FormControl<string | null>> {
    return this.signupForm.get('hobbies') as FormArray<FormControl<string | null>>;
  }

  public addHobby(): void {
    this.hobbies.push(this.formBuilder.control('', [Validators.required]));
  }

  public removeHobby(index: number): void {
    this.hobbies.removeAt(index);
  }

  public onSubmit(): void {
    if(this.signupForm.valid) {
      this.sumbittedData = this.signupForm.value;
    }
    else {
      this.sumbittedData = null;
    }
  }

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.signupForm.statusChanges
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(
      () => {
        if(this.signupForm.invalid) {
          this.sumbittedData = null;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
