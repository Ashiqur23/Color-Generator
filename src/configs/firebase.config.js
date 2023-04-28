import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPI-ObvwJxQjhCNL_FUOam2lP1xTWYbp0",
  authDomain: "authentication-with-fire-26f29.firebaseapp.com",
  projectId: "authentication-with-fire-26f29",
  storageBucket: "authentication-with-fire-26f29.appspot.com",
  messagingSenderId: "1034483904940",
  appId: "1:1034483904940:web:6e70c6f5e31acc44964a09"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
