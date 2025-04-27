const scientists = [
  {
  name: "Albert",
  surname: "Einstein",
  born: 1879,
  dead: 1955,
  id: 1
  },
  {
  name: "Isaac",
  surname: "Newton",
  born: 1643,
  dead: 1727,
  id: 2
  },
  {
  name: "Galileo",
  surname: "Galilei",
  born: 1564,
  dead: 1642,
  id: 3
  },
  {
  name: "Marie",
  surname: "Curie",
  born: 1867,
  dead: 1934,
  id: 4
  },
  {
  name: "Johannes",
  surname: "Kepler",
  born: 1571,
  dead: 1630,
  id: 5
  },
  {
  name: "Nicolaus",
  surname: "Copernicus",
  born: 1473,
  dead: 1543,
  id: 6
  },
  {
  name: "Max",
  surname: "Planck",
  born: 1858,
  dead: 1947,
  id: 7
  },
  {
  name: "Katherine",
  surname: "Blodgett",
  born: 1898,
  dead: 1979,
  id: 8
  },
  {
  name: "Ada",
  surname: "Lovelace",
  born: 1815,
  dead: 1852,
  id: 9
  },
  {
  name: "Sarah E.",
  surname: "Goode",
  born: 1855,
  dead: 1905,
  id: 10
  },
  {
  name: "Lise",
  surname: "Meitner",
  born: 1878,
  dead: 1968,
  id: 11
  },
  {
  name: "Hanna",
  surname: "Hammarström",
  born: 1829,
  dead: 1909,
  id: 12
  }
  ];

  console.log(`Scientists: ${scientists}`)


  

  const cards = document.querySelectorAll('.scientist__card');
  const buttons = document.querySelectorAll('.scientist__button');
  
  // Зберігаємо поточний стан вчених
  let filteredScientists = [...scientists];
  
  // Функція для відображення вчених
  function renderScientists(data) {
    cards.forEach((card, index) => {
      if (data[index]) {
        card.textContent = `${data[index].name} ${data[index].surname} (${data[index].born} - ${data[index].dead})`;
      } else {
        card.textContent = ''; // Якщо немає даних - порожнє віконце
      }
    });
  }
  
  // Скидання всіх фільтрів
  function resetScientists() {
    filteredScientists = [...scientists];
    renderScientists([]);
  }
  
  // Обробка кнопок
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
  
      switch (action) {
        case 'born-19':
          filteredScientists = filteredScientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
          break;
        case 'einstein-birth':
          filteredScientists = filteredScientists.filter(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
          break;
        case 'sort-alpha':
          filteredScientists = [...filteredScientists].sort((a, b) => (a.surname > b.surname ? 1 : -1));
          break;
        case 'surname-c':
          filteredScientists = filteredScientists.filter(scientist => scientist.surname.startsWith('C'));
          break;
        case 'sort-age':
          filteredScientists = [...filteredScientists].sort((a, b) => ((b.dead - b.born) - (a.dead - a.born)));
          break;
        case 'remove-a':
          filteredScientists = filteredScientists.filter(scientist => !scientist.name.startsWith('A'));
          break;
        case 'youngest':
          filteredScientists = [filteredScientists.reduce((youngest, scientist) => (scientist.born > youngest.born ? scientist : youngest))];
          break;
        case 'longest-shortest':
          const longest = filteredScientists.reduce((a, b) => ((a.dead - a.born) > (b.dead - b.born) ? a : b));
          const shortest = filteredScientists.reduce((a, b) => ((a.dead - a.born) < (b.dead - b.born) ? a : b));
          filteredScientists = [longest, shortest];
          break;
        case 'matching-letters':
          filteredScientists = filteredScientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
          break;
        case 'reset':
          resetScientists();
          return;
      }
  
      renderScientists(filteredScientists);
    });
  });
  
  // При завантаженні сторінки все порожнє
  renderScientists([]);