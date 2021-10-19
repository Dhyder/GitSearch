import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  
  private userId: string = '';
  private emporiumName: string = '';
  private clientId: string= '281caa799822aa521955';
  private clientSecret: string = '8d884e9e0304bd56495459a934c39e8173da2893';
  api="https://api.github.com/users/"
  
  constructor(private http: HttpClient) {
    console.log('service is now ready');
  }
  getAccountDetails(){
   return this.http.get(this.api + this.userId + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
 
 }
 getAccountEmporiums(){
   return this.http.get(this.api + this.userId + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
 }

 updateAccount(userId:string){
   this.userId = userId;
 }
 UpdateEmporium(emporiumName:string) {
   this.emporiumName = emporiumName;
 }

 token = "?access_token=" + environment.GithubKey;

  searchEmporiums() {
   return this.http.get('https://api.github.com/search/repositories?q=' + this.emporiumName + this.token )
 }

}
