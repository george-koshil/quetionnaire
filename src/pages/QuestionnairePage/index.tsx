import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Question, getQuestions } from "../../questions";
import { saveAnswer } from "../../store/slices/questionnaireSlice";
import Questionnaire from "../../components/Questionnaire";
import { useNavigate } from "react-router-dom";
import useGetAdditionalDataByAnswers from "../../hooks/useGetAdditionalDataByAnswers";

const QuestionnairePage = () => {  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const additionalDataByAnswers = useGetAdditionalDataByAnswers()

  const questions = useMemo(
    () => getQuestions(additionalDataByAnswers),
    [additionalDataByAnswers]
  );

  const handleSubmitAnswer = (answer: { [key: string]: string }, currentQuestion: Question) => {
    dispatch(saveAnswer({ question: currentQuestion, answer }));
    if(currentQuestion.isFinalQuestion) navigate('/questionnaire-result') 
  };

  return (
    <div>
      <Questionnaire
        questions={questions}
        onSubmitAnswer={handleSubmitAnswer}
      />
    </div>
  );
}

export default QuestionnairePage;
