import css from './ErrorMessage.module.css';
export default function ErrorMessage() {
  return (
    <>
      <div className={css.error}>
        <p>Whoops, something went wrong!</p>
        <p>Please try reloading this page!</p>
      </div>
    </>
  );
}
