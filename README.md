# 📸 Portfólio Isabelli - Guia de Personalização

## 🚀 Como Usar

1. **Abra o arquivo `index.html` no navegador** (basta dar double-click no arquivo ou arrastar para o navegador)
2. **Personalize com as fotos da Isabelli e do casal**
3. **Pronto!** Nenhuma instalação ou compilação necessária

## 🎯 O Que Está Incluído

### 1. **Galeria Editorial** (Seção de cima)
- Grid responsivo com 6 fotos
- Algumas fotos ocupam mais espaço (efeito editorial)
- Zoom suave ao passar o mouse
- Clique para abrir em modal com efeito 3D

### 2. **Carrossel Infinito** (Seção do meio)
- Auto-scroll contínuo
- Clique e arraste para navegar
- Barra de rolagem customizada
- Infinite scroll automático
- Pausa ao clicar em uma foto

### 3. **Modal Interativo**
- **Tilt Effect**: A imagem segue o movimento do seu cursor em 3D
- Perspective dinâmica
- Animação suave de abertura
- Fecha ao clicar no X ou fora da imagem

## 🖼️ Como Adicionar Suas Fotos

### Opção 1: Usar Imagens Online (Mais Fácil)
Se as fotos já estão hospedadas online (Google Drive, Instagram, etc):

1. Copie a URL da imagem
2. Procure no `index.html` por `<img src="https://images.unsplash.com/..."`
3. Troque a URL pela sua foto

### Opção 2: Adicionar Fotos Locais (Recomendado)
1. Crie uma pasta chamada `images` na mesma pasta do `index.html`
2. Coloque suas fotos JPG/PNG nessa pasta (ex: `images/foto1.jpg`)
3. No `index.html`, substitua:
```html
<!-- De: -->
<img src="https://images.unsplash.com/..." alt="Foto 1" loading="lazy">

<!-- Para: -->
<img src="images/foto1.jpg" alt="Foto 1" loading="lazy">
```

## 📝 Personalizações Comuns

### Mudar o Nome
Abra `index.html` e procure por `<h1 class="logo">Isabelli</h1>` - troque "Isabelli" pelo nome que quiser.

### Adicionar Mais Fotos na Galeria
Copie e cole este bloco quantas vezes precisar:
```html
<div class="galeria-item">
  <img src="images/sua-foto.jpg" alt="Descrição" loading="lazy">
</div>
```

Para uma foto **grande** (que ocupa 2x espaço):
```html
<div class="galeria-item large">
  <img src="images/sua-foto-grande.jpg" alt="Descrição" loading="lazy">
</div>
```

### Adicionar Mais Fotos no Carrossel
Procure por `<div class="carousel-track" id="carouselTrack">` e copie/cole:
```html
<div class="carousel-item">
  <img src="images/momento.jpg" alt="Momento" loading="lazy">
</div>
```

### Mudar Cores
Abra `styles.css` e procure por cores:
- `#fafafa` - fundo geral
- `#1a1a1a` - texto principal
- `#fff` - branco

Troque pelos valores HEX que quiser!

### Ajustar Velocidade do Carrossel
No `script.js`, procure por:
```javascript
this.autoScrollSpeed = 0.5;
```
- Aumentar número = mais rápido
- Diminuir número = mais lento

### Mudar Texto do Hero
No `index.html`, procure por:
```html
<h2>Criatividade em cada detalhe</h2>
<p>Um portfólio minimalista e elegante</p>
```

## ⚡ Performance

O site foi otimizado para rodar bem até em computadores antigos:

- ✅ **Lazy loading** de imagens (carregam conforme necessário)
- ✅ **Hardware acceleration** com CSS transforms
- ✅ **Sem frameworks pesados** - Vanilla JS puro
- ✅ **RequestAnimationFrame** para animações suaves
- ✅ **Sem jQuery ou Bootstrap** - ~20KB total

## 📱 Responsivo

O site adapta automaticamente para:
- 🖥️ Desktop (1920px+)
- 💻 Laptop (1024px+)
- 📱 Tablet (768px)
- 📱 Celular (480px)

## 🎨 Funcionalidades em Detalhes

### Galeria Editorial
- **Grid automático** que se adapta ao tamanho da tela
- **Hover effect** com zoom suave
- **Clique para expandir** em modal com efeito 3D

### Carrossel
- **Auto-scroll contínuo** - rola sozinho
- **Mouse drag** - clique e arraste
- **Scroll bar** - use a barra de rolagem tradicional
- **Infinite loop** - volta ao início automaticamente
- **Pausa automática** - para quando você clica em algo

### Modal Tilt
- **Segue o mouse** - a imagem se inclina conforme você move o cursor
- **Efeito 3D** - perspectiva realista
- **Hardware accelerated** - roda suave mesmo em PCs antigos
- **Performance otimizada** - usa requestAnimationFrame

## 🔧 Troubleshooting

### As imagens não estão aparecendo?
1. Verifique se a URL/caminho está correto
2. Tente abrir a imagem sozinha no navegador
3. Para fotos locais, certifique-se de que estão em uma pasta `images`

### O modal está travando?
1. Reduza o tamanho das imagens (máximo 2MB recomendado)
2. Você está usando um navegador muito antigo? Tente atualizar

### O carrossel está muito rápido/lento?
Edite `script.js` e ajuste:
```javascript
this.autoScrollSpeed = 0.5; // Troque esse número
```

## 📦 Estrutura de Arquivos

```
Isabelli/
├── index.html       (estrutura da página)
├── styles.css       (estilos e animações)
├── script.js        (funcionalidades)
└── images/          (sua pasta de fotos)
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

## 🌐 Publicar Online (Grátis)

### Opção 1: GitHub Pages (Melhor)
1. Crie conta em github.com
2. Crie um repositório chamado `portfolio-isabelli`
3. Faça upload dos arquivos (index.html, styles.css, script.js, pasta images/)
4. Vá em Settings > Pages > selecione "main" como source
5. Seu site estará em: `https://seu-usuario.github.io/portfolio-isabelli`

### Opção 2: Netlify (Mais Fácil)
1. Vá em netlify.com
2. Clique em "Drop files here" e arraste a pasta
3. Seu site está online em minutos (com URL gratuita)

### Opção 3: Vercel
1. Vá em vercel.com
2. Clique em "Import Project"
3. Selecione sua pasta
4. Deploy automático

## 💡 Dicas Extras

- Tire fotos em boa iluminação para melhor resultado
- Use imagens quadradas ou retangulares uniformes
- Comprima as imagens antes (use tinypng.com) para carregar mais rápido
- Teste o site em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- Teste no celular para ver como fica responsivo

## 📄 Licença

Sinta-se livre para usar, modificar e compartilhar! Feito com ❤️

---

**Qualquer dúvida?** O código está bem comentado. Divirta-se customizando! 🎨
