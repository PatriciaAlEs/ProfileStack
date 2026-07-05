const Language = ({ title, languages }) => {
  return (
    languages.length > 0 && (
      <div>
        <h2 className="section-title mb-1 border-b-2 border-gray-300">
          {title}
        </h2>
        <p className="sub-content">
          {languages.map((lang) => {
            if (typeof lang === "string") {
              return lang;
            } else if (lang.language && lang.proficiency) {
              return `${lang.language} (${lang.proficiency})`;
            } else if (lang.language) {
              return lang.language;
            }
            return "";
          }).join(" • ")}
        </p>
      </div>
    )
  );
};

export default Language;