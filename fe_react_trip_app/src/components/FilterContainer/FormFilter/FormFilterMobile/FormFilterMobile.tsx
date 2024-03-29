import Button from "UI/Button";
import styles from "./FormFilterMobile.module.scss";

export default function FormFilterMobile() {

  return (
    <form className={styles.mobileForm}>
      <div>
        <img
          src="assets/icons/shared/close.svg"
          alt="closeIcon"
          width="24"
          height="24"
        />
      </div>
      <label>Where</label>
      <input type="text"/>
      <label>Where</label>
      <select />
      <label>Where</label>
      <select />
      <div>
        <Button size='fullSize' fillType='filled' title='Search' onClick={() => {}} />
      </div>
    </form>
  );
}
