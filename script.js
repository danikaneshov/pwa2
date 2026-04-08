// Базовые переменные для цен
let basePrice = 5000;      // Цена за основной заказ
let extraBowlPrice = 2000; // Цена за каждую дополнительную забивку
let totalSum = basePrice;  // Стартовая сумма заказа
let bowlCounter = 1;       // Счетчик для создания уникальных ID для чаш

// Обновление цены на экране
function updateTotalDisplay() {
  const priceElement = document.getElementById('totalPriceDisplay');
  if (priceElement) {
    priceElement.innerText = totalSum;
  }
}

// Добавление новой чаши
function addExtraBowl() {
  bowlCounter++;
  const currentBowlId = `bowl-${bowlCounter}`; // Генерируем ID (например, bowl-2)

  // Создаем контейнер для новой чаши
  const newBowlHTML = document.createElement('div');
  newBowlHTML.className = 'bowl-card';
  newBowlHTML.id = currentBowlId;
  
  // Начинка новой чаши (инпуты + кнопка удаления)
  newBowlHTML.innerHTML = `
    <button class="btn-remove" onclick="removeBowl('${currentBowlId}')">✖</button>
    <div class="bowl-title">Дополнительная чаша #${bowlCounter - 1}</div>
    <div class="bowl-inputs">
      <label>Крепость (0-10): <input type="number" min="0" max="10" value="5"></label>
      <input type="text" placeholder="Вкусы (например: Манго, Маракуйя)">
      <select>
        <option value="no-ice">Без холодка</option>
        <option value="ice">С холодком</option>
      </select>
    </div>
  `;

  // Добавляем чашу на страницу
  document.getElementById('bowlsList').appendChild(newBowlHTML);

  // Увеличиваем сумму и обновляем текст
  totalSum += extraBowlPrice;
  updateTotalDisplay();
}

// Удаление чаши
function removeBowl(bowlId) {
  // Ищем чашу по её ID
  const bowlElement = document.getElementById(bowlId);
  
  // Если нашли — удаляем
  if (bowlElement) {
    bowlElement.remove();
    
    // Вычитаем стоимость из общей суммы и обновляем текст
    totalSum -= extraBowlPrice;
    updateTotalDisplay();
  }
}