import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss'
})
export class HttpClientComponent {
  searchControl = new FormControl();
  user$:Observable<any> = of(null);
  favarites:any[] =JSON.parse(localStorage.getItem('favarites') || '[]');
  showFavarite = false;
  showHistoriPoisk = false;
  showHistoryFavorites = false;
  userSearchService:ApiServiceService = inject(ApiServiceService);
  idPoisck:string[]= [];
  faviriteHistory:any[] = [];

  clickPoiskUser():void{
    const userID = this.searchControl.value;
    this.user$ = this.userSearchService.searchUserID(userID);
    this.idPoisck.push(userID);
  };

  togleFavorite(user:any):void{
    const findeIndexFavorite = this.favarites.findIndex((item:any)=>item.id === user.id);
    if(findeIndexFavorite === -1){
      this.favarites.push(user);
      this.faviriteHistory.push(this.searchControl.value)
    }else{
      this.favarites.splice(findeIndexFavorite, 1);
    }
    localStorage.setItem('favarites', JSON.stringify(this.favarites));
  }

  isFavorite(user:any):boolean{
    return this.favarites.some((item:any)=> item.id === user.id);
  }

  togleAllUser():void{
    this.showFavarite = !this.showFavarite;
    this.user$ = this.showFavarite?of(this.favarites): of(null);
  }

  togleSpisokID():void{
  this.showHistoriPoisk = !this.showHistoriPoisk;
  }

  clearSearch():void{
    this.idPoisck =[];
    this.faviriteHistory = [];
    localStorage.clear();
  }

  togleSpisokIDFavorite():void{
    this.showHistoryFavorites = !this.showHistoryFavorites;
  }

}
