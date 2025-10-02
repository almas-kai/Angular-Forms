import { Component } from '@angular/core';
import { FormControl, FormGroup, FormResetEvent, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css'
})
export class ReactiveForms {
  public favouriteDog: FormControl = new FormControl('Snoop', { nonNullable: true });
  public profileForm: FormGroup = new FormGroup(
    {
      name: new FormControl<string | null>(''),
      age: new FormControl<number | null>(0),
      breedName: new FormControl<string | null>(''),
      address: new FormGroup(
        {
          country: new FormControl<string | null>(''),
          city: new FormControl<string | null>('')
        }
      )
    }
  );

  public setFavouriteDefault(): void {
    this.favouriteDog.setValue('Leya');
  }

  public showExampleProfileForm(): void {
    this.profileForm.patchValue(
      {
        name: 'Leya',
        age: 6,
        breedName: 'Golden Retriever',
        address: {
          country: 'Kazakhstan',
          city: 'Astana'
        }
      }
    );
  }

  public onReset(): void {
    this.profileForm.reset();
    this.favouriteDog.reset();
  }

  public onSubmit(event: SubmitEvent): void {
    console.warn(this.profileForm);
  }
}
