const form= document.querySelector('.login-form') 

form.addEventListener('submit', handlerClickSubmit);

function handlerClickSubmit(event) {
    event.preventDefault();  // щоб не перезавантажувалося вікно при відправці форми
    const { email, password } = event.currentTarget.elements;//    дестр-я
   
    // перевірка чи заповнені поля вводу
    if (email.value === "" || password.value === '') {
        alert('All fields must be filled')
    }
    else { console.log({"Email": email.value , "Password": password.value})
      
    form.reset()
    }
         
    
    
}



//  const formData = new FormData(event.currentTarget)
//       // щоб перевірити що передає FormData
//     formData.forEach((x, y) => {
//         console.log('value',x);
//             console.log('name', y);})
    


// console.log(formData);
    // const formData = {
    //         email,
    //         password,
    //     };console.log(formData);
    