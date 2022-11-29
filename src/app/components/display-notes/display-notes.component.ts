import { Component, Input, OnInit, EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() childMessage:any;
  @Output() changeNoteEvent = new EventEmitter<any>();
  @Output() updatedisplay = new EventEmitter<any>();
  @Output() messageEvent = new EventEmitter<any>();
  @Output() onClickTrash =new EventEmitter<string>();
 
// show=false;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(notes:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '40%',
      height: 'auto',
      panelClass: 'updateDialog',
      data: notes,
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed', response);
      this.updatedisplay.emit(response);
    
    }
    
    )
    
    
  }

  // receiveMessagearchive(event:any){
  //   this.displayArchive.emit(event);
  // }
  recieveArchiveNote(event: any) {
    this.changeNoteEvent.emit(event);
  }
  Trash(event:any){
    this.onClickTrash.emit(event)
  }
  iconRefresh($event: any) {
    console.log($event);
    this.changeNoteEvent.emit($event)
  }
}