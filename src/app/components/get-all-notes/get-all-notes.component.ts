import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
noteArray:any;

  constructor(private notes:NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
getAllNotes(){
this.notes.getNotes().subscribe((response:any)=>{
  console.log(response);
  this.noteArray=response.data;
  this.noteArray=this.noteArray.reverse()
  this.noteArray = this.noteArray.filter((object: any) => {
        return object.archieve == false && object.trash == false;
    
        })

 console.log(this.noteArray)
})
}
receiveMeassage(e:any){
  console.log(e);
this.getAllNotes();
}
}
