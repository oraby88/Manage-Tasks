import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

import { User } from './user.model'
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {

  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({required:true}) selected!:boolean;

  // objects inputs
  @Input({required:true}) user!: User;

  // @Output() select = new EventEmitter<string>();
  @Output() select = new EventEmitter();
  //output function the second way to output
  // select = output<string>();



  // signals inputs
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=>{
  //   return 'assets/users/'+ this.avatar();
  // })


  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  //signail way
  // imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar)

  get imagePath(){
    return '../../assets/users/'+this.user.avatar;
  }

  onSelect(){
    // console.log("Clicked!");
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
