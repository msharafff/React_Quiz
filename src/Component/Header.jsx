import QuizLogo from "../Assets/images.jpg";
export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="Quiz logo" />
      <h1>Quiz Time</h1>
    </header>
  );
}
