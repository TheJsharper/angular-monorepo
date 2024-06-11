import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-primeng-form-contact',
  standalone: true,
  imports: [CommonModule, FieldsetModule, AvatarModule, ReactiveFormsModule, InputTextModule,InputTextareaModule, ButtonModule ],
  templateUrl: './primeng-form-contact.component.html',
  styleUrl: './primeng-form-contact.component.scss',
})
export class PrimengFormContactComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder){
   this.form = this.fb.group({
    userName: new FormControl<string>('', [Validators.required]),
    message : new FormControl<string>('', [Validators.required, Validators.minLength(20)])
    })
  }


  onSubmit():void{
    console.log(this.form.value);
    this.form.setValue({userName:'', message: ''});
    this.form.markAsPristine();
  }

}
