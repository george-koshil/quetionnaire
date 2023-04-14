import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { Question } from "../../../questions";

export type Answer = {
  questionId: number;
  answer: { [key: string]: any };
  isUsingAnswerInNextQuestions?: boolean;
};

export interface QuestionnaireState {
  answers: { [key: string]: Answer };
}

const initialState: QuestionnaireState = {
  answers: {},
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{
        question: Question;
        answer: { [key: string]: string | boolean };
      }>
    ) => {
      const answer = action.payload.answer;
      const questionTitle = action.payload.question.title;
      const isUsingAnswerInNextQuestions =
        action.payload.question.isUsingAnswerInNextQuestions;

      state.answers[questionTitle] = {
        questionId: 1,
        answer,
        isUsingAnswerInNextQuestions,
      };
    },
  },
});

// Actions

export const { saveAnswer } = questionnaireSlice.actions;

// Selectors

export const selectAnswers = (state: RootState) => state.questinnaire.answers;

export const selectAllAnswersUsingInNextQuestions = (state: RootState) =>
  Object.values(state.questinnaire.answers).filter(
    (item) => item.isUsingAnswerInNextQuestions
  );

export default questionnaireSlice.reducer;
