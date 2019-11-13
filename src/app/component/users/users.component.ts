import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {UserModel} from '../../model/user-model';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('listStagger',[
      transition('* <=> *',[
        query(':enter',
          [
            style({opacity:0, transform: 'transletY(-35px)'}),
            stagger('50ms',
              animate('55ms ease-out',
                style({opacity:1, transform: 'transletY()0px'})))
          ],{optional: true}),
        query(':leave', animate('50ms',style({opacity:0})),{optional:true})
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users: UserModel[];

  //initializing p to one
  p: number = 1;

  constructor(private projectService: DataService) { }

  ngOnInit() {

    this.getAllUser();
  }

  public getAllUser(){
    this.projectService.getUsers().subscribe(
      (data:UserModel[])=>{
        this.users = data;
      }
    )
  }

}
