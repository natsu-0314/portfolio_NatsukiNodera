const sortButtons = document.querySelectorAll('.sort-btn');
const worksItems = document.querySelectorAll('.works-list-category li');

sortButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // ボタンのactive切り替え
    sortButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const targetCategory = button.getAttribute('data-name');

    worksItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      // 【条件分岐】：表示させる対象
      if (targetCategory === 'all' || targetCategory === itemCategory || itemCategory === 'all') {
        
        // 瞬時に表示する
        item.style.display = 'block';

      } else {
        // 【条件分岐】：非表示にする対象
        
        // 瞬時に非表示にする（これで残像は100%出なくなります）
        item.style.display = 'none';

      }
    });
    
  });
});

