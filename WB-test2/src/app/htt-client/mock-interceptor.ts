import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiServiceService } from "./api-service.service";
import { of } from "rxjs";


@Injectable()
export class MockInterceptor implements HttpInterceptor {
    userSerch:any = inject(ApiServiceService);
    intercept(req:HttpRequest<any>,next:HttpHandler){
      if(req.url.includes('https://api.github.com/users/')){
        const userId = req.url.split('/').pop();
        if(userId === '1')
          return of(new HttpResponse({ status: 200,body: this.userSerch.getMockUser()}))
      }
      
      return next.handle(req);
    }

}


