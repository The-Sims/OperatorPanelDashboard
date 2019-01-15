import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Phasedplan} from '../../../classes/phasedplan';
import {PhasedplanService} from '../../../services/phasedplan.service';
import {ReactiveFormsModule} from '@angular/forms';
import {PhasedplanTask} from '../../../classes/task';
import {catchError, tap} from 'rxjs/operators';


@Component({
  selector: 'app-phasedplan-add',
  templateUrl: './phasedplan-add.component.html',
  styleUrls: ['./phasedplan-add.component.scss']
})
export class PhasedplanAddComponent implements OnInit {

  private id: number;
  protected phasedplan: Phasedplan = null;
  public httpError: HttpErrorResponse = null;

  protected fieldArray: Array<any> = [];
  protected phasedplanName: string;
  private newAttribute: any = {};

  constructor(private phasedplanService: PhasedplanService) {
  }

  protected submitForm(data?: any) {
    this.phasedplan = new Phasedplan();
    this.phasedplan.name = this.phasedplanName;
    for (const row of this.fieldArray) {
      const task = new PhasedplanTask();
      task.name = row.name;
      task.message = row.description;
      this.phasedplan.tasks.push(task);
    }
    if (this.newAttribute.name != null && this.newAttribute.description != null) {
      const task = new PhasedplanTask();
      task.name = this.newAttribute.name;
      task.message = this.newAttribute.description;
      this.phasedplan.tasks.push(task);
    }
    console.log(this.phasedplan);

    this.phasedplanService.save(this.phasedplan).pipe(
      tap((data: Phasedplan) => console.log(data, 'data'))
    ).subscribe(data => console.log(data));
  }

  addTask() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  ngOnInit(): void {

  }


}
