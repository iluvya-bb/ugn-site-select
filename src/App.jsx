export default function App() {
	const selections = [
		{
			title: "EduStream",
			description:
				"Access our comprehensive library of online video lessons for all subjects.",
			imageUrl:
				"https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Students in a lecture hall for video courses",
			bgColor: "bg-blue-700", // Solid blue background
			link: "https://edustream.buteekhui.com",
		},
		{
			title: "EduShop",
			description:
				"Browse our catalog of modern, ergonomic, and durable school furniture.",
			imageUrl:
				"https://images.unsplash.com/photo-1519406596751-0a3ccc4937fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Modern school furniture in a classroom",
			bgColor: "bg-orange-700", // Solid orange background
			link: "https://edushop.buteekhui.com",
		},
	];

	const handleSelection = (title) => {
		console.log(`Navigating to: ${title}`);
	};

	return (
		<main className="flex flex-col md:flex-row h-screen w-screen font-sans">
			{selections.map((selection, index) => (
				<a
					href={selection.link}
					key={index}
					className={`group relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${selection.bgColor} ${index === 0
							? "border-b-2 md:border-b-0 md:border-r-2 border-gray-800"
							: "" // Darker border for better contrast
						}`}
					onClick={() => handleSelection(selection.title)}
				>
					<div
						className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-40 group-hover:scale-110"
						style={{ backgroundImage: `url(${selection.imageUrl})` }}
						aria-hidden="true"
					>
					</div>
					<div className="absolute inset-0 w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					</div>
					<div className="relative text-center p-4 transition-transform duration-500 ease-out transform group-hover:scale-105">
						<h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider">
							{selection.title}
						</h2>
						<p className="relative mt-3 text-white/90 text-sm sm:text-base font-light max-w-sm mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-150">
							{selection.description}
						</p>
					</div>
				</a>
			))}
		</main>
	);
}
