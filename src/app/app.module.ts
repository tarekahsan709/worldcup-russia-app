import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { WorldCupApp } from './app.component';

import { TablePage } from '../pages/table/table';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { GroupPage } from '../pages/group/group';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { MatchDetailPage } from '../pages/match-detail/match-detail';
import { MatchesPage } from '../pages/matches/matches';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    WorldCupApp,
    TablePage,
    AccountPage,
    LoginPage,
    PopoverPage,
    GroupPage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    MatchDetailPage,
    MatchesPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(WorldCupApp, {}, {
      links: [
        {component: TabsPage, name: 'TabsPage', segment: 'tabs-page'},
        {component: GroupPage, name: 'Group', segment: 'group'},
        {component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId'},
        {component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter'},
        {component: MatchesPage, name: 'Matches', segment: 'matches'},
        {component: MatchDetailPage, name: 'MatchDetail', segment: 'matchDetail/:matchId'},
        {component: TablePage, name: 'Table', segment: 'table'},
        {component: TutorialPage, name: 'Tutorial', segment: 'tutorial'},
        {component: SupportPage, name: 'SupportPage', segment: 'support'},
        {component: LoginPage, name: 'LoginPage', segment: 'login'},
        {component: AccountPage, name: 'AccountPage', segment: 'account'},
        {component: SignupPage, name: 'SignupPage', segment: 'signup'}
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WorldCupApp,
    TablePage,
    AccountPage,
    LoginPage,
    PopoverPage,
    GroupPage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    MatchDetailPage,
    MatchesPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule {
}
