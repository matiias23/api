import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _url = "20.231.202.18:8000";
  
  constructor(private http:HttpClient) {

   }

   getData(){
    let header = new HttpHeaders()
    .set('Type-content','application/json')
    return this.http.get(this._url,{
      headers:header
    })
   }

   postData(data:any){
    return this.http.post(this._url,data)
    }

    putData(){
      let header = new HttpHeaders()
    .set('Type-content','application/json')
      return this.http.put(this._url,header)
    }

    deleteData(){
      return this.http.delete(this._url,)
    }
    
}

   


