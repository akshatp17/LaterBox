const Footer = () => {
	return (
		<footer className="bg-black text-white py-8">
			<div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* LaterBox - Main Section */}
					<div className="md:col-span-">
						<h3 className="text-xl font-semibold mb-4">LaterBox</h3>
						<p className="text-gray-400 text-sm">
							Simple task management for your productivity
						</p>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="text-lg font-medium mb-4">Company</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
							<li><a href="/tnc" className="hover:text-white transition-colors">Terms & Conditions</a></li>
							<li><a href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a></li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h4 className="text-lg font-medium mb-4">Social Media</h4>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Copyright */}
				<div className="border-t border-gray-800 mt-8 pt-6 text-center">
					<p className="text-sm text-gray-400">
						© 2025 LaterBox. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
