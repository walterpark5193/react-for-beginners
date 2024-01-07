import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  //Button 모듈을 사용할 때만 css 로딩하고, 내가 원하는 Button에만 관련 Style을 적용할 수 있다.
  //여기서 정의한 className은 렌더링 시 무작위적인 랜덤 class name을 가지게 된다!!
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
