import firebase from "firebase"

import {
   API_KEY,
   AUTH_DOMAIN,
   DATABASE_URL,
   PROJECT_ID,
   STORAGE_BUCKET,
   MESSAGING_SENDER_ID,
   APP_ID
} from "react-native-dotenv"

var firebaseConfig = {
   apiKey: API_KEY,
   authDomain: AUTH_DOMAIN,
   databaseURL: DATABASE_URL,
   projectId: PROJECT_ID,
   storageBucket: STORAGE_BUCKET,
   messagingSenderId: MESSAGING_SENDER_ID,
   appId: APP_ID,
};

export default firebaseConfig


