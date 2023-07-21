import { useState } from "react";
import { auth ,googleProvider} from "../../config/firebase-congig";
import { createUserWithEmailAndPassword ,signInWithPopup , signOut , sendPasswordResetEmail} from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("hirwajoric@gmail.com");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const signIn = async () => {
    try {
      await auth.setPersistence(
        rememberMe
          ? auth.Auth.Persistence.LOCAL
          : auth.Auth.Persistence.SESSION
      );
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("user created");
    } catch (error) {
      console.log(error);
    }
  };

  const googleSignIn = async () => {
    try {
      await auth.setPersistence(
        rememberMe
          ? auth.Auth.Persistence.LOCAL
          : auth.Auth.Persistence.SESSION
      );
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const passwordRecover = async () => {
    try {
      await sendPasswordResetEmail(auth, email ,{ url: "http://localhost:3000/Recovery" });
      console.log("Password reset email sent! to",email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setRememberMe(value);
  };

  return (
    <div>
      <button onClick={googleSignIn} className="googleButton">
        Sign in with google{" "}
      </button>
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <label>
        Remember me:
        <input type="checkbox" name="rememberMe" checked={rememberMe} onChange={handleInputChange} />
      </label>
      <button onClick={signIn}>Submit</button>
      <button onClick={Logout}>Logout</button>
      <button onClick={passwordRecover}>Recovery Password</button>
    </div>
  );
}

export default Auth;
