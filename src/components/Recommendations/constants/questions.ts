export const skinQuestions = [
  {
    question: "What is your gender?",
    options: ["Female", "Male", "Non-binary", "Prefer not to answer"],
    key: "gender",
  },
  {
    question: "What is your age?",
    desc: "Fill in your age",
    key: "age",
    placeholder: "Enter your age",
  },
  {
    question: "What’s your location?",
    desc: "Tell us your location",
    key: "location",
    placeholder: "Enter city/town",
  },
  {
    question: "What is your skin type?",
    options: ["Oily", "Combination", "Dry", "Sensitive", "I don’t know"],
    key: "skinType",
  },
  {
    question: "What are your skin concerns?",
    desc: "Select Three concerns",
    options: [
      "Reduce acne",
      "Healthy skin",
      "Reduce pigmentation",
      "Minimise pores",
      "Brighten skin",
      "Decrease dryness and dry patches",
      "Reduce blackheads and/or whiteheads",
      "Reduce acne scars",
      "Reduce oiliness/greasiness",
      "Reduce breakouts",
      "Reduce pimples",
    ],
    key: "skinGoals",
    multiple: true,
  },
  {
    question: "What are your body concerns?",
    options: [
      "Hyperpigmentation",
      "Dark underarms",
      "Stretch marks",
      "Dark neck",
      "None of the above",
    ],
    key: "bodyConcern",
  },
  // {
  //   question: "What are your hair concerns",
  //   desc: "Select upto Three concerns",
  //   options: [
  //     "Dandruff",
  //     "Hairfall",
  //     "Frizzy hair",
  //     "Dull hair",
  //     "Hair greying",
  //   ],
  //   key: "hairConcern",
  // },
  {
    question: "How stressed are you?",
    options: ["Not stressed", "Somewhat stressed", "Very stressed"],
    key: "stress",
  },
];

export const hairQuestions = [
  {
    question: "What is your gender?",
    options: ["Female", "Male", "Non-binary", "Prefer not to answer"],
    key: "gender",
  },
  {
    question: "What is your age?",
    desc: "Fill in your age",
    key: "age",
    placeholder: "Enter your age",
  },
  {
    question: "What’s your location?",
    desc: "Tell us your location",
    key: "location",
    placeholder: "Enter city/town",
  },
  {
    label: "What is your scalp type?",
    options: [
      "Oily",
      "Dry",
      "Dandruff prone",
      "Irritated/Sensitive",
      "I don’t know",
    ],
    key: "scalpType",
  },
  {
    label: "What is your hair type?",
    options: ["Straight", "Wavy", "Curly", "I don’t know"],
    key: "hairType",
  },
  {
    question: "What are your hair concerns",
    desc: "Select upto Three concerns",
    options: [
      "Dandruff",
      "Hairfall",
      "Frizzy hair",
      "Dull hair",
      "Hair greying",
    ],
    key: "hairConcern",
    multiple: true
  },
  {
    question: "How stressed are you?",
    options: ["Not stressed", "Somewhat stressed", "Very stressed"],
    key: "stress",
  },
];

export const scalpTypeQuestions = [
  {
      label: 'How often do you experience itching on your scalp?',
      options: [
          { label: 'Rarely or never', val: 'A' },
          { label: 'Occasionally', val: 'B' },
          { label: 'Frequently', val: 'C' },
          { label: 'Always', val: 'D' }
      ],
      value: 'itching'
  },
  {
      label: 'How does your scalp feel after washing your hair?',
      options: [
          { label: 'Clean and comfortable', val: 'A' },
          { label: 'Tight and a bit dry', val: 'B' },
          { label: 'Still somewhat oily ', val: 'C' },
          { label: 'Sensitive or irritated', val: 'D' }
      ],
      value: 'feel'
  },
  {
      label: 'Do you notice any flaking on your scalp?',
      options: [
          { label: 'Not really', val: 'A' },
          { label: 'Sometimes', val: 'B' },
          { label: 'Often ', val: 'C' },
          { label: 'Always ', val: 'D' }
      ],
      value: 'flaking'
  },
  {
      label: 'How does your hair look by the end of the day?',
      options: [
          { label: 'Greasy or oily', val: 'A' },
          { label: 'Dry and a bit frizzy', val: 'B' },
          { label: 'Normal ', val: 'C' },
          { label: 'Itchy with visible flakes ', val: 'D' }
      ],
      value: 'look'
  },

  {
      label: 'Do you have any visible redness or irritation on your scalp?',
      options: [
          { label: 'No', val: 'A' },
          { label: 'Rarely', val: 'B' },
          { label: 'Sometimes', val: 'C' },
          { label: 'Yes, frequently', val: 'D' }
      ],
      value: 'redness'
  },
]

export const hairTypeQuestions = [
  {
      label: `What is the natural shape or pattern of your hair?`,
      options: [
          { label: `Straight and doesn't hold curls`, val: 'A' },
          { label: 'Naturally wavy or can easily form waves', val: 'B' },
          { label: 'Naturally curly or forms tight curls', val: 'C' },
      ],
      value: 'pattern'
  },
  {
      label: 'How does your hair behave after washing and air drying?',
      options: [
          { label: 'Lies completely flat and straight', val: 'A' },
          { label: 'Forms loose waves or bends', val: 'B' },
          { label: 'Forms defined curls or spirals', val: 'C' },
      ],
      value: 'afterWash'
  },
  {
      label: 'How does your hair react to humidity?',
      options: [
          { label: `Remains mostly unchanged or gets a bit oily`, val: 'A' },
          { label: 'Tends to frizz or increase in wave', val: 'B' },
          { label: 'Curls become more pronounced or frizzy', val: 'C' },
      ],
      value: 'humidity'
  },
  {
      label: 'When you style your hair, how does it typically respond?',
      options: [
          { label: 'Stays straight or struggles to hold curls', val: 'A' },
          { label: 'Easily takes on waves or mild curls', val: 'B' },
          { label: 'Holds curls well or tends to revert to curly', val: 'C' },
      ],
      value: 'style'
  },
  {
      label: 'How does your hair respond to styling with heat?',
      options: [
          { label: 'Stays straight or becomes slightly wavy', val: 'A' },
          { label: 'Can be straightened or curled with moderate ease', val: 'B' },
          { label: 'Difficult to straighten, quickly returns to curls', val: 'C' },
      ],
      value: 'heat'
  },
]