const search = document.getElementById('search-bar');
const btn = document.getElementById('btn');
const down = document.getElementById('Download');
const qrimg = document.getElementById('qrcode')

btn.addEventListener('click', gen);

function gen() {
    const qr = search.value
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qr}`
    qrimg.src = qrcode
    down.href = `${qrcode}`
}
