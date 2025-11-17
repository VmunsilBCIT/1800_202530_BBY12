import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();

const friendListContainer = document.getElementById("friend-list-container");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    friendListContainer.innerHTML = "<p>Please log in to see your friends.</p>";
    return;
  }

  const currentUID = user.uid;

  const friendsRef = collection(db, "friends", currentUID, "list");
  const friendsSnap = await getDocs(friendsRef);

  if (friendsSnap.empty) {
    friendListContainer.innerHTML = "<p>No friends added yet.</p>";
    return;
  }

 
  friendListContainer.innerHTML = "";

  friendsSnap.forEach(async (friendDoc) => {
    const friendUID = friendDoc.id;

    const userRef = doc(db, "userIDs", friendUID);
    const userSnap = await getDoc(userRef);

    const div = document.createElement("div");
    div.classList.add("friend-card");

    if (userSnap.exists()) {
      const data = userSnap.data();

      div.innerHTML = `
        <div class="friend-card-inner">
          <p><strong>User ID:</strong> ${data.userID}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <button class="btn btn-primary view-profile-btn">View Profile</button>
        </div>
      `;

     
      div.querySelector(".view-profile-btn").addEventListener("click", () => {
        window.location.href = `friend-profile.html?uid=${friendUID}`;
      });

    } else {
      div.textContent = "Unknown friend";
    }

    friendListContainer.appendChild(div);
  });
});
