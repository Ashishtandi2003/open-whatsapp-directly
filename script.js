const phone = document.querySelector("#phone");
const butt = document.querySelector("#butt");

const redirect = (num) => {
  if (num.length >= 10) {
    if (num[0] === "+") {
      num = num.slice(1);
      let url = "https://api.whatsapp.com/send?phone=" + num;
      // window.location.href = url;
      window.open(url);
    } else {
      if (num.length === 10) {
        let url = "https://api.whatsapp.com/send?phone=91" + num;
        // window.location.href = url;
        window.open(url);
      }
    }
    // console.log(num);
  }
};

butt.addEventListener("click", () => {
  redirect(phone.value);
});

phone.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    redirect(phone.value);
  }
});
