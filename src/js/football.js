document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".football__place");
  const ball = document.querySelector(".football__ball");
  const cursor = document.querySelector(".football__cursor");

  container.addEventListener("mousemove", (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left - ball.offsetWidth / 2;
    const y = event.clientY - rect.top - ball.offsetHeight / 2;

    ball.classList.remove("reset-position");
    cursor.classList.remove("reset-position");

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    const cursorX = event.clientX - rect.left;
    const cursorY = event.clientY - rect.top;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  });

  container.addEventListener("mouseleave", () => {
    ball.classList.add("reset-position");
    cursor.classList.add("reset-position");

    // Убираем стили, чтобы вернуться к исходным значениям из CSS
    ball.style.left = "";
    ball.style.top = "";
    cursor.style.left = "";
    cursor.style.top = "";
  });
});