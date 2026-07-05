const profileContext = require.context("../../data/profiles", false, /\.profile\.js$/);

const loadProfileModule = (fileName) => {
    const profile = profileContext(fileName).default;

    return {
        ...profile,
        sourceFile: fileName.replace("./", ""),
    };
};

export const loadProfiles = () => {
    return profileContext
        .keys()
        .map(loadProfileModule)
        .sort((a, b) => a.label.localeCompare(b.label));
};
