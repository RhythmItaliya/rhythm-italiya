

const SingleSkill = ({children}) => {
    return (
        <div className="border flex relative *:relative size-14 *:m-auto md:size-20 mx-auto rounded-xl bg-white/5 border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950 hover:bg-white/10 cursor-pointer">
            {children}
        </div>
    );
};

export default SingleSkill;