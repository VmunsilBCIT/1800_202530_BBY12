import{e as i,f as d,q as l,w as u,h as p,g as y,d as m,i as g,j as f}from"./style-D4sG9sV-.js";import"./site-footer-BDwImqqY.js";const h=document.getElementById("search-button"),b=document.getElementById("search-input"),I=document.getElementById("result-container"),c=document.getElementById("result-text"),E=document.getElementById("back-btn");function t(e){I.style.display="block",c.innerHTML=e,c.style.color="black"}h.addEventListener("click",async()=>{let e=b.value.trim();if(e=Number(e),isNaN(e)){t('<span style="color:red">Please enter a valid numeric User ID.</span>');return}try{const r=i(d,"userIDs"),o=l(r,u("userID","==",e)),s=await p(o);if(s.empty){t('<span style="color:red">No user found with that ID.</span>');return}s.forEach(n=>{const a=n.data();t(`
        <div>
          <p>Found user: <strong>${a.email}</strong></p>
          <button id="add-friend-btn" style="margin-top:10px; padding:8px 16px;" class="btn btn-primary btn-lg">
            Add Friend
          </button>
        </div>
      `),document.getElementById("add-friend-btn").onclick=()=>D(n.id,a.email)})}catch(r){console.error(r),t('<span style="color:red">Error searching for user.</span>')}});async function D(e,r){const s=y().currentUser;if(!s){t('<span style="color:red">You must be logged in.</span>');return}try{const n=m(d,"userIDs",s.uid);await g(n,{friends:f(e)}),t(`
      <p style="color:green;">
        Successfully added <strong>${r}</strong> as a friend!
      </p>
    `)}catch(n){console.error(n),t('<span style="color:red">Error adding friend.</span>')}}E.addEventListener("click",()=>{window.location.href="/friends.html"});
