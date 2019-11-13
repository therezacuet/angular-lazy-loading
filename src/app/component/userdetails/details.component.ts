import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {UserModel} from '../../model/user-model';
import {Route} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user:UserModel;
  userId: any;
  texto : string;
  lat: number;
  lng: number;
  zoom: number = 15;

  constructor(private projectService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params.id)
  }

  ngOnInit() {

    this.getUser();
  }

  public getUser(){

    this.projectService.getUser(this.userId).subscribe(
      (data: UserModel) => {
        this.user = data;
        this.lat = parseFloat(data.address.geo.lat);
        this.lng = parseFloat(data.address.geo.lng);
      }
    )
  }

}
