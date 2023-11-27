import css from '../ContactForm/ContactForm.module.css';

export const Title = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};
