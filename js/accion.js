const peliculas = [
    {
      title: 'John Wick 3: Parabellum',
      poster: 'https://img.aullidos.com/imagenes/john-wick-3/imagen-10.jpg',
      trailerId: 'https://www.youtube.com/embed/30R7Io_DmyU',
      category: 'Peliculas de acción',
      details: {
        director: 'John Wick 3: Parabellum',
        year: 2019,
        description: 'John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización.'
      }
    },
    {
      title: 'BATMAN BEGINS',
      poster: 'https://espectadores.net/wp-content/uploads/2016/01/las-mejores-peliculas-de-accion-batman-begins-600x337.png',
      trailerId: 'https://www.youtube.com/embed/c6Rhzt9Z1y0',
      category: 'Peliculas de acción',
      details: {
        director: 'Christopher Nolan',
        year: 2005,
        description: 'Una nueva entrega del famoso personaje de cómics protagonizada por Christian Bale y en la que se explica el origen de Batman antes de convertirse en el héroe de Gotham City.'
      }
    },
    {
      title: 'EL FRANCOTIRADOR',
      poster: 'https://pics.filmaffinity.com/El_Francotirador-943269662-large.jpg',
      trailerId: 'https://www.youtube.com/embed/2TT0SxVF0P8',
      category: 'Peliculas de acción',
      details: {
        director: 'Clint Eastwood',
        year: 2014,
        description: 'Protagonizada por Bradley Cooper y Sienna Miller, se le conoce también como American Sniper y trata sobre la autobiografía del marine Chris Kyle, quien batió un récord absoluto en lo que se refiere a muertes cuando es enviado a Irak para proteger a sus compañeros, lo que hizo que se ganara el apodo de “Leyenda”, algo que hizo que se convirtiera además en el blanco y en el objetivo de los enemigos.'
      }
    },
    {
      title: 'CORAZONES DE ACERO',
      poster: 'https://espectadores.net/wp-content/uploads/2014/07/pelicula-corazon-de-acero-600x857.jpg',
      trailerId: 'https://www.youtube.com/embed/yftjMJVN4dE',
      category: 'Peliculas de acción',
      details: {
        director: 'David Ayer',
        year: 2014,
        description: 'Trata sobre un veterano sargento llamado Wardaddy, que junto con su brigada de cinco soldados americanos va a luchar contra el ejército nazi, aún sabiendo que su derrota era clara porque la guerra estaba a punto de acabar. Protagonizada por Brad Pitt.'
      }
    },
    {
      title: 'DOS POLICÍAS REBELDES',
      poster: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-dos-policias-rebeldes-600x843.jpg',
      trailerId: 'https://www.youtube.com/embed/E6cFr18reuQ',
      category: 'Peliculas de acción',
      details: {
        director: 'Bilall Fallah, Michael Bay, Adil El Arbi',
        year: 1995,
        description: 'La primera película de Michael Bay es un cuento sucio de narcos a la pista de 100 millones de dólares de la droga que han desaparecido. Will Smith y Martin Lawrence son dos compañeros de policías que hacen burlas en el asiento delantero mientras se oyen los gritos de la testigo clave (Tea Leoni) en la parte trasera.'
      }
    }
  ];
  
  const series = [
    {
      title: 'Daredevil',
      poster: 'https://eloutput.com/wp-content/uploads/2022/03/daredevil-personaje.jpg',
      trailerId: 'https://www.youtube.com/embed/cDUKA6Tqiw8',
      category: 'Series de acción',
      details: {
        director: 'Stan Lee, Bill Everett',
        year: 2015,
        description: 'En muy pocas ocasiones una serie con enorme popularidad alrededor del mundo acaba cancelada. Este ha sido el caso de Daredevil, que no ha podido esquivar la maldita suerte, pero que nos ofreció el mejor entretenimiento de Marvel, unido a un oscuro trasfondo, casi podría decirse que más similar a la línea editorial de DC. Si disfrutas con la acción y las peleas callejeras, quieres a un malo realmente temible y necesitas tu ración de superhéroes, aquí tienes uno de sus mejores ejemplos.'
      }
    },
    {
      title: 'El tirador',
      poster: 'https://www.ecartelera.com/carteles-series/900/906/001_p.jpg',
      trailerId: 'https://www.youtube.com/embed/pAEXOttWpck',
      category: 'Series de acción',
      details: {
        director: 'Antoine Fuqua',
        year: 2016,
        description: 'Parece que estemos generalizando, pero, tal y como te comentaba anteriormente, el género de acción bebe los vientos por los disparos y las armas de cualquier clase y potencia. En esta ocasión, seremos testigos de cómo un exmarine, francotirador de élite, volverá a la línea de fuego, teniendo que defender al presidente de Estados Unidos, desconociendo que está siendo víctima de una trampa para exponerlo.'
      }
    },
    {
      title: 'The Punisher',
      poster: 'https://img.asmedia.epimg.net/resizer/weUMUpiNE_aun7gEWY89eY5q-kE=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/RYCRWE7AUZKL5PUO3A3FHLVYJI.jpg',
      trailerId: 'https://www.youtube.com/embed/36liPigajVE',
      category: 'Series de acción',
      details: {
        director: 'Jonathan Hensleigh',
        year: 2017,
        description: 'Puede que no nos encontremos ante una serie de superhéroes tan redonda como Daredevil, pero la menospreciada The Punisher nos ofrece, sobre todo al espectador ávido de acción, una combinación de historia de venganza con los mejores elementos del cine de guerrilla, amén de que habría que alabar la exquisita interpretación de Jon Bernthal, conocido por The Walking Dead, pero que bordar el papel de hombre hastiado del mundo en el que vive.'
      }
    },
    {
      title: 'El juego del calamar',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtesobr4sd9V0p2iJAgM8afT50GVVCqiTwiw&usqp=CAU',
      trailerId: 'https://www.youtube.com/embed/4AuQ6dOAG2I',
      category: 'Series de acción',
      details: {
        director: 'Hwang Dong-hyuk',
        year: 2021,
        description: 'Uno de los éxitos más inesperados de los últimos años, disponible en Netflix, nos presenta una historia que no se podría catalogar en ningún género en particular, aunque podríamos afirmar que estamos ante un thriller de acción y terror de los que dejan huella. Cuando Gi-hun accede a participar en un misterioso juego, acabará por descubrir que tendrá que luchar con cientos de personas en antiguos juegos infantiles, no daremos más datos para que la sorpresa vaya en aumento según vas viendo cada uno de los espectaculares episodios. Eso sí, podemos contarte que el ser humano queda retratado, para bien y para mal, en una de las series más aclamadas por los espectadores en 2021.'
      }
    },
    {
      title: 'The defenders',
      poster: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/29/1469200934-the-defenders.jpg',
      trailerId: 'https://www.youtube.com/embed/jziPMN_ufnU',
      category: 'Series de acción',
      details: {
        director: 'Clarkson',
        year: 2017,
        description: 'Cuando Marvel planeó su conjunto de películas para agrandar un universo en expansión, que desembocaría en la espectacular Endgame, también planeó series de corte más adulto, con una conjunción de héroes a la conclusión de las respectivas temporadas de cada una de ellas. Esta serie, que une a Daredevil, Jessica Jones, Iron Fist y Luke Cage, nos mostrará cómo personas con diferentes objetivos y enemigos deberán unir sus fuerzas si es que quieren detener una siniestra conspiración que amenaza por completo a su hogar, la ciudad de Nueva York.'
      }
    }
  ];
  

  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const movieCards = document.getElementById('movieCards');
  const movieDetails = document.getElementById('movieDetails');
  const movieDetailsContainer = document.getElementById('movieDetailsContainer');
  
  // La función para mostrar los detalles de la película o serie seleccionada
  function showDetails(item) {
      const detailsHtml = `
  <h2>${item.title}</h2>
  <p><strong>Director:</strong> ${item.details.director}</p>
  <p><strong>Año:</strong> ${item.details.year}</p>
  <p>${item.details.description}</p>
  `;
      const detailsContainer = document.querySelector('.details-modal');
      detailsContainer.innerHTML = detailsHtml;
      movieDetailsContainer.style.display = 'block';
  
      // Limpiar el contenido del contenedor del trailer
      const trailerVideoContainer = document.getElementById('trailerVideoContainer');
      trailerVideoContainer.innerHTML = '';
  }
  
  // Mostrar el trailer en el modal
  function showTrailer(item) {
      const modal = document.getElementById('trailerModal');
      const trailerVideoContainer = document.getElementById('trailerVideoContainer');
      trailerVideoContainer.innerHTML = '';
  
      const iframe = document.createElement('iframe');
      iframe.width = '560';
      iframe.height = '315';
      iframe.src = item.trailerId;
      iframe.frameborder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
  
      trailerVideoContainer.appendChild(iframe);
      modal.style.display = 'block';
  
      // Mostrar detalles de la película o serie seleccionada
      showDetails(item);
  }
  
  
  
  function displayData(data) {
      movieCards.innerHTML = '';
  
      data.forEach((item) => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
  
          const img = document.createElement('img');
          img.src = item.poster;
          img.alt = item.title;
          movieCard.appendChild(img);
  
          const title = document.createElement('h3');
          title.textContent = item.title;
          movieCard.appendChild(title);
  
          const btn = document.createElement('button');
          btn.textContent = 'Ver trailer';
          btn.addEventListener('click', function () {
              const modal = document.getElementById('trailerModal');
              const trailerVideoContainer = document.getElementById('trailerVideo');
              trailerVideoContainer.innerHTML = '';
  
              const iframe = document.createElement('iframe');
              iframe.width = '560';
              iframe.height = '315';
              iframe.src = item.trailerId;
              iframe.frameborder = '0';
              iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
              iframe.allowFullscreen = true;
  
              trailerVideoContainer.appendChild(iframe);
              modal.style.display = 'block';
  
              // Mostrar detalles de la película o serie seleccionada
              showDetails(item); // <-- Llamar a la función showDetails() aquí
          });
          movieCard.appendChild(btn);
  
          movieCards.appendChild(movieCard);
      });
  }
  function updateDataTitle(category) {
      if (category === 'all') {
          dataTitle.textContent = 'Todas las películas y series';
      } else if (category === 'peliculas') {
          dataTitle.textContent = 'Todas las películas';
      } else if (category === 'series') {
          dataTitle.textContent = 'Todas las series';
      }
  }
  
  // ... (código previo) ...
  
  function filterMoviesAndSeries() {
      const category = categoryFilter.value;
      updateDataTitle(category);
  
      if (category === 'all') {
          const data = [...peliculas, ...series];
          displayData(data);
      } else if (category === 'peliculas') {
          displayData(peliculas);
      } else if (category === 'series') {
          displayData(series);
      }
  }
  
  
  function searchMoviesAndSeries() {
      const searchTerm = searchInput.value.toLowerCase();
      const category = categoryFilter.value;
  
      // Filtrar las películas y series según el término de búsqueda y la categoría seleccionada
      const filteredData = (category === 'all' ? [...peliculas, ...series] : (category === 'peliculas' ? peliculas : series))
          .filter(item => item.title.toLowerCase().includes(searchTerm));
  
      displayData(filteredData);
  }
  
  // Agregar el evento de escucha para la búsqueda
  searchInput.addEventListener('input', searchMoviesAndSeries);
  
  function closeModal() {
      const modal = document.getElementById('trailerModal');
      modal.style.display = 'none';
  }
  
  
  // Mostrar todas las películas y series al inicio
  const data = [...peliculas, ...series];
  displayData(data);
  
  movieDetailsContainer.style.display = 'none';

