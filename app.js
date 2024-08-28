const loginBtn = document.querySelector("#login-btn");
const loginID = document.querySelector("#login-id");

function popID() {
  const userID = loginID.value;
  if (!userID) {
    alert("아이디를 입력하세요");
  } else {
    alert(userID);
  }
}

function myFunction() {
  alert("1");
  alert("2");
  alert("3");
}

loginBtn.addEventListener("click", popID);
