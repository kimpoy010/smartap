import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConditionModalPage } from './condition-modal.page';

describe('ConditionModalPage', () => {
  let component: ConditionModalPage;
  let fixture: ComponentFixture<ConditionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
