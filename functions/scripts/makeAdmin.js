const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const auth = admin.auth();

// eslint-disable-next-line require-jsdoc
async function makeAdmin(email) {
  const role = "admin";

  const { users } = await auth.getUsers([
    { email },
  ]);

  if (users) {
    const { uid } = users[0];
    await auth.setCustomUserClaims(uid, {
      role,
    });

    const user = await admin.auth().getUser(uid);
    if (user && user.customClaims?.role === role) {
      const userRef = admin.firestore().collection("users").doc(uid);
      await userRef.update({
        role,
      });
    }
  }
}


if (process.argv.length > 2) {
  const email = process.argv[2];
  makeAdmin(email);

}
