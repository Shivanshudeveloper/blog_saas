const firestore = firebase.firestore();
const blogCards = document.querySelector(".display-card");

async function getBlog() {
  const blogRef = firestore.collection("Blogs");
  const snapshot = await blogRef.get();
  snapshot.forEach((doc) => {
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
