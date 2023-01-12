var form1 = document.getElementById("sheetdb-form-1");
var form2 = document.getElementById("sheetdb-form-2");

form1?.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    fetch(form1.action, {
      method: "POST",
      body: new FormData(document.getElementById("sheetdb-form-1")),
    })
      .then((response) => response.json())
      .then((html) => {
        form1.style.display = "none";
        document.querySelector(".form-2").style.display = "block";
      });
  },
  false
);

form2?.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    fetch(form2.action, {
      method: "POST",
      body: new FormData(document.getElementById("sheetdb-form-2")),
    })
      .then((response) => response.json())
      .then((html) => {
        document.getElementsByClassName("form_success")[0].style.display =
          "block";
        console.log(html);
        setTimeout(() => (window.location.href = "/"), 2000);
      });
  },
  false
);
