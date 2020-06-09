import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HapticPage } from './haptic.page';

describe('HapticPage', () => {
  let component: HapticPage;
  let fixture: ComponentFixture<HapticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapticPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HapticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
