// ===== PORTFOLIO 3D RENDERS - JAVASCRIPT =====

class Portfolio {
    constructor() {
        this.images = [
            { id: 1, src: 'img/watch.jpg', title: 'Watches Collection', description: 'Detailed shot of a luxury timepiece.', tags: ['Professional'] },
            { id: 2, src: 'img/watch2.jpg', title: 'Watches Collection', description: 'A second view of the elegant watch.', tags: ['Professional'] },
            { id: 3, src: 'img/watch3.png', title: 'Watches Collection', description: 'A stunning collection of luxury watches, showcasing intricate details.', tags: ['Professional'] },
            { id: 4, src: 'img/Bugatti2.jpg', title: 'Bugatti Close-Up', description: 'The 1:1 Bugatti Circuit on Minecraft.', tags: ['Minecraft'] },
            { id: 5, src: 'img/Bugatti3.jpg', title: 'Bugatti Elegance', description: 'The 1:1 Bugatti Circuit on Minecraft.', tags: ['Minecraft'] },
            { id: 6, src: 'img/BugattiClouds.png', title: 'Bugatti & Clouds', description: 'The 1:1 Bugatti Circuit on Minecraft.', tags: ['Minecraft'] },
            { id: 7, src: 'img/CapMail.jpg', title: 'Cap Mail', description: '1:1 Architectural Masterpiece "Cap Mail" on Minecraft', tags: ['Minecraft'] },
            { id: 8, src: 'img/CapMail2.jpg', title: 'Cap Mail', description: '1:1 Architectural Masterpiece "Cap Mail" on Minecraft.', tags: ['Minecraft'] },
            { id: 9, src: 'img/DarkPoetry.jpg', title: 'Dark Poetry', description: 'An organic Build on Minecraft by indylynx.', tags: ['Minecraft'] },
            { id: 10, src: 'img/Disney.jpg', title: 'Disney Dreams', description: 'A minecraft castle by indy.', tags: ['Minecraft'] },
            { id: 11, src: 'img/Earth.jpg', title: 'Planet Earth', description: 'A view of our blue planet from space.', tags: ['Sci-Fi'] },
            { id: 12, src: 'img/EyeZoom.png', title: 'Zoom Eye', description: 'An organic build representing beauty of human face.', tags: ['Minecraft'] },
            { id: 13, src: 'img/F4G.jpg', title: 'Fight 4 Glory', description: 'A spawn for a minecraft Event.', tags: ['Minecraft'] },
            { id: 57, src: 'img/watch4.jpg', title: 'Watches Collection', description: 'Detailed shot of a luxury timepiece.', tags: ['Professional'] },
            { id: 58, src: 'img/watch5.jpg', title: 'Watches Collection', description: 'Detailed shot of a luxury timepiece.', tags: ['Professional'] },
            { id: 59, src: 'img/watch6.jpg', title: 'Watches Collection', description: 'Detailed shot of a luxury timepiece.', tags: ['Professional'] },
            { id: 14, src: 'img/F4G2.jpg', title: 'Fight 4 Glory', description: 'A spawn for a minecraft Event.', tags: ['Minecraft'] },
            { id: 15, src: 'img/FortBoyard.jpg', title: 'Fort Boyard', description: 'The iconic French fortress in the sea.', tags: ['Minecraft'] },
            { id: 16, src: 'img/FortBoyard2.jpg', title: 'Fort Boyard', description: 'Another angle of Fort Boyard’s structure.', tags: ['Minecraft'] },
            { id: 17, src: 'img/FortBoyard3.jpg', title: 'Fort Boyard', description: 'Aerial or dramatic view of Fort Boyard.', tags: ['Minecraft'] },
            { id: 18, src: 'img/FortNapoléon.jpg', title: 'Fort Napoléon', description: 'Historic structure captured in detail.', tags: ['Minecraft'] },
            { id: 19, src: 'img/FortNapoléon2.jpg', title: 'Fort Napoléon', description: 'Second perspective on Fort Napoléon.', tags: ['Minecraft'] },
            { id: 20, src: 'img/Fox.jpg', title: 'The Fox', description: 'Organic Minecraft Build of a fox.', tags: ['Minecraft'] },
            { id: 21, src: 'img/Goodyear.jpg', title: 'Goodyear Tires', description: '1:1 Minecraft reproduction of this symbol of racing and performance.', tags: ['Minecraft'] },
            { id: 22, src: 'img/Guimet.jpg', title: 'Guimet Museum', description: '1:1 Minecraft reproduction of Musée Guimet architecture.', tags: ['Minecraft'] },
            { id: 23, src: 'img/Huayra.jpg', title: 'Pagani Huayra', description: 'Luxury hypercar in motion or on display.', tags: ['Car'] },
            { id: 24, src: 'img/Larressingle.jpg', title: 'Larressingle', description: '1:1 minecraft reproduction of medieval village with historical charm.', tags: ['Minecraft'] },
            { id: 25, src: 'img/LarressingleFull.jpg', title: 'Larressingle Full View', description: 'Full view of the fortified village in Minecraft.', tags: ['Minecraft'] },
            { id: 26, src: 'img/Lion.jpg', title: 'Lion Portrait', description: 'Organic Build in Minecraft of a Lion', tags: ['Minecraft'] },
            { id: 27, src: 'img/LowPolyFox.jpg', title: 'Low Poly Fox', description: 'A stylized low-poly rendering of a fox.', tags: ['Art'] },
            { id: 28, src: 'img/MaxLananas.jpg', title: 'MaxLananas', description: 'Prodile image of MaxLananas.', tags: ['Minecraft'] },
            { id: 29, src: 'img/MiniPlanet.jpg', title: 'Mini Planet', description: '360-degree landscape creating a planet effect.', tags: ['Art'] },
            { id: 30, src: 'img/MirrorCastleSide.jpg', title: 'Mirror Castle Side', description: 'A minecraft Castle i did for a contest.', tags: ['Minecraft'] },
            { id: 31, src: 'img/Nature.jpg', title: 'Nature Scene', description: 'Serene natural environment captured.', tags: ['Art'] },
            { id: 32, src: 'img/Planet.jpg', title: 'Another World', description: 'Artistic rendering of a planet or fantasy world.', tags: ['Sci-Fi'] },
            { id: 33, src: 'img/PontNormandie.jpg', title: 'Pont de Normandie', description: 'An architectural feat in Normandy in Minecraft.', tags: ['Minecraft'] },
            { id: 34, src: 'img/RammsteinWhite.jpg', title: 'Rammstein White', description: '1:1 Rammstein Stage.', tags: ['Minecraft'] },
            { id: 35, src: 'img/Rexy.jpg', title: 'Rexy', description: 'The great IMSA champion car.', tags: ['Car'] },
            { id: 36, src: 'img/Rexy2.jpg', title: 'Rexy II', description: 'The LMP2s huntress.', tags: ['Car'] },
            { id: 37, src: 'img/Sanctuary.jpg', title: 'Sanctuary', description: 'A peaceful or sacred place.', tags: ['Minecraft'] },
            { id: 38, src: 'img/SancturySunset.png', title: 'Sanctuary Sunset', description: 'Golden hour lighting on the sanctuary.', tags: ['Minecraft'] },
            { id: 39, src: 'img/SkyNight.jpg', title: 'SkyNight', description: 'My Profile photo.', tags: ['Minecraft'] },
            { id: 40, src: 'img/Statue.jpg', title: 'Statue', description: 'An organic Minecraft Build of an expressive statue.', tags: ['Minecraft'] },
            { id: 41, src: 'img/StatueLumieres.jpg', title: 'Statue of Lights', description: 'Statue illuminated in a festival of lights.', tags: ['Art'] },
            { id: 42, src: 'img/Till.jpg', title: 'Till Lindemann', description: 'Portrait of Till on 1:1 Minecraft Rammstein Stage.', tags: ['Minecraft'] },
            { id: 43, src: 'img/Tree.jpg', title: 'Lone Tree', description: 'A solitary tree in a scenic setting.', tags: ['Art'] },
            { id: 44, src: 'img/Villa.jpg', title: 'Modern Villa', description: 'Contemporary villa with a minimalist design.', tags: ['Minecraft'] },
            { id: 45, src: 'img/dunlop.jpg', title: 'Dunlop Tires', description: '1:1 Minecraft reproduction of the Great LeMans Dunlop Tire', tags: ['Minecraft'] },
            { id: 46, src: 'img/eyeFull.jpg', title: 'The Watcher Beyond', description: 'An organic build representing beauty of human face.', tags: ['Minecraft'] },
            { id: 47, src: 'img/m4GT3evo.jpg', title: 'M4 GT3 Evo', description: '1:1 Minecraft reproduction of the BMW M4 GT3 evo.', tags: ['Minecraft'] },
            { id: 48, src: 'img/maritécold.jpg', title: 'Marité Cold', description: 'A cold atmosphere surrounds the ship.', tags: ['Minecraft'] },
            { id: 49, src: 'img/maritéhot.jpg', title: 'Marité Hot', description: 'Warm sea with the ship.', tags: ['Minecraft'] },
            { id: 50, src: 'img/millenium.jpg', title: 'Millenium Tower', description: 'A Star Wars Render of the Millenium Falcon', tags: ['Art'] },
            { id: 51, src: 'img/mirrorCastle.jpg', title: 'Mirror Castle', description: 'A minecraft Castle i did for a contest.', tags: ['Minecraft'] },
            { id: 52, src: 'img/rammsteinRed.jpg', title: 'Rammstein Red', description: '1:1 Rammstein Stage.', tags: ['Minecraft'] },
            { id: 53, src: 'img/tournesols.jpg', title: 'Tournesols', description: 'Field of sunflowers glowing in sunlight.', tags: ['Art'] },
            { id: 54, src: 'img/787B.jpg', title: 'Mazda 787B', description: 'Iconic Le Mans-winning race car with a distinctive livery.', tags: ['Car'] },
            { id: 55, src: 'img/BlackHole.jpg', title: 'Black Hole', description: 'A cosmic visual representation of a black hole.', tags: ['Sci-Fi'] },
            { id: 56, src: 'img/Bugatti.jpg', title: 'Bugatti Beauty', description: 'The 1:1 Bugatti Circuit on Minecraft.', tags: ['Minecraft'] },
        ];
        
        this.allTags = this.extractAllTags();
        this.activeTag = 'all';
        
        this.currentModal = null;
        this.isLoading = true;
        
        this.init();
    }

    // ===== INITIALIZATION =====
    init() {
        this.setupEventListeners();
        this.createTagFilter();
        this.loadImages();
        this.setupScrollAnimations();
        this.setupParallax();
        this.hideLoadingScreen();
    }

    // ===== LOADING SCREEN =====
    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
            this.isLoading = false;
        }, 1500);
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Modal events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close')) {
                this.closeModal();
            }
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.closeModal();
            }
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                // Sinon, on laisse le lien s'ouvrir normalement
            });
        });


        // Social links hover effects
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', this.animateSocialIcon);
            link.addEventListener('mouseleave', this.resetSocialIcon);
        });

        // Resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
    }

    // ===== TAG SYSTEM =====
    extractAllTags() {
        const tagSet = new Set();
        this.images.forEach(image => {
            image.tags.forEach(tag => tagSet.add(tag));
        });
        return Array.from(tagSet).sort();
    }

    createTagFilter() {
        const gallery = document.getElementById('gallery-grid');
        if (!gallery) return;

        // Create tag filter container
        const tagContainer = document.createElement('div');
        tagContainer.className = 'tag-filter-container fade-in';
        
        const tagWrapper = document.createElement('div');
        tagWrapper.className = 'tag-filter-wrapper';
        
        // Add "All" tag
        const allTag = this.createTagButton('all', 'All', true);
        tagWrapper.appendChild(allTag);
        
        // Add individual tags
        this.allTags.forEach(tag => {
            const tagButton = this.createTagButton(tag, this.capitalizeFirst(tag), false);
            tagWrapper.appendChild(tagButton);
        });
        
        tagContainer.appendChild(tagWrapper);
        
        // Insert before gallery
        gallery.parentNode.insertBefore(tagContainer, gallery);
    }

    createTagButton(tagId, tagName, isActive) {
        const button = document.createElement('button');
        button.className = `tag-button ${isActive ? 'active' : ''}`;
        button.textContent = tagName;
        button.setAttribute('data-tag', tagId);
        
        button.addEventListener('click', () => {
            this.filterByTag(tagId);
            this.updateActiveTag(button);
        });
        
        return button;
    }

    updateActiveTag(clickedButton) {
        // Remove active class from all buttons
        document.querySelectorAll('.tag-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        clickedButton.classList.add('active');
    }

    filterByTag(tag) {
        this.activeTag = tag;
        let filteredImages;
        
        if (tag === 'all') {
            filteredImages = this.images;
        } else {
            filteredImages = this.images.filter(image => 
                image.tags.includes(tag)
            );
        }
        
        this.displayFilteredImages(filteredImages);
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    loadImages() {
        const gallery = document.getElementById('gallery-grid');
        if (!gallery) return;

        // Clear existing content
        gallery.innerHTML = '';

        // Create gallery items
        this.images.forEach((image, index) => {
            const item = this.createGalleryItem(image, index);
            gallery.appendChild(item);
        });

        // Setup intersection observer for lazy loading
        this.setupLazyLoading();
    }

    createGalleryItem(image, index) {
        const item = document.createElement('div');
        item.className = 'gallery-item fade-in';
        item.style.animationDelay = `${index * 0.1}s`;
        
        // Create tags HTML
        const tagsHtml = image.tags.map(tag => 
            `<span class="image-tag">${this.capitalizeFirst(tag)}</span>`
        ).join('');
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                    <div class="image-tags">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;

        // Add click event for modal
        item.addEventListener('click', () => {
            this.openModal(image);
        });

        return item;
    }

    // ===== MODAL FUNCTIONALITY =====
    openModal(image) {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalTags = document.getElementById('modal-tags');

        if (modal && modalImage && modalTitle && modalDescription) {
            modalImage.src = image.src;
            modalImage.alt = image.title;
            modalTitle.textContent = image.title;
            modalDescription.textContent = image.description;
            
            // Add tags to modal
            if (modalTags) {
                const tagsHtml = image.tags.map(tag => 
                    `<span class="modal-tag">${this.capitalizeFirst(tag)}</span>`
                ).join('');
                modalTags.innerHTML = tagsHtml;
            }
            
            modal.classList.add('active');
            this.currentModal = modal;
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        if (this.currentModal) {
            this.currentModal.classList.remove('active');
            this.currentModal = null;
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }

    // ===== SCROLL ANIMATIONS =====
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // ===== LAZY LOADING =====
    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('.gallery-item img').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== PARALLAX EFFECTS =====
    setupParallax() {
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero');
            
            parallaxElements.forEach(element => {
                const speed = 0.3;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
            
            ticking = false;
        };

        const requestParallax = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestParallax);
    }

    // ===== SOCIAL ICON ANIMATIONS =====
    animateSocialIcon(e) {
        const icon = e.currentTarget.querySelector('svg');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    }

    resetSocialIcon(e) {
        const icon = e.currentTarget.querySelector('svg');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    }

    // ===== UTILITY FUNCTIONS =====
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    handleResize() {
        // Recalculate any size-dependent elements
        if (this.currentModal) {
            // Adjust modal positioning if needed
            this.adjustModalSize();
        }
    }

    adjustModalSize() {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            const maxHeight = window.innerHeight * 0.9;
            const maxWidth = window.innerWidth * 0.9;
            
            modalContent.style.maxHeight = `${maxHeight}px`;
            modalContent.style.maxWidth = `${maxWidth}px`;
        }
    }

    // ===== SMOOTH SCROLL TO TOP =====
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ===== MASONRY LAYOUT (Alternative to CSS Grid) =====
    setupMasonryLayout() {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        const items = grid.querySelectorAll('.gallery-item');
        const columnCount = Math.floor(grid.offsetWidth / 320); // 300px + gap
        const columns = Array.from({ length: columnCount }, () => []);

        items.forEach((item, index) => {
            const shortestColumn = columns.reduce((prev, current) => 
                prev.length < current.length ? prev : current
            );
            shortestColumn.push(item);
        });

        // Apply positioning (this is a simplified version)
        columns.forEach((column, columnIndex) => {
            column.forEach((item, itemIndex) => {
                item.style.position = 'absolute';
                item.style.left = `${columnIndex * 320}px`;
                item.style.top = `${itemIndex * 280}px`; // Approximate height
            });
        });
    }

    // ===== THEME TOGGLE (Future feature) =====
    toggleTheme() {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }

    // ===== SEARCH/FILTER FUNCTIONALITY =====
    filterImages(searchTerm) {
        const filteredImages = this.images.filter(image => 
            image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        this.displayFilteredImages(filteredImages);
    }

    displayFilteredImages(images) {
        const gallery = document.getElementById('gallery-grid');
        if (!gallery) return;

        // Add fade out animation to existing items
        const existingItems = gallery.querySelectorAll('.gallery-item');
        existingItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.05}s`;
            item.classList.add('fade-out');
        });

        // Wait for fade out animation and then load new images
        setTimeout(() => {
            gallery.innerHTML = '';
            
            images.forEach((image, index) => {
                const item = this.createGalleryItem(image, index);
                gallery.appendChild(item);
            });

            // Re-setup observers
            this.setupLazyLoading();
            this.setupScrollAnimations();
        }, 300);
    }

    // ===== PERFORMANCE OPTIMIZATION =====
    preloadNextImages() {
        // Preload a few images ahead for better UX
        const preloadLimit = 5;
        this.images.slice(0, preloadLimit).forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
}

// ===== INITIALIZE PORTFOLIO =====
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new Portfolio();
    
    // Make portfolio globally accessible for debugging
    window.portfolio = portfolio;
    
    // Optional: Add some Easter eggs or advanced features
    console.log('%c3D Renders Portfolio', 'color: #d4af37; font-size: 24px; font-weight: bold;');
    console.log('%cCrafted with precision and passion ✨', 'color: #a0a0a0; font-size: 14px;');
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`%cPage loaded in ${loadTime}ms`, 'color: #d4af37;');
        }, 0);
    });
}

// ===== SERVICE WORKER REGISTRATION (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
