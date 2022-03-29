const search = document.getElementById('search-bar');
const btn = document.getElementById('btn');
const down = document.getElementById('Download');
const qrimg = document.getElementById('qrcode');
const card = document.querySelector(".card");
const emptyh2 = document.querySelector(".empty h2");
const link = document.createElement('a')
btn.addEventListener('click', gen);
function gen() {
    const qr = search.value;
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qr}`;
    card.style.height = "35rem";
    if (qrcode == "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="){
        emptyh2.style.display = "inline-block";
        down.style.display = "none";
        qrimg.src = '/images/qr-icon.png'
    }
    else {
        emptyh2.style.display = "none";
        qrimg.src = qrcode;
        down.style.display = "inline-block";
        down.href = qrcode;
    }
}
