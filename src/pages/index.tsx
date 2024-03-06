import clsx from 'clsx';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import {
	SiAmazonaws,
	SiBabel,
	SiDiscord,
	SiDocker,
	SiGit,
	SiGithub,
	SiGo,
	SiJavascript,
	SiLinkedin,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiSpotify,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
	SiWebstorm,
	SiX,
	SiYarn,
} from 'react-icons/si';
import { CardHoverEffect, hoverClassName } from '../components/hover-card';
import { Time } from '../components/time';
import matrix from '../images/matrix.gif';
import { age } from '../utils/constants';

// export interface Props {
// 	lanyard: Data;
// }

// export const getStaticProps: GetStaticProps<Props> = async () => {
// 	const lanyard = await getLanyard(discordId);

// 	return {
// 		props: {
// 			lanyard,
// 		},
// 	};
// };


export default function Home() {

	//   const {data: lanyard} = useUpdatingLanyard(discordId, props.lanyard);

	// 	const status = lanyard.discord_status ?? 'offline';



	return (
		<main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-20 lg:pb-40 pt-16">
			<div className="col-span-6 lg:col-span-4 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-pink-200 px-8 py-8 dark:border-pink-500 dark:bg-pink-500/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-4">

				<div className="flex">
					<div className="flex items-center justify-center space-x-1.5 rounded-full bg-pink-300 px-2 py-0.5 font-title dark:bg-pink-500/25">coding</div>
				</div>

				<div className="space-y-4">
					<div>
						<h1 className="text-xl text-pink-900 dark:text-pink-300 dark:text-glow-pink-500/50">Eray Keskin</h1>

						<p className="text-pink-600 dark:text-pink-300/80 dark:text-glow-pink-500/50">
							{age} y/o full stack engineer
						</p>
					</div>
				</div>
			</div>

			<CardHoverEffect className="col-span-6 lg:col-span-2 h-40 lg:h-full">
				<Link
					href="https://twitter.com/eraykeskinmac"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-full items-center justify-center rounded-2xl bg-neutral-200 text-4xl text-black dark:bg-neutral-800 dark:text-white',
						hoverClassName,
					)}
				>
					<span className="sr-only">Twitter</span>
					<span className=" transform-gpu transition duration-500 group-hover:scale-[1.3]">
						<SiX />
					</span>
				</Link>
			</CardHoverEffect>
			<CardHoverEffect
				className="col-span-3 md:col-span-2 h-52"
			>
				<Link
				href="https://www.linkedin.com/in/eraykeskinmac/"
				target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-52 items-center justify-center rounded-2xl text-4xl  bg-[#0077b5] text-white',
						hoverClassName,
					)}
				>
					<span className='sr-only'>Linkedin</span>
					<span className="transform-gpu transition duration-500 group-hover:scale-[1.3]">
						<SiLinkedin />
					</span>
				</Link>
			</CardHoverEffect>
			<Time />

			<CardHoverEffect className="col-span-6 h-full md:col-span-3">
				<Link
					href="https://github.com/eraykeskinmac"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
						hoverClassName,
					)}
				>
					<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						<img
							src={matrix.src}
							alt="The Matrix scrolling characters effect"
							className="absolute inset-0 h-full w-full object-cover object-center invert dark:brightness-[0.7] dark:invert-0"
						/>

						<span
							aria-hidden
							className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
						/>
					</span>

					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<SiGithub className="text-3xl" />
							<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
						<span className="block font-semibold">GitHub</span>

						<span className="block text-sm">My open source work &amp; contributions.</span>
					</span>
				</Link>
			</CardHoverEffect>


			<div className="col-span-6 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-6 text-fuchsia-100 md:col-span-2">
				<div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
					<SiTypescript size={24} />
					<SiDocker size={24} />
					<SiNextdotjs size={24} />
					<SiRedis size={24} />
					<SiPostgresql size={24} />
					<SiReact size={24} />
					<SiTailwindcss size={24} />
					<SiNodedotjs size={24} />
					<SiGo size={24} />
					<SiJavascript size={24} />
					<SiAmazonaws size={24} />
					<SiWebstorm size={24} />
					<SiWebpack size={24} />
					<SiBabel size={24} />
					<SiYarn size={24} />
					<SiGit size={24} />
					<SiSpotify size={24} />
					<SiMongodb size={24} />
					<SiVisualstudiocode size={24} />
					<SiDiscord size={24} />
				</div>
			</div>

			<div className="col-span-6 space-y-2 rounded-2xl bg-yellow-200 p-6 dark:bg-indigo-800 md:col-span-4">
				<h2 className="font-semibold">
					Hello world <span className="inline dark:hidden">🌻</span>
					<span className="hidden dark:inline">⭐</span>
				</h2>

				<p>
					My name is Eray, I'm a software engineer from the Turkey. I've been programming for as long as I
					can remember, and I'm currently working on {' '}
					<Link className="underline" href="https://oplog.io">
						OPLOG
					</Link>
					.
				</p>

				<p>
					Beyond programming, I've recently become interested in music production. "I'm also an F1 fan."
				</p>
			</div>

		</main>
	)
}
