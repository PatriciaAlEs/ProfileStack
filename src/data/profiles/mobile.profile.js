const resume = {
    name: "Sam Rivera",
    position: "Mobile Developer",
    contactInformation: "+1 555 010 789",
    email: "sam.rivera@example.com",
    address: "Remote",
    profilePicture: "",
    socialMedia: [
        {
            socialMedia: "GitHub",
            link: "github.com/samrivera-demo",
        },
        {
            socialMedia: "LinkedIn",
            link: "linkedin.com/in/samrivera-demo",
        },
        {
            socialMedia: "Website",
            link: "samrivera.dev",
        },
    ],

    summary:
        "Mobile developer focused on reliable app flows, offline-aware data and maintainable UI architecture. Experience building cross-platform features with attention to state, persistence and user feedback.",

    education: [
        {
            school: "Mobile Craft School",
            degree: "Cross-platform Mobile Development",
            startYear: "2021-03-01",
            endYear: "2021-12-31",
        },
    ],

    workExperience: [
        {
            company: "Pocket Labs",
            position: "Mobile Developer",
            description:
                "Development of cross-platform app features for onboarding, user settings and activity tracking.",
            keyAchievements:
                "Organization of state, persistence and UI components to keep app flows stable as features grew.\n" +
                "Collaboration with QA to reproduce mobile-specific bugs and define regression checks.",
            startYear: "2022-04-01",
            endYear: "Actualidad",
        },
        {
            company: "MetroSoft",
            position: "Junior App Developer",
            description:
                "Implementation of mobile screens and API integrations for customer-facing applications.",
            keyAchievements:
                "Development of forms and list views with clear validation, empty states and error feedback.\n" +
                "Review of device-specific behavior to improve consistency across screen sizes.",
            startYear: "2020-08-01",
            endYear: "2022-03-31",
        },
    ],

    projects: [
        {
            name: "Offline Notes",
            link: "",
            startYear: "2023-05-01",
            endYear: "2023-09-30",
            description:
                "Mobile note-taking app designed to work without connection and sync changes later.",
            keyAchievements:
                "Design of local-first flows so users could create and edit content during network interruptions.\n" +
                "Handling of sync states in the UI to make pending changes visible without blocking work.",
        },
        {
            name: "Habit Tracker",
            link: "",
            startYear: "2022-10-01",
            endYear: "2023-01-31",
            description:
                "Mobile product for tracking daily routines with reminders, streaks and progress summaries.",
            keyAchievements:
                "Construction of recurring interaction patterns for fast daily use.\n" +
                "Separation of presentation and data logic to keep the app easier to test and extend.",
        },
    ],

    skills: [
        {
            title: "Mobile",
            skills: ["Flutter", "Dart", "Cross-platform UI", "Material Design"],
        },
        {
            title: "App architecture",
            skills: ["State management", "Offline-first flows", "Repository Pattern", "Testing"],
        },
        {
            title: "Delivery",
            skills: ["API integration", "Debugging", "Code review", "Git"],
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

const mobileProfile = {
    id: "mobile",
    label: "Mobile",
    description: "Demo profile for mobile roles focused on app architecture, offline data and user flows.",
    resume,
};

export default mobileProfile;
