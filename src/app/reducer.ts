import { Action } from '@ngrx/store';
import { SystemMonitoringAppStore } from './home/home.model';

export function DashboardReducer(state = initialState, action: Action): SystemMonitoringAppStore {
    switch (action.type) {
       case state.SEARCH_LOADER_DATA:
          return { ...state, count: state.count + 2 };
       case state.SEARCH_NIGHTWORK_DATA:
          return { ...state, count: state.count - 1 };
       default:
          return state;
    }
    }