const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.05,
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    duration: 0.2,
    x: e.clientX,
    y: e.clientY,
    ease: "power2.out",
  });
});

function openInstaDM() {
  const url = 'https://www.instagram.com/pookiehampers/';
  const message = "Hi! I'm interested in your gifting services in Surajpur. 🎁✨";
  
  try {
    new URL(url);
  } catch (error) {
    alert("Sorry, there was an issue with the Instagram DM link.");
    return;
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  navigator.clipboard.writeText(message).then(() => {
    alert(isMobile 
      ? "📋 Message copied! Paste it in the Instagram DM.\n\nOpening Instagram DM..."
      : "📋 Message copied! Paste it in the Instagram DM.\n\nOpening Instagram DM in a new tab...");
    window.open(url, "_blank", "noopener,noreferrer");
  }).catch(() => {
    alert(`Unable to copy message. Please manually copy this:\n\n${message}`);
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
