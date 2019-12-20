import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleFAQPage } from './single-faq.page';

describe('SingleFAQPage', () => {
  let component: SingleFAQPage;
  let fixture: ComponentFixture<SingleFAQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFAQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleFAQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
