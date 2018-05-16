import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { TablePage } from '../table/table';
import { GroupPage } from '../group/group';
import { MatchesPage } from '../matches/matches';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = GroupPage;
  tab2Root: any = MatchesPage;
  tab3Root: any = TablePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
