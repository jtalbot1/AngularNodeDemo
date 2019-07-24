import { CoursesService } from './course/courses.service';
import {Component, Output, EventEmitter} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    template: `
    <h5><a class="badge badge-light" (click)="invokeParentMethod()">Select</a></h5>`,
})
export class ChildMessageRenderer implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }
    constructor( private _coursesService: CoursesService){ }
    public invokeParentMethod() {
        console.log(this.params.context.componentParent.courses[0].id);
        this.params.context.componentParent.methodFromParent(this.params.node.rowIndex)
    }
    refresh(): boolean {
        return false;
    }
}