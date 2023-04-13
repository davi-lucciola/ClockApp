import "./style.css";

export const Visor = ({ horario }) => {
  return (
    <div className="visor">
      {horario.hour && (
        <>
          <span>{horario.hour}</span>
          <span>:</span>
        </>
      )}
      <span>{horario.minutes}</span>
      <span>:</span>
      <span>{horario.seconds}</span>
    </div>
  );
};
