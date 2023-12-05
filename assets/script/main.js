const button = document.querySelector("button");
const input = document.querySelector("input");
const copyBtn = document.querySelector(".input i");
let copy = document.querySelector(".copy");

button.addEventListener("click", () => {
  generatePassword();
  // This event to show the text is copied and hidden after .5s
  copyBtn.addEventListener("click", () => {
    copy.style.display = "flex";
    input.select();
    document.execCommand("copy");

    input.value = "";
    setTimeout(() => {
      copy.style.display = "none";
    }, 500);
  });
  // This event to show the text is copied and hidden after .5s
});

// Function to create a random password
function generatePassword() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  let password = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  input.value = password;
}
