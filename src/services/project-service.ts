import type { Project } from '@/models/project'

export async function getProject(): Promise<Project> {
	return {
		id: 1,
		name: 'Mastercraft Bamboo Monitor Riser',
		description:
			'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
		detail:
			'The Mastercraft Mamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\n\nFeaturing artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.',
		bookmarked: false,
		currentAmount: 89914,
		targetAmount: 100000,
		numOfBuckers: 5007,
		daysLeft: 56,
		rewards: [
			{
				id: 1,
				name: 'Bamboo Stand',
				detail:
					"You get an argonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
				stock: 101,
				pledge: 25,
			},
			{
				id: 2,
				name: 'Black Edition Stand',
				detail:
					"You get a Black Special Edition computer stand and personal thank you. You'll be added to our Backer member list. Shipping is included.",
				stock: 64,
				pledge: 75,
			},
			{
				id: 3,
				name: 'Mahogany Special Edition',
				detail:
					"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included",
				stock: 0,
				pledge: 200,
			},
		],
	}
}
