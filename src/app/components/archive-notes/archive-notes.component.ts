import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  archiveList: any;
 
  constructor(private note:NoteServiceService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }
getArchiveNotes(){
  this.note.getNotes().subscribe((response:any)=>{
    this.archiveList=response.data;
    console.log(this.archiveList);
    this.archiveList.reverse();
    this.archiveList=this.archiveList.filter((object:any)=>{
     return object.archieve==true && object.trash == false;
    })
    console.log("Archive notes ",this.archiveList);
   })
}

}

// this.noteArray=this.noteArray.reverse()
// this.noteArray = this.noteArray.filter((object: any) => {
//       return object.archieve == false && object.trash == false;
  
//       })

// console.log(this.noteArray)