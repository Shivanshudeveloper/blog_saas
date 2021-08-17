const firestore = firebase.firestore();
const artistRow = document.querySelector(".artist-row");

async function getAllAuthor() {
  const citiesRef = firestore.collection("Authors");
  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    artistRow.innerHTML += `
    <div class="col-sm-6 col-lg-3">
    
    <div class="text-center">
        <div class="avatar avatar-xxl mb-2">
            <img class="avatar-img rounded-circle" src="${
              doc.data().filePath
            }" alt="authorPhoto">
        </div>
        <a href="/blog/artist-detail.html?id=${doc.id}">
          <h5>${doc.data().name}</h5>
        </a>
        <p class="m-0">${doc.data().email}</p>
    </div> 
</div> 
        `;
  });
}

getAllAuthor();
