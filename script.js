const translations = {
    it: {
        title: "il sito sciocco di cj",
        settings: "Impostazioni",
        themes: "Temi",
        languages: "Lingue",
        defaultTheme: "Tema Predefinito",
        freshTheme: "Tema Fresco",
        nightTheme: "Tema Notte",
        sunsetTheme: "Tema Tramonto",
        forestTheme: "Tema Foresta",
        cherryTheme: "Tema Succo di Ciliegia",
        glitchTheme: "Tema Glitch",
        welcome: "benvenuto",
        links2: "collegamenti",
        skills2: "abilità",
        gallery2: "galleria",
        marquee1: "ultimo aggiornamento: 10.01.2025!!!",
        marquee2: "benvenuto nel mio sciocco sito web!",
        marquee3: "amo il salmone",
        marquee4: "ssdddhjdekvrkf scusa il gatto era sulla tastiera",
        marquee5: "grazie per essere qui",
        home: "Pagina Iniziale",
        links: "Collegamenti",
        skills: "Abilità",
        gallery: "Galleria",
        about: "ciao! sono cyberjoke (o cj in breve). sono un aspirante artista e programmatore lua con esperienza in c++. (GMT +1 o GMT +2)",
        programming: "programmazione",
        artDesign: "arte & design",
        pixelArt: "pixel art",
        digitalArt: "arte digitale",
        visitThanks: "grazie per aver visitato il mio sito web!",
        websiteCredit: "QUESTO SITO WEB È STATO CREATO DAL PICCOLO AMICO DI cj:",
        discord: "discord",
        youtube: "youtube",
        roblox: "roblox"
    },
    en: {
        title: "cj's silly ass website",
        settings: "Settings",
        themes: "Themes",
        languages: "Languages",
        defaultTheme: "Default Theme",
        freshTheme: "Fresh Theme",
        nightTheme: "Night Theme",
        sunsetTheme: "Sunset Theme",
        forestTheme: "Forest Theme",
        cherryTheme: "Cherry Juice Theme",
        glitchTheme: "Glitch Theme",
        welcome: "welcome",
        links2: "links",
        skills2: "skills",
        gallery2: "gallery",
        marquee1: "last update: 10.01.2025!!!",
        marquee2: "welcome to my silly website!",
        marquee3: "i love salmon",
        marquee4: "ssdddhjdekvrkf sorry cat was on keybord",
        marquee5: "thanks for being here",
        home: "Main Page",
        links: "Links",
        skills: "Skills",
        gallery: "Gallery",
        about: "hello! i'm cyberjoke (or cj for short). i'm an aspiring artist and lua programmer with some experience in c++. (GMT +1 or GMT +2)",
        programming: "programming",
        artDesign: "art & design",
        pixelArt: "pixel art",
        digitalArt: "digital art",
        visitThanks: "thanks for visiting my website!",
        websiteCredit: "THIS WEBSITE IS MADE BY cj's LIL FRIEND:",
        discord: "discord",
        youtube: "youtube",
        roblox: "roblox"
    },
    tr: {
        title: "cj'nin saçma sapan websitesi",
        settings: "Ayarlar",
        themes: "Temalar",
        languages: "Diller",
        defaultTheme: "Varsayılan Tema",
        freshTheme: "Ferah Tema",
        nightTheme: "Gece Teması",
        sunsetTheme: "Günbatımı Teması",
        forestTheme: "Orman Teması",
        cherryTheme: "Vişne Suyu Teması",
        glitchTheme: "Glitch Teması",
        welcome: "hoşgeldiniz",
        links2: "bağlantılar",
        skills2: "yetenekler",
        gallery2: "galeri",
        marquee1: "son güncelleme: 10.01.2025!!!",
        marquee2: "saçma websiteme hoşgeldiniz!",
        marquee3: "somon seviyorum",
        marquee4: "ssdddhjdekvrkf pardon kedi klavyenin üstündeydi",
        marquee5: "burada olduğunuz için teşekkürler",
        home: "Ana Sayfa",
        links: "Bağlantılar",
        skills: "Yetenekler",
        gallery: "Galeri",
        about: "merhaba! ben cyberjoke (kısaca cj). amatör bir sanatçı ve c++ deneyimi olan bir lua programcısıyım. (GMT +1 veya GMT +2)",
        programming: "programlama",
        artDesign: "sanat & tasarım",
        pixelArt: "piksel sanatı",
        digitalArt: "dijital sanat",
        visitThanks: "websitemi ziyaret ettiğiniz için teşekkürler!",
        websiteCredit: "BU WEBSİTE cj'nin KÜÇÜK ARKADAŞI TARAFINDAN YAPILMIŞTIR:",
        discord: "discord",
        youtube: "youtube",
        roblox: "roblox"
    },
    es: {
        title: "el sitio tonto de cj",
        settings: "Configuración",
        themes: "Temas",
        languages: "Idiomas",
        defaultTheme: "Tema Predeterminado",
        freshTheme: "Tema Fresco",
        nightTheme: "Tema Nocturno",
        sunsetTheme: "Tema Atardecer",
        forestTheme: "Tema Bosque",
        cherryTheme: "Tema Jugo de Cereza",
        glitchTheme: "Tema Glitch",
        welcome: "bienvenidos",
        links2: "enlaces",
        skills2: "habilidades",
        gallery2: "galería",
        marquee1: "última actualización: 10.01.2025!!!",
        marquee2: "¡bienvenido a mi tonto sitio web!",
        marquee3: "me encanta el salmón",
        marquee4: "ssdddhjdekvrkf perdón el gato estaba en el teclado",
        marquee5: "gracias por estar aquí",
        home: "Página de inicio",
        links: "Enlaces",
        skills: "Habilidades",
        gallery: "Galería",
        about: "¡hola! soy cyberjoke (o cj para abreviar). soy un aspirante a artista y programador de lua con experiencia en c++. (GMT +1 o GMT +2)",
        programming: "programación",
        artDesign: "arte & diseño",
        pixelArt: "pixel art",
        digitalArt: "arte digital",
        visitThanks: "¡gracias por visitar mi sitio web!",
        websiteCredit: "ESTE SITIO WEB ESTÁ HECHO POR EL PEQUEÑO AMIGO DE cj:",
        discord: "discord",
        youtube: "youtube",
        roblox: "roblox"
    }
};

function setLanguage(lang) {
  // Existing translations
  document.querySelector('.modal-title').innerHTML = `${translations[lang].settings}<span class="close-button" onclick="closeModal()">X</span>`;
  document.querySelector('.settings-button:first-child').innerHTML = `<img src="images/pack1/palette.png" alt="themes"> ${translations[lang].themes}`;
  document.querySelector('.settings-button:last-child').innerHTML = `<img src="images/pack1/world.png" alt="languages"> ${translations[lang].languages}`;
  document.querySelectorAll('.nav-table .button')[0].innerHTML = `<img src="images/pack1/house.png" alt="ev"> ${translations[lang].home}`;
  document.querySelectorAll('.nav-table .button')[1].innerHTML = `<img src="images/pack1/link.png" alt="link"> ${translations[lang].links}`;
  document.querySelectorAll('.nav-table .button')[2].innerHTML = `<img src="images/pack1/bricks.png" alt="skills"> ${translations[lang].skills}`;
  document.querySelectorAll('.nav-table .button')[3].innerHTML = `<img src="images/pack1/photo.png" alt="kamera"> ${translations[lang].gallery}`;
  
  // Theme panel translations
  document.querySelectorAll('#themesPanel .theme-option')[0].innerHTML = `<img src="images/pack1/bullet_pink.png" alt="bullet"> ${translations[lang].defaultTheme}`;
  document.querySelectorAll('#themesPanel .theme-option')[1].innerHTML = `<img src="images/pack1/bullet_blue.png" alt="bullet"> ${translations[lang].freshTheme}`;
  document.querySelectorAll('#themesPanel .theme-option')[2].innerHTML = `<img src="images/pack1/bullet_purple.png" alt="bullet"> ${translations[lang].nightTheme}`;
  document.querySelectorAll('#themesPanel .theme-option')[3].innerHTML = `<img src="images/pack1/bullet_orange.png" alt="bullet"> ${translations[lang].sunsetTheme}`;
  document.querySelectorAll('#themesPanel .theme-option')[4].innerHTML = `<img src="images/pack1/bullet_green.png" alt="bullet"> ${translations[lang].forestTheme}`;
  document.querySelectorAll('#themesPanel .theme-option')[5].innerHTML = `<img src="images/pack1/bullet_red.png" alt="bullet"> ${translations[lang].cherryTheme}`;
  document.querySelectorAll('#themesPanel .theme-option')[6].innerHTML = `<img src="images/pack1/bullet_black.png" alt="bullet"> ${translations[lang].glitchTheme}`;
  
  // Other existing translations
  document.querySelector('.blink').textContent = translations[lang].title;
  document.querySelector('.marquee').textContent = 
        `${translations[lang].marquee1} • ${translations[lang].marquee2} • ${translations[lang].marquee3} • ${translations[lang].marquee4} • ${translations[lang].marquee5}`;
  document.querySelector('.rainbow-text').textContent = translations[lang].welcome;
  document.querySelector('.aboutme-desc').textContent = translations[lang].about;
  document.querySelector('.button:first-child').innerHTML = `<img src="images/pack1/house.png" alt="ev"> ${translations[lang].home}`;
  document.querySelector('.button[onclick="openModal()"]').innerHTML = `<img src="images/pack1/cog.png" alt="ayarlar"> ${translations[lang].settings}`;

  document.querySelectorAll('.skill-category h3')[0].textContent = translations[lang].programming;
    document.querySelectorAll('.skill-category h3')[1].textContent = translations[lang].artDesign;
    
    document.querySelectorAll('.skill-item span').forEach((span, index) => {
        const skills = ['lua', 'c++', translations[lang].pixelArt, translations[lang].digitalArt];
        span.textContent = skills[index];
    });
    
    document.querySelector('.footer-text').textContent = translations[lang].visitThanks;
    document.querySelector('.footer-credit').textContent = translations[lang].websiteCredit;
    
    // Social links
    document.querySelectorAll('.link-table a').forEach((link, index) => {
        const platforms = [translations[lang].discord, translations[lang].youtube, translations[lang].roblox];
        const imgElement = link.querySelector('img');
        link.innerHTML = '';
        link.appendChild(imgElement);
        link.appendChild(document.createTextNode(' ' + platforms[index]));
    });

    // Section titles translations
    document.querySelectorAll('.link-table .rainbow-text')[0].textContent = translations[lang].links2;
    document.querySelectorAll('.skills-table .rainbow-text')[0].textContent = translations[lang].skills2;
    document.querySelectorAll('.gallery-table .rainbow-text')[0].textContent = translations[lang].gallery2;
}

function openModal() {
  const modal = document.getElementById('settingsModal');
  modal.style.display = 'block';
  modal.style.transform = 'none';

  const modalWidth = modal.offsetWidth;
  const modalHeight = modal.offsetHeight;
  
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'none';
  makeDraggable();
}

function closeModal() {
  document.getElementById('settingsModal').style.display = 'none';
}

function showThemes() {
  document.getElementById('themesPanel').style.display = 'block';
  document.getElementById('languagesPanel').style.display = 'none';
}

function showLanguages() {
  document.getElementById('themesPanel').style.display = 'none';
  document.getElementById('languagesPanel').style.display = 'block';
}

// Modal sürükleme fonksiyonlarını ekleyelim
function makeDraggable() {
  const modal = document.getElementById('settingsModal');
  const modalTitle = modal.querySelector('.modal-title');
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  modalTitle.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    modal.style.top = (modal.offsetTop - pos2) + "px";
    modal.style.left = (modal.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function setTheme(theme) {
  switch(theme) {
    case 'default':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/default.gif")';
      document.querySelector('.blink').style.color = '#FF0000';
      document.querySelector('.blink').style.textShadow = '2px 2px #FFD700';
      document.querySelector('.container').style.borderColor = '#FF00FF';
      document.querySelector('.nav-table').style.background = '#FFB6C1';
      document.querySelector('.marquee').style.backgroundColor = '#FFFF00';
      document.querySelector('.marquee').style.borderColor = '#FF0000';
      document.querySelector('.content-table td').style.backgroundColor = '#FFE4E1';
      document.querySelector('.content-table img').style.borderColor = '#FF1493';
      document.querySelector('.link-table').style.borderColor = '#FF69B4';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #FFB6C1, #FFC0CB)';
      document.querySelector('.skills-table').style.background = '#FFE4E1';
      document.documentElement.style.setProperty('--scrollbar-bg', '#FFE4E1');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #FF0000, #FF00FF)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#FFB6C1');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#FF1493';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #FF0000, #FF00FF)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#FFE4E1';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #FF0000, #FF00FF)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #FF00FF, #FF0000)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #FF0000, #FF00FF)';
        });
      });
      break;

    case 'fresh':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/fresh.gif")';
      document.querySelector('.blink').style.color = '#4169E1';
      document.querySelector('.blink').style.textShadow = '2px 2px #87CEEB';
      document.querySelector('.container').style.borderColor = '#4169E1';
      document.querySelector('.nav-table').style.background = '#87CEEB';
      document.querySelector('.marquee').style.backgroundColor = '#B0E0E6';
      document.querySelector('.marquee').style.borderColor = '#4169E1';
      document.querySelector('.content-table td').style.backgroundColor = '#E0FFFF';
      document.querySelector('.content-table img').style.borderColor = '#4169E1';
      document.querySelector('.link-table').style.borderColor = '#4169E1';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #87CEEB, #B0E0E6)';
      document.querySelector('.skills-table').style.background = '#E0FFFF';
      document.documentElement.style.setProperty('--scrollbar-bg', '#E0FFFF');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #4169E1, #87CEEB)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#87CEEB');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#4169E1';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #1E90FF, #87CEEB)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#E0FFFF';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #4169E1, #87CEEB)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #87CEEB, #4169E1)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #4169E1, #87CEEB)';
        });
      });
      break;

    case 'night':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/night.gif")';
      document.querySelector('.blink').style.color = '#9370DB';
      document.querySelector('.blink').style.textShadow = '2px 2px #483D8B';
      document.querySelector('.container').style.borderColor = '#800080';
      document.querySelector('.nav-table').style.background = '#483D8B';
      document.querySelector('.marquee').style.backgroundColor = '#9370DB';
      document.querySelector('.marquee').style.borderColor = '#800080';
      document.querySelector('.content-table td').style.backgroundColor = '#DDA0DD';
      document.querySelector('.content-table img').style.borderColor = '#800080';
      document.querySelector('.link-table').style.borderColor = '#800080';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #483D8B, #9370DB)';
      document.querySelector('.skills-table').style.background = '#DDA0DD';
      document.documentElement.style.setProperty('--scrollbar-bg', '#DDA0DD');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #483D8B, #9370DB)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#483D8B');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#800080';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #4B0082, #9370DB)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#DDA0DD';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #483D8B, #9370DB)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #9370DB, #483D8B)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #483D8B, #9370DB)';
        });
      });
      break;

    case 'sunset':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/sunset.gif")';
      document.querySelector('.blink').style.color = '#FF4500';
      document.querySelector('.blink').style.textShadow = '2px 2px #FFD700';
      document.querySelector('.container').style.borderColor = '#FF4500';
      document.querySelector('.nav-table').style.background = '#FFA07A';
      document.querySelector('.marquee').style.backgroundColor = '#FFD700';
      document.querySelector('.marquee').style.borderColor = '#FF4500';
      document.querySelector('.content-table td').style.backgroundColor = '#FFDAB9';
      document.querySelector('.content-table img').style.borderColor = '#FF4500';
      document.querySelector('.link-table').style.borderColor = '#FF4500';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #FFA07A, #FFD700)';
      document.querySelector('.skills-table').style.background = '#FFDAB9';
      document.documentElement.style.setProperty('--scrollbar-bg', '#FFDAB9');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #FF4500, #FFD700)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#FFA07A');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#FF4500';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #FF4500, #FFD700)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#FFDAB9';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #FF4500, #FFD700)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #FFD700, #FF4500)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #FF4500, #FFD700)';
        });
      });
      break;

    case 'forest':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/forest.gif")';
      document.querySelector('.blink').style.color = '#228B22';
      document.querySelector('.blink').style.textShadow = '2px 2px #8B4513';
      document.querySelector('.container').style.borderColor = '#8B4513';
      document.querySelector('.nav-table').style.background = '#90EE90';
      document.querySelector('.marquee').style.backgroundColor = '#98FB98';
      document.querySelector('.marquee').style.borderColor = '#8B4513';
      document.querySelector('.content-table td').style.backgroundColor = '#F0FFF0';
      document.querySelector('.content-table img').style.borderColor = '#8B4513';
      document.querySelector('.link-table').style.borderColor = '#8B4513';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #90EE90, #98FB98)';
      document.querySelector('.skills-table').style.background = '#F0FFF0';
      document.documentElement.style.setProperty('--scrollbar-bg', '#F0FFF0');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #228B22, #98FB98)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#90EE90');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#8B4513';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #228B22, #98FB98)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#F0FFF0';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #228B22, #98FB98)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #98FB98, #228B22)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #228B22, #98FB98)';
        });
      });
      break;
      case 'horror':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/cherry.gif")';
      document.querySelector('.blink').style.color = '#FF0000';
      document.querySelector('.blink').style.textShadow = '2px 2px #000000';
      document.querySelector('.container').style.borderColor = '#800000';
      document.querySelector('.nav-table').style.background = '#400000';
      document.querySelector('.marquee').style.backgroundColor = '#200000';
      document.querySelector('.marquee').style.borderColor = '#FF0000';
      document.querySelector('.content-table td').style.backgroundColor = '#300000';
      document.querySelector('.content-table img').style.borderColor = '#FF0000';
      document.querySelector('.link-table').style.borderColor = '#800000';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #400000, #200000)';
      document.querySelector('.skills-table').style.background = '#300000';
      document.documentElement.style.setProperty('--scrollbar-bg', '#300000');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #800000, #FF0000)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#400000');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#FF0000';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #800000, #FF0000)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#300000';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #800000, #FF0000)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #FF0000, #800000)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #800000, #FF0000)';
        });
      });
      break;
      case 'glitch':
      document.body.style.backgroundSize = '200% 100%';
      document.body.style.animation = 'slideBackground 20s linear infinite';
      document.body.style.backgroundImage = 'url("images/background/glitch.gif")';
      document.querySelector('.blink').style.color = '#00FF00';
      document.querySelector('.blink').style.textShadow = '2px 2px #000000';
      document.querySelector('.container').style.borderColor = '#00FF00';
      document.querySelector('.nav-table').style.background = '#001100';
      document.querySelector('.marquee').style.backgroundColor = '#002200';
      document.querySelector('.marquee').style.borderColor = '#00FF00';
      document.querySelector('.content-table td').style.backgroundColor = '#001100';
      document.querySelector('.content-table img').style.borderColor = '#00FF00';
      document.querySelector('.link-table').style.borderColor = '#00FF00';
      document.querySelector('.link-table').style.background = 'linear-gradient(to bottom, #001100, #002200)';
      document.querySelector('.skills-table').style.background = '#001100';
      document.documentElement.style.setProperty('--scrollbar-bg', '#001100');
      document.documentElement.style.setProperty('--scrollbar-thumb', 'linear-gradient(to bottom, #001100, #00FF00)');
      document.documentElement.style.setProperty('--scrollbar-button-bg', '#002200');
      document.querySelectorAll('.skill-category h3').forEach(h3 => {
        h3.style.color = '#00FF00';
      });
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.backgroundImage = `
            repeating-linear-gradient(45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0, 0.5) 5px,
                rgba(0,0,0, 0.5) 10px
            ),
            linear-gradient(to top, #001100, #00FF00)`;
      });
      document.querySelector('.gallery-table').style.backgroundColor = '#001100';
      document.querySelectorAll('.button').forEach(button => {
        button.style.background = 'linear-gradient(to bottom, #001100, #00FF00)';
        button.addEventListener('mouseover', () => {
          button.style.background = 'linear-gradient(to bottom, #00FF00, #001100)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'linear-gradient(to bottom, #001100, #00FF00)';
        });
      });
      break;
  }
}

function createMicrobanners() {
  const banners = [
    '1.gif', '2.gif', '3.gif', '4.gif', '5.gif', 
    '6.gif', '7.gif', '8.gif', '9.gif', '10.gif',
    '11.gif', '13.gif', '14.gif', '15.gif', '16.gif',
    '17.gif', '18.gif', '19.gif', '20.gif', '21.gif',
    '22.gif', '23.gif', '24.gif', '25.gif', '26.gif',
    '27.gif', '28.gif',
    'DEVILS.gif'
];

const directJumpscares = [
  'direct-jumpscare-1.gif',
  'direct-jumpscare-2.gif',
  'direct-jumpscare-3.gif'
];

const totalBanners = 40; // 20 on each side
const clickableIndices = [];
while(clickableIndices.length < 4) {
  const randomIndex = Math.floor(Math.random() * totalBanners);
  if(!clickableIndices.includes(randomIndex)) {
    clickableIndices.push(randomIndex);
  }
}

// Left side banners
for (let i = 0; i < 20; i++) {
  const img = document.createElement('img');
  const isDirectJumpscare = Math.random() < 0.1; // 10% chance for direct jumpscare
  
  if (isDirectJumpscare) {
    const randomDirect = directJumpscares[Math.floor(Math.random() * directJumpscares.length)];
    img.src = `images/microbanners/${randomDirect}`;
    img.className = 'microbanner clickable';
    img.style.cursor = 'pointer';
    img.onclick = triggerJumpscare;
  } else {
    img.src = `images/microbanners/${banners[Math.floor(Math.random() * (banners.length - 3))]}`;
    img.className = 'microbanner';
    if (clickableIndices.includes(i)) {
      img.className = 'microbanner clickable';
      img.style.cursor = 'pointer';
      img.onclick = triggerJumpscare;
    }
  }
  
  img.style.left = '10px';
  img.style.top = (50 + i * 40) + 'px';
  document.body.appendChild(img);
}

// Right side banners
for (let i = 0; i < 20; i++) {
  const img = document.createElement('img');
  const isDirectJumpscare = Math.random() < 0.1; // 10% chance for direct jumpscare
  
  if (isDirectJumpscare) {
    const randomDirect = directJumpscares[Math.floor(Math.random() * directJumpscares.length)];
    img.src = `images/microbanners/${randomDirect}`;
    img.className = 'microbanner clickable';
    img.style.cursor = 'pointer';
    img.onclick = triggerJumpscare;
  } else {
    img.src = `images/microbanners/${banners[Math.floor(Math.random() * (banners.length - 3))]}`;
    img.className = 'microbanner';
    if (clickableIndices.includes(i + 20)) {
      img.className = 'microbanner clickable';
      img.style.cursor = 'pointer';
      img.onclick = triggerJumpscare;
    }
  }
  
  img.style.right = '10px';
  img.style.top = (50 + i * 40) + 'px';
  document.body.appendChild(img);
}
}


function triggerJumpscare() {
  const jumpscare = document.createElement('img');
  // Randomly select one of the three jumpscare images
  const randomJumpscareNumber = Math.floor(Math.random() * 3) + 1;
  jumpscare.src = `images/gallery/jumpscare${randomJumpscareNumber}.png`;
  jumpscare.className = 'jumpscare';
  
  // Add random animation type
  const animationType = Math.floor(Math.random() * 4) + 1;
  jumpscare.classList.add(`type${animationType}`);
  
  document.body.appendChild(jumpscare);

  const audio = new Audio('images/jumpscare.mp3');
  audio.play();

  this.remove();

  setTimeout(() => {
    jumpscare.remove();
  }, 1000);
}

window.addEventListener('load', createMicrobanners);

function createFallingImages() {
  const footer = document.querySelector('.retro-footer');
  const footerWidth = footer.offsetWidth;
  const images = [
    'images/credits/1.png',
    'images/credits/2.png',
    'images/credits/3.png',
    'images/credits/4.png',
    'images/credits/5.png'
  ];
  
  const animations = ['fall-1', 'fall-2', 'fall-3', 'fall-4', 'fall-5'];
  
  for (let i = 0; i < 50; i++) {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = 'falling-image';
    
    const randomX = Math.random() * footerWidth;
    img.style.setProperty('--random-x', `${randomX}px`);
    
    // Rastgele animasyon seç
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    img.style.animation = `${randomAnimation} ${Math.random() * 2 + 1}s linear infinite`;
    
    // Rastgele başlangıç gecikmesi
    img.style.animationDelay = `${Math.random() * 3}s`;
    
    // Rastgele başlangıç pozisyonu
    img.style.left = `${Math.random() * 100}%`;
    img.style.top = `-${Math.random() * 50}px`;
    
    footer.appendChild(img);
  }
}

// Call this after page loads
window.addEventListener('load', createFallingImages);

document.querySelectorAll('.nav-table .button').forEach((button, index) => {
  button.addEventListener('click', () => {
      const targets = {
          0: '.content-table',  // Main Page
          1: '.link-table',     // Links
          2: '.skills-table',   // Skills
          3: '.gallery-table'   // Gallery
      };
      
      document.querySelector(targets[index]).scrollIntoView();
      });
  });