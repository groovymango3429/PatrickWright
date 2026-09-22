export const socialLinks = [
  { label: 'Email', value: 'patrickchasewright@gmail.com', href: 'mailto:patrickchasewright@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/patrickw3', href: 'https://www.linkedin.com/in/patrickw3/' },
  { label: 'Phone', value: '803-992-0415', href: 'tel:+18039920415' }
];

export const projects = [
  {
    title: 'NASA Supercritical Water Oxidation (SCWO) System',
    role: 'Undergraduate Researcher',
    dates: 'Aug 2026 - Present',
    summary: 'Recommissioning the computer control system of a NASA-developed SCWO research apparatus for high-temperature, high-pressure waste treatment.',
    detail: 'Working in Clemson\'s Spherical Flames and Supercritical Oxidation Creative Inquiry to reconstruct the apparatus\'s legacy and modern control architecture and support restoration of system monitoring, control, and data-acquisition capabilities.',
    objectives: 'Restore reliable control-system operation and document the interfaces needed for future SCWO experiments.',
    problem: 'The apparatus combines legacy control hardware with modern PLC equipment, instrumentation, and heater-control circuits whose connections are not fully documented.',
    approach: 'Correlated P&IDs, operations manuals, wiring diagrams, electrical schematics, and physical hardware inspections to trace electrical and communication interfaces.',
    results: 'Documented the roles and interfaces of Leeds & Northrup LPU hardware, an Allen-Bradley CompactLogix 5380 PLC, analog heater controls, I/O modules, thermocouple safety circuits, solid-state relays, contactors, and 4-20 mA interfaces.',
    skills: ['Controls', 'Instrumentation', 'Electrical Troubleshooting', 'Experimental Methods', 'Technical Documentation'],
    technologies: ['Allen-Bradley CompactLogix 5380', 'Leeds & Northrup LPU', 'P&IDs', 'Wiring Diagrams', 'Analog I/O', 'Thermocouples'],
    images: [],
    links: {
      page: './projects/nasa-scwo-research.html'
    }
  },
  {
    title: 'Science Olympiad Electric Vehicle',
    role: 'Designer and Builder',
    dates: 'Oct 2023 - Jun 2024',
    summary: 'Designed, built, programmed, and tested a miniature electric vehicle for Science Olympiad competition.',
    detail: 'Completed the vehicle build from the ground up, integrating the mechanical structure, electrical system, and ESP32-based control hardware for repeatable competition performance.',
    objectives: 'Build and tune a compact electric vehicle capable of meeting event requirements for speed, positioning, and controlled stopping.',
    problem: 'The vehicle had to combine precise motion control, a lightweight mechanical design, and reliable electrical operation within competition constraints.',
    approach: 'Designed and assembled the vehicle, programmed the ESP32, and iterated through testing and adjustments to improve its operation on the competition course.',
    results: 'Won first place in a state competition with the team.',
    skills: ['Mechanical Design', 'Embedded Programming', 'Prototyping', 'Testing', 'Team Collaboration'],
    technologies: ['ESP32', 'Embedded C/C++', 'DC Motors', 'Electrical Wiring', 'Mechanical Prototyping'],
    images: [],
    links: {
      page: './projects/science-olympiad-electric-vehicle.html'
    }
  },
  {
    title: 'Python Graphing Calculator',
    role: 'Programmer and Developer',
    dates: 'Spring 2023',
    summary: 'Built a desktop graphing calculator in Python with an interactive Pygame interface.',
    detail: 'Developed the application from the ground up, including equation parsing, graph-point generation, coordinate-table calculations, user controls, and the graphical interface.',
    objectives: 'Create a usable graphing tool that combines visual plotting with numerical evaluation of user-entered equations.',
    problem: 'The calculator needed to translate typed equations into plotted coordinates while remaining responsive to zooming, panning, table navigation, and exact-value requests.',
    approach: 'Implemented equation parsing, dynamic graph sampling, centered coordinate transforms, keyboard and mouse controls, a draggable value table, and a settings/instructions interface in Pygame.',
    results: 'Completed a working interactive calculator that plots equations, displays tabulated values, supports zoom and pan controls, and evaluates an exact y-value for a selected x-value.',
    skills: ['Python Programming', 'GUI Development', 'Numerical Evaluation', 'Data Visualization', 'User Interaction Design'],
    technologies: ['Python', 'Pygame', 'Event-Driven Programming', 'Coordinate Transforms'],
    images: [],
    links: {
      page: './projects/python-graphing-calculator.html'
    }
  }
];

export const experience = [
  {
    position: 'Undergraduate Researcher',
    organization: 'Clemson University - Spherical Flames and Supercritical Oxidation Creative Inquiry',
    dates: 'Aug 2026 - Present',
    location: 'Clemson, SC',
    description: 'Recommissioning the computer control system of a NASA-developed Supercritical Water Oxidation research apparatus.',
    accomplishments: 'Reverse-engineered legacy and modern control architecture; traced electrical and communication interfaces using P&IDs, manuals, wiring diagrams, schematics, and hardware inspections; documented PLC, heater-control, instrumentation, and safety-circuit interfaces.',
    technicalSkills: 'Allen-Bradley CompactLogix 5380, Leeds & Northrup LPU, PLCs, Analog I/O, Instrumentation, P&IDs, Electrical Schematics, Technical Documentation'
  },
  {
    position: 'Intern',
    organization: 'Balfour Beatty',
    dates: 'Jul 2022 - Aug 2022',
    location: 'Charlotte, NC',
    description: 'Observed construction project management activities and reviewed the engineering and construction documentation used on active projects.',
    accomplishments: 'Job-shadowed a senior project manager, participated in site visits, and reviewed construction plans to develop familiarity with project coordination and field execution.',
    technicalSkills: 'Construction Plans, Site Visits, Project Management, Field Observation'
  },
  {
    position: 'Ride Operator',
    organization: 'Carowinds',
    dates: 'Jan 2021 - May 2022',
    location: 'Charlotte, NC',
    description: 'Operated amusement rides while following established safety procedures and assisting guests during daily park operations.',
    accomplishments: 'Built experience in procedural compliance, situational awareness, customer communication, and consistent operation in a high-volume environment.',
    technicalSkills: 'Safety Procedures, Operations, Team Communication, Customer Service'
  }
];

export const skills = [
  {
    category: 'CAD and Design',
    items: ['SolidWorks', 'Fusion 360', 'Autodesk Inventor', 'Autodesk Revit', 'Mechanical Design', 'Prototyping']
  },
  {
    category: 'Programming',
    items: ['Python', 'Pygame', 'MATLAB', 'Lua', 'G-code', 'ESP32 Programming']
  },
  {
    category: 'Controls and Research',
    items: ['Allen-Bradley CompactLogix', 'PLCs', 'Analog I/O', 'Instrumentation', 'Thermocouples', 'P&IDs', 'Electrical Schematics', 'Experimental Methods']
  }
];

// These arrays remain available for future project photos. They are intentionally
// empty until real photographs or screenshots are added.
export const galleryItems = [];

export const researchImages = [];
