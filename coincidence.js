//Getting random numbers
const getRandomNumber = (min,max) => {
    return Math.floor(Math.random()* (max-min+1)) + min;
}

//Generating numbers in a particular interval
const placeholderEl = document.querySelector('#placeholder');
const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);
    if (minEl.value === '' || maxEl.value === '') {
        alert('You have to insert numbers', 3000);
        placeholderEl.innerHTML = '#';
        return;
    }
    if (min > max) {
        alert('Min has to be higher than Max. Please, be attentive!', 3000);
        placeholderEl.innerHTML = '#';
        return;
    }
   
    placeholderEl.textContent = getRandomNumber(min, max);
}

const btnEl = document.getElementById('generator');
btnEl.addEventListener('click', generate)


// Alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alert = (message, timeout = null) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible fade show" role= "alert">`,
      `     <div>${message}</div>`,
      '     <button type="button" class="btn-close" data-bs-dismiss ="alert" aria-label="Close"></button>',
      '</div>'
  ].join('')
  alertPlaceholder.append(wrapper);

  if (timeout != null) {
    setTimeout(() => {
        wrapper.remove();
    }, Number(timeout));
  }
}



