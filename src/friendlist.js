import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();

const friendListContainer = document.getElementById("friend-list-container");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    friendListContainer.innerHTML = "<p>Please log in to see your friends.</p>";
    return;
  }

  const currentUID = user.uid;

  
  const userDocRef = doc(db, "userIDs", currentUID);
  const userSnap = await getDoc(userDocRef);

  if (!userSnap.exists()) {
    friendListContainer.innerHTML = "<p>Your user document does not exist.</p>";
    return;
  }

  const userData = userSnap.data();
  const friendsArray = userData.friends || [];

  if (friendsArray.length === 0) {
    friendListContainer.innerHTML = "<p>No friends added yet.</p>";
    return;
  }

  friendListContainer.innerHTML = "";

  for (const friendUID of friendsArray) {
    const friendRef = doc(db, "userIDs", friendUID);
    const friendSnap = await getDoc(friendRef);

    const div = document.createElement("div");
    div.classList.add("friend-card");

    if (friendSnap.exists()) {
      const friendData = friendSnap.data();

      div.innerHTML = `
        <div class="friend-card-inner">
          <p><strong>UserID:</strong> ${friendData.userID}</p>
          <p><strong>Email:</strong> ${friendData.email}</p>
          <button class="btn btn-primary view-profile-btn">View Profile</button>
        </div>
      `;

  
      div.querySelector(".view-profile-btn").addEventListener("click", () => {
        window.location.href = `friend-profile.html?uid=${friendUID}`;
      });

    } else {
      div.innerHTML = `<p>Unknown user: ${friendUID}</p>`;
    }

    friendListContainer.appendChild(div);
  }
});
