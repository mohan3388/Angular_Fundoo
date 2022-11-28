import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList:any;
  // trash:boolean=false;
  constructor(private note:NoteServiceService) { }

  ngOnInit(): void {
    this.TrashList();
  }

  TrashList(){
    this.note.getNotes().subscribe((response:any)=>{
      this.trashList=response.data;
      console.log(this.trashList);
      this.trashList.reverse();
      this.trashList=this.trashList.filter((object:any)=>{
       return object.trash==true ;
      })
      console.log("trash notes ",this.trashList);
     })
  }
  receiveMeassage(e:any){
    console.log(e);
  this.TrashList();
  }
}



