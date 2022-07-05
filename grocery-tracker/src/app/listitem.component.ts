import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'li-item',
    template:
    `<li 
    *ngFor="let item of cgrocItems; even as e" 
    (click)="removeItem(item)"
    [ngStyle]="{'color': e?'blue':'red'}" >
    {{item}}
    </li>
    `,
    styles: []
})
export class ListItemComponent {
    @Input() cgrocItems: Array<String> = [];

    @Output() itemClicked: EventEmitter<String> = new EventEmitter<String>();

    removeItem(item: String){
        this.itemClicked.emit(item);
        alert('event raised');
    }

}