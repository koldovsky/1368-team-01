function showPopup() {
    document.getElementById('openPopup').style.display = 'flex';
    document.body.style.overflowY = 'hidden';
}
window.onload = showPopup();

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('openPopup').style.display = 'none';
    document.body.style.overflowY = 'auto';
});

document.getElementById('restrictionButton').addEventListener('click', function() {
    window.location.href = 'index.access-denied.html';
});
