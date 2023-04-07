const shareButton = document.getElementById('share-button')
const bottomCard = document.getElementById('bottom-card')
const userSection = document.querySelector('.user-section')
const shareInfo = document.querySelector('.share-info')

shareInfo.classList.add('hidden')

shareButton.addEventListener('click', () => {
    userSection.classList.toggle('hidden');
    shareInfo.classList.toggle('hidden');
    bottomCard.style.backgroundColor = 'hsl(217, 19%, 35%)'
})