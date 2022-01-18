import './ErrorMessage.css';

function ErrorMessage(props) {
  return (
    <div className={`error-message${props.isErrorVisible ? ' error-message_show' : ' error-message_hide'}`}>{props.text}</div>
  );
};

export default ErrorMessage;