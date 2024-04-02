import {Component} from '@angular/core';
import {User} from "../../../../core/models/USER";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.scss']
})
export class MonprofilComponent {
  user: User;
  isModifying = false;
  hidePassword = [true, true, true];
  passwordForm: FormGroup;
  passwordError: string | undefined;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.user = JSON.parse(sessionStorage.getItem("user") || '');
    this.passwordForm = this.fb.group({
      'current_password': ['', Validators.required],
      'password': ['', Validators.required],
      'password_confirmation': ['', Validators.required],
    }, {validators: this.matchPasswords});
  }

  modify() {
    this.isModifying = true;
  }

  save() {
    console.log('Saving');
    this.isModifying = false;
  }

  changePassword() {
    if (!this.passwordForm.valid) return;
    this.authenticationService.changePassword(this.passwordForm.getRawValue()).pipe(
      catchError(error => this.passwordError = error.error.errors.full_messages.join('.\n'))
    ).subscribe(_ => this.passwordError = undefined);
  }

  private matchPasswords = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('password');
    const confirm = group.get('password_confirmation');
    if (!pass?.dirty || !confirm?.dirty) return null;
    return pass.value === confirm.value ? null : {noMatch: true};
  }
}
