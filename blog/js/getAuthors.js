const artistRow = document.querySelector(".artist-row");

async function getAuthor() {
  const authorRef = firestore.collection("Authors");
  const snapshot = await authorRef.get();
  var i = 1;
  snapshot.forEach((doc) => {
    if (i == 5) return;
    artistRow.innerHTML += `
    <div class="col-sm-6 col-lg-2">
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
    i++;
  });
}

getAuthor();
