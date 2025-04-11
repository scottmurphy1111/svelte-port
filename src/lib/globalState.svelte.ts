export const globalState = $state<{
	introAnimationStart: boolean;
	introAnimationComplete: boolean;
	currentNav: 'home' | 'skills' | 'experience' | 'about' | 'testimonials' | 'contact';
	showMobileNav: boolean;
	skillsTop: number;
	skillsBottom: number;
	experienceTop: number;
	experienceBottom: number;
	aboutTop: number;
	aboutBottom: number;
	testimonialsTop: number;
	testimonialsBottom: number;
	contactTop: number;
	contactBottom: number;
}>({
	introAnimationStart: false,
	introAnimationComplete: false,
	currentNav: 'home',
	showMobileNav: false,
	skillsTop: 0,
	skillsBottom: 0,
	experienceTop: 0,
	experienceBottom: 0,
	aboutTop: 0,
	aboutBottom: 0,
	testimonialsTop: 0,
	testimonialsBottom: 0,
	contactTop: 0,
	contactBottom: 0
});
