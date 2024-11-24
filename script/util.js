export function yearSelect () {
  const startYear = 2002;
  const endYear = new Date().getFullYear();
  const yearSelect = document.querySelector('.js-batch');
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
};

export function changefieldcolor(input) {
  input.classList.add('input-error');
  input.classList.remove('input-default');
}

export function changefieldcolordefault(input) {
  input.classList.remove('input-error');
  input.classList.add('input-default');
}


export function inputCheck (inputname, userid, batch, branch, email, password, renterpassword) {
  let inputcheck = false;
    
  if(!inputname) {
    changefieldcolor(document.querySelector('.js-name'));
    inputcheck = true;
 }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-name'));
  }

  if(!userid) {
    changefieldcolor(document.querySelector('.js-userid'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-userid'));
  }
  if(!batch) {
    changefieldcolor(document.querySelector('.js-batch'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-batch'));
  }
  if(!branch) {
    changefieldcolor(document.querySelector('.js-branch'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-branch'));
  }
  if(!email) {
    changefieldcolor(document.querySelector('.js-email'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-email'));
  }
  if(!password) {
    changefieldcolor(document.querySelector('.js-password'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-password-recheck'));
  }
  if(!renterpassword) {
    changefieldcolor(document.querySelector('.js-password-recheck'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-password'));
  }

  if(inputcheck === true)
  {
    return inputcheck;
  }
}


export function isValidUserid(userid) {
  const useridregex = /^(98|99|[0-9]{2})(CSE|ME|CE)(0[1-9]|[1-9][0-9])$/
  return useridregex.test(userid);
}

export function picupload () {
  document.querySelector('.js-pic-input').addEventListener('change', (event) => {
    const filename = event.target.files[0] ? event.target.files[0].name : 'No file chosen';
    const file =event.target.files[0];
    if (file) {
      const allowed = ['image/jpeg', 'image/png'];
      if (!allowed.includes(file.type)) {
        document.querySelector('.js-filename').textContent = 'invalid file use a .jpg or .png';
        document.querySelector('.js-filename').style.color = 'red';
        return;
      }
      else {
        document.querySelector('.js-filename').textContent = filename;
        document.querySelector('.js-filename').style.color = 'white';
      }
    }

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const file64 = reader.result;
        console.log(file64);
        localStorage.setItem('picdata', file64);
      }
    }
  })}