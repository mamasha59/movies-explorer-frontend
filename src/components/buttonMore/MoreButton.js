import "./buttonMore.css";

export default function MoreMovies({ isVisible, onClick }) {
  return (
    <button className={`cards__more ${isVisible && "card__btn_active"}`} onClick={onClick}>
      Ещё
    </button>
  );
}