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
            this.load();
        })
    }

    addItem(item){
        this.items.push(item);
        this.save();
        this.cartChangeObserver.next(this.items);
    }
    save(){
        localStorage.setItem("appTeste.cart",JSON.stringify(this.items));
    }
    load(){
        var data = localStorage.getItem("appTeste.cart");
        if(data){
            this.items = JSON.parse(data);
            this.cartChangeObserver.next(this.items);
        }
    }
    removeItem(item){
        var index = this.items.indexOf(item);
        this.items.splice(index,1);
        this.cartChangeObserver.next(this.items);
        this.save();
    }
    clear() {
        this.items = [];
        localStorage.removeItem('appTeste.cart');
        this.cartChangeObserver.next(this.items);
    }
}