const registrationDate = new Date('2025-08-15T10:30:00');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log(`User Registration Date: ${formattedDate}`);
