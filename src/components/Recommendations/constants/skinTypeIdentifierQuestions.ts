
interface SkinTypeOption {
  label: string;
  val: string;
}

interface SkinTypeOptions {
  [key: number]: SkinTypeOption[];
}

export const titles = [
    `How does your skin feel after you wash your face?`,
    `If you wash your face and don’t apply any products, how does your skin feel after 30 minutes?`,
    `How does your skin feel by midday?`,
    `How often do you experience breakouts?`,
    `When does your skin look red?`,
  ];
  
  export const skinTypeOptions : SkinTypeOptions = {
    0: [
      {label: 'Refreshed but quickly turns oily again', val: 'Oily'},
      {label: 'Tight and dry', val: 'Dry'},
      {
        label: 'Clean on my forehead and nose, but dry on my cheeks',
        val: 'Combination',
      },
      {label: 'Slightly irritated or itchy', val: 'Sensitive'},
    ],
    1: [
      {label: `It gets oily quickly`, val: 'Oily'},
      {label: `Feels tight and looks dry`, val: 'Dry'},
      {label: `Some areas become oily while others feel dry`, val: 'Combination'},
      {label: `My skin starts to feel itchy or turns red`, val: 'Sensitive'},
    ],
    2: [
      {label: `Shiny and oily`, val: 'Oily'},
      {label: `Tight and dry`, val: 'Dry'},
      {label: `Oily in some areas and dry in others`, val: 'Combination'},
      {label: `Red or irritated`, val: 'Sensitive'},
    ],
    3: [
      {label: `Frequently`, val: 'Oily'},
      {label: `Rarely or never`, val: 'Dry'},
      {
        label: `Sometimes, but only in certain areas like my T-zone`,
        val: 'Combination',
      },
      {label: `Sometimes, but usually when I use new products`, val: 'Sensitive'},
    ],
    4: [
      {label: `Rarely, unless I'm exercising hard`, val: 'Oily'},
      {label: `Sometimes, especially in cold or dry weather`, val: 'Dry'},
      {
        label: `Rarely, but my T-zone can become a bit flushed`,
        val: 'Combination',
      },
      {
        label: `Often, especially when I use new products or eat certain foods`,
        val: 'Sensitive',
      },
    ],
  };