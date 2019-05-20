import {Injectable} from '@angular/core';
import {Http,Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    private serviceUrl:string = "http://localhost:54943/";
    constructor(private http: Http){}

    createUser(data: any){

        return this.http.post(this.serviceUrl + 'clientes',data).map((res: Response)=>res.json());
    }
    authenticate(data:any){
        const dt = "grant_type=password&username=" + data.userName + "&password=" + data.password;
        const options = new RequestOptions({headers : new Headers({'Content-Type': 'application/x-www-form-urlencoded'})});
        return this.http.post(this.serviceUrl + 'v1/autenticar',dt,options).map((res:Response)=>res.json());
    }
    getProducts(){
        
        return this.http.get(this.serviceUrl + "v1/produtos").map((res:Response)=>res.json());
    }
    createOrder(data: any) {
        var token = localStorage.getItem('appTeste.Token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        let options = new RequestOptions({ headers: headers });
        console.log(data);
        return this.http
            .post(this.serviceUrl + 'v1/orders', data, options)
            .map((res: Response) => res.json());
    }
}