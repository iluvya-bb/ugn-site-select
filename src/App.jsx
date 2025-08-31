import edushopLogo from "./assets/logo.png";
import edustreamLogo from "./assets/edustream.png";

export default function App() {
	const selections = [
		{
			title: "EduStream",
			description:
				"Access our comprehensive library of online video lessons for all subjects.",
			imageUrl:
				"https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Students in a lecture hall for video courses",
			link: "https://edustream.buteekhui.com",
			logo: edustreamLogo,
		},
		{
			title: "EduShop",
			description:
				"Browse our catalog of modern, ergonomic, and durable school furniture.",
			imageUrl:
				"https://images.unsplash.com/photo-1519406596751-0a3ccc4937fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Modern school furniture in a classroom",
			link: "https://edushop.buteekhui.com",
			logo: edushopLogo,
		},
	];

	return (
		<main className="flex flex-col md:flex-row h-screen w-screen font-sans">
			{selections.map((selection, index) => (
				<a
					href={selection.link}
					key={index}
					className="group relative w-full md:w-1/2 h-1/2 md:h-full bg-white overflow-hidden border-2 border-solid border-transparent"
				>
					{/* Image Background */}
					<div
						className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
						style={{ backgroundImage: `url(${selection.imageUrl})` }}
					></div>

					{/* White Overlay for Text */}
					<div
						className="absolute inset-0 w-full h-full bg-white"
						style={{
							clipPath:
								index === 0
									? "polygon(0 50%, 100% 0, 100% 100%, 50% 100%)"
									: "polygon(0 0, 50% 0, 85% 60%, 0% 100%)",
						}}
					></div>

					<div className="relative w-full h-full flex flex-col items-center justify-center p-4">
						<img src={selection?.logo} className="mb-4 h-32 animate-float" />
						<h2
							className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text transition-all duration-500 ease-in-out group-hover:text-black group-hover:scale-110"
							style={{
								backgroundImage: `url(${selection.imageUrl})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							{selection.title}
						</h2>
						<p className="mt-4 text-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out delay-150">
							{selection.description}
						</p>
						<button className="bg-white border border-solid border-black p-4 rounded mt-4 font-extrabold">
							Visit the site
						</button>
					</div>
				</a>
			))}
		</main>
	);
}
