const wrap = document.querySelector("#wrap");
const bgImages = [1035, 1037, 1042, 218, 122];
const randomImage = Math.floor(Math.random() * bgImages.length);
wrap.style.backgroundImage = `url('https://picsum.photos/id/${bgImages[randomImage]}/3000/4000')`;
