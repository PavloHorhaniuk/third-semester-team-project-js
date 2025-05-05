document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".football__place");
  const ball = document.querySelector(".football__ball");
  const cursor = document.querySelector(".football__cursor");
  const cones = document.querySelectorAll(".football__cone"); // Все конусы

  let isFrozen = false; // Флаг для блокировки движения

  const resetBallPosition = () => {
    ball.classList.add("reset-position");
    ball.style.left = "";
    ball.style.top = "";
  };

  const isCollision = (ball, cone) => {
    const ballRect = ball.getBoundingClientRect();
    const coneRect = cone.getBoundingClientRect();

    return !(
      ballRect.right < coneRect.left ||
      ballRect.left > coneRect.right ||
      ballRect.bottom < coneRect.top ||
      ballRect.top > coneRect.bottom
    );
  };

  container.addEventListener("mousemove", (event) => {
    if (isFrozen) return; // Блокируем движение, если флаг установлен

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

    // Проверяем столкновение с каждым конусом
    for (const cone of cones) {
      if (isCollision(ball, cone)) {
        resetBallPosition();
        isFrozen = true; // Устанавливаем флаг блокировки
        break; // Прерываем цикл, если обнаружено столкновение
      }
    }
  });

  container.addEventListener("mouseleave", () => {
    resetBallPosition();
    cursor.classList.add("reset-position");

    // Убираем стили, чтобы вернуться к исходным значениям из CSS
    cursor.style.left = "";
    cursor.style.top = "";

    isFrozen = false; // Снимаем блокировку при выходе из поля
  });
});