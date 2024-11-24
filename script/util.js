export function changefieldcolor(input) {
  input.classList.add('input-error');
  input.classList.remove('input-default');
}

export function changefieldcolordefault(input) {
  input.classList.remove('input-error');
  input.classList.add('input-default');
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function inputCheck(fields) {
  let inputcheck = false;

  fields.forEach(({ value, selector }) => {
    const field = document.querySelector(selector);
    if (!value) {
      changefieldcolor(field);
      inputcheck = true;
    } else {
      changefieldcolordefault(field);
    }
  });

  return inputcheck;
}


export function isValidUserid(userid) {
  const useridregex = /^(98|99|[0-9]{2})(CSE|ME|CE)(0[1-9]|[1-9][0-9])$/
  return useridregex.test(userid);
}

export function upload (input,allowed,filetarget) {
  document.querySelector(input).addEventListener('change', (event) => {
    const filename = event.target.files[0] ? event.target.files[0].name : 'No file chosen';
    const file =event.target.files[0];
    if (file) {
      
      if (!allowed.includes(file.type)) {
        alert('invalid file use a .jpg or .png');
        return;
      }
    }

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const file64 = reader.result;
        console.log(file64);
        localStorage.setItem(filetarget, file64);
      }
    }
  })}