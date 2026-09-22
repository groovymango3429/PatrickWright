export const socialLinks = [
  { label: 'Email', value: 'patrickchasewright@gmail.com', href: 'mailto:patrickchasewright@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/patrickw3', href: 'https://www.linkedin.com/in/patrickw3/' },
  { label: 'Phone', value: '803-992-0415', href: 'tel:+18039920415' }
];

export const projects = [
  {
    title: 'NASA Supercritical Water Oxidation (SCWO) System – Undergraduate Researcher',
    role: 'Undergraduate Researcher',
    organization: 'Clemson University Creative Inquiry',
    location: 'Clemson, SC',
    dates: 'August 2026 - Present',
    summary:
      'Recommissioning the computer control system of a NASA-developed Supercritical Water Oxidation apparatus for high-temperature, high-pressure waste treatment research.',
    problem:
      'The apparatus combines legacy and modern controls, instrumentation, and safety hardware with incomplete interface documentation.',
    approach:
      'Reverse-engineering control architecture and tracing electrical/communication interfaces using P&IDs, manuals, wiring diagrams, schematics, and hardware inspections.',
    results:
      'Identified and documented LPU hardware, Allen-Bradley CompactLogix 5380 PLC hardware, analog heater controls, I/O modules, instrumentation interfaces, thermocouple safety circuits, relays, contactors, and 4-20 mA PLC interfaces while investigating legacy PC connectivity.',
    skills: ['PLCs', 'Instrumentation', 'P&IDs', 'Troubleshooting'],
    technologies: ['Allen-Bradley CompactLogix 5380', 'Leeds & Northrup LPU', 'Thermocouples']
  },
  {
    title: 'Science Olympiad Electric Vehicle',
    role: 'Designer, Builder, and Programmer',
    organization: 'Science Olympiad',
    location: 'South Carolina',
    dates: 'October 2023 - June 2024',
    summary:
      'Designed, built, programmed, and tested a miniature electric vehicle from the ground up for competition.',
    problem:
      'The vehicle needed reliable motion behavior and repeatable event performance within competition constraints.',
    approach:
      'Integrated the mechanical structure, electrical system, motors, wiring, and ESP32 control logic, then iterated through testing and tuning.',
    results: 'Won first place in a state competition.',
    skills: ['Mechanical Design', 'ESP32 Programming', 'Embedded Control', 'Testing and Tuning'],
    technologies: ['ESP32', 'Embedded Programming', 'Motor Control', 'Prototyping']
  },
  {
    title: 'Python Graphing Calculator',
    role: 'Sole Developer',
    organization: 'Personal Software Project',
    location: 'Clemson, SC',
    dates: 'Spring 2023',
    summary:
      'Built a Python and Pygame graphing calculator with interactive plotting, parsing, and coordinate tools.',
    problem:
      'The application needed to parse equations and present responsive graph interaction for plotting and value exploration.',
    approach:
      'Implemented equation input and parsing, graph plotting, dynamic point generation, coordinate transforms, zoom/pan controls, keyboard and mouse interaction, a draggable coordinate table, selected x-value evaluation, and settings/instructions views.',
    results:
      'Delivered a complete interactive calculator application with GUI-based graphing and coordinate exploration.',
    skills: ['Python', 'Pygame', 'GUI Development', 'Equation Parsing'],
    technologies: ['Python', 'Pygame']
  }
];

export const experience = [
  {
    position: 'Undergraduate Researcher',
    organization:
      'Clemson University — Spherical Flames and Supercritical Oxidation: Applications in Aerospace Propulsion and Space Explorations',
    dates: 'August 2026 - Present',
    location: 'Clemson, SC',
    description:
      'Recommissioning the NASA SCWO system control environment and documenting control, instrumentation, and communication pathways.',
    accomplishments:
      'Reverse-engineered legacy and modern architecture and traced interfaces across PLC, heater-control, instrumentation, and safety systems for restoration of monitoring, control, and data acquisition capability.',
    technicalSkills:
      'Allen-Bradley CompactLogix, PLC Interfaces, P&IDs, Technical Documentation'
  },
  {
    position: 'Intern',
    organization: 'Balfour Beatty',
    dates: 'July 2022 - August 2022',
    location: 'Charlotte, NC',
    description:
      'Supported learning in construction project delivery through direct exposure to active project workflows.',
    accomplishments:
      'Job-shadowed a senior project manager, attended site visits, and reviewed construction plans.',
    technicalSkills: 'Plan Review, Site Observation, Project Coordination'
  },
  {
    position: 'Ride Operator',
    organization: 'Carowinds',
    dates: 'January 2021 - May 2022',
    location: 'Charlotte, NC',
    description: 'Maintained safe and consistent ride operation in a high-volume guest environment.',
    accomplishments:
      'Applied safety procedures, procedural compliance, situational awareness, guest communication, teamwork, and consistent operations every shift.',
    technicalSkills: 'Safety Procedures, Procedural Compliance, Teamwork, Guest Communication'
  }
];

export const skills = [
  {
    category: 'Engineering and CAD',
    items: ['SolidWorks', 'Fusion 360', 'Autodesk Inventor', 'Autodesk Revit', 'Mechanical Design', 'Prototyping']
  },
  {
    category: 'Programming and Computation',
    items: ['Python', 'Pygame', 'MATLAB', 'Lua', 'G-code', 'ESP32 Programming']
  },
  {
    category: 'Controls and Research',
    items: [
      'PLCs',
      'Allen-Bradley CompactLogix Systems',
      'Instrumentation',
      'P&IDs',
      'Experimental Methods',
      'Technical Documentation',
      'Troubleshooting'
    ]
  }
];

// Add future image entries in assets/images and use this format:
// { category, src, alt, caption, title, featured }
export const galleryItems = [
  {
    category: 'Research',
    src: './assets/images/scwo-whole-machine.png',
    alt: 'Complete Supercritical Water Oxidation research apparatus',
    title: 'SCWO Apparatus',
    caption: 'NASA-developed Supercritical Water Oxidation research apparatus.',
    featured: true
  },
  {
    category: 'Controls',
    src: './assets/images/controls-equipment.png',
    alt: 'SCWO control equipment',
    title: 'SCWO Control Equipment',
    caption: 'Control hardware inspected during system recommissioning.',
    featured: true
  },
  {
    category: 'Controls',
    src: './assets/images/plc.png',
    alt: 'Allen-Bradley PLC',
    title: 'CompactLogix PLC',
    caption: 'Allen-Bradley CompactLogix PLC used in the SCWO control system.',
    featured: true
  },
  {
    category: 'Projects',
    src: './assets/images/electric-vehicle-picture.png',
    alt: 'Science Olympiad electric vehicle',
    title: 'Science Olympiad Electric Vehicle',
    caption: 'ESP32-controlled electric vehicle designed and built for competition.',
    featured: true
  },
  {
    category: 'CAD',
    src: './assets/images/gallery-cad.png',
    alt: 'Mechanical CAD design',
    title: 'CAD Design',
    caption: 'Mechanical design and modeling work.',
    featured: false
  }
];

export const researchImages = galleryItems.filter(
  (item) => item.category === 'Research'
);

export const researchImages = galleryItems.filter((item) => item.category === 'Research');
