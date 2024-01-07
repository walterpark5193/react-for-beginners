import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Moive({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        {
          //hasOwnProperty("genres") ? ( //genres prop이 있을 때에만 아래 로직 수행 (genres가 없을 시 cannot read properties of undefined 에러 발생)
          genres !== "" ? (
            <ul className={styles.movie__genres}>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          ) : null
        }
        {/*   <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

Moive.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moive;
