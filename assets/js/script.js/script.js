// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Subscription Pop-Up
  const subscribeBtn = document.getElementById("subscribeBtn");
  const subscriptionModal = document.getElementById("subscriptionModal");
  const closeBtn = subscriptionModal.querySelector(".close");
  
  subscribeBtn.onclick = function() {
    subscriptionModal.style.display = "block";
  }
  
  closeBtn.onclick = function() {
    subscriptionModal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target === subscriptionModal) {
      subscriptionModal.style.display = "none";
    }
  }
  
  // Payment Modal
  const paymentModal = document.getElementById("paymentModal");
  
  function showPaymentModal(courseName, price) {
    document.getElementById("courseName").innerText = courseName;
    document.getElementById("coursePrice").innerText = price.toFixed(2);
    paymentModal.style.display = "block";
  }
  
  const paymentCloseBtn = paymentModal.querySelector(".close");
  paymentCloseBtn.onclick = function() {
    paymentModal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target === paymentModal) {
      paymentModal.style.display = "none";
    }
  }
  
  // Mock Subscription Form
  const subscriptionForm = document.getElementById('subscriptionForm');
  subscriptionForm.onsubmit = function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    subscriptionModal.style.display = "none";
  }
  