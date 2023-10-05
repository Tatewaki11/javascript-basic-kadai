const heading = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading.innerHTML = 'ボタンをクリックしました';
  },2000);
});
