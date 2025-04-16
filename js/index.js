document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copyButton');
  const lyrics = document.querySelector('.lyrics-container');
  
  copyButton.addEventListener('click', () => {
    const textToCopy = lyrics.innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyButton.textContent = '🎉 COPIED!';
      setTimeout(() => {
        copyButton.textContent = '📋 COPY LYRICS';
      }, 2000);
    }).catch(err => {
      copyButton.textContent = '❌ ERROR';
      setTimeout(() => {
        copyButton.textContent = '📋 COPY LYRICS';
      }, 2000);
    });
  });
});
