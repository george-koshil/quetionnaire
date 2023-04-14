import { useSelector } from "react-redux";
import { selectAllAnswersUsingInNextQuestions } from "../store/slices/questionnaireSlice";
import { transformToAdditionalData } from "../helpers/transformers";
import { useMemo } from "react";

const useGetAdditionalDataByAnswers = () => {
  const answersUsingInNextQuestions = useSelector(
    selectAllAnswersUsingInNextQuestions
  );

  const transformedData = useMemo(() => transformToAdditionalData(answersUsingInNextQuestions), [answersUsingInNextQuestions])

  return transformedData
}

export default useGetAdditionalDataByAnswers