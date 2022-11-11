import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any;
  @Output() NotesDisplay = new EventEmitter<string>();
  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#B0C4DE', name: 'LightSteelBlue' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown'},
  ];
  noteId:any;
  archieve =false;
  trash=false;
  constructor(public note:NoteServiceService) { }

  ngOnInit(): void {
    
  }
  onArchive() {
    let reqData={
      NoteId:[this.noteObject.noteId],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      
    })
  }
  
  onDelete() {

    let reqData={
      NoteId:[this.noteObject.noteId],
    }
    console.log(reqData)
    this.note.TrashNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note trash Successfully",response);
      
    })
    
  }
  selectColor(colors:any){
    let reqData = {
      color : colors.name,
      noteID : this.noteObject.noteID
    }
    console.log(reqData);
     this.note.NotesColor(reqData).subscribe((response:any) =>{
      console.log(response);
      this.NotesDisplay.emit(response);
    })
  }
}
