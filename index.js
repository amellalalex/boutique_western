////////////////////////
// Import necessities //
////////////////////////

// Express
const express 		= require('express')
const app					= express()
const port				= 3000

// Path
const path				= require('path')

// Handlebars
const handlebars	= require('handlebars')

// filesystem
const fs					= require('fs')

///////////////
// Configure //
///////////////

// Handlebar templates //

// Index
var index
var index_en
var index_fr

fs.readFile(path.join(__dirname, 'public/index.html'), {encoding: 'utf-8'}, (err, data) => {
	if(err) console.log(`[!] Failed to load index template.`);
	else {
		// Compile template
		index 			= handlebars.compile(data.toString())
		index_en 		= {
			// Top of page
			title: "Welcome - Cordonnerie et Boutique Western",
			brand: "Cordonnerie & Boutique Western",

			// Navbar
			about_link: "About",
			service_link: "Products & Services",
			portfolio_link: "Portfolio",
			contact_link: "Contact Us",

			// Header 
			heading: "An Unforgettable Stop",
			subheading: "Welcoming boutique-goers since 1968",
			call_to_action: "Tell me more!",

			// About section
			about_heading: "About Our Shop",
			about_description: "Since 1968, our shop has served locals and tourists alike in the Shediac, NB area.",
			about_description2: "We sell a wide range of unique aboriginal and western antiques. View our products and services below!",
			about_button: "Products & Services",

			// Products and services section 
			service_heading: "Our Products & Services",

			native_products: "Native Products",
			native_description: "We sell native products",

			shoemending_service: "Shoemending",
			shoemending_description: "We offer shoemending services",

			western_products: "Western Products",
			western_description: "We sell western products",

			love_service: "Chosen with Love",
			love_description: "Our antiques are handmade and chosen with love.",
		}		

		index_fr 		= {
			// Top of page
			title: "Accueil - Cordonnerie et Boutique Western",
			brand: "Cordonnerie et Boutique Western",

			// Navbar
			about_link: "À propos",
			service_link: "Services",
			portfolio_link: "Portfolio",
			contact_link: "Nous Rejoindre",

			// Header 
			heading: "Une Visite Qui Vaut mille mots",
			subheading: "Toujours accueillant depuis 1968",
			call_to_action: "Vraiment?",

			// About section
			about_heading: "À propos",
			about_description: "Depuis l'an 1968, notre boutique est un arrêt préféré des touristes et des habitants de la région de Shédiac au NB",
			about_description2: "Nous disposons de divers antiques amérindiennes et du style 'western' uniques. Visitez l'apperçu de nos produits et services ci-dessous!",
			about_button: "Produits et services",

			// Products and services section 
			service_heading: "Nos produits et services",

			native_products: "Produits amérindiens",
			native_description: "Nous vendons des produits amérindiens",

			shoemending_service: "Cordonnerie",
			shoemending_description: "Nos offrons des services de cordonnerie",

			western_products: "Produits western",
			western_description: "Nous vendons des produits western",

			love_service: "Choisi avec amour",
			love_description: "Nos antiques sont fabriqués à la main et choisi avec amour.",
		}
		
		// Express
		app.get('/', (req, res) => res.send(index(index_en)))

		app.use(express.static('public'))

		app.listen(port, () => console.log(`Boutique Western JS is listening on port ${port}`))
	}
})
