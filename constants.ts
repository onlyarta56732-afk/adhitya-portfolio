import { Experience, Project } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Puriva Smart Air Purifier',
    category: 'IoT & Kotlin',
    description: 'A solar-powered, IoT-based air purifier developed using Kotlin. It features an MQ135 gas sensor to detect CO, NH3, and VOCs, with automated fan control and HEPA filtration.',
    techStack: ['Kotlin', 'IoT', 'Solar Power', 'MQ135', 'Android Dev'],
    imageUrl: 'WhatsApp Image 2025-08-19 at 18.00.35_b0cd624c.jpg'
  },
  {
    id: 2,
    title: 'Smart Water Quality Boat',
    category: 'IoT & LoRa',
    description: 'An IoT-based boat designed to monitor water quality using LoRa network communication and Node-RED interface. Provides real-time data collection for environmental monitoring.',
    techStack: ['LoRa', 'Node-RED', 'IoT', 'Environmental Sensing'],
    imageUrl: 'WhatsApp Image 2025-08-19 at 18.18.36_7070b24f.jpg'
  },
  {
    id: 3,
    title: 'Solar Auto Irrigation',
    category: 'IoT & Agriculture',
    description: 'Automated irrigation system powered by solar panels. Focuses on energy efficiency and sustainable agriculture practices using real-time soil monitoring.',
    techStack: ['Solar Energy', 'IoT', 'Embedded Systems', 'Automation'],
    imageUrl: 'WhatsApp Image 2025-08-19 at 18.15.36_dd0978ef.jpg'
  },
  {
    id: 4,
    title: 'Autonomous Soccer Robot',
    category: 'Robotics',
    description: 'Fast-moving competitive robot with ball detection sensors, high-speed motors, and defensive/offensive strategy programming.',
    techStack: ['C++', 'Control Systems', 'PCB Design', 'Sensor Calibration'],
    imageUrl: 'WhatsApp Image 2026-01-28 at 10.40.43.jpeg'
  },
  {
    id: 5,
    title: 'Transporter Lifter Robot',
    category: 'Robotics',
    description: 'Carrying robot with a lifting mechanism for logistics. Competed at Politeknik Negeri Malang (Top 6 finish) in Nov 2025.',
    techStack: ['Mechanics', 'Motor Drivers', 'Microcontrollers', 'Navigation'],
    imageUrl: 'WhatsApp Image 2025-11-23 at 23.14.38.jpeg'
  },
  {
    id: 6,
    title: 'Line Follower Robot',
    category: 'Robotics',
    description: 'National-level competition robot demonstrating PID control, sensor calibration, and embedded programming for high-speed autonomous navigation.',
    techStack: ['Embedded C', 'PID Control', 'Electronics'],
    imageUrl: 'WhatsApp Image 2025-08-19 at 18.16.18_dd0bf870.jpg'
  },
  {
    id: 7,
    title: 'Robotic Arm',
    category: 'Robotics',
    description: 'Automatic robotic arm for precise object manipulation using actuators and position sensors for gripping and moving items.',
    techStack: ['Kinematics', 'Actuators', 'Servo Control'],
    imageUrl: 'WhatsApp Image 2025-11-23 at 23.14.38 (1).jpeg'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Specialist Serviced Computer',
    company: 'Sarinadinet (Internship)',
    period: 'Jan 2024 - May 2024',
    description: [
      'Diagnosed hardware issues (RAM, HDD, PSU, Motherboard).',
      'Performed component replacements and system troubleshooting.',
      'Provided technical consultation for computer equipment.'
    ],
    type: 'work'
  },
  {
    id: 2,
    role: 'Chairperson and Trainer',
    company: 'Computer & Network Engineering Club',
    period: 'Jan 2023 - Jan 2025',
    description: [
      'Trained members for Networking, IoT, and Cybersecurity competitions.',
      'Developed laboratory facilities and delivered learning materials.',
      'Managed club operations and leadership.'
    ],
    type: 'activity'
  },
  {
    id: 3,
    role: 'Head of Division 3',
    company: 'Student Council (OSIS)',
    period: '2023 - 2024',
    description: [
      'Coordinated extracurricular activities across the school.',
      'Demonstrated strong leadership in academic and non-academic events.'
    ],
    type: 'activity'
  },
  {
    id: 4,
    role: 'Computer Engineering Student',
    company: 'SMK Antartika 2 Sidoarjo',
    period: '2022 - 2025',
    description: [
      'Focus: Computer Systems, Networking, Basic Programming.',
      'Active participant in IoT Innovation and Scientific Writing competitions.'
    ],
    type: 'education'
  }
];
