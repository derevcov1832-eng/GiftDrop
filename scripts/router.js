// ===== ДАННЫЕ СТРАНИЦ =====
const pages = {
    home: `
        <div class="welcome">
            <h1>🎁 GiftDrop</h1>
            <p style="color: #8888aa; margin-top: 8px;">Твой NFT-подарок ждёт!</p>
        </div>

        <div class="balance-card">
            <div class="label">💰 Баланс NFT-подарков</div>
            <div class="amount">12</div>
            <div style="margin-top: 8px; font-size: 13px; color: #8888aa;">
                ⭐ Сегодня уже выиграно: 3
            </div>
        </div>

        <button class="bonus-btn" onclick="alert('🎁 Ты получил ежедневный бонус! +2 NFT')">
            🎁 Получить ежедневный бонус
        </button>

        <div style="margin-top: 24px; padding: 16px; background: #1a1a2e; border-radius: 12px; text-align: center; border: 1px solid #2a2a4a;">
            <div style="font-size: 14px; color: #8888aa;">🏆 Последний выигрыш</div>
            <div style="font-size: 20px; font-weight: 600; color: #8B5CF6; margin-top: 4px;">Легендарный NFT</div>
        </div>
    `,

    games: `
        <h2 style="font-size: 22px; margin-bottom: 20px;">🎮 Выбери игру</h2>

        <div class="game-card" onclick="alert('🪙 Монетка: Орёл или Решка?')">
            <div class="icon">🪙</div>
            <div class="info">
                <h3>Монетка</h3>
                <p>Поставь NFT и угадай сторону</p>
            </div>
        </div>

        <div class="game-card" onclick="alert('📌 Плинко: Шарик падает, умножай выигрыш!')">
            <div class="icon">📌</div>
            <div class="info">
                <h3>Плинко</h3>
                <p>Запусти шарик и получи множитель</p>
            </div>
        </div>

        <div class="game-card" onclick="alert('📦 Кейс: Открой и получи NFT-подарок!')">
            <div class="icon">📦</div>
            <div class="info">
                <h3>Кейсы</h3>
                <p>Открой кейс и получи редкий NFT</p>
            </div>
        </div>
    `,

    profile: `
        <div class="profile-header">
            <div class="avatar">👤</div>
            <div class="name">Игрок</div>
            <div class="nick">@derevcc</div>
        </div>

        <div class="stats">
            <div class="stat">
                <div class="number">42</div>
                <div class="label">Сыграно игр</div>
            </div>
            <div class="stat">
                <div class="number">12</div>
                <div class="label">Выиграно NFT</div>
            </div>
            <div class="stat">
                <div class="number">3</div>
                <div class="label">Победы</div>
            </div>
        </div>

        <h3 style="margin: 20px 0 12px;">🎨 Мои NFT-подарки</h3>
        <div class="nft-list">
            <div class="nft-item legendary">
                <div class="nft-icon">🔥</div>
                <div class="nft-name">Легендарный</div>
            </div>
            <div class="nft-item rare">
                <div class="nft-icon">⭐</div>
                <div class="nft-name">Редкий</div>
            </div>
            <div class="nft-item">
                <div class="nft-icon">💎</div>
                <div class="nft-name">Обычный</div>
            </div>
            <div class="nft-item">
                <div class="nft-icon">🎨</div>
                <div class="nft-name">Обычный</div>
            </div>
            <div class="nft-item rare">
                <div class="nft-icon">🌟</div>
                <div class="nft-name">Редкий</div>
            </div>
        </div>
    `
};

// ===== ЗАГРУЗКА СТРАНИЦЫ =====
function loadPage(page) {
    const content = document.getElementById('content');
    content.innerHTML = pages[page] || pages.home;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
}

// ===== ОБРАБОТЧИКИ НАВИГАЦИИ =====
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            loadPage(page);
        });
    });
});
