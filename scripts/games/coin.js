// ===== ИГРА МОНЕТКА =====
let coinBalance = 12;
let coinBet = 1;

// Запуск игры
function startCoinGame() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="game-container">
            <button class="back-btn" onclick="goHome()">← Назад</button>
            <h2 class="game-title">🪙 Монетка</h2>
            
            <div class="coin-wrapper">
                <div class="coin" id="coin">
                    <div class="coin-side heads">О</div>
                    <div class="coin-side tails">Р</div>
                </div>
            </div>

            <div class="bet-controls">
                <div class="bet-info">
                    <span>Баланс: <strong id="coinBalanceDisplay">${coinBalance}</strong> NFT</span>
                    <span>Ставка: <strong id="coinBetDisplay">${coinBet}</strong> NFT</span>
                </div>
                <div class="bet-buttons">
                    <button class="bet-btn" onclick="changeCoinBet(-1)">−</button>
                    <button class="bet-btn" onclick="changeCoinBet(1)">+</button>
                </div>
            </div>

            <div class="coin-choices">
                <button class="choice-btn" onclick="flipCoin('heads')">🦅 Орёл</button>
                <button class="choice-btn" onclick="flipCoin('tails')">🦅 Решка</button>
            </div>

            <div class="result-display" id="coinResult">Выбери сторону</div>
        </div>
    `;
}

// Изменение ставки
function changeCoinBet(amount) {
    coinBet = Math.max(1, Math.min(coinBalance, coinBet + amount));
    document.getElementById('coinBetDisplay').textContent = coinBet;
}

// Подброс монетки
function flipCoin(choice) {
    const coin = document.getElementById('coin');
    const result = document.getElementById('coinResult');
    
    // Рандомный результат
    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
    const win = choice === outcome;
    
    // Анимация подбрасывания
    coin.style.animation = 'none';
    setTimeout(() => {
        coin.style.animation = 'flip 0.8s ease';
    }, 10);
    
    setTimeout(() => {
        // Показываем результат
        if (outcome === 'heads') {
            coin.style.transform = 'rotateY(0deg)';
        } else {
            coin.style.transform = 'rotateY(180deg)';
        }
        
        if (win) {
            coinBalance += coinBet;
            result.innerHTML = `🎉 Ты выиграл! +${coinBet} NFT`;
            result.style.color = '#4ade80';
        } else {
            coinBalance -= coinBet;
            result.innerHTML = `😢 Ты проиграл! -${coinBet} NFT`;
            result.style.color = '#f87171';
        }
        document.getElementById('coinBalanceDisplay').textContent = coinBalance;
    }, 800);
}

// Возврат на главную
function goHome() {
    loadPage('home');
}
