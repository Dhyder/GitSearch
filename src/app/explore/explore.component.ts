import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../services/explorer.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})

export class ExploreComponent implements OnInit {

  account: any;
  emporiums: any;
  userId: any = 'Dhyder'
  constructor(private explorerService: ExplorerService) {

  }

  exploreAccount(){
    this.explorerService.updateAccount(this.userId);
 
    this.explorerService.getAccountDetails().subscribe((account: any) =>{
      console.log(account);
    this.account= account;   
    });
 
    this.explorerService.getAccountEmporiums().subscribe((emporiums: any) =>{
      console.log(emporiums);
    this.emporiums= emporiums;      
    
    })
  }
  
  ngOnInit(): void {
    this.exploreAccount()
  }
  

}