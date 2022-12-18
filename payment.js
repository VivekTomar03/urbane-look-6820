document.querySelector("#buttonpaynow").addEventListener("click", payment);
let total = +localStorage.getItem("TotalPrice");
let rendertotal = document.querySelector(".mrp>div");
let rendertotal2 = document.querySelector(".total>div");

rendertotal.innerText = total;
rendertotal2.innerText = total - 99;

let PayArr = [];
function payment(event) {
  event.preventDefault();

  let card = document.querySelector("#cardnumber").value;
  let cardname = document.querySelector("#nameofcard").value;
  let date = document.querySelector("#dateofbirth").value;
  let cvv = document.querySelector("#cvv").value;

  let obj = {
    card,
    cardname,
    date,
    cvv,
  };

  console.log(obj);
  if (
    card == 1234567891234567 &&
    cardname == "faheem" &&
    date == 1111 &&
    cvv == 123
  ) {
    swal("THANK YOU", "Your Order Is Successful!", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
    return;
  }
  if (
    (card.length =
      "" || cardname == "" || date.length == "" || cvv.length == "")
  ) {
    swal("Opps!", "Please Enter Card Details");
  } else if (card.length < 19 || card.length > 19) {
    // alert("Payment pending");
    swal("Opps!", "Please Enter Valid Card Details");
  } else if (cardname == "" || cardname.length < 3) {
    swal("Opps!", "Please Enter Valid Card Name");
  } else if (date.length == "" || date.length < 5) {
    swal("Opps!", "Please Enter Valid Date");
  } else if (cvv.length == "" || cvv.length < 3) {
    swal("Opps!", "Please Enter Valid Cvv");
  } else {
    PayArr.push(obj);
    localStorage.setItem("credit", JSON.stringify(obj));

    swal("THANK YOU", "Your Order Is Successful!", "success");
  }
  console.log(obj);
}
