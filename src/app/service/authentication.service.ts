import { Observable ,  BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../model/User';
import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthenticationService implements AuthenticationServiceInterface {

  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.authState
      .switchMap(auth => {
        console.log('auth:', auth);
        if (auth) {
          // Logged in
          return afs.doc<User>('user/' + auth.uid).valueChanges();
        } else {
          // Not logged in
          return Observable.of(null);
        }
      })
      .subscribe(user => {
        this.user.next(user);
      });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAdmin() {
    return this.user.take(1).map(user => _.has(_.get(user, 'roles'), 'admin'));
  }

  getAuthState() {
    return this.afAuth.authState;
  }
}

export interface AuthenticationServiceInterface {
  login(): void;
  logout(): void;
  isAdmin(): Observable<boolean>;
  getAuthState(): Observable<any>;
}
