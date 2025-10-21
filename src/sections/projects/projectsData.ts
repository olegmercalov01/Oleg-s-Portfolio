export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo?: string;
  stars?: number;
  forks?: number;
  language?: string;
  lastUpdated?: string;
  isFromGitHub?: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Evengreener',
    description: 'Engineered a scalable, eco-friendly e-commerce platform using PHP, Node.js, and Core.js, which slashed server latency by 20ms and enhanced cross-browser functionality, leading to increased customer engagement.',
    image: '/public/assets/1.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PHP', 'Node.js','Core.js', 'AWS'],
    github: 'https://github.com/olegmercalov01',
    demo: 'https://github.com/olegmercalov01',
  },
  {
    id: '2',
    title: 'Squaresigns',
    description: 'Developed a U.S.-based custom signage platform using React, Next.js, Tailwind CSS, and Node.js, integrating HubSpot, React Router, and Awin to accelerate page rendering by 40% and increase customer conversion through seamless user experience and automation. ',
    image: '/public/assets/2.png',
    techStack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS','Bootstrap','integrating HubSpot', 'React Router', 'Awin', 'Laravel', 'PHP', 'AWS'],
    github: 'https://github.com/olegmercalov01',
    demo: 'https://www.squaresigns.com/',
  },
  {
    id: '3',
    title: 'Mosaic',
    description: 'Mosaic is a financial planning and analysis platform that automates forecasting, budgeting, and reporting for collaborative, data-driven decision-making. Built with React, Next.js, Tailwind CSS, and Node.js, and integrated with HubSpot, it enhanced dashboard load times by 45% and significantly improved user engagement.',
    image: '/public/assets/1.png',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'HubSpot', 'python'],
    github: 'https://github.com/olegmercalov01',
    demo: 'https://www.mosaic.tech/',
  },
  {
    id: '4',
    title: 'volotea',
    description: 'Developed a large-scale airline booking system for Volotea using Angular.js, Zone.js, core-js,Swiper, jQuery, and AWS, with Hotjar analytics integration that increased booking transaction speed by 50% and enhanced scalability under peak traffic conditions.',
    image: '/public/assets/4.png',
    techStack: ['Angular.js', 'Zone.js', 'core-js', 'BootStrap', 'Swiper', 'AWS',  'Amazon CloudFont', 'python', 'Django'],
    github: 'https://github.com/olegmercalov01',
    demo: 'https://www.volotea.com/en/',
  },
  {
    id: '5  ',
    title: 'renardbakery',
    description: 'Built a multilingual eCommerce platform for Renard Bakery using Laravel, PHP, Node.js, PostgreSQL, and Python, which boosted order processing efficiency by 60% and optimized realtime data handling for high-volume transactions.',
    image: '/public/assets/5.png',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Laravel', 'PHP', 'Node.js', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/olegmercalov01',
    demo: 'https://renardbakery.com/',
  },
  {
    id: '6',
    title: 'tranzzo',
    description: 'Developed a global fintech platform using React, Next.js, Tailwind CSS, and Node.js, delivering responsive, high-performance interfaces and secure, scalable APIs that powered real-time payment orchestration and seamless user experiences across devices.',
    image: '/public/assets/6.png',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Node.js ', 'Hotjar', 'python', 'Google Cloud Trace'],
    github: 'https://github.com/olegmercalov01',
    demo: 'https://tranzzo.com/',
  },
]; 