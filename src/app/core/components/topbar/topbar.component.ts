import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/features/users/services/authentication.service';
import { User } from '../../models/USER';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output() open = new EventEmitter<boolean>()
  user?: User;
  showDropDown: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUser();
  }

  clickMenu() {
    this.open.emit(true);
  }

  handleLogout() {
    this.authenticationService.logout();
  }

  onDisplayDropdown() {
    this.showDropDown = !this.showDropDown;
  }

  onMouseEnter() {
    this.showDropDown = true;
  }

  onMouseLeave() {
    this.showDropDown = false;
  }
}
