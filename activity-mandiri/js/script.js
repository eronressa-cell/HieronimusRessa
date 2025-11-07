function fn_ValForm() {
  var sMsg = "";
  var email = document.getElementById("email").value;
  var regex = /^[a-z0-9][a-z0-9_.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_.\-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i;

  if (document.getElementById("name").value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }
  if (email == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!regex.test(email)) {
    sMsg += "\n* Format email tidak valid";
  }
  if (document.getElementById("message").value == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  }
  return true;
}