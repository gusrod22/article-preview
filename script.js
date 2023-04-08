const shareButton = document.getElementById('share-button')
const bottomCard = document.getElementById('bottom-card')
const userSection = document.querySelector('.user-section')
const shareInfo = document.querySelector('.share-info')

const originalBackgroundColor = bottomCard.style.backgroundColor;

shareInfo.classList.add('hidden')

shareButton.addEventListener('click', () => {
    userSection.classList.toggle('hidden');
    shareInfo.classList.toggle('hidden');
    
    if (userSection.classList.contains('hidden')) {
      // Both userSection and shareInfo are hidden, so change the background color to the darker value
      bottomCard.style.backgroundColor = 'hsl(217, 19%, 35%)';
      shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
      document.querySelector('.svg-container svg path').setAttribute('fill', '#fff');

    } else {
      // Either userSection or shareInfo is not hidden, so change the background color back to its original value
      bottomCard.style.backgroundColor = originalBackgroundColor;
      shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
      document.querySelector('.svg-container svg path').setAttribute('fill', '#6E8098');


    }
  });