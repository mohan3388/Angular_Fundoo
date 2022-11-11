import { Component, OnInit,Input} from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any
  constructor(public note:NoteServiceService) { }

  ngOnInit(): void {
    this.onArchive();
  }
  onArchive() {
    let reqData={
      NoteId:this.noteObject.noteId,
    }
    console.log(reqData)
    this.note.ArchiveNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      
    })
  }
  Unarchive(note:any) {

    let reqData={
      NoteId:note.noteId,
    }
    console.log(reqData)
    this.note.ArchiveNotes(reqData).subscribe((response: any) => {
      console.log("Note UnArchived Successfully",response);
    })
  }
}
