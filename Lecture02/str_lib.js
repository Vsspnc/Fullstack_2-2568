const fullName = " Visitsak Phetnongchum ";
const cleanedName = fullName.trim();
console.log(`Cleaned name: ${cleanedName}`);

const nameParts = cleanedName.split(" ");
console.log(`Name parts: ${nameParts}`);

const finalParts = nameParts.filter(Boolean);
console.log(`Final name parts: ${finalParts}`);

const firstname = finalParts[0];
console.log(`First name: ${firstname}`);

