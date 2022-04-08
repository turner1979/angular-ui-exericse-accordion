import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onOpenAnswer', () => {

    it('should set the openAnswer property to the provided index', () => {
      component.onOpenAnswer(2);
      fixture.detectChanges();
      expect(component.openAnswer).toEqual(2);
    });

    it('should set the openAnswer property to -1 if the provided index is the same as openAnswer', () => {
      component.openAnswer = 4;
      component.onOpenAnswer(4);
      fixture.detectChanges();
      expect(component.openAnswer).toEqual(-1);
    });

  });

});
