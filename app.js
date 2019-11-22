//Init Github
const github = new Github();
//Init UI
const ui = new UI();

//search input
searchUser = document.getElementById("searchUser");

//search input Event Listener
searchUser.addEventListener("keyup", e => {
  //Get  input text
  const userText = e.target.value;
  if (userText !== "") {
    //Make A Http call
    github.getUser(userText).then(data => {
      console.log(data);
      // console.log(dataobj.profile.message, typeof dataobj.profile);
      if (data.profile.message === "Not Found") {
        //show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //show Profile
        ui.showProfile(data.profile);
        //show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
