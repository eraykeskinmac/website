export const TRTimeFormatter = new Intl.DateTimeFormat(undefined, {
	timeZone: 'Europe/Istanbul',
	hour: 'numeric',
	minute: 'numeric',
	hour12: false,
});

export const RelativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
	style: 'long',
});

export const discordId = '310839361757511688';
export const dob = new Date('2004-11-22');
export const today = new Date();

// Yaş hesaplaması.
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;

// Bu yıl doğum günü oldu mu kontrolü.
export const hasHadBirthdayThisYear = today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

// Sonraki doğum gününün yılı.
export const nextBirthdayYear = today.getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);

// Sonraki doğum gününe kaç gün kaldığı hesaplaması.
const millisecondsUntilBirthday = (new Date(nextBirthdayYear, dob.getMonth(), dob.getDate()).getTime() - today.getTime());
export const daysUntilBirthday = Math.ceil(millisecondsUntilBirthday / (1000 * 60 * 60 * 24)).toString();