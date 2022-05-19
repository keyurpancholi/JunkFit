import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import DisplayProfileForm from "../Components/DisplayProfileForm";

async function testing() {
  const q = query(
    collection(db, "JunkFit"),
    where("uid", "==", auth.currentUser.uid)
  );
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs[0].data());
}

function DisplayProfile() {
  // testing();
  return (
    <div>
      <Nav />
      <DisplayProfileForm />
    </div>
  );
}

export default DisplayProfile;
