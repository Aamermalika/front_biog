document.querySelector('.close-button').addEventListener('click', () => {
   
    window.location.href = './content.html';
});

document.querySelector('.edit-button').addEventListener('click', () => {
  
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.querySelector('.profile-image img').src = e.target.result;
          
            };
            reader.readAsDataURL(file);
        }
    };
});

document.querySelector('.update-button').addEventListener('click', () => {
    
    const profileImageSrc = document.querySelector('.profile-image img').src;
    if (profileImageSrc) {
        document.querySelector('.profile-img').src = profileImageSrc;
       
        alert('Profile image updated successfully!');
    } else {
        alert('No image selected to update.');
    }
});
