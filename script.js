// ============================================
// CARROSSEL INFINITO
// ============================================

class InfiniteCarousel {
  constructor() {
    this.track = document.getElementById('carouselTrack');
    this.wrapper = document.querySelector('.carousel-wrapper');
    this.items = Array.from(this.track.querySelectorAll('.carousel-item'));
    this.autoScrollSpeed = 0.5;
    this.isAutoScrolling = true;
    this.mouseDown = false;
    this.startX = 0;
    this.scrollLeft = 0;

    this.init();
  }

  init() {
    // Duplica os itens para criar efeito infinito
    this.duplicateItems();
    
    // Event listeners
    this.wrapper.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.wrapper.addEventListener('mouseleave', () => this.handleMouseUp());
    this.wrapper.addEventListener('mouseup', () => this.handleMouseUp());
    this.wrapper.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.wrapper.addEventListener('scroll', () => this.handleScroll());

    // Inicia auto-scroll
    this.startAutoScroll();
  }

  duplicateItems() {
    // Clona os itens originais para criar a ilusão de infinito
    const clonedItems = this.items.map(item => item.cloneNode(true));
    clonedItems.forEach(item => {
      this.track.appendChild(item);
    });
  }

  startAutoScroll() {
    const scroll = () => {
      if (!this.mouseDown && this.isAutoScrolling) {
        this.wrapper.scrollLeft += this.autoScrollSpeed;
        
        // Reinicia o scroll quando chega ao fim
        if (this.wrapper.scrollLeft >= this.wrapper.scrollWidth - this.wrapper.clientWidth - 100) {
          this.wrapper.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };
    requestAnimationFrame(scroll);
  }

  handleMouseDown(e) {
    this.mouseDown = true;
    this.startX = e.pageX - this.wrapper.offsetLeft;
    this.scrollLeft = this.wrapper.scrollLeft;
    this.wrapper.style.cursor = 'grabbing';
  }

  handleMouseUp() {
    this.mouseDown = false;
    this.wrapper.style.cursor = 'grab';
  }

  handleMouseMove(e) {
    if (!this.mouseDown) return;
    
    e.preventDefault();
    const x = e.pageX - this.wrapper.offsetLeft;
    const walk = (x - this.startX) * 1;
    this.wrapper.scrollLeft = this.scrollLeft - walk;
  }

  handleScroll() {
    // Pausa auto-scroll quando o usuário está interagindo
    if (this.mouseDown) {
      this.isAutoScrolling = false;
    }
  }
}

// ============================================
// MODAL INTERATIVO
// ============================================

class InteractiveModal {
  constructor() {
    this.modal = document.getElementById('modal');
    this.modalContent = document.getElementById('modalContent');
    this.modalImage = document.getElementById('modalImage');
    this.modalOverlay = document.getElementById('modalOverlay');
    this.modalClose = document.getElementById('modalClose');

    this.bindEvents();
  }

  bindEvents() {
    // Abre modal ao clicar em imagens
    document.querySelectorAll('.galeria-item img, .carousel-item img, .carousel-item video').forEach(media => {
      media.addEventListener('click', (e) => {
        e.stopPropagation();
        const title = media.getAttribute('data-title') || 'Isabelli';
        const description = media.getAttribute('data-description') || 'Um retrato do momento perfeito, capturando a beleza e a elegância em cada detalhe.';
        const tag = media.getAttribute('data-tag') || 'Momento especial';
        this.openModal(media.src, title, description, tag);
      });
    });

    // Fecha modal
    this.modalOverlay.addEventListener('click', () => this.closeModal());
    this.modalClose.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });
  }

  openModal(imageSrc, title = 'Isabelli', description = 'Um retrato do momento perfeito, capturando a beleza e a elegância em cada detalhe.', tag = 'Momento especial') {
    this.modalImage.src = imageSrc;
    
    // Atualiza o texto do modal
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalDetails').innerHTML = `<span class="modal-tag">${tag}</span>`;
    
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Pausa carrossel quando modal está aberto
    carousel?.isAutoScrolling && (carousel.isAutoScrolling = false);
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Resume carrossel
    carousel?.isAutoScrolling === false && (carousel.isAutoScrolling = true);
  }


  // Modal removeu o tilt effect - código mais simples e rápido!
}

// ============================================
// GALERIA INTERATIVA
// ============================================

class InteractiveGallery {
  constructor() {
    this.items = document.querySelectorAll('.galeria-item');
    this.init();
  }

  init() {
    this.items.forEach(item => {
      const img = item.querySelector('img');
      if (img) {
        img.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    });
  }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

let carousel;
let modal;
let gallery;

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa componentes
  carousel = new InfiniteCarousel();
  modal = new InteractiveModal();
  gallery = new InteractiveGallery();

  // Retoma auto-scroll após 5 segundos de inatividade
  let autoScrollResumeTimer;
  document.addEventListener('mousemove', () => {
    clearTimeout(autoScrollResumeTimer);
    autoScrollResumeTimer = setTimeout(() => {
      if (!carousel.mouseDown && !modal.modal.classList.contains('active')) {
        carousel.isAutoScrolling = true;
      }
    }, 5000);
  });

  // Log de inicialização (opcional)
  console.log('🎨 Portfólio Isabelli carregado com sucesso!');
});

// ============================================
// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================
// PRELOAD OTIMIZADO
// ============================================

// Preload de imagens visíveis na viewport
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
