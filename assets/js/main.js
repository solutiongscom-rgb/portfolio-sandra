<!DOCTYPE HTML>
<html>
	<head>
		<title>Portfolio Sandra Martinez</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
		
		<style>
			/* --- MOSAICO 2 COLUMNAS --- */

			#thumbnails {
				display: grid !important;
				grid-template-columns: repeat(2, 1fr) !important;
				grid-gap: 4px !important;
				padding: 4px !important;
				background: transparent !important;
			}

			#thumbnails article {
				margin: 0 !important;
				height: 120px !important;
				width: 100% !important;
				position: relative !important;
				overflow: hidden !important;
				background: transparent !important;
				border: none !important;
				box-shadow: none !important;
			}

			#thumbnails article .thumbnail {
				display: block !important;
				height: 100% !important;
				width: 100% !important;
				border: none !important;
				outline: none !important;
				background: transparent !important;
			}

			#thumbnails article .thumbnail img {
				width: 100% !important;
				height: 100% !important;
				object-fit: cover !important;
				object-position: center !important;
				transition: transform 0.3s ease, opacity 0.4s ease;
				opacity: 0;
			}

			#thumbnails article .thumbnail img.loaded {
				opacity: 1;
			}

			#thumbnails article:hover img {
				transform: scale(1.05);
			}

			#thumbnails article h2,
			#thumbnails article p {
				display: none !important;
			}

			@media screen and (max-width: 480px) {
				#thumbnails {
					grid-template-columns: repeat(2, 1fr) !important;
				}
				#thumbnails article {
					height: 90px !important;
				}
			}
		</style>
	</head>
	<body class="is-preload-0 is-preload-1 is-preload-2">
		<div id="main">
			<header id="header">
				<h1>Sandra Martinez</h1>
				<p>Portfolio Fotográfico</p>
				<ul class="icons">
					<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
				</ul>
			</header>
			<section id="thumbnails">
			</section>
			<footer id="footer">
				<ul class="copyright">
					<li>&copy; Portfolio. Design: HTML5 UP.</li>
				</ul>
			</footer>
		</div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		
		<script>
			const urlAPI = 'https://script.google.com/macros/s/AKfycbxQmQGl6ejwxhUVy0irWLtreT8t-EQzdiIqJAqpwlmhQM4fEaHXTzZruaWofNDLFB0/exec';

			fetch(urlAPI)
				.then(response => response.json())
				.then(data => {

					// 👇 ABRE LA CONSOLA DEL NAVEGADOR (F12 > Console) Y MIRA QUÉ CAMPOS LLEGAN
					console.log('📋 Primera foto del JSON:', data.galeria[0]);
					console.log('🔑 Claves disponibles:', Object.keys(data.galeria[0]));

					const contenedor = document.getElementById('thumbnails');
					if (data.galeria && data.galeria.length > 0) {
						contenedor.innerHTML = '';
						data.galeria.forEach(foto => {
							if (foto.imagen && foto.imagen.includes('http')) {
								const art = document.createElement('article');

								const titulo = foto.titulo || '';
								const desc   = foto.desc   || '';

								art.innerHTML = `
									<a class="thumbnail" href="${foto.imagen}">
										<img src="${foto.imagen}" alt="${titulo}" />
									</a>
									<h2>${titulo}</h2>
									<p>${desc}</p>
								`;

								const img = art.querySelector('img');
								img.addEventListener('load', () => img.classList.add('loaded'));
								if (img.complete) img.classList.add('loaded');

								contenedor.appendChild(art);
							}
						});
					}

					// Lanzamos el motor de la plantilla
					const script = document.createElement('script');
					script.src = 'assets/js/main.js';
					script.onload = function() {
						setTimeout(() => {
							document.body.classList.remove('is-preload-0', 'is-preload-1', 'is-preload-2');
						}, 300);
					};
					document.body.appendChild(script);
				});
		</script>
	</body>
</html>
