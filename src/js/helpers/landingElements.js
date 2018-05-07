export default function landingElements() {
  /* Query here the elements with landing or fade-out mixin included */
  const aboutTextWrapper = document.querySelector('.about__text-wrapper');
  const aboutMessage = document.querySelector('.about__message');
  const aboutTechStack = document.querySelector('.about__tech-stack');
  const contactHeader = document.querySelector('.contact__header');
  const skillsTop = document.querySelector('.skills__skills--top');
  const skillsBottom = document.querySelector('.skills__skills--bottom');

  /* include which type of reset from base/_resets.scss */
  return [
    { dom: aboutTextWrapper, reset: 'reset-fade' },
    { dom: aboutMessage, reset: 'reset-fade' },
    { dom: aboutTechStack, reset: 'reset-fade' },
    { dom: contactHeader, reset: 'reset-landing' },
    { dom: skillsTop, reset: 'reset-landing' },
    { dom: skillsBottom, reset: 'reset-landing' },
  ];
}
