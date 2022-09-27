export interface Project {
	id: number
	name: string
	description: string
	detail: string
	bookmarked: boolean
	targetAmount: number
	currentAmount: number
	numOfBuckers: number
	daysLeft: number
	rewards: ProjectReward[]
}

export interface ProjectReward {
	id: number
	name: string
	detail: string
	stock: number
	pledge: number
}
