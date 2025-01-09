// Получаем модальное окно
var modal = document.getElementById("pdfModal");
// Получаем элемент <iframe> для PDF
var pdfFrame = document.getElementById("pdfFrame");
// Получаем все ссылки с классом "menu-item", которые будут открывать PDF
var pdfLinks = document.querySelectorAll(".menu-item[data-pdf]");

// Функция для открытия модального окна с PDF
pdfLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        var pdfUrl = link.getAttribute("data-pdf");
        pdfFrame.src = pdfUrl; // Устанавливаем URL PDF в iframe
        modal.style.display = "block"; // Показываем модальное окно
    });
});

// Получаем элемент закрытия (кнопка X)
var closeBtn = document.getElementsByClassName("close")[0];

// Когда пользователь кликает на кнопку закрытия, закрываем модальное окно
closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
    pdfFrame.src = ""; // Очищаем источник PDF
}

// Когда пользователь кликает в любом месте за пределами модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
        pdfFrame.src = ""; // Очищаем источник PDF
    }
}
