import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedModalPage } from './sched-modal.page';

describe('SchedModalPage', () => {
  let component: SchedModalPage;
  let fixture: ComponentFixture<SchedModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
