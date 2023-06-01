import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLogoComponent } from './project-logo.component';

describe('ProjectLogoComponent', () => {
  let component: ProjectLogoComponent;
  let fixture: ComponentFixture<ProjectLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLogoComponent]
    });
    fixture = TestBed.createComponent(ProjectLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
