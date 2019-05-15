import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class CartService{
    public items: any[]=[];
    cartChange:Observable<any>;
    cartChangeObserver:Observer<any>;

    constructor(){
        this.cartChange = new Observable((observer:Observer<any>)=>{
            this.cartChangeObserver = observer;
        })
    }

    addItem(item){
        this.items.push(item);
        this.cartChangeObserver.next(this.items);
    }
}