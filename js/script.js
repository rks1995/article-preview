const share = document.getElementById('share_btn');
const social = document.querySelector('.social');

let toggle = false;
const handleClick = () => {
  if (!toggle) {
    social.style.visibility = 'visible';
    toggle = true;
  } else {
    social.style.visibility = 'hidden';
    toggle = false;
  }
};

share.addEventListener('click', handleClick);
