import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any;
  isArchive=false;
  isTrash=false;

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
  
  noteListId:any;
  archieve: boolean = false;
  trash: boolean = false;
  constructor(private note:NoteServiceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // let component = this.activateRoute.snapshot.component;
    // if (component == TrashComponent) {
    //   this.trash = true;
    // }
    // if (component == TrashComponent) {
    //   this.archieve = true;
    // }
  }
  onArchive() {
    let reqData={
      NoteId:[this.noteObject.noteId],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      // window.location.reload();
    })
  }


  
  onClickTrash() {
   
    let reqData={
      NoteId:[this.noteObject.noteId],
    }
    console.log(reqData);
    this.note.TrashNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note trash Successfully",response);
      // window.location.reload();
    })


  }

  selectColor(color:any){
    this.noteListId = this.noteObject.color=color;
    let reqData = {
      color: color,
      noteId:[this.noteObject.noteId],    
    };
    this.note.NotesColor(this.noteObject.noteId).subscribe((response: any) => {
      console.log(response);
      
      console.log("color", reqData.color)
    })
  }
}
