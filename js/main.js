const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
    applyTheme(this.dataset.theme);
    localStorage.setItem('theme', this.dataset.theme);
    });
});

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null) {
    applyTheme('dark');
} else{
    applyTheme(activeTheme);
}


  // Инициализация скрипта после загрузки страницы
document.addEventListener("DOMContentLoaded", function() {
    // Параметры скролла (необязательно)
    const scrollOptions = {
      behavior: "smooth", // Плавная прокрутка
      block: "nearest", // Прокрутить до ближайшего края
      inline: "start" // Горизонтальная прокрутка от начала
    };
    
    // Получение контейнера скролла
    const container = document.querySelector(".contents");
    
    // Добавление прокрутки при клике
    container.addEventListener("click", function(event) {
      const scrollTarget = event.target.closest(".projects__cards");
      if (scrollTarget) {
        scrollTarget.scrollIntoView(scrollOptions);
      }
    });
  });