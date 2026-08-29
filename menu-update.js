// Brandon's BBQ & Grille — Menu Update
// Pricing note: sandwiches and burgers include one side.

export const menuUpdate = {
  "Signature Burgers": [
    {
      name: "Brandon's Smash",
      price: 14,
      description:
        "Two smashed beef patties with melted cheese and grilled onions on a toasted brioche bun. Served with one side.",
    },
    {
      name: "Classic Cheeseburger",
      price: 14,
      description:
        "A flame-grilled beef patty with melted cheese and your choice of toppings on a toasted brioche bun. Served with one side.",
    },
    {
      name: "\u201cPut a Knife in Me, I\u2019m Done\u201d Brisket Burger",
      price: 17,
      description:
        "A beef patty topped with chopped smoked brisket, cheddar cheese, crispy onion strings, and Brandon's BBQ sauce. Served with one side.",
    },
    {
      name: "Best Butts Burger",
      price: 16,
      description:
        "A beef patty topped with pulled pork, cheddar cheese, marinated slaw, pickles, and Brandon's BBQ sauce. Served with one side.",
    },
    {
      name: "Jalape\u00f1o Popper Smash",
      price: 16,
      description:
        "Two smashed beef patties topped with pepper jack cheese, bacon, jalape\u00f1o cream cheese, fried jalape\u00f1os, and hot honey. Served with one side.",
    },
    {
      name: "Bourbon Bacon Jam Burger",
      price: 16,
      description:
        "A beef patty topped with cheddar cheese, house-made bourbon bacon jam, crispy fried onion strings, and smoky burger sauce. Served with one side.",
    },
  ],

  "Signature Sandwiches": [
    {
      name: "The Pork Chop That Ate the Bun",
      price: 15,
      description:
        "A boneless pork chop pounded thin, hand-breaded, and fried until crispy\u2014nearly twice the size of its toasted brioche bun. Topped with pickles and smoky honey mustard, with white pepper gravy for dipping. Served with one side.",
      note: "Yes, the bun is supposed to look that small.",
    },
    {
      name: "Fried Chicken Sandwich",
      price: 13,
      description:
        "A fresh chicken breast, hand-breaded and fried until golden brown, topped with lettuce, pickles, and smoky ranch on a toasted brioche bun. Served with one side.",
      note: "Make it Nashville Hot or El Diablo \u2014 Add $1",
    },
    {
      name: "Philly Cheesesteak",
      price: 14,
      description:
        "Thinly shaved beef grilled with onions, mushrooms, and sweet peppers, then topped with melted cheese on a toasted hoagie roll. Served with one side.",
    },
    {
      name: "Brisket Sandwich",
      price: 15,
      description:
        "Slow-smoked brisket piled high on a toasted brioche bun with Brandon's BBQ sauce. Served with one side.",
    },
  ],

  "Country Dinner": [
    {
      name: "Fried Pork Chop Dinner",
      price: 18,
      description:
        "A hand-breaded pork chop fried until golden brown and served with garlic-cheese mashed potatoes, homemade white pepper gravy, and your choice of one additional side.",
    },
  ],

  "BBQ Dinners": {
    note: "All BBQ dinners are served with two sides.",
    items: [
      {
        name: "Pulled Pork BBQ Plate",
        price: 15,
        description: "Slow-smoked pulled pork served with Brandon's signature BBQ sauce.",
      },
      {
        name: "Brisket BBQ Plate",
        price: 19,
        description:
          "Slow-smoked beef brisket, served sliced or chopped, with Brandon's signature BBQ sauce.",
      },
      {
        name: "Grilled BBQ Half-Chicken",
        price: 17,
        description:
          "A slow-smoked half-chicken finished on the grill with Brandon's signature BBQ sauce.",
      },
      {
        name: "Baby Back Ribs",
        variants: [
          { label: "Half Rack", price: 20 },
          { label: "Full Rack", price: 30 },
        ],
      },
      {
        name: "BBQ Combo: Pick 2",
        price: 20,
        description: "Choose two: pulled pork, BBQ chicken, or ribs.",
      },
      {
        name: "BBQ Combo: Pick 3",
        price: 25,
        description: "Pulled pork, BBQ chicken, and ribs.",
        note: "Choose brisket as one of your meats \u2014 Add $4",
      },
      {
        name: "The Whole Smokehouse: All 4 Meats",
        price: 36,
        description: "Pulled pork, BBQ chicken, ribs, and brisket.",
      },
    ],
  },
};
