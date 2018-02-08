import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SelfbitsAngular} from 'selfbits-angular2-sdk';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private sb:SelfbitsAngular) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(provider:string) {
        if(provider == "facebook") {
            this.sb.auth.social(provider).subscribe(data => {
                if(data.status == 200) {
                    console.log("Successfully Logged in");
                }
                else {
                    console.log("Cannot login");
                    return;
                }
            });
        }
        else if(provider == "twitter") {
            this.sb.auth.social(provider).subscribe(data => {
                if(data.status == 200) {
                    console.log("Successfully Logged in");
                }
                else {
                    console.log("Cannot login");
                    return;
                }
            });
        }
        else if(provider == "twitter") {
            this.sb.auth.social(provider).subscribe(data => {
                if(data.status == 200) {
                    console.log("Successfully Logged in");
                }
                else {
                    console.log("Cannot login");
                    return;
                }
            });
        }
        else {
            this.loading = true;
            this.authenticationService.login(this.model.email, this.model.password)
                .subscribe(
                    data => {
                        this.router.navigate([this.returnUrl]);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }
    }
}
