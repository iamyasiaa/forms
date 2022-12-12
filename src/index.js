import "./style.scss";

const form = document.forms.myForm;
function mock(succes, timeout) {
  const service = form.elements.service;
  const numberService = form.elements.numberService;
  const perconalAccount = form.elements.perconalAccount;
  const theme = form.elements.theme;
  const textAppeal = form.elements.textAppeal;
  const name = form.elements.name;
  const time = form.elements.time;
  const phone = form.elements.phone;
  const email = form.elements.email;
  const area = form.elements.area;
  const locality = form.elements.locality;
  const street = form.elements.street;
  const flat = form.elements.flat;
  const houseNumber = form.elements.houseNumber;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succes) {
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
      } else {
        reject("Ошибка");
      }
    }, timeout);
  });
}

function main(ev) {
  ev.preventDefault();
  const promise = mock(true, 500);

  promise?.then((result) => {
    alert(result);
  });

  return false;
}
form.onsubmit = main;
