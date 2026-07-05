const ProfileSelector = ({ profiles, selectedProfileId, onProfileChange }) => {
    return (
        <div className="flex gap-2 p-4 bg-gradient-to-r from-[#f3f6f8] to-slate-100 rounded-lg shadow-sm border border-[#325178] w-full justify-center flex-wrap">
            <span className="text-sm font-semibold self-center mr-2">Selecciona perfil:</span>
            {profiles.map((profile) => {
                const isSelected = profile.id === selectedProfileId;

                return (
                    <button
                        key={profile.id}
                        type="button"
                        title={profile.description}
                        onClick={() => {
                            onProfileChange(profile.id);
                        }}
                        className={`px-4 py-2 text-white rounded hover:bg-[#284160] active:bg-[#20354f] transition text-sm font-medium ${
                            isSelected ? "bg-[#20354f]" : "bg-[#325178]"
                        }`}
                    >
                        {profile.label}
                    </button>
                );
            })}
        </div>
    );
};

export default ProfileSelector;
