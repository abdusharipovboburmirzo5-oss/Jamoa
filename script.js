// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2000);
});

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
});

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Real-time Monitoring Data
function updateMonitoringData() {
    // Air Quality
    const airValue = Math.floor(Math.random() * 30) + 70;
    const airGauge = document.querySelector('.gauge');
    const airCover = document.querySelector('.gauge-cover');
    
    airGauge.style.background = `conic-gradient(
        var(--primary) 0% ${airValue}%,
        var(--gray) ${airValue}% 100%
    )`;
    airCover.textContent = `${airValue}%`;

    // Update metrics
    const metrics = document.querySelectorAll('.metric-value');
    metrics[0].textContent = `${Math.floor(Math.random() * 10) + 8} µg/m³`;
    metrics[1].textContent = `${Math.floor(Math.random() * 15) + 15} µg/m³`;
    metrics[2].textContent = `${Math.floor(Math.random() * 50) + 400} ppm`;
    metrics[3].textContent = Math.floor(Math.random() * 5) + 1;
}

// Energy Chart
const energyCtx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(energyCtx, {
    type: 'line',
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Energiya Sarfi (kWh)',
            data: [2.1, 1.8, 3.2, 4.5, 3.8, 2.9],
            borderColor: '#00ff88',
            backgroundColor: 'rgba(0, 255, 136, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#6c757d'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#6c757d'
                }
            }
        }
    }
});

// Ranking Data
const rankingData = [
    { rank: 1, name: 'Ali Valiyev', points: 2845, trees: 142, badge: 'gold', badgeText: 'Eko Elchi' },
    { rank: 2, name: 'Zarina Xolmatova', points: 2541, trees: 127, badge: 'silver', badgeText: 'Eko Jangchi' },
    { rank: 3, name: 'Bahodir Rahimov', points: 2315, trees: 115, badge: 'bronze', badgeText: 'Eko Qahramon' },
    { rank: 4, name: 'Dilnoza Qodirova', points: 2156, trees: 108, badge: 'primary', badgeText: 'Eko Ambassador' },
    { rank: 5, name: 'Javohir Tursunov', points: 1987, trees: 99, badge: 'primary', badgeText: 'Eko Ambassador' },
    { rank: 6, name: 'Madina Yusupova', points: 1876, trees: 94, badge: 'primary', badgeText: 'Eko Ambassador' },
    { rank: 7, name: 'Sanjar Ismoilov', points: 1765, trees: 88, badge: 'primary', badgeText: 'Eko Ambassador' },
    { rank: 8, name: 'Fotima Azimova', points: 1654, trees: 83, badge: 'primary', badgeText: 'Eko Ambassador' },
    { rank: 9, name: 'Shohruh Karimov', points: 1543, trees: 77, badge: 'primary', badgeText: 'Eko Ambassador' },
    { rank: 10, name: 'Nigora Xolmirzayeva', points: 1432, trees: 72, badge: 'primary', badgeText: 'Eko Ambassador' }
];

function populateRankingTable() {
    const tableBody = document.querySelector('.table-body');
    tableBody.innerHTML = '';

    rankingData.forEach(user => {
        const row = document.createElement('div');
        row.className = `table-row ${user.rank <= 3 ? `top-${user.rank}` : ''}`;
        
        row.innerHTML = `
            <span class="rank">${user.rank}</span>
            <span class="user">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="${user.name}">
                <span>${user.name}</span>
            </span>
            <span class="points">${user.points.toLocaleString()}</span>
            <span class="trees">${user.trees}</span>
            <span class="badge ${user.badge}">${user.badgeText}</span>
        `;
        
        tableBody.appendChild(row);
    });
}

// Map Controls
const mapButtons = document.querySelectorAll('.map-btn');
mapButtons.forEach(button => {
    button.addEventListener('click', () => {
        mapButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Here you would update the map layer based on data-layer attribute
        const layer = button.getAttribute('data-layer');
        console.log(`Switching to ${layer} layer`);
    });
});

// Project Participation
const projectButtons = document.querySelectorAll('.btn-project');
projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const projectName = projectCard.querySelector('h3').textContent;
        
        // Show loading state
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Qo\'shilmoqda...';
        this.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> Qo\'shildingiz!';
            this.style.background = 'var(--success)';
            
            // Show notification
            showNotification(`"${projectName}" loyihasiga muvaffaqiyatli qo'shildingiz!`);
            
            // Update user stats
            updateUserStats();
        }, 2000);
    });
});

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// User Stats Update
function updateUserStats() {
    // In a real app, this would update the user's profile via API
    console.log('Updating user stats...');
    
    // Simulate stats update
    const userPoints = document.querySelector('.profile-stat:nth-child(2) strong');
    const currentPoints = parseInt(userPoints.textContent.replace(',', ''));
    userPoints.textContent = (currentPoints + 50).toLocaleString();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateRankingTable();
    updateMonitoringData();
    
    // Update monitoring data every 30 seconds
    setInterval(updateMonitoringData, 30000);
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .dashboard-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Weather and Environmental Data Simulation
function simulateEnvironmentalData() {
    // This would connect to real APIs in production
    const environmentalData = {
        airQuality: Math.floor(Math.random() * 50) + 50,
        waterQuality: Math.floor(Math.random() * 40) + 60,
        temperature: Math.floor(Math.random() * 15) + 20,
        humidity: Math.floor(Math.random() * 40) + 50,
        co2: Math.floor(Math.random() * 100) + 400
    };
    
    return environmentalData;
}

// Export functionality for future enhancements
window.EcoWorld = {
    updateMonitoringData,
    showNotification,
    updateUserStats,
    simulateEnvironmentalData
};