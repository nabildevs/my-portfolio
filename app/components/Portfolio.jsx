import { useState } from 'react';
import { projectsData, experienceData } from '@/assets/assets';
import {
	Building2,
	Calendar,
	CheckCircle,
	CheckCircle2,
	CircleSmall,
	Code,
	Eye,
	FileText,
	Folder,
	MapPin,
	Settings,
	Star,
	X,
} from 'lucide-react';

const Portfolio = () => {
	const [activeTab, setActiveTab] = useState('projects');
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openProjectModal = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedProject(null);
		setIsModalOpen(false);
	};

	return (
		<div id="portfolio" className="w-full px-[12%] py-16 scroll-mt-16">
			<h4 className="text-center text-gray=500 mb-1 text-lg">My Work</h4>
			<h2 className="text-center text-5xl mb-16">Portfolio</h2>

			<div className="flex justify-center mb-16">
				<div className="bg-gray-100 p-1 rounded-full">
					<button
						onClick={() => setActiveTab('projects')}
						className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
							activeTab === 'projects'
								? 'bg-white text-gray-900 shadow-sm'
								: 'text-gray-600 hover:text-gray-900'
						}`}
					>
						Projects
					</button>
					<button
						onClick={() => setActiveTab('experience')}
						className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
							activeTab === 'experience'
								? 'bg-white text-gray-900 shadow-sm'
								: 'text-gray-600 hover:text-gray-900'
						}`}
					>
						Experience
					</button>
				</div>
			</div>

			{/* Projects Tab */}
			{activeTab === 'projects' && (
				<div className="max-w-4xl mx-auto space-y-6">
					{projectsData.map((project) => (
						<div
							key={project.id}
							className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-800 transition duration-300"
						>
							<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{project.title}
									</h3>
									<div className="flex flex-wrap gap-2 mb-2">
										{project.technologies.map(
											(tech, index) => (
												<span
													key={index}
													className="font-sc_pro px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
												>
													{tech}
												</span>
											)
										)}
									</div>
								</div>
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2 text-sm text-gray-500">
										<Calendar className="w-4 h-4" />
										<span>
											{project.startDate} -{' '}
											{project.endDate}
										</span>
									</div>
									<button
										onClick={() =>
											openProjectModal(project)
										}
										className="text-gray-500 hover:text-amber-600 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
									>
										<Eye className="w-4 h-4" />
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Experience Tab */}
			{activeTab === 'experience' && (
				<div className="max-w-3xl mx-auto">
					<div className="relative">
						{/* Timeline Line */}
						<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

						{experienceData.map((exp, index) => (
							<div
								key={exp.id}
								className="relative pl-12 pb-12 last:pb-0"
							>
								{/* Timeline Dot */}
								<div className="absolute left-2.5 w-3 h-3 bg-amber-700 rounded-full border-2 border-white shadow"></div>

								<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-800 hover:shadow-lg transition-shadow duration-300">
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										{exp.role}
									</h3>
									<div className="flex flex-col sm:gap-y-1 lg:flex-row lg:items-center gap-x-5 mb-5">
										<div className="flex items-center gap-2 text-sm">
											<Building2 className="w-4 h-4" />
											<span>{exp.company}</span>
										</div>
										<div className="flex items-center gap-2 text-sm">
											<MapPin className="w-4 h-4" />
											<span>{exp.location}</span>
										</div>
										<div className="flex items-center gap-2 text-sm">
											<Calendar className="w-4 h-4" />
											<span>
												{exp.startDate} - {exp.endDate}
											</span>
										</div>
									</div>

									<p className="text-gray-600 mb-5">
										{exp.description}
									</p>

									<div className="space-y-2">
										<h4 className="font-medium text-gray-900">
											Key Achievements:
										</h4>
										<ul className="space-y-1">
											{exp.achievements.map(
												(achievement, achIndex) => (
													<li
														key={achIndex}
														className="text-gray-600 text-sm flex items-start gap-2"
													>
														<span className="w-1.5 h-1.5 bg-amber-700 rounded-full mt-2 flex-shrink-0"></span>
														{achievement}
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Project Detail Modal */}
			{isModalOpen && selectedProject && (
				<div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center p-4">
					<div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
						{/* Header */}
						<div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between">
							<h3 className="text-2xl font-bold text-gray-900">
								{selectedProject.title}
							</h3>
							<button
								onClick={closeModal}
								className="p-2 hover:bg-gray-50 rounded-xl transition-all duration-200 hover:scale-105"
							>
								<X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
							</button>
						</div>

						{/* Content */}
						<div className="overflow-y-auto scrollbar-hide max-h-[calc(90vh-80px)]">
							<div className="p-6">
								{/* Project Meta Information */}
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<div className="bg-gray-50 rounded-xl p-4">
										<div className="flex items-center gap-2 mb-2">
											<Folder className="w-4 h-4 text-gray-600" />
											<span className="text-sm font-medium text-gray-500">
												Category
											</span>
										</div>
										<p className="text-gray-800">
											{selectedProject.category}
										</p>
									</div>

									<div className="bg-gray-50 rounded-xl p-4">
										<div className="flex items-center gap-2 mb-2">
											<Calendar className="w-4 h-4 text-gray-600" />
											<span className="text-sm font-medium text-gray-500">
												Timeline
											</span>
										</div>
										<p className="text-gray-800">
											{selectedProject.startDate} -{' '}
											{selectedProject.endDate}
										</p>
									</div>

									<div className="bg-gray-50 rounded-xl p-4">
										<div className="flex items-center gap-2 mb-2">
											<Code className="w-4 h-4 text-gray-600" />
											<span className="text-sm font-medium text-gray-500">
												Tech Stack
											</span>
										</div>
										<div className="flex flex-wrap gap-1 mt-2">
											{selectedProject.technologies.map(
												(tech, index) => (
													<span
														key={index}
														className="font-sc_pro px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-lg"
													>
														{tech}
													</span>
												)
											)}
										</div>
									</div>
								</div>

								{/* Description */}
								<div className="mb-8">
									<div className="flex items-center gap-2">
										<FileText className="w-5 h-5 text-gray-600" />
										<h4 className="font-bold text-gray-900">
											Project Overview
										</h4>
									</div>
									<div className="bg-gray-50 rounded-xl p-4">
										<p className="text-gray-700 leading-relaxed">
											{selectedProject.description}
										</p>
									</div>
								</div>

								{/* Key Features */}
								<div>
									<div className="flex items-center gap-2 mb-4">
										<Star className="w-5 h-5 text-gray-600" />
										<h4 className="font-bold text-gray-900">
											Key Features & Accomplishments
										</h4>
									</div>
									<ul className="space-y-1">
										{selectedProject.keypoints.map(
											(point, index) => (
												<li
													key={index}
													className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
												>
													<span className="w-1.5 h-1.5 bg-amber-700 rounded-full flex-shrink-0"></span>
													{point}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
