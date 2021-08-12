function signUp() {
  //   e.preventDefault();
  var userEmail = document.getElementById("exampleInputEmail1").value;
  var userPassword = document.getElementById("exampleInputPassword1").value;
  var userPasswordConfirm = document.getElementById(
    "exampleInputPassword2"
  ).value;

  if (userPassword !== userPasswordConfirm) {
    alert("Passwords do not match");
    return;
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
          uid = user.uid;
        }
        var firebaseRef = firebase.database().ref();
        var userData = {
          userEmail: userEmail,
          userPassword: userPassword,
        };
        firebaseRef.child(uid).set(userData);
        swal(
          "Your Account Created",
          "Your account was created successfully, you can log in now."
        ).then((value) => {
          setTimeout(function () {
            window.location.replace("./index.html");
          }, 1000);
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal({
          type: "error",
          title: "Something went wrong",
          text: errorMessage,
        });
      });
  }
}

function signIn() {
  var userSIEmail = document.getElementById("exampleInputEmail1").value;
  var userSIPassword = document.getElementById("exampleInputPassword1").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userSIEmail, userSIPassword)
    .then(() => {
      swal({
        type: "successfull",
        title: "Succesfully signed in",
      }).then((value) => {
        setTimeout(function () {
          window.location.replace("./index.html");
        }, 1000);
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal({
        type: "error",
        title: "Something went wrong",
        text: errorMessage,
      });
    });
}
