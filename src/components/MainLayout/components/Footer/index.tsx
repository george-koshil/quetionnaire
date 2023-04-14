import { useMatch } from "react-router-dom";
import cn from 'classnames'

const Footer = () => {
  const isQuestionnaireResultPage = useMatch({ path: "/questionnaire-result", end: false })

  return (
    <footer className={cn("text-sm flex justify-center absolute w-full desktop:bottom-290 mobile:bottom-10", {
      'text-md-light-gray': isQuestionnaireResultPage,
      'text-light-gray': !isQuestionnaireResultPage
    })}>
      Nicosia, Cyprus
    </footer>
  )
};

export default Footer;
