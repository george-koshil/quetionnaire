import { useMatch, useNavigate } from "react-router-dom";
import Button from "../../../Button";

const Header = () => {
  const isQuestionnaireResultPage = useMatch({
    path: "/questionnaire-result",
    end: false,
  });
  const navigate = useNavigate();
  const logoSrc = isQuestionnaireResultPage
    ? "./logo-white.svg"
    : "./logo-black.svg";
  const backIcon = isQuestionnaireResultPage
    ? "./back-icon-white.svg"
    : "./back-icon.svg";

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex justify-center relative p-20">
      <Button
        variant="ghost"
        className="absolute mobile:left-22 desktop:left-172"
        onClick={handleBack}
      >
        <img src={backIcon} alt="logo" />
      </Button>
      <img src={logoSrc} alt="logo" />
    </header>
  );
};

export default Header;
