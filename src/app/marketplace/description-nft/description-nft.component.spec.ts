import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionNftComponent } from './description-nft.component';

describe('DescriptionNftComponent', () => {
  let component: DescriptionNftComponent;
  let fixture: ComponentFixture<DescriptionNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
