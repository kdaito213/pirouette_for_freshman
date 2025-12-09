document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".redUnderLine");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // 1回だけ実行
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  targets.forEach(target => observer.observe(target));
});