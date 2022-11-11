import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList:any;
  constructor(private note:NoteServiceService) { }

  ngOnInit(): void {
  }

  TrashList() {
    console.log('Get trash list successful');
    this.note.getNotes().subscribe((response : any) => {
      // console.log(response);
      this.trashList=response.data; 
      this.trashList.reverse();     
      this.trashList = this.trashList.filter((object:any) => {
        return object.trash == true;
      })
      console.log("trash list", this.trashList);
    })
  }

  Untrash(note:any) {

    let reqData={
      noteID:note.noteID,
    }
    console.log(reqData)
    this.note.TrashNotes(reqData).subscribe((response: any) => {
      console.log("Note Untrashed Successfully",response);
    })
  }

}
