import { useMemo } from "react";
import { AnswerOption, Question } from "../../questions";
import { useFormik } from "formik";
import useQueryState from "../../hooks/useQueryState";
import Button from "../Button";
import Select from "../Select";
import Input from "../Input";
import * as Yup from "yup";

type QuestionnaireProps = {
  questions: Question[];
  onSubmitAnswer: (answer: any, currentQuestion: Question) => void;
};

const Questionnaire = ({ questions, onSubmitAnswer }: QuestionnaireProps) => {
  const [currentQuestionId, setCurrentQuestionId] = useQueryState(
    "question-id",
    questions[0].id
  );

  const currentQuestion = useMemo(
    () =>
      questions.find((question) => question.id === +(currentQuestionId ?? questions[0].id)) ??
      ({} as Question),
    [questions, currentQuestionId]
  );

  const handleSwitchToNextQuestion = (answer: { [key: string]: string }) => {
    if (currentQuestion.nextQuestionId) {
      setCurrentQuestionId(currentQuestion.nextQuestionId);
    } else if (currentQuestion.nextQuestionIdByAnswer) {
      const currentAnswer = Object.values(answer)[0];
      setCurrentQuestionId(
        currentQuestion.nextQuestionIdByAnswer[currentAnswer]
      );
    }
  };

  const initalFormValues = useMemo(
    () =>
      currentQuestion.answerOptions.reduce(
        (acc, item) => ({ ...acc, [item.name]: "" }),
        {}
      ),
    [currentQuestion]
  );

  const validationSchema = useMemo(
    () => Yup.object(currentQuestion.answerOptions.reduce(
      (acc, item) => ({
        ...acc,
        [item.name]: Yup.string().required("Required"),
      }),
      {}
    )),
    [currentQuestion]
  );

  const formik = useFormik({
    initialValues: initalFormValues,
    onSubmit: (values) => {
      onSubmitAnswer(values, currentQuestion);
      handleSwitchToNextQuestion(values);
    },
    validationSchema,
    enableReinitialize: true,
  });

  const renderAnswerOption = (answerOption: AnswerOption) => {
    switch (answerOption.type) {
      case "button":
        return (
          <Button
            variant="answer"
            key={answerOption.label}
            name={answerOption.name}
            onClick={() =>
              formik.setValues({ [answerOption.name]: answerOption.value })
            }
            type="submit"
          >
            {answerOption.label}
          </Button>
        );
      case "select":
        return (
          <Select
            key={answerOption.label}
            onSelectOption={(selectedOption) =>
              formik.setValues({
                ...formik.values,
                [answerOption.name]: selectedOption,
              })
            }
            options={answerOption.options}
            className="min-w-190"
            placeholder={answerOption.placeholder}
          />
        );
      case "input":
        return (
          <Input
            name={answerOption.name}
            placeholder={answerOption.placeholder}
            onChange={formik.handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-20 flex flex-col items-center"
    >
      <strong className="text-xl mb-30 text-center">
        {currentQuestion.title}
      </strong>
      <div className="flex flex-col space-y-20">
        {currentQuestion.answerOptions.map(renderAnswerOption)}
      </div>
      {currentQuestion.isComplexAnswer && (
        <Button
          type="submit"
          variant="primary"
          className="mt-30"
          disabled={!formik.dirty || !formik.errors}
        >
          Next
        </Button>
      )}
    </form>
  );
};

export default Questionnaire;
