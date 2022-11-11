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
  this.note.getNotes().subscribe((respone:any)=>{
   this.archiveList=respone.data;
   this.archiveList.reverse();
   this.archiveList=this.archiveList.filter((object:any)=>{
    return object.archive==true;
   })
   console.log("Archieve notes "+this.archiveList);
  })
}
}
