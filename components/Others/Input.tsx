export function InputComponent({ color }: { color: string }) {
	return (
		<section className="flex items-center justify-center w-full">
			<div className="border shadow-md rounded-lg px-8 py-6 max-w-md">
				<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
					Welcome Back!
				</h1>
				<div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Email Address
						</label>
						<input
							className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="your@email.com"
							style={{ border: `2px solid ${color}5F` }}
							disabled
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Password
						</label>
						<input
							className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none "
							placeholder="Enter your password"
							style={{ border: `2px solid ${color}5F` }}
							disabled
						/>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a className="hover:cursor-pointer text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Forgot Password?
						</a>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<input
								type="checkbox"
								id="remember"
								className="h-4 w-4 rounded border-gray-300 text-indigo-200 focus:ring-indigo-500 focus:outline-none"
							/>
							<label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
								Remember me
							</label>
						</div>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a className="hover:cursor-pointer text-xs text-indigo-500 hover:text-indigo-700 ">
							Create Account
						</a>
					</div>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium"
						style={{
							backgroundColor: `${color}5D`,
							border: `2px solid ${color}`,
						}}
					>
						Login
					</button>
				</div>
			</div>
		</section>
	);
}
