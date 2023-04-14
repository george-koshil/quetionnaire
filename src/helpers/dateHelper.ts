export const getMonth = () => [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getYears = () =>
  Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);

export const getDays = () => [...Array(31)].map((_, index) => index + 1);

export interface DateOfBirth {
  month: string;
  day: string;
  year: string;
}

export const getAgeFromDateOfBirth = (dateOfBirth: DateOfBirth = {} as DateOfBirth): number => {
  const today: Date = new Date();
  const birthDate: Date = new Date(
    Number(dateOfBirth.year),
    getMonthNumber(dateOfBirth.month) - 1,
    Number(dateOfBirth.day)
  );
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const monthDiff: number = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const getMonthNumber = (monthName: string): number => {
  return getMonth().indexOf(monthName) + 1;
};

export const getZodiacName = (dateOfBirth: DateOfBirth = {} as DateOfBirth): string => {
  console.log(dateOfBirth)
  const day = Number(dateOfBirth.day);
  const monthName = dateOfBirth.month;

  const zodiacSigns = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn"
  ];

  const lastDayOfSigns = [
    20, // Capricorn
    19, // Aquarius
    20, // Pisces
    20, // Aries
    20, // Taurus
    20, // Gemini
    22, // Cancer
    22, // Leo
    22, // Virgo
    22, // Libra
    21, // Scorpio
    21, // Sagittarius
    20  // Capricorn
  ];


  const monthIndex = getMonth().findIndex((name) => name.toLowerCase() === monthName?.toLowerCase());

  if (monthIndex === -1) {
    throw new Error("Invalid month name");
  }

  const signIndex = monthIndex + (day > lastDayOfSigns[monthIndex] ? 1 : 0);
  return zodiacSigns[signIndex];
}
