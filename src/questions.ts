import { getDays, getMonth, getYears } from "./helpers/dateHelper";

export type AnswerOption = {
  type: "button" | "select" | "input";
  label?: string;
  value?: string | boolean;
  name: string;
  placeholder?: string;
  options?: string[] | number[];
};

export type Question = {
  id: number;
  title: string;
  answerOptions: AnswerOption[];
  isComplexAnswer?: boolean;
  nextQuestionId?: number;
  nextQuestionIdByAnswer?: { [key: string]: number };
  isFinalQuestion?: boolean
  isUsingAnswerInNextQuestions?: boolean
};

export const getQuestions = (additionalData?: {
  gender: string;
  age: number;
  isParent: boolean;
}): Question[] => {
  const { gender, age, isParent } = additionalData ?? {};
 
  return [
    {
      id: 1,
      title: "Select your gender:",
      nextQuestionId: 2,
      isUsingAnswerInNextQuestions: true,
      answerOptions: [
        {
          type: "button",
          label: "Famale",
          value: "famale",
          name: "gender",
        },
        {
          type: "button",
          label: "Male",
          value: "male",
          name: "gender",
        },
      ],
    },
    {
      id: 2,
      title: "What's your date of birth?",
      isComplexAnswer: true,
      nextQuestionId: 3,
      isUsingAnswerInNextQuestions: true,
      answerOptions: [
        {
          type: "select",
          placeholder: "Month",
          name: "month",
          options: getMonth(),
        },
        {
          type: "select",
          placeholder: "Day",
          name: "day",
          options: getDays(),
        },
        {
          type: "select",
          placeholder: "Year",
          name: "year",
          options: getYears(),
        },
      ],
    },
    {
      id: 3,
      title:
        "So we can get to know you better, tell us about your relationship status.",
      nextQuestionIdByAnswer: { "single": 4, "in_a_relationship": 5 },
      answerOptions: [
        {
          type: "button",
          label: "Single",
          value: "single",
          name: "relationshipStatus",
        },
        {
          type: "button",
          label: "In a relationship",
          value: "in_a_relationship",
          name: "relationshipStatus",
        },
      ],
    },
    {
      id: 4,
      title: "Are you a single parent?",
      nextQuestionId: 6,
      isUsingAnswerInNextQuestions: true,
      answerOptions: [
        {
          type: "button",
          label: "Yes",
          value: true,
          name: "singleParent",
        },
        {
          type: "button",
          label: "No",
          value: false,
          name: "singleParent",
        },
      ],
    },
    {
      id: 5,
      title: "Are you a parent?",
      nextQuestionId: 8,
      isUsingAnswerInNextQuestions: true,
      answerOptions: [
        {
          type: "button",
          label: "Yes",
          value: true,
          name: "isParent",
        },
        {
          type: "button",
          label: "No",
          value: false,
          name: "isParent",
        },
      ],
    },
    {
      id: 6,
      title: `Single ${gender} ${age} ${
        (isParent && "who have children") || ''
      } need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
      nextQuestionId: 9,
      answerOptions: [
        {
          type: "button",
          label: "I was unhappy with low things were going in my relationship",
          value: "I was unhappy with low things were going in my relationship",
          name: "feelInLastRelationships",
        },
        {
          type: "button",
          label:
            "I was unhappy with parts of my relationship, but some thing were working",
          value:  "I was unhappy with parts of my relationship, but some thing were working",
          name: "feelInLastRelationships",
        },
        {
          type: "button",
          label: "I was generally happy with my relationship",
          value: "I was generally happy with my relationship",
          name: "feelInLastRelationships",
        },
        {
          type: "button",
          label: "I've never been in a relationship",
          value: "I've never been in a relationship",
          name: "feelInLastRelationships",
        },
      ],
    },
    {
      id: 8,
      title: `${gender} ${age} ${
        (isParent && "who have children") || ''
      } need a slightly different approach to improve their relationship. Which statement best describes you?`,
      nextQuestionId: 9,
      answerOptions: [
        {
          type: "button",
          label:
            "I'm very unhappy with how things are going in my relationship",
          value:
            "I'm very unhappy with how things are going in my relationship",
          name: "improveRelationship",
        },
        {
          type: "button",
          label:
            "I'm unhappy with parts of my relationship, but some things are working well",
          value:
            "I'm unhappy with parts of my relationship, but some things are working well",
          name: "improveRelationship",
        },
        {
          type: "button",
          label: "I'm generally happy in my relationship",
          value: "I'm generally happy in my relationship",
          name: "improveRelationship",
        },
      ],
    },
    {
      id: 9,
      title: "Do you make decisions with your head or your heart?",
      isFinalQuestion: true,
      isUsingAnswerInNextQuestions: true,
      answerOptions: [
        {
          type: "button",
          label: "Heart",
          value: "heart",
          name: "makeDecisions",
        },
        {
          type: "button",
          label: "Head",
          value: "head",
          name: "makeDecisions",
        },
        {
          type: "button",
          label: "Both",
          value: "both",
          name: "makeDecisions",
        },
      ],
    },
  ];
};
