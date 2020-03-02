import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  // isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }

  onLogin() {
    // this.isLoading = true;
    this.authService.Login();
    this.loadingCtrl
    .create({keyboardClose: true, message: 'Loading in...'})
    .then(loadingEl => {
      loadingEl.present();
      loadingEl.dismiss();
      this.router.navigateByUrl(`/places/tabs/discover`);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // send request to login servers!
    } else {
      // send request to signup servers!
    }
  }

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

}
