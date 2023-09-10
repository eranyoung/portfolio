const googleDriveUrl = (id) => {
	return "https://drive.google.com/uc?id=" + id;
};

const photos = {
	dogInPark: "1yaZMtLwlvHT-DUvDpuN2q3KcVzcP5uHN",
	cableCar: "1rdeJe9EUq6Qhsxm0yPAySbIw0ByT7BXO",
	graduationPhoto: "1Bxo0XEV7xHqiGqvN9Iiwe3jhQzgp3AJy",
	osakaSkyline: "1-Q__VaiNc7dDEVab4S6C-klq1MOuqb-J",
	kyoto: "1CPkog0p8QLA92IoNh4SzWfx-3D7UKJuP",
	nySunset: "1iiMHCwoPUiUE_ei8JjtJKgPAm0Rk_VNX",
	babyPhoto: "1_ijm36TOjc0mo846YkmcrJuvmynIqsGQ",
	sunsetPortrait: "1lq7ViDk657bidvlqS79EsWorlHA-Cgo8",
	keyboard1: "1lTN2-Fcftv_gwG3Mi9dBDhmO3rwUjUfV",
	keyboard2: "11RaM5fD0AY67J__yKre7A5wyr6EhEAWC",
	keyboard3: "15PoGl1Y5A8RCaH_B_20w_OrHdKHFCpZ4",
	keyboard4: "1jBtTRwlvD1-1SJ6z707d_qWoyVf7Zspf",
	nuclearVis: "/NuclearVis.jpg",
	bitcoinNoobs: "/bitcoinnoobs.jpg",
};

export const events = [
	{
		title: "SFMTA",
		cardTitle: "SF Municipal Transportation Agency",
		dates: "Aug 2020 - May 2021",
		url: "http://www.history.com",
		cardSubtitle: "AV Policy Intern",
		cardDetailedText: (
			<ul style={{ textAlign: "left" }}>
				<li>
					Conducted AV industry research resulting in short white papers or
					memos
				</li>
				<li>Developed power points for AV team presentations</li>
				<li>
					Supported AV working groups, developed agendas, scheduled
					multi-departmental meetings and workshops, workshop support, and
					meeting analysis
				</li>
				<li>Data input and analysis of publicly available AV data</li>
			</ul>
		),
		index: 0,
	},
	{
		title: "NuclearVis",
		cardTitle: "NuclearVis",
		url: "http://www.history.com",
		cardSubtitle: "Data Visualization Project",
		dates: "June 2022",
		cardDetailedText: (
			<ul style={{ textAlign: "left" }}>
				<li>
					Interactive data visualization project that provides users with a
					historical and quantitative perspective on the history of nuclear
					weapons
				</li>
				<li>
					Written in vanilla Javascript, CSS, HTML and uses the D3 charting
					library and Tailwind CSS.
				</li>
			</ul>
		),
		media: {
			type: "IMAGE",
			source: {
				url: photos["nuclearVis"],
			},
		},
		index: 1,
	},
	{
		title: "USFCA",
		cardTitle: "University of San Francisco",
		url: "http://www.history.com",
		dates: "Jan 2022 - May 2022",
		cardSubtitle: "Teaching Assistant",
		cardDetailedText: (
			<ul style={{ textAlign: "left" }}>
				<li>
					Assisted professor in the scheduling, grading, and teaching of an
					upper division Operating Systems course
				</li>
				<li>
					Organized and held 2 office hours sessions/week to assist students
					with course material and assignments, as well as additional sessions
					as needed
				</li>
				<li>
					Taught concepts such as the fundamentals of operating system design
					and implementation, system calls, inter-process communication, virtual
					memory, networking and file systems.
				</li>
			</ul>
		),
		index: 2,
	},
	{
		title: "BitcoinNoobs",
		cardTitle: "BitcoinNoobs",
		url: "http://bitcoinnoobs.com",
		cardSubtitle: "Senior Capstone Project",
		dates: "Jan 2022 - May 2022",
		cardDetailedText: (
			<ul style={{ textAlign: "left" }}>
				<li>
					Worked closely with the owner in order to develop a website that
					catered to new or potential crypto investors, providing them with
					articles about various cryptocurrencies and individual crypto pages
					that provides live pricing data and information about the currency.
				</li>
				<li>
					Written in Vue and Nuxt.js in order to take advantage of server side
					rendering in order to utilize the many dynamically generated
					cryptocurrency pages for SEO
				</li>
				<li>
					Fetched pricing data and coin metadata from the CoinGecko API and
					stored data in Amazon S3 bucket for retrieval on the front-end
				</li>
				<li>
					Utilized ChartJS to build custom live updating charts and Tailwind CSS
					to make responsive layouts that were desktop and mobile friendly
				</li>
			</ul>
		),
		media: {
			type: "IMAGE",
			source: {
				url: photos["bitcoinNoobs"],
			},
		},
		index: 3,
	},
	{
		title: "Vianai",
		cardTitle: "Vianai Systems",
		url: "https://www.vian.ai/",
		cardSubtitle: "Software Engineer",
		dates: "Sept 2022 - Aug 2023",
		cardDetailedText: (
			<ul style={{ textAlign: "left" }}>
				<li>
					Developed the front end for a client facing Machine Learning web
					platform that facilitated the deployment, monitoring and analysis of
					machine learning models
				</li>
				<li>
					Worked closely with a small team of engineers and designers to
					efficiently build a product that met evolving stakeholder needs using
					an Agile methodology
				</li>
				<li>
					Utilized libraries such as ChakraUI and Apache ECharts in order to
					develop visually appealing, reactive and intuitive data visualizations
					and user interfaces
				</li>
				<li>
					Optimized over 50 app components to utilize the capabilities of
					React.js and ReactQuery in order to optimize existing data fetching
					and memory usage by a factor of 10.
				</li>
				<li>
					Conducted thorough testing of developed software as well as wrote over
					30 unit tests for API Endpoints using pytest
				</li>
			</ul>
		),
		index: 4,
	},
];
