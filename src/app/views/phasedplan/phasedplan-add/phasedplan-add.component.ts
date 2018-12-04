import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Phasedplan} from '../../../classes/phasedplan';
import {PhasedplanService} from '../../../services/phasedplan.service';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-phasedplan-add',
  templateUrl: './phasedplan-add.component.html',
  styleUrls: ['./phasedplan-add.component.scss']
})
export class PhasedplanAddComponent implements OnInit {

  private id: number;
  protected phasedplan: Phasedplan = null;
  public httpError: HttpErrorResponse = null;

  protected submitForm(data?: any) {
    console.log(data, 'Data');
  }

  ngOnInit(): void {
    console.log('Starting');
    $(document).ready(function () {
      console.log('Ready');
      var next = 0;
      $('#add-more').click(function (e) {
        e.preventDefault();
        var addto = '#field' + next;
        var addRemove = '#field' + (next);
        next = next + 1;
        var newIn = '<div id="field' + next + '">\n' +
          '            <!-- Text input-->\n' +
          '            <div class="form-group row">\n' +
          '              <label class="col-md-3 col-control-label" for="action_id">Task name</label>\n' +
          '              <div class="col-md-9">\n' +
          '                <input ngModel id="action_id" name="task_name[]" type="text" placeholder="Task name" class="form-control">\n' +
          '              </div>\n' +
          '            </div>\n' +
          '            <!-- Text input-->\n' +
          '            <div class="form-group row">\n' +
          '              <label class="col-md-3 col-control-label" for="action_name">Task description</label>\n' +
          '              <div class="col-md-9">\n' +
          '                <input ngModel id="action_name" name="task_description[]" type="text" placeholder="Task description" class="form-control">\n' +
          '              </div>\n' +
          '            </div>\n' +
          '          </div>';
        var newInput = $(newIn);
        var removeBtn = '<div class="form-group"><div class="col-md-9 offset-md-3">' +
          '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button>' +
          '</div></div></div></div>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $('#field' + next).attr('data-source', $(addto).attr('data-source'));
        $('#count').val(next);

        $('.remove-me').click(function (e) {
          e.preventDefault();
          var fieldNum = this.id.charAt(this.id.length - 1);
          var fieldID = '#field' + fieldNum;
          $(this).parent().parent().remove();
          $(fieldID).remove();
        });
      });

    });
  }


}
