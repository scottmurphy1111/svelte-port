export interface SiteData {
	nav: Nav[];
	home: Home;
	skills: Skill[];
	experience: Experience[];
	about: About[];
	testimonials: Testimonial[];
	contact: Contact;
}

export interface About {
	heading: string;
	icon: string;
	description: string;
}

export interface iAboutItem extends About {
	revealDescription: string;
	open: boolean;
}

export interface Contact {
	socials: Social[];
}

export interface Social {
	site: string;
	icon: string;
	link: string;
}

export interface Home {
	name: string;
	position: string;
	subHeadingA: string;
	subHeadingB: string;
}

export interface Nav {
	value: string;
}

export interface Experience {
	company: string;
	logo: string;
	position: string;
	date: string;
	cityState: string;
	tasks: string[];
}

export interface Skill {
	icon: string;
	skillsArray: string[];
}

export interface Testimonial {
	copy: string;
	reporter: string;
}
