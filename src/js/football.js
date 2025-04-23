document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".football__place");
  const ball = document.querySelector(".football__ball");
  const cursor = document.querySelector(".football__cursor");

  const initialPosition = { top: 85, left: 92 };
  const initialPositionCursor = { top: 99, left: 485 };

  container.addEventListener("mousemove", (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left - ball.offsetWidth / 2; // Центр мяча по горизонтали
    const y = event.clientY - rect.top - ball.offsetHeight / 2; // Центр мяча по вертикали

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    const cursorX = event.clientX - rect.left;
    const cursorY = event.clientY - rect.top;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  });

  container.addEventListener("mouseleave", () => {
    ball.style.left = `${initialPosition.left}px`;
    ball.style.top = `${initialPosition.top}px`;

    cursor.style.left = `${initialPositionCursor.left}px`;
    cursor.style.top = `${initialPositionCursor.top}px`;
  });
});
console.log(addEventListener);