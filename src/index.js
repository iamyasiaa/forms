import "./style.scss";
let form = document.forms.myForm;
let service = form.elements.service;
let numberService = form.elements.numberService;
let perconalAccount = form.elements.perconalAccount;
let theme = form.elements.theme;
let textAppeal = form.elements.textAppeal;
let name = form.elements.name;
let time = form.elements.time;
let phone = form.elements.phone;
let email = form.elements.email;
let area = form.elements.area;
let locality = form.elements.locality;
let street = form.elements.street;
let flat = form.elements.flat;
let houseNumber = form.elements.houseNumber;
let button = form.elements.button;

function main() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        JSON.stringify({
          service: service.value,
          numberService: numberService.value,
          perconalAccount: perconalAccount.value,
          theme: theme.value,
          textAppeal: textAppeal.value,
          name: name.value,
          time: time.value,
          phone: phone.value,
          email: email.value,
          area: area.value,
          locality: locality.value,
          street: street.value,
          flat: flat.value,
          houseNumber: houseNumber.value,
        })
      );
    }, 1000);
  });
  promise.then((result) => {
    alert(result);
  });
  return false;
}
form.onsubmit = main;
