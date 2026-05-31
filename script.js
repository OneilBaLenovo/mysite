/* ============================================================
   O.N SITE PORTFOLIO — SCRIPT.JS
   Masterpiece of interactivity, precision, and elegance
   ============================================================ */
   'use strict';

   document.addEventListener('DOMContentLoaded', () => {
   
       // ---------- DOM REFERENCES ----------
       const html = document.documentElement;
       const body = document.body;
       const header = document.getElementById('siteHeader');
       const mainNav = document.getElementById('mainNav');
       const hamburgerBtn = document.getElementById('hamburgerBtn');
       const mobileOverlay = document.getElementById('mobileOverlay');
       const themeToggle = document.getElementById('themeToggle');
       const langToggle = document.getElementById('langToggle');
       const backToTopBtn = document.getElementById('backToTop');
       const portfolioGrid = document.getElementById('portfolioGrid');
       const filterBtns = document.querySelectorAll('.filter-btn');
       const lightbox = document.getElementById('portfolioLightbox');
       const lightboxBody = document.getElementById('lightboxBody');
       const lightboxClose = lightbox?.querySelector('.lightbox-close');
       const lightboxBackdrop = lightbox?.querySelector('.lightbox-backdrop');
       const contactForm = document.getElementById('contactForm');
       const formSuccess = document.getElementById('formSuccess');
       const testimonialCards = document.querySelectorAll('.testimonial-card');
       const carouselPrev = document.getElementById('carouselPrev');
       const carouselNext = document.getElementById('carouselNext');
       const carouselDots = document.querySelectorAll('.carousel-dot');
       const revealElements = document.querySelectorAll('.reveal-el');
       const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
       const sections = document.querySelectorAll('section[id]');
       const logoImg = document.querySelector('.logo-img');
   
       // ---------- TRANSLATIONS ----------
       const translations = {
           en: {
               // Nav
               nav_home: 'Home',
               nav_about: 'About',
               nav_services: 'Services',
               nav_portfolio: 'Portfolio',
               nav_testimonials: 'Testimonials',
               nav_contact: 'Contact',
               // Hero
               hero_title: 'We Build Digital<br><span class="hero-highlight">Masterpieces</span>',
               hero_subtitle: 'O.N Site crafts elite applications and websites with Swiss precision and Persian elegance. Your vision, engineered to perfection.',
               hero_cta_work: 'See Our Work',
               hero_cta_contact: 'Get in Touch',
               // About
               about_tag: 'Who We Are',
               about_title: 'About O.N Site',
               about_desc_1: 'O.N Site is a boutique digital studio founded on the belief that every pixel matters. We blend cutting-edge technology with timeless design principles to create digital experiences that resonate deeply with users.',
               about_desc_2: 'With years of expertise in app development, web engineering, and UI/UX design, our team approaches each project as a unique masterpiece. We do not just write code — we sculpt digital excellence.',
               about_stat_projects: 'Projects Delivered',
               about_stat_clients: 'Happy Clients',
               about_stat_years: 'Years Experience',
               // Services
               services_tag: 'What We Do',
               services_title: 'Our Services',
               service_app_title: 'App Development',
               service_app_desc: 'Native iOS and Android applications built with precision, performance, and pixel-perfect design at their core.',
               service_web_title: 'Website Development',
               service_web_desc: 'Responsive, lightning-fast websites engineered with clean code and captivating design that converts visitors into clients.',
               service_uiux_title: 'UI/UX Design',
               service_uiux_desc: 'User-centered design that marries aesthetics with functionality, creating intuitive interfaces that delight at every touchpoint.',
               service_perf_title: 'Performance Optimization',
               service_perf_desc: 'Speed is a feature. We optimize every asset, query, and line of code to deliver sub-second load times and buttery-smooth interactions.',
               service_consult_title: 'Consultation & Strategy',
               service_consult_desc: 'Strategic guidance to align your digital goals with market realities. We help you navigate the complex landscape of modern technology.',
               // Portfolio
               portfolio_tag: 'Our Work',
               portfolio_title: 'Selected Projects',
               filter_all: 'All',
               filter_app: 'App',
               filter_web: 'Web',
               filter_design: 'Design',
               cat_app: 'App',
               cat_web: 'Web',
               cat_design: 'Design',
               // Testimonials
               testimonials_tag: 'Testimonials',
               testimonials_title: 'What Our Clients Say',
               testimonial_1_text: 'O.N Site transformed our outdated app into a sleek, high-performance product. Their attention to detail is unmatched. The team was professional, responsive, and truly cared about our success.',
               testimonial_1_name: 'Sarah Ahmadi',
               testimonial_1_role: 'CEO, Finova Tech',
               testimonial_2_text: 'Working with O.N Site was a breath of fresh air. They delivered our website ahead of schedule and exceeded every expectation. The design is stunning and the performance is incredible.',
               testimonial_2_name: 'David Karimi',
               testimonial_2_role: 'Founder, Artisan Collective',
               testimonial_3_text: 'The UI/UX design work from O.N Site completely revitalized our product. User engagement increased by 200% within the first month. Their strategic approach is simply brilliant.',
               testimonial_3_name: 'Maryam Nazari',
               testimonial_3_role: 'Product Lead, Lumina Inc.',
               // Contact
               contact_tag: 'Get In Touch',
               contact_title: "Let's Build Something Great",
               form_name: 'Your Name',
               form_email: 'Your Email',
               form_subject: 'Subject',
               form_message: 'Your Message',
               form_submit: 'Send Message',
               form_error_name: 'Please enter your name.',
               form_error_email: 'Please enter a valid email.',
               form_error_subject: 'Please enter a subject.',
               form_error_message: 'Please enter your message.',
               form_success: "Message sent successfully! We'll be in touch soon.",
               contact_location: 'Tehran, Iran — Available Worldwide',
               contact_hours: 'Mon — Fri, 9:00 AM — 7:00 PM IRST',
               // Footer
               footer_desc: 'Crafting Digital Excellence — one pixel at a time.',
               footer_links: 'Quick Links',
               footer_follow: 'Follow Us',
               footer_copy: '© 2024 O.N Site. All rights reserved. Crafted with precision.'
           },
           fa: {
               nav_home: 'خانه',
               nav_about: 'درباره ما',
               nav_services: 'خدمات',
               nav_portfolio: 'نمونه کارها',
               nav_testimonials: 'نظرات',
               nav_contact: 'تماس',
               hero_title: 'ما شاهکارهای<br><span class="hero-highlight">دیجیتال میسازیم</span>',
               hero_subtitle: 'O.N Site برنامه‌ها و وب‌سایت‌های نخبه را با دقت سوئیسی و ظرافت ایرانی می‌سازد. دیدگاه شما، مهندسی‌شده تا کمال.',
               hero_cta_work: 'مشاهده نمونه کارها',
               hero_cta_contact: 'تماس با ما',
               about_tag: 'ما کی هستیم',
               about_title: 'درباره O.N Site',
               about_desc_1: 'O.N Site یک استودیوی دیجیتال کوچک است که بر این باور بنا شده که هر پیکسل اهمیت دارد. ما فناوری پیشرفته را با اصول طراحی جاودانه ترکیب می‌کنیم تا تجربیات دیجیتالی ایجاد کنیم که عمیقاً با کاربران ارتباط برقرار کند.',
               about_desc_2: 'با سال‌ها تخصص در توسعه اپلیکیشن، مهندسی وب و طراحی UI/UX، تیم ما به هر پروژه به عنوان یک شاهکار منحصر به فرد نزدیک می‌شود. ما فقط کد نمی‌نویسیم — ما برتری دیجیتال را شکل می‌دهیم.',
               about_stat_projects: 'پروژه تحویل‌داده‌شده',
               about_stat_clients: 'مشتری راضی',
               about_stat_years: 'سال تجربه',
               services_tag: 'چه کاری انجام می‌دهیم',
               services_title: 'خدمات ما',
               service_app_title: 'توسعه اپلیکیشن',
               service_app_desc: 'برنامه‌های بومی iOS و Android که با دقت، عملکرد و طراحی بی‌نقص ساخته شده‌اند.',
               service_web_title: 'توسعه وب‌سایت',
               service_web_desc: 'وب‌سایت‌های واکنش‌گرا و فوق‌العاده سریع که با کد تمیز و طراحی جذاب، بازدیدکنندگان را به مشتری تبدیل می‌کنند.',
               service_uiux_title: 'طراحی UI/UX',
               service_uiux_desc: 'طراحی کاربرمحور که زیبایی‌شناسی را با عملکرد ترکیب می‌کند و رابط‌های بصری ایجاد می‌کند که در هر نقطه تماس لذت می‌بخشند.',
               service_perf_title: 'بهینه‌سازی عملکرد',
               service_perf_desc: 'سرعت یک ویژگی است. ما هر asset، query و خط کد را بهینه می‌کنیم تا زمان بارگذاری زیر یک ثانیه و تعاملات فوق‌العاده روان ارائه دهیم.',
               service_consult_title: 'مشاوره و استراتژی',
               service_consult_desc: 'راهنمایی استراتژیک برای هماهنگ کردن اهداف دیجیتال شما با واقعیت‌های بازار. ما به شما کمک می‌کنیم در چشم‌انداز پیچیده فناوری مدرن حرکت کنید.',
               portfolio_tag: 'کارهای ما',
               portfolio_title: 'پروژه‌های منتخب',
               filter_all: 'همه',
               filter_app: 'اپلیکیشن',
               filter_web: 'وب',
               filter_design: 'طراحی',
               cat_app: 'اپلیکیشن',
               cat_web: 'وب',
               cat_design: 'طراحی',
               testimonials_tag: 'نظرات مشتریان',
               testimonials_title: 'مشتریان ما چه می‌گویند',
               testimonial_1_text: 'O.N Site برنامه قدیمی ما را به یک محصول شیک و با عملکرد بالا تبدیل کرد. توجه آنها به جزئیات بی‌نظیر است. تیم حرفه‌ای، پاسخگو و واقعاً به موفقیت ما اهمیت می‌داد.',
               testimonial_1_name: 'سارا احمدی',
               testimonial_1_role: 'مدیرعامل، Finova Tech',
               testimonial_2_text: 'همکاری با O.N Site نفسی تازه بود. آنها وب‌سایت ما را زودتر از موعد تحویل دادند و فراتر از هر انتظاری عمل کردند. طراحی خیره‌کننده و عملکرد باورنکردنی است.',
               testimonial_2_name: 'داوود کریمی',
               testimonial_2_role: 'بنیان‌گذار، Artisan Collective',
               testimonial_3_text: 'کار طراحی UI/UX از O.N Site محصول ما را کاملاً احیا کرد. تعامل کاربران در ماه اول ۲۰۰٪ افزایش یافت. رویکرد استراتژیک آنها به سادگی درخشان است.',
               testimonial_3_name: 'مریم نظری',
               testimonial_3_role: 'مدیر محصول، Lumina Inc.',
               contact_tag: 'تماس بگیرید',
               contact_title: 'بیایید چیزی عالی بسازیم',
               form_name: 'نام شما',
               form_email: 'ایمیل شما',
               form_subject: 'موضوع',
               form_message: 'پیام شما',
               form_submit: 'ارسال پیام',
               form_error_name: 'لطفاً نام خود را وارد کنید.',
               form_error_email: 'لطفاً یک ایمیل معتبر وارد کنید.',
               form_error_subject: 'لطفاً موضوع را وارد کنید.',
               form_error_message: 'لطفاً پیام خود را وارد کنید.',
               form_success: 'پیام با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.',
               contact_location: 'تهران، ایران — در دسترس در سراسر جهان',
               contact_hours: 'دوشنبه تا جمعه، ۹ صبح تا ۷ عصر به وقت ایران',
               footer_desc: 'خلق برتری دیجیتال — یک پیکسل در یک زمان.',
               footer_links: 'لینک‌های سریع',
               footer_follow: 'ما را دنبال کنید',
               footer_copy: '© ۲۰۲۴ O.N Site. تمامی حقوق محفوظ است. ساخته شده با دقت.'
           }
       };
   
       // ---------- HELPER: UPDATE ALL TRANSLATABLE ELEMENTS ----------
       function setLanguage(lang) {
           html.lang = lang;
           html.dir = lang === 'fa' ? 'rtl' : 'ltr';
           document.querySelectorAll('[data-i18n]').forEach(el => {
               const key = el.dataset.i18n;
               if (translations[lang] && translations[lang][key]) {
                   if (key === 'hero_title') {
                       // Special handling for inner HTML
                       el.innerHTML = translations[lang][key];
                   } else {
                       el.textContent = translations[lang][key];
                   }
               }
           });
           // Update tooltip on language toggle button
           langToggle.setAttribute('aria-label', lang === 'fa' ? 'Switch to English' : 'تغییر به انگلیسی');
           langToggle.title = lang === 'fa' ? 'Switch to English' : 'تغییر به انگلیسی';
           // Save preference
           localStorage.setItem('lang', lang);
       }
   
       // ---------- LANGUAGE TOGGLE ----------
       function toggleLanguage() {
           const currentLang = html.lang;
           const newLang = currentLang === 'en' ? 'fa' : 'en';
           setLanguage(newLang);
           // Re-initialize any dynamic content if needed
           updateActiveNavOnScroll();
       }
   
       // ---------- THEME TOGGLE ----------
       function setTheme(theme) {
           html.setAttribute('data-theme', theme);
           localStorage.setItem('theme', theme);
           const metaThemeColor = document.querySelector('meta[name="theme-color"]');
           if (metaThemeColor) {
               metaThemeColor.content = theme === 'dark' ? '#0b0e14' : '#faf8f5';
           }
           // Toggle sun/moon icon visibility is handled by CSS via data-theme attribute
       }
   
       function toggleTheme() {
           const currentTheme = html.getAttribute('data-theme');
           const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
           setTheme(newTheme);
       }
   
       // ---------- MOBILE MENU ----------
       function openMobileMenu() {
           hamburgerBtn.classList.add('active');
           mobileOverlay.classList.add('active');
           hamburgerBtn.setAttribute('aria-expanded', 'true');
           mobileOverlay.setAttribute('aria-hidden', 'false');
           body.style.overflow = 'hidden';
       }
   
       function closeMobileMenu() {
           hamburgerBtn.classList.remove('active');
           mobileOverlay.classList.remove('active');
           hamburgerBtn.setAttribute('aria-expanded', 'false');
           mobileOverlay.setAttribute('aria-hidden', 'true');
           body.style.overflow = '';
       }
   
       hamburgerBtn.addEventListener('click', () => {
           if (hamburgerBtn.classList.contains('active')) {
               closeMobileMenu();
           } else {
               openMobileMenu();
           }
       });
   
       // Close mobile menu on link click
       mobileOverlay.querySelectorAll('a').forEach(link => {
           link.addEventListener('click', closeMobileMenu);
       });
   
       // Close mobile menu on resize if open
       window.addEventListener('resize', () => {
           if (window.innerWidth > 768 && hamburgerBtn.classList.contains('active')) {
               closeMobileMenu();
           }
       });
   
       // ---------- ACTIVE NAV LINK ON SCROLL (Intersection Observer) ----------
       function updateActiveNavOnScroll() {
           const scrollPos = window.scrollY + window.innerHeight / 3;
           let currentSection = '';
           sections.forEach(section => {
               const sectionTop = section.offsetTop - 120; // offset for header
               const sectionHeight = section.offsetHeight;
               if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                   currentSection = section.getAttribute('id');
               }
           });
           allNavLinks.forEach(link => {
               const href = link.getAttribute('href');
               if (href === `#${currentSection}`) {
                   link.classList.add('active');
               } else {
                   link.classList.remove('active');
               }
           });
       }
   
       // ---------- REVEAL ON SCROLL (Intersection Observer) ----------
       const revealObserver = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('revealed');
                   revealObserver.unobserve(entry.target);
               }
           });
       }, {
           threshold: 0.15,
           rootMargin: '0px 0px -30px 0px'
       });
   
       revealElements.forEach(el => revealObserver.observe(el));
   
       // ---------- PORTFOLIO FILTERING ----------
       function filterPortfolio(filterValue) {
           const cards = portfolioGrid.querySelectorAll('.portfolio-card');
           cards.forEach(card => {
               const category = card.dataset.category;
               if (filterValue === 'all' || category === filterValue) {
                   card.style.display = 'block';
                   card.style.opacity = '1';
                   card.style.transform = 'scale(1)';
                   card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
               } else {
                   card.style.opacity = '0';
                   card.style.transform = 'scale(0.95)';
                   card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                   setTimeout(() => {
                       if (card.style.opacity === '0') card.style.display = 'none';
                   }, 400);
               }
           });
       }
   
       filterBtns.forEach(btn => {
           btn.addEventListener('click', () => {
               filterBtns.forEach(b => b.classList.remove('active'));
               btn.classList.add('active');
               filterPortfolio(btn.dataset.filter);
           });
       });
   
       // ---------- PORTFOLIO LIGHTBOX ----------
       const projectDetails = {
           'Finova Wallet': {
               title: 'Finova Wallet',
               category: 'App',
               desc: 'A complete digital banking experience redesigned from the ground up. We crafted a seamless UI with intuitive navigation, real-time transaction tracking, and bank-grade security. The result was a 40% increase in user engagement.',
               tech: 'Swift, Kotlin, Node.js, PostgreSQL'
           },
           'Artisan Collective': {
               title: 'Artisan Collective',
               category: 'Web',
               desc: 'A full-featured e-commerce platform for handmade goods. We built a lightning-fast, mobile-first storefront with custom cart logic, multi-currency support, and an immersive product discovery experience.',
               tech: 'Next.js, Tailwind CSS, Stripe, MongoDB'
           },
           'Lumina Brand System': {
               title: 'Lumina Brand System',
               category: 'Design',
               desc: 'A comprehensive visual identity and design system for a tech-forward lifestyle brand. We delivered a versatile logo suite, typography scales, color palettes, and a complete UI component library.',
               tech: 'Figma, Adobe Illustrator, Principle'
           },
           'FitPulse Pro': {
               title: 'FitPulse Pro',
               category: 'App',
               desc: 'A fitness tracking application that combines AI-powered workout recommendations with social motivation. The app features real-time health metric syncing with Apple Health and Google Fit.',
               tech: 'Flutter, Firebase, TensorFlow Lite'
           },
           'Nexus Dashboard': {
               title: 'Nexus Dashboard',
               category: 'Web',
               desc: 'A SaaS analytics dashboard for enterprise teams. We engineered a data-heavy interface with dynamic charting, real-time collaboration, and customizable widgets, all while maintaining a buttery-smooth 60fps.',
               tech: 'React, D3.js, WebSocket, AWS'
           },
           'Aether UI Kit': {
               title: 'Aether UI Kit',
               category: 'Design',
               desc: 'An expansive design system and UI kit containing over 200 components, dark/light mode variants, and accessibility-first patterns. Used by multiple startups to accelerate their product development.',
               tech: 'Figma, Tokens Studio, Storybook'
           }
       };
   
       function openLightbox(projectTitle) {
           const project = projectDetails[projectTitle];
           if (!project) return;
           lightboxBody.innerHTML = `
               <div class="lightbox-header">
                   <span class="section-tag">${project.category}</span>
                   <h3>${project.title}</h3>
               </div>
               <div class="lightbox-project-content">
                   <div class="lightbox-thumb">
                       <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;border-radius:var(--radius-lg);">
                           <rect width="400" height="300" fill="var(--accent)" opacity="0.08"/>
                           <circle cx="200" cy="150" r="80" fill="var(--accent-soft)" opacity="0.2"/>
                           <text x="200" y="155" text-anchor="middle" fill="var(--accent)" font-family="Inter" font-size="20" font-weight="600">${project.title}</text>
                       </svg>
                   </div>
                   <p class="lightbox-desc">${project.desc}</p>
                   <p class="lightbox-tech"><strong>Tech Stack:</strong> ${project.tech}</p>
               </div>
           `;
           lightbox.classList.add('active');
           lightbox.setAttribute('aria-hidden', 'false');
           body.style.overflow = 'hidden';
       }
   
       function closeLightbox() {
           lightbox.classList.remove('active');
           lightbox.setAttribute('aria-hidden', 'true');
           body.style.overflow = '';
       }
   
       portfolioGrid.addEventListener('click', (e) => {
           const card = e.target.closest('.portfolio-card');
           if (!card) return;
           const titleEl = card.querySelector('.portfolio-title');
           if (titleEl) {
               openLightbox(titleEl.textContent.trim());
           }
       });
   
       lightboxClose?.addEventListener('click', closeLightbox);
       lightboxBackdrop?.addEventListener('click', closeLightbox);
       document.addEventListener('keydown', (e) => {
           if (e.key === 'Escape' && lightbox.classList.contains('active')) {
               closeLightbox();
           }
       });
   
       // ---------- TESTIMONIALS CAROUSEL ----------
       let currentTestimonialIndex = 0;
       let testimonialInterval;
   
       function showTestimonial(index) {
           testimonialCards.forEach((card, i) => {
               card.classList.toggle('active', i === index);
           });
           carouselDots.forEach((dot, i) => {
               dot.classList.toggle('active', i === index);
           });
           currentTestimonialIndex = index;
       }
   
       function nextTestimonial() {
           const nextIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
           showTestimonial(nextIndex);
       }
   
       function prevTestimonial() {
           const prevIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
           showTestimonial(prevIndex);
       }
   
       function startCarouselAuto() {
           stopCarouselAuto();
           testimonialInterval = setInterval(nextTestimonial, 6000);
       }
   
       function stopCarouselAuto() {
           clearInterval(testimonialInterval);
       }
   
       carouselNext?.addEventListener('click', () => {
           nextTestimonial();
           stopCarouselAuto();
           startCarouselAuto();
       });
   
       carouselPrev?.addEventListener('click', () => {
           prevTestimonial();
           stopCarouselAuto();
           startCarouselAuto();
       });
   
       carouselDots.forEach(dot => {
           dot.addEventListener('click', () => {
               const index = parseInt(dot.dataset.index, 10);
               showTestimonial(index);
               stopCarouselAuto();
               startCarouselAuto();
           });
       });
   
       // Pause auto-rotate on hover
       const carouselContainer = document.getElementById('testimonialsCarousel');
       carouselContainer?.addEventListener('mouseenter', stopCarouselAuto);
       carouselContainer?.addEventListener('mouseleave', startCarouselAuto);
   
       if (testimonialCards.length > 1) {
           startCarouselAuto();
       }
   
       // ---------- CONTACT FORM ----------
       function validateField(input) {
           const value = input.value.trim();
           const errorEl = input.parentElement.querySelector('.form-error');
           let isValid = true;
           if (input.required && !value) {
               isValid = false;
           } else if (input.type === 'email' && value) {
               const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               isValid = emailPattern.test(value);
           }
           if (!isValid) {
               input.classList.add('error');
               if (errorEl) errorEl.style.display = 'block';
           } else {
               input.classList.remove('error');
               if (errorEl) errorEl.style.display = 'none';
           }
           return isValid;
       }
   
       contactForm?.addEventListener('submit', function(e) {
           e.preventDefault();
           const inputs = this.querySelectorAll('.form-input[required]');
           let allValid = true;
           inputs.forEach(input => {
               if (!validateField(input)) allValid = false;
           });
   
           if (allValid) {
               // Simulate sending
               const submitBtn = this.querySelector('.btn-submit');
               submitBtn.disabled = true;
               submitBtn.querySelector('.btn-text').textContent = 'Sending...';
               setTimeout(() => {
                   this.style.display = 'none';
                   formSuccess.classList.add('active');
                   // Reset form after 5 seconds
                   setTimeout(() => {
                       this.reset();
                       this.style.display = 'flex';
                       formSuccess.classList.remove('active');
                       submitBtn.disabled = false;
                       submitBtn.querySelector('.btn-text').textContent = translations[html.lang]?.form_submit || 'Send Message';
                   }, 5000);
               }, 1200);
           }
       });
   
       // Live validation on input
       contactForm?.querySelectorAll('.form-input').forEach(input => {
           input.addEventListener('input', () => {
               if (input.classList.contains('error')) {
                   validateField(input);
               }
           });
           input.addEventListener('blur', () => validateField(input));
       });
   
       // ---------- BACK TO TOP BUTTON ----------
       function toggleBackToTop() {
           if (window.scrollY > 600) {
               backToTopBtn.classList.add('visible');
           } else {
               backToTopBtn.classList.remove('visible');
           }
       }
   
       backToTopBtn.addEventListener('click', () => {
           window.scrollTo({ top: 0, behavior: 'smooth' });
       });
   
       // ---------- SCROLL EVENT LISTENER ----------
       window.addEventListener('scroll', () => {
           updateActiveNavOnScroll();
           toggleBackToTop();
       }, { passive: true });
   
       // ---------- INITIALIZATION ----------
       function init() {
           // Load saved theme
           const savedTheme = localStorage.getItem('theme') || 'light';
           setTheme(savedTheme);
           // Load saved language
           const savedLang = localStorage.getItem('lang') || 'en';
           setLanguage(savedLang);
           // Set initial active nav
           updateActiveNavOnScroll();
           // Show back to top if already scrolled
           toggleBackToTop();
           // Filter default "all" is already active via CSS, but ensure JS matches
           filterPortfolio('all');
       }
   
       // Event listeners
       themeToggle.addEventListener('click', toggleTheme);
       langToggle.addEventListener('click', toggleLanguage);
   
       // Smooth scroll for anchor links (fallback for browsers that don't support scroll-behavior)
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function(e) {
               const targetId = this.getAttribute('href');
               if (targetId === '#') return;
               const target = document.querySelector(targetId);
               if (target) {
                   e.preventDefault();
                   const headerOffset = 80;
                   const elementPosition = target.getBoundingClientRect().top;
                   const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                   window.scrollTo({
                       top: offsetPosition,
                       behavior: 'smooth'
                   });
               }
           });
       });
   
       // Start
       init();
   });