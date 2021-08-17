const firestore = firebase.firestore();
const authorDetail = document.querySelector(".authorDetail");

const url_string = window.location.href;
const url = new URL(url_string);
var id = url.searchParams.get("id");

async function getAuthorDetail() {
  const authorRef = firestore.collection("Authors").doc(id);
  const snapshot = await authorRef.get();
  if (!snapshot.exists) {
    console.log("No such document!");
  } else {
    authorDetail.innerHTML = `
    <div class="text-center ">
    <div class="avatar avatar-xxl mb-2">
      <img
        class="avatar-img rounded-circle"
        src="${snapshot.data().filePath}"
        alt="avatar"
      />
    </div>
    <h5>${snapshot.data().name}</h5>
    <p class="m-0">${snapshot.data().email}</p>
  </div>
        `;
  }
}

getAuthorDetail();

const blogCards = document.querySelector(".display-card");

async function getBlog() {
  console.log(id);
  const blogRef = firestore.collection("Blogs");
  const snapshot = await blogRef.where("authorId", "==", id).get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc) => {
    console.log(doc);
    var blogImage = `${doc.data().blog.photoImage}`;
    if (blogImage === "") blogImage = "assets/images/blog/3by4/01.jpg";
    blogCards.innerHTML += `
      <div class="col-sm-6 col-lg-4">
      <div class="card card-overlay-bottom card-img-scale overflow-hidden">
          <span class="card-featured" title="Featured post"><i class="fas fa-star"></i></span>

          <img src="${blogImage}" alt="blogImage" style="height:500px">
          <div class="card-img-overlay d-flex flex-column p-3 p-md-4">
              <div>
                  <a href="#" class="badge bg-warning"><i class="fas fa-circle me-2 small fw-bold"></i>${
                    doc.data().blog.category
                  }</a>
              </div>
              <div class="w-100 mt-auto">
                  <h4 class="text-white"><a href="post-single-5.html" class="btn-link text-reset stretched-link">${
                    doc.data().blog.title
                  }</a></h4>
                  <ul class="nav nav-divider text-white-force align-items-center small">
                      <li class="nav-item position-relative">
                          <div class="nav-link">by
                              <a href="#" class="stretched-link text-reset btn-link">${
                                doc.data().blog.author
                              }</a>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
          `;
  });
}

getBlog();
