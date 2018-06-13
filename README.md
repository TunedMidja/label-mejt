# LabelMejt

The Micro CMS for record labels.

A tiny CMS tailor-made for record labels. PWA made with Angular 6 and Firebase. No traditional backend needed. Super-responsive layout.


## Development

Use correct Node version:
```sh
$ nvm use
```

Start development server:
```sh
$ yarn dev
```

Point your browser to *http://localhost:4200/*


## Testing

Run the tests:
```sh
$ yarn test
```

## Firebase Hosting

Setup [Firebase Hosting](https://firebase.google.com/docs/hosting/).

To deploy to Firebase:
```sh
yarn deploy
```


## Firebase Authentication

The rules are located in [firestore.rules](firestore.rules).

It restricts write to admin users only and a user is given admin rights in the Firebase DB like for example:

```json
{ 
  "user": {
    "123": {
      "email": "tunedmidja@gmail.com",
      "roles": {
        "admin": true 
      }
    }
  }
}
```

, where 123 is the user id when logging with Google.
This data may be edited from the [Firebase Console](
https://console.firebase.google.com/).
