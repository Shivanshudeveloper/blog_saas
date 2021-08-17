const artistRow = document.querySelector(".artist-row");

async function getAuthor() {
  const citiesRef = firestore.collection("Authors");
  const snapshot = await citiesRef.get();
  var i = 1;
  snapshot.forEach((doc) => {
    if (i == 7) return;
    console.log(doc.id, "=>", doc.data());
    artistRow.innerHTML += `
    <div class="col-sm-6 col-lg-2">
    <div class="text-center">
        <div class="avatar avatar-xxl mb-2">
            <img class="avatar-img rounded-circle" src="${
              doc.data().filePath
            }" alt="authorPhoto">
        </div>
        <h5>${doc.data().name}</h5>
        <p class="m-0">${doc.data().email}</p>
    </div> 
</div> 
        `;
    i++;
  });
}

getAuthor();
