import { Answer } from "../store/slices/questionnaireSlice";
import {
  DateOfBirth,
  getAgeFromDateOfBirth,
  getZodiacName,
} from "./dateHelper";

export const transformToAdditionalData = (
  answersUsingInNextQuestions: Answer[]
) => {
  const gender: string = answersUsingInNextQuestions[0]?.answer.gender;
  const age = getAgeFromDateOfBirth(
    answersUsingInNextQuestions[1]?.answer as DateOfBirth
  );
  const isParent: boolean =
    answersUsingInNextQuestions[2]?.answer.isParent ||
    answersUsingInNextQuestions[2]?.answer.singleParent;

  const decisionWith: string =
    answersUsingInNextQuestions[3]?.answer.makeDecisions;

  const zodiac = answersUsingInNextQuestions[1]?.answer
    ? getZodiacName(answersUsingInNextQuestions[1]?.answer as DateOfBirth)
    : "";

  return { gender, age, isParent, decisionWith, zodiac };
};
