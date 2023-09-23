import { auth, firestore } from "firebase-admin";
import * as functions from "firebase-functions/v1";
import * as logger from "firebase-functions/logger";


// for now
const role = "trainee";


export const onUserCreate = functions.region("europe-west3")
  .auth.user().onCreate(
    async (user) => {
      const { uid } = user;
      const userRef = firestore().collection("users").doc(uid);
      logger.info(`onUserCreate (${uid})`);

      await auth().setCustomUserClaims(uid, {
        role,
      });

      return userRef.set({
        name: user.displayName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        photoURL: user.photoURL || "",
        dateOfBirth: null,
        role,
      });
    }
  );
