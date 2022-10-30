// const getEmail = async () => {
//     preventDefault();

//     const response = await fetch(`/api/emails`, {
//         method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
// }

  const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  
//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);


    document.querySelector('#logout').addEventListener('click', logout);
