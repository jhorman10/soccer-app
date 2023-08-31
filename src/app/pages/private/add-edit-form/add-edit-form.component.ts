import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from 'src/app/models';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent {
  @Input() team!: Content;
  @Input() isEditing!: boolean;
  @Output() formSubmit: EventEmitter<Content> = new EventEmitter();

  onSubmit() {
    this.formSubmit.emit(this.team);
  }
}
