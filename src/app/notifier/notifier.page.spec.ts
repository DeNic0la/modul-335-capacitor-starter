import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifierPage } from './notifier.page';

describe('NotifierPage', () => {
  let component: NotifierPage;
  let fixture: ComponentFixture<NotifierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
