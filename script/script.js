document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const voteButtons = document.querySelectorAll('.vote-button');

    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const candidatsSection = document.querySelector('.candidats');

    let candidatsShown = false; // Флаг для отслеживания отображения блока

    toggleButton.addEventListener('click', function() {
        if (!candidatsShown) {
            candidatsSection.classList.add('show'); // Показываем блок, если не показан
            candidatsShown = true; // Устанавливаем флаг, что блок показан
            // Вычисляем позицию блока candidats и прокручиваем до него
            const candidatsOffset = candidatsSection.offsetTop;
            window.scrollTo({
                top: candidatsOffset,
                behavior: 'smooth' // Плавная прокрутка
            });
        } else {
            // Блок уже показан, просто прокручиваем до него
            const candidatsOffset = candidatsSection.offsetTop;
            window.scrollTo({
                top: candidatsOffset,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});


document.getElementById('instagram-button').onclick = function() {
    window.location.href = 'instagram.html';
};