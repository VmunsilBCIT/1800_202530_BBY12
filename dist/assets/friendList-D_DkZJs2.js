import{a as m,g,o as w,d,c}from"./style-D4sG9sV-.js";import"./site-footer-F4h_ne-t.js";const f=m(),h=g(),L=new URLSearchParams(window.location.search);L.get("uid");document.getElementById("friend-pfp");const n=document.getElementById("friend-list-container");w(h,async i=>{if(!i){n.innerHTML="<p>Please log in to see your friends.</p>";return}const p=i.uid,l=d(f,"userIDs",p),s=await c(l);if(!s.exists()){n.innerHTML="<p>Your user document does not exist.</p>";return}const o=s.data().friends||[];if(o.length===0){n.innerHTML="<p>No friends added yet.</p>";return}n.innerHTML="";for(const t of o){const u=d(f,"userIDs",t),a=await c(u),e=document.createElement("div");if(e.classList.add("friend-card"),a.exists()){const r=a.data();e.innerHTML=`
        <div class="friend-card-inner">
         <div class="profile-card">
          <img
            id="friend-pfp"
            class="profile-img"
            src="${r.profileImage}"
          />
          <p> ${r.username}</p>
          <p><strong>Email:</strong> ${r.email}</p>
          <button class="btn btn-primary view-profile-btn">View Profile</button>
        </div>
      `,e.querySelector(".view-profile-btn").addEventListener("click",()=>{window.location.href=`friend-profile.html?uid=${t}`})}else e.innerHTML=`<p>Unknown user: ${t}</p>`;n.appendChild(e)}});
