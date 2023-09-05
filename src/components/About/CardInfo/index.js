export const textCardInfo = [
	{
		hasTitle: true,
		title: "About Me",
		text: "Hi again! Welcome to my personal portfolio, I hope you enjoy your stay :) I'm Eran, a 22 year old software engineer from Los Angeles, California.",
		footnote: "Swipe the cards to find out a bit more about me!",
	},
	{
		hasTitle: true,
		title: <p>Life Story &trade;</p>,
		text: "I was born on Halloween night in the San Gabriel Valley of California to two Cantonese parents who did not know how to spell the name 'Aaron'. Growing up I loved music, playing the piano from the age of 3 and then the trumpet later(fun fact I almost became a music major in college). ",
		footnote: "There's more, I know you're just craving the deets.",
	},
	{
		hasTitle: false,
		text: "However, more than anything, I loved computers and technology! From the age of 12 I spent most of my free time playing on my computer, which was actually built by me after I convinced my father to let me use some of his retired office PC parts. This naive love of tech eventually tricked me into taking my first programming class in high school, and I've loved coding ever since!",
	},
	{
		hasTitle: true,
		title: "Things I Do",
		text: "Since I'm such an interesting person I've found lots of ways to waste my money over the years. I stated earlier that I grew up playing video games and although that has tapered off in recent years due to school and work I still enjoy playing games and keeping up with the latest consumer pc hardware scene.",
		footnote: "I have lots of hobbies okay..",
	},
	{
		hasTitle: false,
		text: "Another huge time and money sink I've invested into has been my obsession with custom mechanical keyboards. You can take a look at some of my builds in the image cards on the right. There's just something about spec-ing a keyboard and experimenting with different components that is just so fun, and everybody knows that if you're a PC gamer you've got to have a sick keyboard in your desk setup!",
	},
	{
		hasTitle: false,
		text: "And as if, blowing cash on keyboards wasn't enough I'm also a VERY amateur photographer! Those of you who know how expensive camera equipment can get will understand why this is bad. This was something I began in college, as a way to get some fresh air photographing the streets of San Francisco, as well as a way to be creative again! If you like the images you see in the cards, you can check out some more of my work on Instagram @eran.photo !",
	},
];

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
};

export const imageCardInfo = [
	{
		images: [
			{
				src: googleDriveUrl(photos["graduationPhoto"]),
				width: 1080,
				height: 1920,
			},
			{
				src: googleDriveUrl(photos["sunsetPortrait"]),
				width: 700,
				height: 700,
			},
			{
				src: googleDriveUrl(photos["babyPhoto"]),
				width: 700,
				height: 700,
			},
		],
		caption: "",
	},
	{
		images: [
			{
				src: googleDriveUrl(photos["keyboard2"]),
				width: 2941,
				height: 4000,
			},
			{
				src: googleDriveUrl(photos["keyboard1"]),
				width: 6000,
				height: 4000,
			},

			{
				src: googleDriveUrl(photos["keyboard4"]),
				width: 6000,
				height: 4000,
			},
		],
		caption: "",
	},
	{
		images: [
			{
				src: googleDriveUrl(photos["cableCar"]),
				width: 720,
				height: 1280,
			},
			{
				src: googleDriveUrl(photos["dogInPark"]),
				width: 5176,
				height: 4000,
			},
			{
				src: googleDriveUrl(photos["nySunset"]),
				width: 3800,
				height: 4800,
			},
			{
				src: googleDriveUrl(photos["kyoto"]),
				width: 3917,
				height: 5484,
			},
			{
				src: googleDriveUrl(photos["osakaSkyline"]),
				width: 5176,
				height: 4000,
			},
		],
		caption: "",
	},
];
