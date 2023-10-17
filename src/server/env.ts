import { envsafe, str, url } from 'envsafe';

export const env = envsafe({
	APPLE_TEAM_ID: str(),
	APPLE_KEY_ID: str(),
	APPLE_PRIV_KEY: str(),
	DISCORD_WEBHOOK: url({
		default: 'https://discord.com/api/webhooks/1163769227325493269/fVDTMxtkbrxtOmOjwsRihZV_mpJmChRw0AA2GcEpsACZxl1xDjosBfNP7enBZRDcd0xp'
	}),
	DEFAULT_LOCATION: str({
		default: 'Ankara, TR',
	}),
});