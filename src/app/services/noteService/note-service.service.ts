import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
token:any
  constructor(private http:HttpServiceService) {
    this.token=localStorage.getItem('token')
   }
   addNotes(data:any){
    console.log(data,this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postservice('https://localhost:44321/api/Note/Add',data,true,header);
   }
   getNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getservice('https://localhost:44321/api/Note/Get',true,header);
   }
   updateNotes(data:any, noteId:any){
    // console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putservice('https://localhost:44321/api/Note/Update?NoteId='+noteId,data,true,header);
   }
   ArchiveNotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putservice('https://localhost:44321/api/Note/Archieve?NoteId='+data,{},true,header);
   }
   TrashNotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.putservice(`https://localhost:44321/api/Note/TrashNotes/${data}`,{},true,header);
   }

   
NotesColor(data:any){
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': 'Bearer '+ this.token
    })
  }
  return this.http.putservice('https://localhost:44321/api/Note/Color?NoteId='+data+'&Color=' +data.color,{},true,header)
}

}

