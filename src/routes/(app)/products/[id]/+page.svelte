<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="">
	<div class="flex w-full py-8">
		<div class="m-auto w-full space-x-4 space-y-5" style="max-width: 1024px;">
			<div class="space-y-6">
				<div class="text-2xl font-bold">Product name</div>

				<div class="w-full flex space-x-8">
					<div class="bg-gray-500 h-96 w-full rounded-lg max-w-2xl" />

					<div class="space-y-6">
						<div class="">
							<span>Rating</span>
							<div class="flex">
								<span class="material-symbols-rounded">star</span>
								<span class="material-symbols-rounded">star</span>
								<span class="material-symbols-rounded">star</span>
								<span class="material-symbols-rounded">star</span>
								<span class="material-symbols-rounded">star</span>
							</div>
						</div>

						<div class="">
							<span>Review</span>
							<div class="">
								<textarea
									class="bg-white border rounded-lg w-full p-2 text-sm"
									name=""
									id=""
									cols="30"
									rows="6"
                                    placeholder="Write your review here..."
								/>
							</div>
						</div>

						<button class="bg-green-500 text-white px-10 py-2 rounded-lg"> Submit </button>
					</div>
				</div>
			</div>

			<div class="max-w-2xl space-y-10">
				<div class="text-2xl">
					<span>Ratings and reviews</span>
				</div>

				<div class="">
					<div class="flex items-center space-x-10">
						<div class="flex flex-col items-center justify-center">
							<div class="text-5xl">4.5</div>
							<div class="flex items-center">
								<span class="material-symbols-rounded !text-lg">star</span>
								<span class="material-symbols-rounded !text-lg">star</span>
								<span class="material-symbols-rounded !text-lg">star</span>
								<span class="material-symbols-rounded !text-lg">star</span>
								<span class="material-symbols-rounded !text-lg">star</span>
							</div>
							<div class="text-sm text-gray-500">3 reviews</div>
						</div>

						<div class="space-y-0.5 flex-1">
							<div class="text-xs flex items-center space-x-5">
								<div class="">5</div>
								<div class="w-full bg-gray-200 h-2.5 rounded-lg">
									<div class="w-8/12 h-full bg-yellow-500 rounded-lg" />
								</div>
							</div>
							<div class="text-xs flex items-center space-x-5">
								<div class="">4</div>
								<div class="w-full bg-gray-200 h-2.5 rounded-lg">
									<div class="w-12/12 h-full bg-yellow-500 rounded-lg" />
								</div>
							</div>
							<div class="text-xs flex items-center space-x-5">
								<div class="">3</div>
								<div class="w-full bg-gray-200 h-2.5 rounded-lg">
									<div class="w-5/12 h-full bg-yellow-500 rounded-lg" />
								</div>
							</div>
							<div class="text-xs flex items-center space-x-5">
								<div class="">2</div>
								<div class="w-full bg-gray-200 h-2.5 rounded-lg">
									<div class="w-10/12 h-full bg-yellow-500 rounded-lg" />
								</div>
							</div>
							<div class="text-xs flex items-center space-x-5">
								<div class="">1</div>
								<div class="w-full bg-gray-200 h-2.5 rounded-lg">
									<div class="w-4/12 h-full bg-yellow-500 rounded-lg" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="flex-1">
					<div class="border rounded-md p-4 space-y-4">
						<div class="flex items-center justify-between rounded-md">
							<div class="flex items-center space-x-2">
								<div class="bg-gray-400 h-6 w-6 rounded-full" />
								<div class="">Username</div>
							</div>
						</div>

						<div class="space-y-2">
							<div class="flex items-center space-x-4">
								<div class="flex">
									<span class="material-symbols-rounded !text-base text-yellow-500">star</span>
									<span class="material-symbols-rounded !text-base text-yellow-500">star</span>
									<span class="material-symbols-rounded !text-base text-yellow-500">star</span>
									<span class="material-symbols-rounded !text-base">star</span>
									<span class="material-symbols-rounded !text-base">star</span>
								</div>

								<span class="text-gray-500 text-sm">16 March 2023</span>
							</div>

							<div class="text-sm text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, neque totam enim
								temporibus repellendus nisi iure nihil, quos libero saepe ratione. Amet repellendus
								repudiandae asperiores quos corporis voluptate assumenda aliquid?
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
