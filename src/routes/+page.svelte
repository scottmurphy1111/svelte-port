<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import BgImage from '$lib/components/BgImage.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
	import { globalState } from '$lib/globalState.svelte';
	import About from './(about)/About.svelte';
	import Contact from './(contact)/Contact.svelte';
	import Home from './(home)/Home.svelte';
	import Skills from './(skills)/Skills.svelte';
	import Testimonials from './(testimonials)/Testimonials.svelte';
	import Experience from './(experience)/Experience.svelte';

	let { data } = $props();

	const { nav, home, skills, experience, about, testimonials, contact } = data;

	// $inspect('pageScrollY', globalState.pageScrollY);
	const resetPage = () => {
		window.scrollTo(0, 0);
	};
	afterNavigate(() => {
		resetPage();
	});

	const handleSections = () => {
		globalState.skillsTop = Number(document.getElementById('skills')?.getBoundingClientRect().top);
		globalState.skillsBottom = Number(
			document.getElementById('skills')?.getBoundingClientRect().bottom
		);
		globalState.experienceTop = Number(
			document.getElementById('experience')?.getBoundingClientRect().top
		);
		globalState.experienceBottom = Number(
			document.getElementById('experience')?.getBoundingClientRect().bottom
		);
		globalState.aboutTop = Number(document.getElementById('about')?.getBoundingClientRect().top);
		globalState.aboutBottom = Number(
			document.getElementById('about')?.getBoundingClientRect().bottom
		);
		globalState.testimonialsTop = Number(
			document.getElementById('testimonials')?.getBoundingClientRect().top
		);
		globalState.testimonialsBottom = Number(
			document.getElementById('testimonials')?.getBoundingClientRect().bottom
		);
		globalState.contactTop = Number(
			document.getElementById('contact')?.getBoundingClientRect().top
		);
		globalState.contactBottom = Number(
			document.getElementById('contact')?.getBoundingClientRect().bottom
		);

		if (globalState.skillsTop <= 400 && globalState.skillsBottom > 400) {
			globalState.currentNav = 'skills';
		} else if (globalState.experienceTop <= 400 && globalState.experienceBottom > 400) {
			globalState.currentNav = 'experience';
		} else if (globalState.aboutTop <= 400 && globalState.aboutBottom > 400) {
			globalState.currentNav = 'about';
		} else if (globalState.testimonialsTop <= 400 && globalState.testimonialsBottom > 400) {
			globalState.currentNav = 'testimonials';
		} else if (globalState.contactTop <= 400 && globalState.contactBottom > 400) {
			globalState.currentNav = 'contact';
		} else {
			globalState.currentNav = 'home';
		}
	};

	$effect(() => {
		globalState.introAnimationStart = true;
		setTimeout(() => {
			globalState.introAnimationComplete = true;
		}, 2750);
	});

	$inspect('globalState', globalState);
</script>

<svelte:window onresize={() => handleSections()} onscroll={() => handleSections()} />

<Nav {nav} />
<Home {home} />
<Skills {skills} />
<Experience {experience} />
<About {about} />
<Testimonials {testimonials} />
<Contact {contact} />
<BgImage />
