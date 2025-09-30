// Music playlists for different sections
const musicPlaylists = {
    home: [
        {
            title: "Hopes & Dreams",
            artist: "Toby Fox",
            src: "https://file.garden/aNtJgm887DiA_7s2/SSvid.net--087-Hopes-And-Dreams-UNDERTALE-Soundtrack-Toby-Fox.mp3"
        },
        {
            title: "Fuzzy Memories",
            artist: "iColor",
            src: "https://file.garden/aNtJgm887DiA_7s2/background-music.mp3"
        }
    ],
    gurshaan: [
        {
            title: "Fuzzy Memories",
            artist: "iColor",
            src: "https://file.garden/aNtJgm887DiA_7s2/background-music.mp3"
        },
        {
            title: "Mice on Venus",
            artist: "C418",
            src: "https://file.garden/aNtJgm887DiA_7s2/SSvid.net--c418-mice-on-venus-8bit-cover-slowed.mp3"
        }
    ],
    harman: [
        {
            title: "Mice on Venus",
            artist: "C418",
            src: "https://file.garden/aNtJgm887DiA_7s2/SSvid.net--c418-mice-on-venus-8bit-cover-slowed.mp3"
        },
        {
            title: "Nostalgia",
            artist: "Alan Walker",
            src: "https://file.garden/aNtJgm887DiA_7s2/ssvid.net--Alan-Walker-Spectre-NCS-Release.mp3"
        }
    ],
    newspaper: [
        {
            title: "Fuzzy Memories",
            artist: "iColor",
            src: "https://file.garden/aNtJgm887DiA_7s2/background-music.mp3"
        },
        {
            title: "Kerosene",
            artist: "Crystal Castles",
            src: "https://file.garden/aNtJgm887DiA_7s2/SSvid.net--Crystal-Castles-Kerosene-Instrumental.mp3"
        }
    ]
};

let currentPlaylist = 'home';
let musicTracks = musicPlaylists[currentPlaylist];

// Portfolio Data
const portfolioData = {
    gurshaan: {
        name: "Gurshaan Gill",
        greeting: "WELCOME TO A NEW WORLD",
        fullName: "Hi, I'm Gurshaan Gill, a",
        typingTexts: ["Developer.", "Writer.", "Creator."],
        description: "Hello, I am a 13-year-old kid, my birthday is June 22nd, 2012. I have been developing with HTML for a year, with my general development starting in 2022.",
        avatar: "https://raw.githubusercontent.com/brosmad123/classroomresources/main/IMG_0690-removebg-preview.png",
        socialLinks: [
            { icon: "fab fa-github", url: "https://github.com/brosmad123" },
            { icon: "fa-solid fa-envelope", url: "mailto:861814@pdsb.net" }
        ],
        skills: ["fab fa-html5", "fa-solid fa-pen", "fa-solid fa-calculator"],
        projects: [
            {
                id: "gurshaan_history",
                title: "Canadian History Project",
                description: "Comprehensive history project including worksheet, presentation, and brochure.",
                category: "HISTORY",
                image: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCountry%2Fcanada-history-culture.jpg&w=1080&q=75",
                isHistoryProject: true
            },
            {
                id: "gurshaan_news",
                title: "SWG NEWSPAPER",
                description: "I have contributed to this newspaper, with my role being as an editor, and writer.",
                category: "NEWS",
                image: "https://media.istockphoto.com/id/184625088/photo/breaking-news-headline.jpg?s=612x612&w=0&k=20&c=0WNsHBZ8Yu2YeTUjVP8xY05Ist60I00iZHmTOnQErHk=",
                url: "https://www.classresources.info/#/newspaper"
            }
        ]
    },
    harman: {
        name: "Harman Sidhu",
        greeting: "WELCOME TO THE MATH WORLD",
        fullName: "Hi, I'm Harman Sidhu, a",
        typingTexts: ["Scholar.", "Mathematician.", "Locator."],
        description: "I am 13 years old, my birthday is on October 24th, 2012. I am great at doing math and giving presentations. My dream school is Harvard.",
        avatar: "https://raw.githubusercontent.com/brosmad123/classroomresources/main/BeautyPlus-AI_FILTER-2025-09-29T00_58_43-1759107523348-removebg-preview.png",
        socialLinks: [
            { icon: "fab fa-github", url: "https://github.com/harman" },
            { icon: "fab fa-instagram", url: "https://instagram.com/harman" }
        ],
        skills: ["fa-solid fa-flask", "fa-solid fa-square-xmark", "fas fa-chart-bar"],
        projects: [
            {
                id: "harman_history",
                title: "Canadian History Project",
                description: "Presentation shared with Gurshaan Gill.",
                category: "HISTORY",
                image: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCountry%2Fcanada-history-culture.jpg&w=1080&q=75",
                isHistoryProject: true
            }
        ]
    },
    newspaper: {
        name: "Digital News Hub",
        greeting: "Weekly School News",
        fullName: "This is SWG News, ",
        typingTexts: ["the best newspaper.", "your news source.", "bringing you stories."],
        description: "We don't just provide news, we provide stories that can alter your perspective. Our information is gathered from many sources.",
        avatar: "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
        socialLinks: [
            { icon: "fab fa-twitter", url: "https://x.com/PeelSchools" },
            { icon: "fab fa-instagram", url: "https://www.instagram.com/peelschools" }
        ],
        skills: ["fa-solid fa-newspaper"],
        projects: [
            {
                id: "news_001",
                title: "SWG NEWS ISSUE #1",
                description: "This is the first issue of SWG News, issued on October 6th, 2025.",
                category: "NEWS",
                image: "https://media.istockphoto.com/id/184625088/photo/breaking-news-headline.jpg?s=612x612&w=0&k=20&c=0WNsHBZ8Yu2YeTUjVP8xY05Ist60I00iZHmTOnQErHk=",
                url: "https://www.canva.com/design/DAG0UYFy6MA/0S5Sb5NovyP-Wn1a_OhCQg/edit?utm_content=DAG0UYFy6MA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            }
        ]
    }
};

// Current state
let currentView = 'home';
let typingInterval;

// Music Player State
let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio();
let isMuted = false;
let fadeInterval = null;
const FADE_DURATION = 1000; // 1 second fade for track changes
const PLAY_PAUSE_FADE = 400; // 0.4 second fade for play/pause
let targetVolume = 0.5; // Store the target volume

// Function to switch playlist based on current view
function switchPlaylist(newPlaylist) {
    if (currentPlaylist === newPlaylist) return;
    
    const wasPlaying = isPlaying;
    currentPlaylist = newPlaylist;
    musicTracks = musicPlaylists[currentPlaylist];
    currentTrackIndex = 0;
    
    if (wasPlaying) {
        fadeVolume(0, FADE_DURATION, () => {
            loadTrack(0, true);
        });
    } else {
        loadTrack(0);
    }
}
function fadeVolume(targetVolume, duration, callback) {
    if (fadeInterval) clearInterval(fadeInterval);
    
    const startVolume = audio.volume;
    const volumeStep = (targetVolume - startVolume) / (duration / 50);
    let currentStep = 0;
    const steps = duration / 50;
    
    fadeInterval = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
            audio.volume = Math.max(0, Math.min(1, targetVolume));
            clearInterval(fadeInterval);
            fadeInterval = null;
            if (callback) callback();
        } else {
            audio.volume = Math.max(0, Math.min(1, startVolume + (volumeStep * currentStep)));
        }
    }, 50);
}

// Initialize Music Player
function initMusicPlayer() {
    audio.volume = 0;
    targetVolume = 0.5;
    audio.addEventListener('ended', playNextTrack);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
        updateTrackInfo();
    });
    loadTrack(currentTrackIndex);
}

// Autoplay function - called on first user interaction
function startAutoplay() {
    if (!isPlaying && !window.autoplayStarted) {
        window.autoplayStarted = true;
        audio.volume = 0;
        audio.play().then(() => {
            isPlaying = true;
            fadeVolume(targetVolume, PLAY_PAUSE_FADE);
            updatePlayButton();
        }).catch(e => {
            console.log('Autoplay failed:', e);
            // If autoplay fails, user will need to click play button
        });
    }
}

function loadTrack(index, fadeIn = false) {
    currentTrackIndex = index;
    const track = musicTracks[index];
    audio.src = track.src;
    updateTrackInfo();
    
    if (fadeIn && isPlaying) {
        audio.volume = 0;
        audio.play().then(() => {
            fadeVolume(targetVolume, FADE_DURATION);
        }).catch(e => console.log('Playback failed:', e));
    }
}

function updateTrackInfo() {
    const track = musicTracks[currentTrackIndex];
    const titleEl = document.getElementById('currentTrackTitle');
    const artistEl = document.getElementById('currentTrackArtist');
    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
}

function togglePlay() {
    if (isPlaying) {
        fadeVolume(0, PLAY_PAUSE_FADE, () => {
            audio.pause();
            isPlaying = false;
            updatePlayButton();
        });
    } else {
        audio.volume = 0;
        audio.play().then(() => {
            isPlaying = true;
            fadeVolume(targetVolume, PLAY_PAUSE_FADE);
            updatePlayButton();
        }).catch(e => console.log('Playback failed:', e));
    }
}

function updatePlayButton() {
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
}

function playNextTrack() {
    if (isPlaying) {
        fadeVolume(0, FADE_DURATION, () => {
            currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
            loadTrack(currentTrackIndex, true);
        });
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
        loadTrack(currentTrackIndex);
    }
}

function playPrevTrack() {
    if (isPlaying) {
        fadeVolume(0, FADE_DURATION, () => {
            currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
            loadTrack(currentTrackIndex, true);
        });
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
        loadTrack(currentTrackIndex);
    }
}

function toggleMute() {
    isMuted = !isMuted;
    audio.muted = isMuted;
    const muteBtn = document.querySelector('.volume-btn');
    if (muteBtn) {
        muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    }
}

function setVolume(value) {
    targetVolume = value / 100;
    audio.volume = targetVolume;
    if (value > 0 && isMuted) {
        isMuted = false;
        audio.muted = false;
        const muteBtn = document.querySelector('.volume-btn');
        if (muteBtn) {
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
}

function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration-time');
    
    if (progressFill && audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = percent + '%';
    }
    
    if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
    if (durationEl && audio.duration) {
        durationEl.textContent = formatTime(audio.duration);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function seekTrack(e) {
    const progressBar = e.currentTarget;
    const clickX = e.offsetX;
    const width = progressBar.offsetWidth;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function toggleMusicPlayer() {
    const player = document.querySelector('.music-player');
    if (player) {
        player.classList.toggle('visible');
    }
}

// Router functionality
class Router {
    constructor() {
        this.routes = {
            '': () => this.showHome(),
            'home': () => this.showHome(),
            'gurshaan': () => this.showPortfolio('gurshaan'),
            'harman': () => this.showPortfolio('harman'),
            'newspaper': () => this.showPortfolio('newspaper')
        };
        
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        this.handleRoute();
    }

    navigate(path) {
        history.pushState({}, '', `/#/${path}`);
        this.handleRoute();
    }

    handleRoute() {
        const path = window.location.hash.slice(2) || '';
        const route = this.routes[path];
        if (route) {
            route();
        } else {
            this.showHome();
        }
    }

    showHome() {
        currentView = 'home';
        stopTyping();
        switchPlaylist('home');
        document.getElementById('mainContent').innerHTML = `
            <div class="home-container">
                <h1 class="title">Class Resources</h1>
                <p class="subtitle">Discover a digital world, created by Gurshaan Gill.</p>
                
                <div class="nav-grid">
                    <div class="nav-card" onclick="router.navigate('gurshaan')">
                        <i class="fas fa-laptop-code card-icon"></i>
                        <h3 class="card-title">Gurshaan's Portfolio</h3>
                        <p class="card-description">Discover my creative solutions to problems I face</p>
                    </div>
                    
                    <div class="nav-card" onclick="router.navigate('harman')">
                        <i class="fas fa-chart-line card-icon"></i>
                        <h3 class="card-title">Harman's Portfolio</h3>
                        <p class="card-description">Explore the advanced world of education</p>
                    </div>
                    
                    <div class="nav-card" onclick="router.navigate('newspaper')">
                        <i class="fas fa-newspaper card-icon"></i>
                        <h3 class="card-title">SWG Newspaper</h3>
                        <p class="card-description">Stay updated with the latest news and articles</p>
                    </div>
                </div>
            </div>
        `;
    }

    showPortfolio(type) {
        currentView = type;
        switchPlaylist(type);
        const data = portfolioData[type];
        
        document.getElementById('mainContent').innerHTML = `
            <div class="portfolio-container">
                <button class="back-btn" onclick="router.navigate('home')">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </button>
                
                <div class="portfolio-hero">
                    <div class="portfolio-content">
                        <div class="portfolio-greeting">${data.greeting}</div>
                        <h1 class="portfolio-name">${data.fullName}</h1>
                        <h2 class="portfolio-subtitle" id="typingText">${data.typingTexts[0]}</h2>
                        <p class="portfolio-description">${data.description}</p>
                        
                        <div style="margin-bottom: 2rem;">
                            <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; display: block; margin-bottom: 1rem;">FIND ME ON</span>
                            <div class="social-icons">
                                ${data.socialLinks.map(social => `
                                    <a href="${social.url}" class="social-icon" target="_blank">
                                        <i class="${social.icon}"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>

                        <div>
                            <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; display: block; margin-bottom: 1rem;">MY SKILLS</span>
                            <div class="skills-icons">
                                ${data.skills.map(skill => `
                                    <div class="skill-icon">
                                        <i class="${skill}"></i>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <img src="${data.avatar}" alt="${data.name}" class="profile-photo" />
                    </div>
                </div>

                ${data.projects.length > 0 ? `
                    <div class="portfolio-sections">
                        <h2 class="section-title">My Projects</h2>
                        
                        <div class="projects-grid">
                            ${data.projects.map(project => `
                                <div class="project-card" onclick="openProjectModal('${project.id}', '${type}')">
                                    <div class="project-image">
                                        <img src="${project.image}" alt="${project.title}" />
                                        <div class="project-overlay">
                                            <div class="project-category">${project.category}</div>
                                            <div class="project-likes">
                                                <i class="fas fa-heart"></i> 0
                                            </div>
                                        </div>
                                    </div>
                                    <div class="project-content">
                                        <h3 class="project-title">${project.title}</h3>
                                        <p class="project-description">${project.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Start typing animation
        startTyping(data.typingTexts);
    }
}

// Initialize router
const router = new Router();

// Project Modal Functions
function openProjectModal(projectId, portfolioType) {
    const portfolio = portfolioData[portfolioType];
    const project = portfolio.projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    if (project.isHistoryProject) {
        openHistoryModal();
        return;
    }
    
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('projectModalTitle');
    const subtitle = document.getElementById('projectModalSubtitle');
    const description = document.getElementById('projectModalDescription');
    const actions = document.getElementById('projectModalActions');
    
    title.textContent = project.title;
    subtitle.textContent = project.category;
    description.textContent = project.description;
    
    actions.innerHTML = `
        <button class="project-modal-btn project-modal-button" onclick="window.open('${project.url}', '_blank')">
            VIEW PROJECT
        </button>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openHistoryModal() {
    document.getElementById('historyModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeHistoryModal() {
    document.getElementById('historyModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Theme functions
function changeTheme(theme) {
    if (theme === 'custom') {
        const saved = localStorage.getItem('customTheme');
        if (saved) {
            applyCustomThemeFromData(JSON.parse(saved));
        } else {
            openThemeCreator();
            return;
        }
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('selectedTheme', theme);
}

function openThemeCreator() {
    document.getElementById('themeCreatorModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    setupThemePreview();
}

function closeThemeCreator() {
    document.getElementById('themeCreatorModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupThemePreview() {
    const inputs = ['bgPrimary', 'bgSecondary', 'textPrimary', 'textSecondary', 'accentColor'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updatePreview);
        }
    });
    updatePreview();
}

function updatePreview() {
    const preview = document.getElementById('themePreview');
    if (!preview) return;
    
    const bg1 = document.getElementById('bgPrimary')?.value || '#0f0f23';
    const bg2 = document.getElementById('bgSecondary')?.value || '#2d1b69';
    const text1 = document.getElementById('textPrimary')?.value || '#ffffff';
    const text2 = document.getElementById('textSecondary')?.value || '#b3b3b3';
    const accent = document.getElementById('accentColor')?.value || '#00d4ff';

    preview.style.background = `linear-gradient(135deg, ${bg1} 0%, ${bg2} 100%)`;
    preview.style.color = text1;
    preview.style.border = `1px solid ${accent}`;
    
    const h3 = preview.querySelector('h3');
    const p = preview.querySelector('p');
    if (h3) h3.style.color = accent;
    if (p) p.style.color = text2;
}

function applyCustomTheme() {
    const bg1 = document.getElementById('bgPrimary').value;
    const bg2 = document.getElementById('bgSecondary').value;
    const text1 = document.getElementById('textPrimary').value;
    const text2 = document.getElementById('textSecondary').value;
    const accent = document.getElementById('accentColor').value;
    
    const theme = {
        '--bg-primary': `linear-gradient(135deg, ${bg1} 0%, ${bg2} 100%)`,
        '--bg-card': `${hexToRgba(text1, 0.08)}`,
        '--text-primary': text1,
        '--text-secondary': text2,
        '--accent': accent,
        '--accent-hover': adjustBrightness(accent, -20),
        '--border': `${hexToRgba(text1, 0.1)}`,
        '--shadow': 'rgba(0, 0, 0, 0.3)'
    };
    
    applyCustomThemeFromData(theme);
    localStorage.setItem('customTheme', JSON.stringify(theme));
    localStorage.setItem('selectedTheme', 'custom');
    document.getElementById('themeSelector').value = 'custom';
    closeThemeCreator();
    
    showNotification('Custom theme applied!', 'success');
}

function applyCustomThemeFromData(theme) {
    const root = document.documentElement;
    Object.keys(theme).forEach(prop => {
        root.style.setProperty(prop, theme[prop]);
    });
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        z-index: 4000;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Typing animation
function startTyping(texts) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const element = document.getElementById('typingText');
    
    if (!element) return;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500;
        }

        typingInterval = setTimeout(type, speed);
    }
    
    stopTyping();
    type();
}

function stopTyping() {
    if (typingInterval) {
        clearTimeout(typingInterval);
        typingInterval = null;
    }
}

// Event listeners
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('project-modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Enable audio context on first user interaction
    if (!window.audioContextStarted) {
        window.audioContextStarted = true;
        console.log('User interaction detected - audio enabled');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal, .project-modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up theme selector
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        themeSelector.addEventListener('change', function() {
            changeTheme(this.value);
        });
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    if (themeSelector) {
        themeSelector.value = savedTheme;
    }
    changeTheme(savedTheme);
    
    // Initialize music player
    initMusicPlayer();
    
    console.log('Portfolio Hub loaded successfully!');
});

// Fallback initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // Do nothing, DOMContentLoaded will fire
} else {
    // DOM already loaded
    setTimeout(() => {
        const themeSelector = document.getElementById('themeSelector');
        if (themeSelector) {
            themeSelector.addEventListener('change', function() {
                changeTheme(this.value);
            });
            
            const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
            themeSelector.value = savedTheme;
            changeTheme(savedTheme);
        }
        
        // Initialize music player
        initMusicPlayer();
        
        console.log('Portfolio Hub initialized!');
    }, 100);
}
