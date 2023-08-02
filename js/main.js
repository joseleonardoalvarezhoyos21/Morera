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
    {
        title: 'John Wick 3: Parabellum ',
        poster: 'https://img.aullidos.com/imagenes/john-wick-3/imagen-10.jpg',
        trailerId: 'https://www.youtube.com/embed/30R7Io_DmyU',
        category: 'Película de acción ',
        details: {
            director: 'John Wick 3: Parabellum',
            year: 2019,
            description: 'John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización.'
        }
    },
    {
        title: ' BATMAN BEGINS',
        poster: 'https://espectadores.net/wp-content/uploads/2016/01/las-mejores-peliculas-de-accion-batman-begins-600x337.png',
        trailerId: 'https://www.youtube.com/embed/c6Rhzt9Z1y0',
        category: 'Película de acción ',
        details: {
            director: 'Christopher Nolan',
            year: 2005,
            description: 'Una nueva entrega del famoso personaje de cómics protagonizada por Christian Bale y en la que se explica el orígen de Batman antes de convertirse en el héroe de Gotham City'
        }
    },
    {
        title: 'EL FRANCOTIRADOR',
        poster: 'https://pics.filmaffinity.com/El_Francotirador-943269662-large.jpg',
        trailerId: 'https://www.youtube.com/embed/2TT0SxVF0P8',
        category: 'Peliculas de acción',
        details: {
            director: ' Clint Eastwood',
            year: 2014,
            description: 'Protagonizada por Brandley Cooper y Sienna Miller, se la conoce también como American Sniper y trata sobre la autobiografía del marine Chris Kyle, quien batió un record absoluto en lo que se refiere a muertes cuando es enviado a Irak para proteger a sus compañeros, lo que hizo que se ganara el apodo de “Leyenda”, algo que hizo que se convirtiera además en el blanco y en el objetivo de los enemigos.'
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
        category: 'peliculas',
        details: {
            director: 'Bilall Fallah, Michael Bay, Adil El Arbi',
            year: 1995,
            description: 'La primera película de Michael Bay es un cuento sucio de narcos a la pista de 100 millones de dólares de la droga que han desaparecido. Will Smith y Martin Lawrence son dos compañeros de policias que hacen burlas en el asiento delantero mientras se oyen los gritos de la testigo clave (Tea Leoni )en la parte trasera.'
        }
    },
    //------------------------------------------------------//
    {
        title: 'Vivo',
        poster: 'https://www.ecartelera.com/carteles/15400/15414/001_p.jpg',
        trailerId: 'https://www.youtube.com/embed/DaxoTM2FDh4',
        category: 'Peliculas de Animación',
        details: {
            director: ' Lin-Manuel Miranda',
            year: 2021,
            description:'Vivo trata sobre la historia de un mono capuchino con ansias de aventura, y con una gran pasión por la música. Este mono capuchino hace un largo y para nada seguro viaje desde la Havana a Miami para cumplir con su sueño: convertirse en toda una estrella de un espectáculo.'
        }
    },

    {
        title: 'Buscando a Nemo',
        poster: 'https://i.pinimg.com/originals/8d/6f/37/8d6f371c00cdbfaad93fe187311d8f1a.jpg',
        trailerId: 'https://www.youtube.com/embed/ba4TwyaNhSQ',
        category: 'Peliculas de Animación',
        details: {
            director: 'Andrew Stanton',
            year: 2013,
            description: 'En las aguas tropicales de la Gran Barrera de Coral, un pez payaso llamado Marlin lleva una apacible existencia junto a su único hijo, Nemo. Temeroso de los océanos y sus imprevisibles peligros, hace todo lo que puede para proteger a su hijo. Pero como todos los pececitos de su edad, Nemo sueña con explorar los misteriosos arrecifes de coral.'
        }
    },
    {
        title: 'Ice Age 2',
        poster: 'https://static-1.ivoox.com/audios/2/3/6/7/3431450957632_LG.jpg',
        trailerId: 'https://www.youtube.com/embed/V4PGQWkMEkA',
        category: 'Peliculas de Animación',
        details: {
            director: ' Carlos Saldanha',
            year: 2006,
            description: 'Es la secuela de la película La era de hielo (de 2002). Esta vez, Manny, Sid y Diego tienen una misión, informar a los otros bichos que la edad de hielo se acaba, pero que una gigantesca inundación podría acabar con todo y que deben estara preparado para lo que se viene.'
        }
    },
    {
        title: 'Soul',
        poster: 'https://pics.filmaffinity.com/soul-557797463-mmed.jpg',
        trailerId: 'https://www.youtube.com/embed/3QIdlo4uIVg',
        category: 'Peliculas de Animación',
        details: {
            director: 'Pete Docter, Kemp Powers',
            year: 2020,
            description: '¿Alguna vez te has preguntado de dónde provienen tu pasión, tus sueños y tus intereses? ¿Qué es lo que te hace ser... tú? Pixar te lleva en un viaje desde las calles de Nueva York a los reinos cósmicos para descubrir las respuestas a las preguntas más importantes de la vida.'
        }
    },
    {
        title: 'Onward',
        poster: 'https://pics.filmaffinity.com/onward-464150296-mmed.jpg',
        trailerId: 'https://www.youtube.com/embed/OaVg6SEFcqQ',
        category: 'Peliculas de Animación',
        details: {
            director: 'Dan Scanlon',
            year: 2020,
            description: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo. '
        }
    },
];

const series = [
    {
        title: 'Daredevil',
        poster: 'https://eloutput.com/wp-content/uploads/2022/03/daredevil-personaje.jpg',
        trailerId: 'https://www.youtube.com/embed/cDUKA6Tqiw8',
        category: 'Series de accion',
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
        category: 'Series de accion',
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
        category: 'Series de accion',
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
        category: 'Series de accion',
        details: {
            director: ' Hwang Dong-hyuk',
            year: 2021,
            description: 'Uno de los éxitos más inesperados de los últimos años, disponible en Netflix, nos presenta una historia que no se podría catalogar en ningún género en particular, aunque podríamos afirmar que estamos ante un thriller de acción y terror de los que dejan huella. Cuando Gi-hun accede a participar en un misterioso juego, acabará por descubrir que tendrá que luchar con cientos de personas en antiguos juegos infantiles, no daremos más datos para que la sorpresa vaya en aumento según vas viendo cada uno de los espectaculares episodios. Eso sí, podemos contarte que el ser humano queda retratado, para bien y para mal, en una de las series más aclamadas por los espectadores en 2021.'
        }
    },
    {
        title: 'The defenders',
        poster: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/29/1469200934-the-defenders.jpg',
        trailerId: 'https://www.youtube.com/embed/jziPMN_ufnU',
        category: 'Series de accion',
        details: {
            director: 'Clarkson ',
            year: 2017,
            description: 'Cuando Marvel planeó su conjunto de películas para agrandar un universo en expansión, que desembocaría en la espectacular Endgame, también planeó series de corte más adulto, con una conjunción de héroes a la conclusión de las respectivas temporadas de cada una de ellas. Este serie, que une a Daredevil, Jessica Jones, Iron Fist y Luke Cage, nos mostrará cómo personas con diferentes objetivos y enemigos deberán unir sus fuerzas si es que quieren detener una siniestra conspiración que amenaza por completo a su hogar, la ciudad de Nueva York.'
        }
    },
    {
        title: 'La maldición de Bly Manor',
        poster: 'https://pics.filmaffinity.com/La_maldiciaon_de_Bly_Manor_Serie_de_TV-134392524-large.jpg',
        trailerId: 'https://www.youtube.com/embed/ELsqmSeX9cY',
        category: 'Series de accion',
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
        category: 'Series de accion',
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
        category: 'Series de accion',
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
        category: 'Series de accion',
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
        category: 'Series de accion',
        details: {
            director: 'Robert Patrick, Holland Roden, y Colm Feore.',
            year: 2017,
            description: '¿Y si los vampiros, los hombres lobo o los ladrones de cuerpos tuvieran algo de real? Eso es lo que intentan demostrar en esta adaptación del podcast de Aaron Mahnke, explicando en cada episodio hechos históricos que se convirtieron en el origen de mitos, leyendas, supersticiones e historias terroríficas de la cultura popular a través de la mezcla de escenas dramáticas, animación, imágenes de archivo y narración.'
        }
    },
    {
        title: 'Invencible (Invincible)',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97DVy6U1VmimYBlxHRX99ZGd6inNe9YA6qg&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/XRpzXk39mrA',
        category: 'Series de Animacion',
        details: {
            director: 'Joseba Basalo',
            year: 2021,
            description: 'El género de superhéroes aún tiene muchas alegrías que darles a los fans, como bien demuestra esta serie creada por Robert Kirkman y Cory Walker. La historia sigue a un joven de 17 años, Mark Grayson, que hereda superpoderes y se convierte en uno de los superhéroes más poderosos de la Tierra. Junto a su padre, claro, a quien habrá que seguir bien de cerca. Y es que los sueños de Mark eran muy grandes, pero la realidad le podría explotar en la cara. La segunda temporada de Invencible ya está en camino. Y la tercera también.'
        }
    },
    {
        title: 'Castlevania',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZirZixkvEdF05b0P0TrJQSZuIMC63TmG9Q&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/6_cv9XlyVPk',
        category: 'Series de Animacion',
        details: {
            director: '	Sam Deats',
            year: 1986 ,
            description: 'La clásica serie de videojuegos Castlevania dio lugar a esta producción original de Netflix que enamoró hasta la médula a los fans del anime, especialmente los que disfrutan de tramas fantásticas cargadas de sangre. Y sangre no falta en esta serie, creada por Warren Ellis, porque uno de sus protagonistas (o villanos) no es otro que el mismísimo conde Drácula. El último superviviente del clan Belmont será el encargado de pararle los pies al vampiro antes de que destruya toda Europa del Este. Un complemento perfecto para las mejores series de anime japonés en Netflix.'
        }
    },
    {
        title: 'Futurama',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafaY4Oa5MIuF6LUMPKlvWIGO4sa1HjItjOg&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/AZ5LA42rbHo',
        category: 'Series de Animacion',
        details: {
            director: 'Matt Groening',
            year: 1999,
            description: 'Todo un clásico en la animación televisiva, y también una de las mejores y más queridas series animadas para adultos. Matt Groening, creador de Los Simpso, firmó junto a su compañero David X. Cohen esta aventura de ciencia ficción y aventuras junto a un grupo de personajes memorables. La historia sigue a un repartidor de pizza que es congelado por accidente en la Nochevieja de 1999 y que es despertado mil años después, donde conseguirá un trabajo en una compañía de mensajería intergaláctica que le llevará por todo el universo. Futurama volverá en 2023 con nuevos capítulos.'
        }
    },
    {
        title: 'Rick y Morty',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKYd9f1Z9xoNR_CJtkjBmkyIEdKJbsTCcdg&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/E8cXKMR9a1Q',
        category: 'Series de Animacion',
        details: {
            director: 'Justin Roiland y Dan Harmon',
            year:  2013,
            description: 'La animación adulta y la ciencia ficción en el espíritu más friki posible encuentran su mezcla perfecta con Rick y Morty, serie creada por Justin Rooland y Dan Harmon para Adult Swim. Esta fantástica locura, que actualmente emite su tercera temporada en Estados Unidos, sigue los pasos del alocado científico Rick Sanchez y el pringado de su nieto Morty, en una clara parodia de Regreso al futuro que resulta refrescante, hilarante y que nos abre un mundo lleno de posibilidades, a cada cual más sorprendente.'
        }
    },
    {
        title: 'los simpson',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tlh7jhTPJPl1zCgXOgBosBLbKIj9FAkYmQ&usqp=CAU',
        trailerId: 'https://www.youtube.com/embed/-pdCvr2sQw4',
        category: 'Series de Animacion',
        details: {
            director: 'Matt Groening',
            year:  1987,
            description: 'Los Simpson son una familia normal estadounidense que vive en Springfield, una ciudad ficticia de la «América media». ​ Homer, el padre, trabaja como inspector de seguridad en la planta de energía nuclear de Springfield en el sector 7G, posición que contrasta con su personalidad descuidada y bufonesca.'
        }
    }
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