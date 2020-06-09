import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceinfoPage } from './deviceinfo.page';

describe('DeviceinfoPage', () => {
  let component: DeviceinfoPage;
  let fixture: ComponentFixture<DeviceinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
