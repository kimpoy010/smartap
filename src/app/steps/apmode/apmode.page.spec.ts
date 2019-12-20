import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApmodePage } from './apmode.page';

describe('ApmodePage', () => {
  let component: ApmodePage;
  let fixture: ComponentFixture<ApmodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApmodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
