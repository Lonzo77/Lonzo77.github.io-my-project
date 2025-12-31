// Theme toggle (stores preference in localStorage)
(function(){
	const btn = document.getElementById('theme-toggle');
	const stored = localStorage.getItem('theme');
	if(stored === 'dark') document.documentElement.setAttribute('data-theme','dark');
	if(!btn) return;
	btn.addEventListener('click', ()=>{
		const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
		if(isDark){
			document.documentElement.removeAttribute('data-theme');
			localStorage.setItem('theme','light');
			btn.setAttribute('aria-pressed','false');
		} else {
			document.documentElement.setAttribute('data-theme','dark');
			localStorage.setItem('theme','dark');
			btn.setAttribute('aria-pressed','true');
		}
	});
})();

// Typing effect for skills in the hero
(function(){
	const el = document.getElementById('typed');
	if(!el) return;
	const words = [
		'Software development',
		'Web technologies',
		'Problem solving',
		'Team collaboration',
		'Continuous learning'
	];
	let w = 0, i = 0, forward = true;

	function step(){
		const word = words[w];
		el.textContent = word.slice(0,i);
		if(forward){
			if(i < word.length) i++;
			else { forward = false; setTimeout(step,700); return }
		} else {
			if(i > 0) i--;
			else { forward = true; w = (w+1) % words.length }
		}
		setTimeout(step, forward ? 80 : 40);
	}
	step();
})();

// Smooth scroll for internal links
(function(){
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', (e)=>{
			const target = document.querySelector(a.getAttribute('href'));
			if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
		});
	});
})();

