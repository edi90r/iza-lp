export const handleClick = (event, sectionRefs, sectionId) => {
    event.preventDefault();
    console.log(sectionRefs[sectionId]);
    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
};
