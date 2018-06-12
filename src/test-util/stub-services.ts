import { User } from 'firebase';
import { Observable } from 'rxjs';

export const getAuthenticationServiceStub = ( jasmine ) => {

  return {
    isAdmin: jasmine.createSpy( 'isAdmin' ).and.returnValue( Observable.of(true) ),
    getAuthState: jasmine.createSpy( 'getAuthState' ).and.returnValue( Observable.of( { 'email': 'crystalfakemusic@audionaut.com',
  'photoURL': 'https://68.media.tumblr.com/8d4e5b85cdba11b2754b4711cc6c6b4f/tumblr_p1txiaKmqZ1rrrdbbo1_1280.png' } ) )
  };
};

export const getAngularFirestoreCollectionStub = ( jasmine ) => {
  const snapshotData = [{
    'payload': {
      'doc': {
        'data': jasmine.createSpy( 'data' ).and.returnValue( Observable.of( {} ) )
      }}}];

  const dataStub = {
    valueChanges: jasmine.createSpy( 'valueChanges' ).and.returnValue( Observable.of( [{}] ) ),
    snapshotChanges: jasmine.createSpy( 'snapshotChanges' ).and.returnValue( Observable.of( snapshotData ) ),
    add: jasmine.createSpy( 'add' )
  };

  return {
    collection: jasmine.createSpy( 'collection' ).and.returnValue( dataStub )
  };
};

export const getAngularFirestoreDocStub = ( jasmine ) => {
  const dataStub = {
    valueChanges: jasmine.createSpy( 'valueChanges' ).and.returnValue( Observable.of( [{}] ) )
  };

  return {
    doc: jasmine.createSpy( 'doc' ).and.returnValue( dataStub )
  };
};

export const getAngularFirestoreAuthStub = ( jasmine ) => {
  return {
    'authState': {
      'switchMap': jasmine.createSpy( 'switchMap' ).and.returnValue( Observable.of( [{}] ) )
    }
  };
};

export const getAngularFirestoreStub = ( jasmine ) => {
  return {};
};
