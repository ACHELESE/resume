// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
	name:{
	  firstname:'Yuriy',
	  lastname: 'Victory',
	},
	position: 'Junior Fullstack JS Developer',
	salary: '800$ в місяць',
	adress: 'Ukraine, Kyiv'
  }

var footer = {
	social: {
	  email: {
		text:'axl12102020@gmail.com',
		href:'axl12102020@gmail.com',
	  },
	  phone: {
		text: '+380687853487',
		href: 'tel:+380687853487',
	  },
	  linkedin: {
		text:'LinkedIn',
		href:'https://www.linkedin.com/in/yuriy-yuriy-23184726a/',
	  },
	},
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    
    	page:{
      	title: 'Summary',
    	},

    	header, 

    	main: {
      	summary: [
		{
        name:'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      
      
      },
	],
      experience: [
		{
        name: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      
      
      },
	],
    },
    
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    
    page:{
      title: 'Skills',
    },

    header,

    main: {
      skills: [
        	{
        		title: 'HTML', 
        		point: 10,
        		isTop: true,
        	},
        	{
          		title: 'Handlebars', 
          		point: 0,
          		isTop: true,  
        	},
        	{
          		title: 'VS Code', 
          		point: 0.2,
          		isTop: true,
        	},  
        	{	
          		title: 'Git',
          		point: 0.3,
          		isTop: true,
        	},
        	{
          		title: 'Terminal',
          		point: 0.4,
          		isTop: true,
        	},
        	{
          		title: 'NPM',
          		point: 0.2,
          		isTop: true,
        	},
        	{
          	title: 'PHP',
          	point: null,
          	isTop: false,
        	},
      	],
		  hobbies: [
        	{
        		title: 'Sport', 
        		isMain: true,
        	},
			{
        		title: 'IT', 
        		isMain: true,
        	},
		],
    },
    
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  	res.render('Education', {
    	// ↙ сюди вводимо JSON дані
    
		page:{
			title: 'Education',
		},

		header,

		main: {
			education: [
				{
					name: 'IT Brains',
					isEnd: false,
				},
				{
					name: 'Work',
					isEnd: false,
				},
				{
					name: 'university',
					isEnd: true,
				},
			],
			mycertificates: [
				{
					name: 'Довідка',
					id: 123,
					isEnd: true,
				},
				{
					name: 'Атестат',
					id: 567,
					isEnd: true,
				},
				
			],
			university: [
				'School #93', 
				'Lviv National University named after Ivan Franko', 
				'Computer courses IT Brains', 
			],
		},
    
		footer,
	})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('person', {
		layout: 'person',
	  person: {
		name: 'Emma Johnson',
		age: 32,
		gender: 'Female',
		address: {
		  street: '123 Main St',
		  city: 'New York',
		  state: 'NY',
		  zip: '10001',
		  country: 'USA',
		},
		education: [
		  {
			degree: 'Bachelor of Science',
			major: 'Computer Science',
			university:
			  'Massachusetts Institute of Technology',
			graduationYear: 2012,
		  },
		],
		workExperience: [
		  {
			company: 'Google',
			title: 'Software Engineer',
			startDate: '2012-06-01',
			endDate: '2016-12-31',
			responsibilities: [
			  'Developed new features for Google Maps',
			  'Worked on improving search algorithms',
			],
			year_founded: 1990,
			industry: 'Technology',
			employees: [
			  {
				name: 'John Smith',
				position: 'CEO',
				department: 'Executive',
				projects: [
				  {
					name: 'Project Alpha',
					description:
					  'Developing new software platform',
					status: 'In Progress',
					teams: [
					  {
						team_name: 'Awesome Team',
						team_leader: {
						  name: 'John Smith',
						  title: 'Team Leader',
						  email: 'john.smith@example.com',
						},
						team_members: [
						  {
							name: 'Alice Johnson',
							title: 'Software Engineer',
							email:
							  'alice.johnson@example.com',
							skills: ['Java', 'Python', 'SQL'],
							projects: [
							  {
								name: 'Project A',
								description:
								  'Lorem ipsum dolor sit amet',
								technologies: [
								  'Java',
								  'Spring Framework',
								],
								team_members: [
								  {
									name: 'Bob Lee',
									title:
									  'Software Engineer',
								  },
								  {
									name: 'Cindy Chen',
									title: 'UI Designer',
								  },
								],
							  },
							],
						  },
						],
					  },
					],
				  },
				],
			  },
			],
		  },
		],
	  },
	})
  })
  
  // ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('bio', {
		layout: 'bio',
	  name: 'Albert Einstein',
	  birthdate: 'March 14, 1879',
	  birthplace:
		'Ulm, Kingdom of Württemberg, German Empire',
	  deathdate: 'April 18, 1955',
	  deathplace: 'Princeton, New Jersey, United States',
	  nationality: 'Swiss, German, American',
	  occupation: 'Theoretical Physicist',
	  known_for: [
		'Theory of Relativity',
		'E=mc²',
		'Photoelectric Effect',
		'Brownian Motion',
	  ],
	  education: [
		{
		  degree: 'Doctor of Philosophy',
		  field: 'Physics',
		  institution: 'University of Zurich',
		  year: 1905,
		},
	  ],
	  notable_publications: [
		{
		  title: 'On the Electrodynamics of Moving Bodies',
		  year: 1905,
		  publisher: 'Annalen der Physik',
		},
		{
		  title:
			'Does the Inertia of a Body Depend Upon Its Energy Content?',
		  year: 1905,
		  publisher: 'Annalen der Physik',
		},
	  ],
	  partners: [
		{
		  name: 'Mileva Marić',
		  relationship: 'First wife',
		  years: '1903-1919',
		},
		{
		  name: 'Elsa Einstein',
		  relationship:
			"Second wife, also Einstein's first cousin",
		  years: '1919-1936',
		},
	  ],
	  awards: [
		{
		  title: 'Nobel Prize in Physics',
		  year: 1921,
		  description:
			'Awarded for his explanation of the photoelectric effect',
		},
	  ],
	  influences: [
		'Isaac Newton',
		'James Clerk Maxwell',
		'Hermann Minkowski',
	  ],
	  influenced: [
		'Niels Bohr',
		'Erwin Schrödinger',
		'Werner Heisenberg',
		'Richard Feynman',
	  ],
	  quotes: [
		'Imagination is more important than knowledge.',
		'I have no special talent. I am only passionately curious.',
		'The important thing is not to stop questioning.',
		'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
	  ],
	  major_discoveries: [
		{
		  title: 'Photoelectric Effect',
		  year: 1905,
		  description:
			'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
		},
	  ],
	  contributions: {
		title: 'Inventions',
		description:
		  'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
		year: 'Late 15th to early 16th century',
		field: 'Invention',
	  },
	})
  })
  
  // ================================================================
  
router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
	layout: 'basic',
    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

router.get('/car', function (req, res) {
	// res.render генерує нам HTML сторінку
  
	//            ↙ cюди вводимо назву файлу з сontainer
	res.render('car', {
		layout: 'basic',
	  make: 'Toyota',
	  model: 'Camry',
	  year: 2022,
	  color: 'silver',
	  features: {
		interior: {
		  seats: {
			material: 'leather',
			color: 'black',
			heated: true,
			ventilated: true,
		  },
		  dashboard: {
			material: 'plastic',
			color: 'black',
			display: {
			  type: 'LCD',
			  size: 10.1,
			  resolution: '1280x720',
			  touchscreen: true,
			},
		  },
		  audio: {
			system: 'JBL',
			speakers: 8,
			subwoofer: true,
			bluetooth: true,
			USB: true,
		  },
		},
		exterior: {
		  wheels: {
			size: 18,
			type: 'alloy',
			color: 'silver',
		  },
		  headlights: {
			type: 'LED',
			brightness: 'high',
			automatic: true,
		  },
		  sunroof: {
			type: 'panoramic',
			size: 'large',
			automatic: true,
		  },
		},
		safety: {
		  airbags: {
			front: 2,
			side: 2,
			knee: 2,
			rear: 2,
		  },
		  assistance: {
			blind_spot_monitoring: true,
			rear_cross_traffic_alert: true,
			lane_departure_warning: true,
			adaptive_cruise_control: true,
			collision_warning: true,
		  },
		},
	  },
	  engine: {
		type: 'gasoline',
		displacement: 2.5,
		horsepower: 206,
		torque: 186,
		transmission: {
		  type: 'automatic',
		  gears: 8,
		},
	  },
	  fuel_economy: {
		city: 28,
		highway: 39,
		combined: 32,
	  },
	  price: {
		base: 25900,
		destination: 995,
		options: {
		  navigation: 1200,
		  moonroof: 800,
		  premium_paint: 595,
		},
		total: 28990,
	  },
	})
	//                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================
 
// router.get Створює нам один ентпоїнт

router.get('/mac', function (req, res) {
	// res.render генерує нам HTML сторінку
  
	//            ↙ cюди вводимо назву файлу з сontainer
	res.render('mac', {
		layout: 'basic',
	  name: 'Apple MacBook Pro',
	  description: 'The ultimate notebook for power users',
	  price: 1999.99,
	  category: 'Computers & Tablets',
	  features: {
		processor: {
		  brand: 'Intel',
		  model: 'Core i9',
		  speed: '2.3 GHz',
		  cores: 8,
		  cache: '16 MB',
		},
		memory: {
		  type: 'DDR4',
		  size: '32 GB',
		  speed: '2666 MHz',
		},
		storage: {
		  type: 'SSD',
		  size: '1 TB',
		},
		display: {
		  size: '16 inches',
		  resolution: '3072x1920',
		  technology: 'Retina',
		  color_space: 'P3',
		  brightness: '500 nits',
		  refresh_rate: '60 Hz',
		},
		graphics: {
		  brand: 'AMD',
		  model: 'Radeon Pro 5500M',
		  memory: '4 GB GDDR6',
		},
		ports: [
		  {
			type: 'Thunderbolt 3',
			count: 4,
			features: [
			  'Charging',
			  'DisplayPort',
			  'Thunderbolt (up to 40 Gbps)',
			  'USB 3.1 Gen 2 (up to 10 Gbps)',
			],
		  },
		  {
			type: 'HDMI',
			count: 1,
		  },
		],
		battery: {
		  type: 'Lithium Polymer',
		  capacity: '100 Wh',
		  life: 'Up to 11 hours',
		},
		weight: '4.3 pounds',
		dimensions: {
		  height: '0.64 inch',
		  width: '14.09 inches',
		  depth: '9.68 inches',
		},
		operating_system: 'macOS',
		accessories: [
		  {
			name: 'Apple Magic Keyboard',
			price: 99.99,
		  },
		  {
			name: 'Apple Magic Mouse 2',
			price: 79.99,
		  },
		  {
			name: 'USB-C to USB Adapter',
			price: 19.99,
		  },
		],
	  },
	})
	//                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================ 
  
  
// router.get Створює нам один ентпоїнт

router.get('/facebook', function (req, res) {
	// res.render генерує нам HTML сторінку
  
	//            ↙ cюди вводимо назву файлу з сontainer
	res.render('facebook', {
		layout: 'basic',
	  name: 'Facebook',
	  users: [
		{
		  id: 1,
		  name: 'John Doe',
		  gender: 'Male',
		  age: 30,
		  friends: [
			{
			  id: 2,
			  name: 'Jane Smith',
			  gender: 'Female',
			  age: 27,
			  mutual_friends: [
				{
				  id: 4,
				  name: 'Samantha Lee',
				  gender: 'Female',
				  age: 25,
				},
			  ],
			},
			{
			  id: 5,
			  name: 'Mike Williams',
			  gender: 'Male',
			  age: 28,
			  mutual_friends: [
				{
				  id: 7,
				  name: 'David Kim',
				  gender: 'Male',
				  age: 29,
				},
			  ],
			},
		  ],
		  groups: [
			{
			  id: 1,
			  name: 'Hiking Enthusiasts',
			  description:
				'A group for people who love hiking and the great outdoors',
			  members: [
				{
				  id: 8,
				  name: 'Sarah Johnson',
				  gender: 'Female',
				  age: 25,
				},
			  ],
			},
			{
			  id: 2,
			  name: 'Foodies United',
			  description:
				'A group for food lovers to share recipes and restaurant recommendations',
			  members: [
				{
				  id: 5,
				  name: 'Mike Williams',
				  gender: 'Male',
				  age: 28,
				},
				{
				  id: 8,
				  name: 'Sarah Johnson',
				  gender: 'Female',
				  age: 25,
				},
			  ],
			},
		  ],
		},
		{
		  id: 16,
		  name: 'Amy Lee',
		  gender: 'Female',
		  age: 30,
		  friends: [
			{
			  id: 15,
			  name: 'Peter Kim',
			  gender: 'Male',
			  age: 32,
			  mutual_friends: [
				{
				  id: 17,
				  name: 'David Chen',
				  gender: 'Male',
				  age: 33,
				},
				{
				  id: 19,
				  name: 'Erica Wong',
				  gender: 'Female',
				  age: 29,
				  mutual_friends: [
					{
					  id: 20,
					  name: 'Alex Lee',
					  gender: 'Male',
					  age: 31,
					},
				  ],
				},
			  ],
			  groups: [
				{
				  id: 3,
				  name: 'Travel Addicts',
				  description:
					'A group for people who love to travel and explore new places',
				  members: [
					{
					  id: 22,
					  name: 'Jackie Chen',
					  gender: 'Female',
					  age: 26,
					},
				  ],
				},
				{
				  id: 4,
				  name: 'Pet Lovers',
				  description:
					'A group for people who love their furry friends',
				  members: [
					{
					  id: 16,
					  name: 'Amy Lee',
					  gender: 'Female',
					  age: 30,
					},
					{
					  id: 25,
					  name: 'John Smith',
					  gender: 'Male',
					  age: 33,
					},
				  ],
				},
			  ],
			},
		  ],
		},
	  ],
	})
	//                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================
  // Підключаємо роутер до бек-енду
module.exports = router
                   