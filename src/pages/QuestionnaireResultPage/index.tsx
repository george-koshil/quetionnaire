import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useChangeGlobalStyles from "../../hooks/useChangeGlobalStyles";
import questionnaireResults from "./questionnaireResults";
import useGetAdditionalDataByAnswers from "../../hooks/useGetAdditionalDataByAnswers";

const QuestionnaireResultPage = () => {
  const navigate = useNavigate();
  const { decisionWith, zodiac } = useGetAdditionalDataByAnswers();

  useChangeGlobalStyles("bg-body-grad");

  const goToSendEmailPage = () => {
    navigate("/send-email");
  };

  const backToQuestionnaire = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <img src="./scales.svg" alt="scales" className="block mb-50" />
      <span className="block mb-50 text-white-secondary text-base max-w-328 text-center">
        {questionnaireResults[decisionWith as "heart" | "head" | "both"](
          zodiac
        )}
      </span>
      <div className="flex space-x-10">
        <Button variant="outline" onClick={backToQuestionnaire}>
          Back
        </Button>
        <Button variant="contained" onClick={goToSendEmailPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuestionnaireResultPage;
