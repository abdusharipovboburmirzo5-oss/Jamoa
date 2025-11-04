// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navButtons = document.querySelector('.nav-buttons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navButtons.classList.toggle('active');
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

// Monitoring Data Simulation
function updateMonitoringData() {
    // Air Quality Simulation
    const airIndex = document.getElementById('airIndex');
    const airStatus = document.getElementById('airStatus');
    
    // Simulate realistic air quality changes
    const baseAirQuality = 75 + Math.random() * 30;
    const currentAirQuality = Math.round(baseAirQuality);
    
    airIndex.textContent = currentAirQuality;
    
    if (currentAirQuality >= 90) {
        airStatus.textContent = 'Ajoyib';
        airStatus.style.color = '#10b981';
    } else if (currentAirQuality >= 70) {
        airStatus.textContent = 'Yaxshi';
        airStatus.style.color = '#10b981';
    } else if (currentAirQuality >= 50) {
        airStatus.textContent = 'O\'rtacha';
        airStatus.style.color = '#f59e0b';
    } else {
        airStatus.textContent = 'Yomon';
        airStatus.style.color = '#ef4444';
    }
    
    // Water Quality Simulation
    const waterIndex = document.getElementById('waterIndex');
    const waterStatus = document.getElementById('waterStatus');
    
    const baseWaterQuality = 65 + Math.random() * 35;
    const currentWaterQuality = Math.round(baseWaterQuality);
    
    waterIndex.textContent = currentWaterQuality;
    
    if (currentWaterQuality >= 80) {
        waterStatus.textContent = 'Yaxshi';
        waterStatus.style.color = '#10b981';
    } else if (currentWaterQuality >= 60) {
        waterStatus.textContent = 'O\'rtacha';
        waterStatus.style.color = '#f59e0b';
    } else {
        waterStatus.textContent = 'Yomon';
        waterStatus.style.color = '#ef4444';
    }
}

// Project Participation
document.querySelectorAll('.btn-project').forEach(button => {
    button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const projectName = projectCard.querySelector('h3').textContent;
        
        // Show participation confirmation
        this.textContent = 'Qo\'shildingiz!';
        this.style.background = '#059669';
        this.disabled = true;
        
        // Show notification
        showNotification(`Siz "${projectName}" loyihasiga muvaffaqiyatli qo'shildingiz!`);
        
        // Update user stats (simulated)
        updateUserStats();
    });
});

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// User Stats Simulation
function updateUserStats() {
    // In a real app, this would update the user's profile
    console.log('User stats updated - project participation recorded');
}

// Registration/Login Modal
function showAuthModal(type) {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${type === 'login' ? 'Tizimga Kirish' : 'Ro\'yxatdan O\'tish'}</h2>
            <form class="auth-form">
                ${type === 'register' ? `
                    <div class="form-group">
                        <label>Ism</label>
                        <input type="text" placeholder="Ismingiz" required>
                    </div>
                ` : ''}
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="email@example.com" required>
                </div>
                <div class="form-group">
                    <label>Parol</label>
                    <input type="password" placeholder="Parolingiz" required>
                </div>
                ${type === 'register' ? `
                    <div class="form-group">
                        <label>Parolni Tasdiqlash</label>
                        <input type="password" placeholder="Parolni qayta kiriting" required>
                    </div>
                ` : ''}
                <button type="submit" class="btn-primary">${type === 'login' ? 'Kirish' : 'Ro\'yxatdan O\'tish'}</button>
            </form>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 16px;
        max-width: 400px;
        width: 90%;
        position: relative;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Form submission
    modal.querySelector('.auth-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, handle authentication here
        showNotification(type === 'login' ? 'Muvaffaqiyatli kirdingiz!' : 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
        document.body.removeChild(modal);
    });
}

// Add auth modal triggers
document.querySelector('.btn-login').addEventListener('click', () => showAuthModal('login'));
document.querySelector('.btn-register').addEventListener('click', () => showAuthModal('register'));

// Real-time Data Updates
setInterval(updateMonitoringData, 5000); // Update every 5 seconds

// Initialize monitoring data on page load
document.addEventListener('DOMContentLoaded', () => {
    updateMonitoringData();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });
});

// Progress Bar Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate progress bars when projects section is visible
            if (entry.target.id === 'projects') {
                animateProgressBars();
            }
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Earth Animation Enhancement
function enhanceEarthAnimation() {
    const earth = document.querySelector('.earth');
    setInterval(() => {
        const hue = Math.random() * 60 + 120; // Green hues
        earth.style.background = `conic-gradient(from 0deg, 
            hsl(${hue}, 80%, 60%), 
            hsl(${hue + 20}, 80%, 50%), 
            hsl(${hue + 40}, 80%, 40%), 
            hsl(${hue}, 80%, 60%))`;
    }, 10000);
}

// Initialize enhanced animations
enhanceEarthAnimation();