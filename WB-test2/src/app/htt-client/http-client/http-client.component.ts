import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, Observable, of, tap } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss'
})
export class HttpClientComponent {
 public searchControl = new FormControl();
 public user$:Observable<any> = of(null);
 public  favarites:any[] =JSON.parse(localStorage.getItem('favarites') || '[]');
 public showFavarite = false;
 public  showHistoriPoisk = false;
 public  showHistoryFavorites = false;
 public  faviriteHistory:any[] = [];
 public  viewedUsers: any[] = []
  private userSearchService:ApiServiceService = inject(ApiServiceService);
  private snackBar: MatSnackBar = inject(MatSnackBar);

  public   clickPoiskUser(): void {
      const userID = this.searchControl.value;
       this.user$ = this.userSearchService.searchUserID(userID).pipe(
      tap(user => {
         if (user) {
          this.viewedUsers.push(user);
      }
    }),
    catchError(() => {
      this.snackBar.open('Пользователь не найден', 'Закрыть', {
        duration: 3000,
        verticalPosition: 'top'
      });
      return of(null);
    })
  );
}

public togleFavorite(user:any):void{
    const findeIndexFavorite = this.favarites.findIndex((item:any)=>item.id === user.id);
    if(findeIndexFavorite === -1){
      this.favarites.push(user);
      this.faviriteHistory.push(this.searchControl.value)
    }else{
      this.favarites.splice(findeIndexFavorite, 1);
    }
    localStorage.setItem('favarites', JSON.stringify(this.favarites));
  }

  public isFavorite(user:any):boolean{
    return this.favarites.some((item:any)=> item.id === user.id);
  }

  public togleAllUser():void{
    this.showFavarite = !this.showFavarite;
    this.user$ = this.showFavarite?of(this.favarites): of(null);
  }

  public togleSpisokID():void{
    if (this.showHistoryFavorites){
      this.showHistoriPoisk =!this.showHistoriPoisk;
      this.showHistoryFavorites =!this.showHistoryFavorites;
    } else{
      this.showHistoriPoisk =!this.showHistoriPoisk;
    }
    }



    public clearSearch():void{
    this.viewedUsers = [];
    this.faviriteHistory = [];
    localStorage.clear();
  }

  public togleSpisokIDFavorite():void{
    if(this.showHistoriPoisk){
      this.showHistoriPoisk = !this.showHistoriPoisk;
      this.showHistoryFavorites = !this.showHistoryFavorites;
    } else{
      this.showHistoryFavorites =!this.showHistoryFavorites;
    }

  }

}
