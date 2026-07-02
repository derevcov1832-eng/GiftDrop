// ===== ДАННЫЕ СТРАНИЦ =====
const pages = {
    top: `
        <div class="top-section">
            <h2>🏆 Топ игроков</h2>
            <div class="top-list">
                <div class="top-item gold">
                    <span class="top-place">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #fbbf24; display: inline; vertical-align: middle; margin-right: 6px;">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        1
                    </span>
                    <span class="top-name">Игрок_1</span>
                    <span class="top-nft">150 NFT</span>
                </div>
                <div class="top-item silver">
                    <span class="top-place">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #9ca3af; display: inline; vertical-align: middle; margin-right: 6px;">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        2
                    </span>
                    <span class="top-name">Игрок_2</span>
                    <span class="top-nft">120 NFT</span>
                </div>
                <div class="top-item bronze">
                    <span class="top-place">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #d97706; display: inline; vertical-align: middle; margin-right: 6px;">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        3
                    </span>
                    <span class="top-name">Игрок_3</span>
                    <span class="top-nft">90 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">4</span>
                    <span class="top-name">Игрок_4</span>
                    <span class="top-nft">75 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">5</span>
                    <span class="top-name">Игрок_5</span>
                    <span class="top-nft">60 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">6</span>
                    <span class="top-name">Игрок_6</span>
                    <span class="top-nft">45 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">7</span>
                    <span class="top-name">Игрок_7</span>
                    <span class="top-nft">30 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">8</span>
                    <span class="top-name">Игрок_8</span>
                    <span class="top-nft">20 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">9</span>
                    <span class="top-name">Игрок_9</span>
                    <span class="top-nft">10 NFT</span>
                </div>
                <div class="top-item">
                    <span class="top-place">10</span>
                    <span class="top-name">Игрок_10</span>
                    <span class="top-nft">5 NFT</span>
                </div>
            </div>
        </div>
    `,

    home: `
        <div class="case-section">
            <h2>Кейс за депозит</h2>
            <div class="case-grid">
                <div class="case-card" onclick="alert('📦 Открываем стандартный кейс!')">
                    <div class="case-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                            <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                    </div>
                    <div class="case-name">Стандартный</div>
                    <button class="case-btn">ИГРАТЬ!</button>
                </div>
                <div class="case-card rare" onclick="alert('⭐ Открываем редкий кейс!')">
                    <div class="case-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                    </div>
                    <div class="case-name">Редкий</div>
                    <button class="case-btn">ИГРАТЬ!</button>
                </div>
                <div class="case-card legendary" onclick="alert('🔥 Открываем легендарный кейс!')">
                    <div class="case-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L12 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L12 2Z"/>
                            <path d="M12 2L12 5"/>
                            <path d="M12 17.77L12 21"/>
                            <path d="M9 8L6 10"/>
                            <path d="M18 10L15 8"/>
                        </svg>
                    </div>
                    <div class="case-name">Легендарный</div>
                    <button class="case-btn">ИГРАТЬ!</button>
                </div>
            </div>
        </div>

        <div style="margin-top: 12px;">
            <button class="bonus-btn" onclick="startCoinGame()" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);">
                🪙 Монетка
            </button>
        </div>

        <div style="margin-top: 12px;">
            <button class="bonus-btn" onclick="startCasesGame()" style="background: linear-gradient(135deg, #f472b6, #ec4899);">
                🎁 Кейсы
            </button>
        </div>

        <div class="balance-card">
            <div class="label">💰 Баланс NFT</div>
            <div class="amount" id="homeBalance">12</div>
            <button class="bonus-btn" onclick="alert('🎁 Получен ежедневный бонус! +2 NFT')">
                🎁 Ежедневный бонус
            </button>
        </div>
    `,

    profile: `
        <div class="profile-header">
            <div class="avatar">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #a78bfa;">
                    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
            </div>
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

        <h3 style="margin: 20px 0 12px;">Мои NFT-подарки</h3>
        <div class="nft-list">
            <div class="nft-item legendary">
                <div class="nft-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #f472b6;">
                        <path d="M12 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L12 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L12 2Z"/>
                        <path d="M12 2L12 5"/>
                        <path d="M12 17.77L12 21"/>
                        <path d="M9 8L6 10"/>
                        <path d="M18 10L15 8"/>
                    </svg>
                </div>
                <div class="nft-name">Легендарный</div>
            </div>
            <div class="nft-item rare">
                <div class="nft-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #fbbf24;">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                </div>
                <div class="nft-name">Редкий</div>
            </div>
            <div class="nft-item">
                <div class="nft-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #6b7280;">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                </div>
                <div class="nft-name">Обычный</div>
            </div>
            <div class="nft-item">
                <div class="nft-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #6b7280;">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                </div>
                <div class="nft-name">Обычный</div>
            </div>
            <div class="nft-item rare">
                <div class="nft-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #fbbf24;">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                </div>
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
    loadPage('top');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            loadPage(page);
        });
    });
});

// ===== ДЕЛАЕМ ФУНКЦИИ ГЛОБАЛЬНЫМИ =====
window.loadPage = loadPage;
window.startCoinGame = startCoinGame;
window.startCasesGame = startCasesGame;
window.goHome = goHome;
