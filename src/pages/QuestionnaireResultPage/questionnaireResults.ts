const questionnaireResults = {
  heart: (zodiac: string) =>
    `Based on our data, 49% of ${zodiac} people also make decisions with their heart. 
    But don't worry, we'll consider that while creating your guidance plan.`,
  head: (zodiac: string) =>
    `Based on our data, 39% of ${zodiac} people also make decisions with their head. 
    But don't worry, we'll consider that while creating your guidance plan.`,
  both: (zodiac: string) =>
    `Wonderful!
     Based on our data, only the top 17% of ${zodiac} people make decisions with their heart and head. 
     Using both in equal measure is the key to feeling harmonious in your relationships.`,
};

export default questionnaireResults;

