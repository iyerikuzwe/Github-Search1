import { Component } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import {User} from '../user';
@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html",
  providers: [ProfileService]
})
export class ProfileComponent {
  user: any;
  repos: any;
  username: string;
  constructor(private profileService: ProfileService) {
     console.log("profile service Init...");
  }
  search() {
    this.profileService.updateUserName(this.username);
    this.profileService.getUser().subscribe(user => {
      this.user = user;
    });
    this.profileService.getRepos().subscribe(repository => {
      this.repos = repository;
    });
  }
}
