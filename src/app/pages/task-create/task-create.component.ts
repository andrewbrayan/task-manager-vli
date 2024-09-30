import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskStatusEnum } from '@common/models/task-status.enum';
import { IState, ITask } from '@common/models/task.interfaces';
import { uniquePersonNamesValidator } from '@common/validators/unique-person-name.validator';
import { Store } from '@ngrx/store';
import * as TaskActions from '@store/task.actions';
import { v4 } from 'uuid';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  taskForm!: FormGroup;
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      dueDate: ['', Validators.required],
      persons: this.fb.array(
        [
          this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            age: ['', [Validators.required, Validators.min(18)]],
            skills: this.fb.array([this.fb.control('', Validators.required)]),
          }),
        ],
        { validators: uniquePersonNamesValidator() }
      ),
    });
  }

  get persons(): FormArray {
    return this.taskForm.get('persons') as FormArray;
  }

  getSkills(personIndex: number): FormArray {
    return this.persons.controls[personIndex].get('skills') as FormArray;
  }

  addPerson(): void {
    const personForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]),
    });
    this.persons.push(personForm);
  }

  removePerson(index: number): void {
    this.persons.removeAt(index);
  }

  addSkill(personIndex: number): void {
    const skills = this.getSkills(personIndex);
    skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number): void {
    const skills = this.getSkills(personIndex);
    skills.removeAt(skillIndex);
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: ITask = {
        ...this.taskForm.value,
        id: v4(),
        status: TaskStatusEnum.PENDING,
      };

      this.store.dispatch(TaskActions.createTask({ task: newTask }));
      this.router.navigate(['/tasks']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/tasks']);
  }
}
