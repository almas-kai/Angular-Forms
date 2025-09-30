import { Routes } from '@angular/router';
import { ReactiveForms } from './components/reactive-forms/reactive-forms';
import { TemplateDrivenForms } from './components/template-driven-forms/template-driven-forms';
import { App } from './app';

export const routes: Routes = [
	{
		path: '',
		component: App
	},
	{
		path: 'reactive-forms',
		component: ReactiveForms
	},
	{
		path: 'template-driven-forms',
		component: TemplateDrivenForms
	}
];
