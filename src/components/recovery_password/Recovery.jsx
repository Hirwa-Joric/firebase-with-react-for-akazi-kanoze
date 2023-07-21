import { useState } from "react";
import { auth } from "../../config/firebase-congig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Recovery() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (password === confirmPassword) {
      try {
        const user = auth.currentUser;
        await user.updatePassword(password);
        console.log("Password updated successfully");
        // Redirect to another page whicich might be the login page
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div>
      <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleChangePassword}>Submit</button>
    </div>
  );
}

export default Recovery;
