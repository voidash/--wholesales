document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langNpBtn = document.getElementById('lang-np');
    const themeToggle = document.getElementById('theme-toggle');
    const yearSpan = document.getElementById('year');

    const translations = {
        'Wholesale Service': 'थोक सेवा',
        'Fresh products directly from the farmer to your home': 'किसानबाट सिधै तपाईंको घरमा ताजा उत्पादनहरू',
        'About Us': 'हाम्रो बारेमा',
        'Thok Sewa is a modern platform connecting farmers directly with customers. Our goal is to eliminate middlemen, providing fair prices for farmers and fresh, quality food for customers through a centralized supply chain.': 'थोक सेवा किसानहरूलाई सिधै ग्राहकहरूसँग जोड्ने एक आधुनिक मं��� हो। हाम्रो उद्देश्य बिचौलियाहरूलाई हटाएर किसानहरूलाई उनीहरूको उत्पादनको उचित मूल्य प्रदान गर्नु र ग्राहकहरूलाई ताजा र गुणस्तरीय खाद्य सामग्री उपलब्ध गराउनु हो। हामी एक केन्द्रीकृत आपूर्ति श्रृंखला मार्फत यो कार्य गर्दछौं।',
        'Our Services': 'हाम्रो सेवाहरू',
        'Direct Procurement': 'सिधा खरिद',
        'We purchase fresh produce directly from the farmers\' fields, ensuring they get a better income.': 'हामी किसानहरूको खेतबाट सिधै ताजा उत्पादनहरू खरिद गर्छौं, जसले गर्दा उनीहरूले राम्रो आम्दानी गर्न सक्छन्।',
        'Quality Control': 'गुणस्तर ���ियन्त्रण',
        'In our centralized system, we check the quality of every product so that you always get the best.': 'हाम्रो केन्द्रीकृत प्रणालीमा, हामी प्रत्येक उत्पादनको गुणस्तर जाँच गर्छौं ताकि तपाईंले सधैं उत्तम पाउनुहोस्।',
        'Home Delivery': 'घरमा डेलिभरी',
        'We will deliver fresh and clean products to your doorstep according to your order.': 'तपाईंको अर्डर अनुसार ताजा र स्वच्छ उत्पादनहरू तपाईंको घरको ढोकासम्म पुर्याउनेछौं।',
        'Fair Price': 'उचित मूल्य',
        'By removing middlemen, we are able to provide products at a fair price for both farmers and customers.': 'बिचौलिया नहुँदा किसान र ग्राहक दुवैलाई उचित मूल्यमा उत्पादनहरू उपलब्ध गराउन हामी सफल छौं।',
        'Our Products': 'हाम्रा उत्पादनहरू',
        'We will soon be offering a wide variety of fresh vegetables, fruits, and other food items.': 'हामी चाँडै नै विभिन्न प्रकारका ताजा तरकारीहरू, फलफूलहरू, र अन्य खाद्य सामग्रीहरू उपलब्ध गराउनेछौं।',
        'Contact Us': 'सम्पर्क गर्नुहोस्',
        'For any inquiries, please email us at': 'कुनै पनि जानकारीको लागि, हामीलाई',
        '': 'मा इमेल गर्नुहोस्।'
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-key-en]').forEach(el => {
            const keyEn = el.getAttribute('data-key-en');
            const keyNp = el.getAttribute('data-key-np');
            if (lang === 'en') {
                el.textContent = keyEn;
            } else {
                el.textContent = keyNp;
            }
        });
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langNpBtn.classList.remove('active');
        } else {
            langNpBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }
        localStorage.setItem('language', lang);
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            themeToggle.checked = true;
        } else {
            themeToggle.checked = false;
        }
        localStorage.setItem('theme', theme);
    };

    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langNpBtn.addEventListener('click', () => setLanguage('np'));

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // Set initial language and theme from local storage or defaults
    const savedLang = localStorage.getItem('language') || 'np';
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    setLanguage(savedLang);
    setTheme(savedTheme);

    // Update year
    yearSpan.textContent = new Date().getFullYear();
});
