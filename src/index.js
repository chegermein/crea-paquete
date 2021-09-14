const messages = [
    "Che",
    "July",
    "CATS",
    "Noland",
    "Liniv",
    "Vianey"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };