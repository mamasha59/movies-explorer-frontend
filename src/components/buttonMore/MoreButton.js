import "./buttonMore.css";

export default function MoreMovies({ isVisible, onClick }) {
  return (
    <button className={`cards__more ${isVisible && "cards__more_active"}`} onClick={onClick}>
      Ещё
    </button>
  );
}