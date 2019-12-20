import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedlightPage } from './redlight.page';

describe('RedlightPage', () => {
  let component: RedlightPage;
  let fixture: ComponentFixture<RedlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
