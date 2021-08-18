const firestore = firebase.firestore();

const badge = document.querySelector(".badge");
const title = document.querySelector(".title");
const authorName = document.querySelector(".authorName");
const blogDate = document.querySelector(".blogDate");
const blogImage = document.querySelector(".blogImage");
const description = document.querySelector(".description");

var authorId, authorPhoto;

const authorDescImage = document.querySelector(".authorDescImage");
const authorDescName = document.querySelector(".authorDescName");
const authorDescEmail = document.querySelector(".authorDescEmail");
const authorDescPhone = document.querySelector(".authorDescPhone");

const url_string = window.location.href;
const url = new URL(url_string);
var id = url.searchParams.get("id");

async function getSingleBlog() {
  const blogRef = firestore.collection("Blogs").doc(id);
  const snapshot = await blogRef.get();
  if (!snapshot.exists) {
    console.log("No such document!");
  } else {
    badge.innerHTML = `<i class="fas fa-circle me-2 small fw-bold"></i>${
      snapshot.data().blog.category
    }`;
    title.innerHTML = `${snapshot.data().blog.title}`;
    authorName.innerHTML = `${snapshot.data().blog.author}`;
    blogDate.innerHTML = `${snapshot.data().blog.date}`;
    // blogDate.innerHTML = `${snapshot.data().blog.date}`;
    blogImage.src = `${snapshot.data().blog.photoImage}`;
    description.innerHTML = `${snapshot.data().blog.description}`;
    authorId = snapshot.data().authorId;

    const authorRef = firestore.collection("Authors").doc(authorId);
    const snapshot1 = await authorRef.get();
    if (!snapshot1.exists) {
      console.log("No such document!");
    } else {
      console.log(snapshot1.data());
      authorDescImage.src = snapshot1.data().filePath;
      authorDescName.innerHTML = `${snapshot1.data().name}`;
      authorDescEmail.innerHTML = `${snapshot1.data().email}`;
      authorDescPhone.innerHTML = `${snapshot1.data().phoneNum}`;
    }
  }
}

getSingleBlog();
