import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  show=false;
  createNoteForm!:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder, private note:NoteServiceService) { }

  ngOnInit(): void {
    this.createNoteForm=this.formbuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    });
  }
isShow(){
  this.show=true;
}
close(){
  this.show=false;
  this.submitted=true;
  if(this.createNoteForm.valid){
    console.log("notes created successfully");
    let resdata={
      title:this.createNoteForm.value.title,
      description:this.createNoteForm.value.description
    }
    console.log(resdata);
    this.note.addNotes(resdata).subscribe((result:any)=>{
      console.log(result);
      
    })
  }
  // console.log(this.t)
}
onSubmit(){
  this.submitted=true;

}
}
