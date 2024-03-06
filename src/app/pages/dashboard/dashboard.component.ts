import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignUpModel } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  user: SignUpModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['isUserPresent'] ;
    });
  }

}
