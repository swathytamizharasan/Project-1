import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SystemMonitoringAppStore } from './home.model';

@Component({
  selector: 'local-home',
  templateUrl: './home.component.html'
  //styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(private store : Store<SystemMonitoringAppStore>)
  {

  }
  title = 'Home page';

  searchLoaderData()
  {
this.store.dispatch(
  payload: <SystemMonitoringAppStore> {
    onlineDate : string,
    locationContext: string
  },
  {type: 'SEARCH_LOADER_DATA'}
  );
  }

  searchNightWorkData()
  {
    this.store.dispatch({type : 'SEARCH_NIGHTWORK_DATA'});
  }
}
