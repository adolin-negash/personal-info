const info = {
  full_name: "Адолин Негаш",
  description: "Java-программист description description description description"
  + " description description description description description description"
  + " description description description description description description"
  + " description description description description description description",  
  age: 37,
  github_source: "https://github.com/adolin-negash/personal-info",
  contacts: {
    email: "my.exaple@gmail.com",
    phone: "+7 (926) 123-45-67",
    github: {
      href: "https://github.com/adolin-negash",
      name: "adolin-negash",
    },
    linkedin: {
      name: "@linkedin-link",
      href: "@linkedin-link",
    },
    location: {
      name: "г. Москва",
      href:
        "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
    },
  },
  languages: [
    { flag: "🇬🇧", code: "en", name: "русский", level: "родной" },
    { flag: "🇷🇺", code: "ru", name: "английский", level: "upper intermediate" },
  ],
  skills: [
    {
      category: "lang",
      name: "Java core",
      href: "https://www.java.com",
      level: "8",
    },
    { category: "lang", name: "Scala", href: "", level: "3" },
    {
      category: "framework",
      name: "Spring",
      href: "https://spring.io/",
      level: "7",
    },
    {
      category: "db",
      name: "MS SQL",
      href: "https://en.wikipedia.org/wiki/Microsoft_SQL_Server",
      level: "7",
    },
    {
      category: "db",
      name: "PostgreSQL",
      href: "https://www.postgresql.org",
      level: "3",
    }
  ],
};

export function getSkills(category) {
  return info.skills.filter((item) => item.category === category);
}

export default info;
