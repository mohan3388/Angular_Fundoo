import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any;
  isArchieve: boolean = false;
  isTrash: boolean = false;

  colorArray =[{colorCode:"maroon"},
  {colorCode:"silver"},
  {colorCode:"Yellow"},
  {colorCode:"Purple"},
  {colorCode:"pink"},
  {colorCode:"chocolate"},
  {colorCode:"Wheat"},
  {colorCode:"indigo"},
  {colorCode:"hotpink"},
  {colorCode:"lightblue"},
  {colorCode:"green"},
  {colorCode:"olive"}];
  noteListId: any;
  
  constructor(private note:NoteServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let component = this.route.snapshot.component;
    if (component == TrashComponent) {
      this.isTrash = true;
    }
    if (component == ArchiveNotesComponent) {
      this.isArchieve = true;
    }
  }
  onArchive() {
    let reqData={
      NoteId:[this.noteObject.noteId],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      window.location.reload();
    })
  }


  
  onClickTrash() {
   
    let reqData={
      NoteId:[this.noteObject.noteId],
    }
    console.log(reqData);
    this.note.TrashNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note trash Successfully",response);
      window.location.reload();
    })


  }

  selectColor(color:any)
  {
    this.noteListId = this.noteObject.color = color;
    let reqData = {
      color: color,
      noteId:this.noteObject.noteId,      
    };
    this.note.NotesColor(reqData).subscribe((response: any) => {
      console.log(response);
     
      console.log("color", reqData)
      window.location.reload();
    })
  }   

  onUnArchievenote() {  
  this.note.ArchiveNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }

  onRestore() {
      this.note.TrashNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log(response);
    })
  }
}

 

