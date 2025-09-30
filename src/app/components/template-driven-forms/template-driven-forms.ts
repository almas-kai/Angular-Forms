import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css'
})
export class TemplateDrivenForms {
  public favouriteCat: string = '';
}
