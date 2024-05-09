var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
//slideshow untuk bikin slider di hero section homepage
function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName('image');
  if (n > imgList.length) slideIndex = 1;
  // slide index value 3, karena imglist.length = slideIndex
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = 'none';
  }

  imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
  plusDivs(1);
}, 10000);

function validasi() {
  var Username = document.getElementsByClassName('username')[0];
  var PhoneNumber = document.getElementsByClassName('phoneNumber')[0];
  var EmailAddress = document.getElementsByClassName('emailAddress')[0];
  var option = document.getElementsByClassName('pilihan')[0];

  var cekUsername = Username.value.trim();
  var cekPhoneNumber = PhoneNumber.value.trim();
  var cekEmailAddress = EmailAddress.value.trim();
  var cekOption = option.value.trim();

  var isValid = true;
  var nameValid = false;
  var numberValid = false;
  var emailValid = false;
  var optionValid = false;

  // Validasi Username
  if (cekUsername === "") {
      Username.style.border = '1px solid red';
      isValid = false;
      nameValid = true;
  } else {
      Username.style.border = '1px solid green';
  }

  // Validasi Nomor Telepon
  if (cekPhoneNumber === "" || isNaN(cekPhoneNumber)) {
      PhoneNumber.style.border = '1px solid red';
      isValid = false;
      numberValid = true;
  } else {
      PhoneNumber.style.border = '1px solid green';
  }

  // Validasi Alamat Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (cekEmailAddress === "" || !emailRegex.test(cekEmailAddress)) {
      EmailAddress.style.border = '1px solid red';
      isValid = false;
      emailValid = true;
  } else {
      EmailAddress.style.border = '1px solid green';
  }

 //validasi option
 if(cekOption==""){
  option.style.border = '1px solid red';
  isValid = false;
  optionValid = true;
  } else {
    option.style.border = '1px solid green';
  }

  if (isValid) {
    alert("Form submitted successfully!");
    console.log("nama anda " + cekUsername);
    console.log("nomor yang anda masukan " + cekPhoneNumber);
    console.log("email yang anda masukan " + cekEmailAddress);
    console.log("opsi yang anda pilih " + cekOption);

    // Mengosongkan nilai input
    Username.value = '';
    PhoneNumber.value = '';
    EmailAddress.value = '';
    option.value = '';
}else  if(nameValid){
      alert("tolong masukan nama anda");
  } else if(numberValid){
    alert("tolong masukan nomor anda dengan benar")
  }else if(emailValid){
    alert("tolong masukan email anda dengan benar")
  }else if(optionValid){
    alert("tolong pilih barang yang anda mau")
  }
}

document.getElementsByClassName('send-btn')[0].addEventListener('click', validasi);
