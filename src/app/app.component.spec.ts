import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { GeoserveComponent } from './geoserve/geoserve.component';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { PlaceItemComponent } from './place-item/place-item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        AppComponent,
        GeoserveComponent,
        PlaceSearchComponent,
        PlaceItemComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'GeoServe'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GeoServe');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to GeoServe!');
  }));
});
