import { Component, OnInit,Inject,Output,EventEmitter } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any
  description: any
  id: any
  @Output() noteUpdated= new EventEmitter<any>();
  constructor(private notes:NoteServiceService ,  public dialogRef: MatDialogRef<UpdateNotesComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title=data.title;
    this.description=data.description;
    this.id=data.noteId;
   }

  ngOnInit(): void {
  }
  closeDialog() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId: this.id,
    }
    this.notes.updateNotes(reqData, this.id).subscribe((response:any) =>{ 
      console.log("update response", response); 
      this.noteUpdated.emit(response);   
    })
    this.dialogRef.close()
  }
}
