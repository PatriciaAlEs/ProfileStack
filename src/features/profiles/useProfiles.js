import { useMemo, useState } from "react";
import { loadProfiles } from "./loadProfiles";

const cloneResume = (resume) => {
    return JSON.parse(JSON.stringify(resume));
};

export const useProfiles = () => {
    const profiles = useMemo(() => loadProfiles(), []);
    const initialProfile = profiles[0];

    const [selectedProfileId, setSelectedProfileId] = useState(initialProfile?.id || "");
    const [resumeData, setResumeData] = useState(() => cloneResume(initialProfile?.resume || {}));

    const switchProfile = (profileId) => {
        const profile = profiles.find((item) => item.id === profileId);

        if (!profile) {
            return false;
        }

        setSelectedProfileId(profile.id);
        setResumeData(cloneResume(profile.resume));
        return true;
    };

    return {
        profiles,
        selectedProfileId,
        resumeData,
        setResumeData,
        switchProfile,
    };
};
