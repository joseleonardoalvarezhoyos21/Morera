const peliculas = [
    {
        title: 'Hereditary',
        poster: 'https://hips.hearstapps.com/hmg-prod/images/images-8-1666767363.jpeg?crop=0.9625668449197861xw:1xh;center,top&resize=980:*',
        trailerId: 'https://www.youtube.com/embed/V6wWKNij_1M',
        category: 'Peliculas de terror',
        details: {
            director: 'Ari Aster',
            year: 2018,
            description: 'Una tragedia familiar se vuelve terrorífica para una madre soltera y sus dos hijos cuando comienzan a experimentar extraños sucesos paranormales en su casa.'
        }
    },
    {
        title: 'Un lugar tranquilo ',
        poster: 'https://hips.hearstapps.com/hmg-prod/images/a-quiet-place-854286921-large-1666767263.jpeg?crop=0.9876543209876543xw:1xh;center,top&resize=980:*',
        trailerId: 'https://www.youtube.com/embed/RV8gX2bXUOk',
        category: 'Peliculas de terror',
        details: {
            director: 'John Krasinski',
            year: 2018,
            description: 'En un mundo postapocalíptico, una familia es perseguida por criaturas misteriosas que cazan a través del sonido. Si te escuchan, te cazan.'
        }
    },
    {
        title: '#Vivo',
        poster: 'https://hips.hearstapps.com/hmg-prod/images/images-7-1666767176.jpeg?crop=1xw:1xh;center,top&resize=980:*',
        trailerId: 'https://www.youtube.com/embed/skH9L6kAdD4',
        category: 'Peliculas de terror',
        details: {
            director: 'Cho Il-hyung',
            year: 2020,
            description: 'El caos se instala en la ciudad cuando una infección desconocida se propaga rápidamente. Encerrado en su apartamento a la espera de auxilio, un joven intentará sobrevivir cueste lo que cueste.'
        }
    },
    {
        title: 'Host',
        poster: 'https://hips.hearstapps.com/hmg-prod/images/images-6-1666767111.jpeg?crop=1xw:0.9997163925127623xh;center,top&resize=980:*',
        trailerId: 'https://www.youtube.com/embed/2hrj4w2mRyE',
        category: 'Peliculas de terror',
        details: {
            director: 'Rob Savage',
            year: 2020,
            description: 'Durante la cuarentena, seis amigos realizan una sesión espiritista por Zoom que les llevará a vivir experiencias aterradoras durante la noche.'
        }
    },
    {
        title: 'La abuela ',
        poster: 'https://hips.hearstapps.com/hmg-prod/images/images-5-1666767062.jpeg?crop=1xw:0.9986111111111111xh;center,top&resize=980:*',
        trailerId: 'https://www.youtube.com/embed/NE6YrUzcKeA',
        category: 'Peliculas de terror',
        details: {
            director: 'VERONICA y REC',
            year: 2021,
            description: 'Cuando Susana descubre que su abuela ha sufrido un derrame cerebral, abandona su carrera de modelo en París para regresar a Madrid. A la espera de encontrar a alguien que cuide de su abuela, los días transcurren y la realidad se convierte en una pesadilla.'
        }
    },
    
];

const series = [
    {
        title: 'La maldición de Bly Manor',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdmI1NUbX1GJ6yIa_BqEcNLEeBYoErbzQq__j0rRrXRwIE6fFxr6kwdk6q3fVMlPW6B0&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/ELsqmSeX9cY',
        category: 'Series de Terror',
        details: {
            director: 'Mike Flanagan',
            year: 2020,
            description: 'Mike Flanagan, el mismo que firma la serie anterior, La maldición de Hill House. Basada en Otra vuelta de tuerca, el clásico de la literatura de terror de Henry James,La maldición de Bly Manor está protagonizada por Victoria Pedretti (You), quien interpreta a una profesora que es contratada como au pair en Bly Manor tras la trágica muerte de la institutriz de dos niños huérfanos. Y ya sabemos cómo va el tema en las mansiones de las series de terror: nada es lo que parece y morir no significa desaparecer para siempre... De hecho, por esta casa encantada continúan pululando los fantasmas de las dos institutrices anteriores. La maldición de Bly Manor tiene una temporada de 9 episodios escalofriantes.'
        }
    },
    {
        title: 'Scream',
        poster: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/25/74/20136749.jpg',
        trailerId: 'https://www.youtube.com/embed/StDas_mJz7g',
        category: 'Series de Terror',
        details: {
            director: 'Kevin Williamson',
            year:  2000,
            description: 'Al igual que en la película de 1995 protagonizada por Neve Campbell (y que en 2022 tiene nueva entrega), la Scream de Netflix cuenta con un asesino en serie enmascarado que hará la vida imposible a un grupo de adolescentes. ¿Su objetivo? Que no quede ninguno con vida y hacerles vivir un auténtico infierno hasta que eso suceda.'
        }
    },
    {
        title: 'Las crónicas del miedo',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVq2jgRXYwd073erJZKeuzU6ug54I5UAobyA&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/GCclaRwoLos',
        category: 'Series de Terror',
        details: {
            director: ' Adam Wingard, David Bruckner, Ti West, Glenn McQuaid, Joe Swanberg y Radio Silence.',
            year: 2012,
            description: 'Si lo tuyo son las antologías de historias de terror, apunta este título disponible en Netflix. Se trata de una serie de cuentos de intriga y misterio con tintes paranormales, situados en lugares y épocas diferentes y con personajes que exploran lo inexplicable. Cada capítulo cuenta una historia distinta y en total tienes 23 divididos en dos temporadas.'
        }
    },
    {
        title: 'Folklore',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzddivXS-o6lteOufEW6jyXIrK9DQ-I96iFw&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/ymyVR9lHr_s',
        category: 'Series de Terror',
        details: {
            director: 'Stan Lee, Bill Everett',
            year: 2020,
            description: 'Folklore recopila seis historias escalofriantes que se corresponden con los mitos más arraigados de cada país adaptados a la actualidad. Prepárate para descubrir relatos que se sumergen en lo desconocido y en el más allá de países como Tailandia, Malasia, Indonesia, Japón, Corea y Singapur.'
        }
    },
    {
        title: 'Lore',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmNrSW58tYEhHXZtDpy3c0UaK27Qp6S5pQA&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/vFUB20iSK94',
        category: 'Series de Terror',
        details: {
            director: 'Robert Patrick, Holland Roden, y Colm Feore.',
            year: 2017,
            description: '¿Y si los vampiros, los hombres lobo o los ladrones de cuerpos tuvieran algo de real? Eso es lo que intentan demostrar en esta adaptación del podcast de Aaron Mahnke, explicando en cada episodio hechos históricos que se convirtieron en el origen de mitos, leyendas, supersticiones e historias terroríficas de la cultura popular a través de la mezcla de escenas dramáticas, animación, imágenes de archivo y narración.'
        }
    },
    // Agrega más series aquí
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