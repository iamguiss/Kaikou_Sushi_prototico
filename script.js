const filterButtons = document.querySelectorAll('.filter');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    productCards.forEach((card) => {
      card.classList.toggle('hidden', selected !== 'todos' && card.dataset.category !== selected);
    });
  });
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const toast = document.getElementById('cartToast');
const toastTitle = document.getElementById('toastTitle');
const toastText = document.getElementById('toastText');
let toastTimeout;
document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const price = Number(button.dataset.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    toastTitle.textContent = `${button.dataset.name} adicionado!`;
    toastText.textContent = `${price} • Demonstração de interação, sem pedido real.`;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
  });
});
document.getElementById('closeToast').addEventListener('click', () => toast.classList.remove('show'));

// Número de WhatsApp fictício: substitua pelo contato oficial antes de publicar.
const whatsappNumber = '5511999999999';
document.getElementById('whatsappLink').href = `https://wa.me/${whatsappNumber}`;
document.getElementById('whatsappLink').target = '_blank';
document.getElementById('whatsappLink').rel = 'noreferrer';
