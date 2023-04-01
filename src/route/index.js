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
// Підключаємо роутер до бек-енду
module.exports = router
                   