const resume = {
    name: "Jordan Lee",
    position: "Backend Developer",
    contactInformation: "+1 555 010 456",
    email: "jordan.lee@example.com",
    address: "Remote",
    profilePicture: "",
    socialMedia: [
        {
            socialMedia: "GitHub",
            link: "github.com/jordanlee-demo",
        },
        {
            socialMedia: "LinkedIn",
            link: "linkedin.com/in/jordanlee-demo",
        },
        {
            socialMedia: "Website",
            link: "jordanlee.dev",
        },
    ],

    summary:
        "Backend developer focused on APIs, data modeling and reliable service boundaries. Experience building maintainable server-side features with clear contracts and observable behavior.",

    education: [
        {
            school: "Code Systems Institute",
            degree: "Backend Development Program",
            startYear: "2021-01-01",
            endYear: "2021-10-31",
        },
    ],

    workExperience: [
        {
            company: "Ledgerway",
            position: "Backend Developer",
            description:
                "Development of API endpoints, database models and background jobs for internal operations tools.",
            keyAchievements:
                "Design of service boundaries that made validation, persistence and external integrations easier to test.\n" +
                "Improvement of debugging workflows through structured errors, logs and clearer API responses.",
            startYear: "2022-06-01",
            endYear: "Actualidad",
        },
        {
            company: "Harbor Apps",
            position: "Junior Software Developer",
            description:
                "Maintenance of backend features and integrations for small business management software.",
            keyAchievements:
                "Implementation of CRUD flows with predictable validation and database transactions.\n" +
                "Refactoring of duplicated logic into reusable service functions reviewed with the team.",
            startYear: "2020-07-01",
            endYear: "2022-05-31",
        },
    ],

    projects: [
        {
            name: "Inventory API",
            link: "",
            startYear: "2023-02-01",
            endYear: "2023-06-30",
            description:
                "REST API for stock movements, product catalog management and warehouse reporting.",
            keyAchievements:
                "Modeling of inventory operations around auditable movements instead of overwriting stock values.\n" +
                "Separation of controllers, validation and persistence to keep endpoints easier to maintain.",
        },
        {
            name: "Notification Worker",
            link: "",
            startYear: "2022-09-01",
            endYear: "2022-12-31",
            description:
                "Background process for sending user notifications triggered by product events.",
            keyAchievements:
                "Design of retry behavior and failure logging for operational visibility.\n" +
                "Configuration-based routing for email and in-app notification channels.",
        },
    ],

    skills: [
        {
            title: "Backend",
            skills: ["Node.js", "Python", "REST APIs", "Background jobs"],
        },
        {
            title: "Data",
            skills: ["PostgreSQL", "SQL", "Data modeling", "Transactions"],
        },
        {
            title: "Quality",
            skills: ["Testing", "Debugging", "Observability", "Git"],
        },
    ],

    languages: [
        {
            language: "English",
            proficiency: "Professional",
        },
    ],

    certifications: [],
};

const backendProfile = {
    id: "backend",
    label: "Backend",
    description: "Demo profile for backend roles focused on APIs, data and service reliability.",
    resume,
};

export default backendProfile;
