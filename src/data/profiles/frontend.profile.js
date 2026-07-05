const resume = {
    name: "Alex Morgan",
    position: "Frontend Developer",
    contactInformation: "+1 555 010 123",
    email: "alex.morgan@example.com",
    address: "Remote",
    profilePicture: "",
    socialMedia: [
        {
            socialMedia: "GitHub",
            link: "github.com/alexmorgan-demo",
        },
        {
            socialMedia: "LinkedIn",
            link: "linkedin.com/in/alexmorgan-demo",
        },
        {
            socialMedia: "Website",
            link: "alexmorgan.dev",
        },
    ],

    summary:
        "Frontend developer focused on building accessible, maintainable interfaces. Experience turning product requirements into reusable components, predictable UI states and responsive layouts.",

    education: [
        {
            school: "Open Web Academy",
            degree: "Frontend Engineering Program",
            startYear: "2022-01-01",
            endYear: "2022-09-30",
        },
    ],

    workExperience: [
        {
            company: "Northstar Products",
            position: "Frontend Developer",
            description:
                "Development of product interfaces for dashboards, settings flows and account management screens.",
            keyAchievements:
                "Creation of reusable React components to keep repeated workflows consistent across the product.\n" +
                "Collaboration with design and backend teams to define loading, empty and error states before implementation.",
            startYear: "2023-03-01",
            endYear: "Actualidad",
        },
        {
            company: "Brightlane Studio",
            position: "Junior Web Developer",
            description:
                "Implementation of responsive marketing and product pages for early-stage teams.",
            keyAchievements:
                "Translation of Figma designs into accessible layouts with clear content hierarchy.\n" +
                "Maintenance of shared UI patterns to reduce duplicated styling and speed up delivery.",
            startYear: "2021-09-01",
            endYear: "2023-02-28",
        },
    ],

    projects: [
        {
            name: "Component Library",
            link: "",
            startYear: "2024-01-01",
            endYear: "2024-04-30",
            description:
                "Internal UI library for product teams that need consistent buttons, forms, cards and feedback states.",
            keyAchievements:
                "Definition of component APIs around real product use cases instead of isolated visual examples.\n" +
                "Documentation of variants, accessibility notes and interaction states for easier adoption.",
        },
        {
            name: "Analytics Dashboard",
            link: "",
            startYear: "2023-08-01",
            endYear: "2023-12-31",
            description:
                "Dashboard for reviewing product metrics with filters, charts and saved views.",
            keyAchievements:
                "Organization of data-heavy screens so users could compare metrics without losing context.\n" +
                "Handling of loading and error states to keep the interface usable during slow API responses.",
        },
    ],

    skills: [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Responsive UI", "Accessibility"],
        },
        {
            title: "Architecture",
            skills: ["Component design", "State management", "Code review", "Git"],
        },
        {
            title: "Product UI",
            skills: ["Design handoff", "Form flows", "Dashboard interfaces", "Debugging"],
        },
    ],

    languages: [
        {
            language: "English",
            proficiency: "Professional",
        },
        {
            language: "Spanish",
            proficiency: "Intermediate",
        },
    ],

    certifications: [],
};

const frontendProfile = {
    id: "frontend",
    label: "Frontend",
    description: "Demo profile for frontend roles focused on interfaces, components and product UI.",
    resume,
};

export default frontendProfile;
