const DateRange = ({startYear, endYear, id}) => {
  const lang = 'es-ES'

  if (!startYear) {
    return <p id={id} className="sub-content"></p>;
  }

  const start = new Date(startYear);
  const formatDate = (date) => {
    const month = date.toLocaleString(lang, {month: 'short'}).replace(".", "");
    return `${month.charAt(0).toUpperCase()}${month.slice(1)} ${date.getFullYear()}`;
  };
  const startStr = formatDate(start);
  const end = new Date(endYear);
  let endStr = 'Actualidad'

  if (end != "Invalid Date") {
    endStr = formatDate(end);
  }

  return (
    <p id={id} className="sub-content">
      {startStr} — {endStr}
    </p>
  );
};

export default DateRange;
