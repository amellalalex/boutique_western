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
			western_products: "Western Products",
			western_description: "We sell western products",
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
			call_to_action: "Montre moi!",

			// About section
			about_heading: "About Our Shop"
		}
		
		// Express
		app.get('/', (req, res) => res.send(index(index_en)))

		app.use(express.static('public'))

		app.listen(port, () => console.log(`Boutique Western JS is listening on port ${port}`))
	}
})
