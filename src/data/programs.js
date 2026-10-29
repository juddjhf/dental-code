export const programs = [
  {
    title: 'Strength Training',
    category: 'BUILD YOUR BASE',
    description: 'Progressive, coach-led lifting that builds real-world strength at every level.',
    image: 'photo-1583454110551-21f2fa2afe61',
    duration: '45–60 min',
  },
  {
    title: 'Personal Training',
    category: 'MADE FOR YOU',
    description: 'One-to-one coaching shaped around your goals, your pace, and your life.',
    image: 'photo-1534438327276-14e5300c3a48',
    duration: '45 min',
  },
  {
    title: 'Cardio & Endurance',
    category: 'FIND YOUR PACE',
    description: 'Build a stronger engine with purposeful conditioning and smart pacing.',
    image: 'photo-1538805060514-97d9cc17730c',
    duration: '40 min',
  },
  {
    title: 'HIIT Workouts',
    category: 'HIGH ENERGY',
    description: 'Short, scalable intervals that make every minute of your session count.',
    image: 'photo-1517836357463-d25dfeac3438',
    duration: '30 min',
  },
  {
    title: 'Yoga & Mobility',
    category: 'MOVE WITH EASE',
    description: 'Reset, recover, and find more freedom in the way you move.',
    image: 'photo-1544367567-0f2fcb009e0b',
    duration: '50 min',
  },
  {
    title: 'Functional Fitness',
    category: 'MOVE WITH PURPOSE',
    description: 'Carry strength into everyday life with dynamic, full-body training.',
    image: 'photo-1534258936925-c58bed479fcb',
    duration: '45 min',
  },
  {
    title: 'Group Training',
    category: 'BETTER TOGETHER',
    description: 'Small-group coaching, good energy, and a team that keeps you moving.',
    image: 'photo-1526506118085-60ce8714f8c5',
    duration: '45 min',
  },
  {
    title: 'Weightlifting',
    category: 'TECHNIQUE FIRST',
    description: 'Learn the lifts, refine your form, and build confidence under the bar.',
    image: 'photo-1581009146145-b5ef050c2e1e',
    duration: '60 min',
  },
]

export const imageUrl = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
