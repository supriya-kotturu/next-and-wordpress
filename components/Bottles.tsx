import { Key } from 'react';

const Bottles = async () => {
	const bottles = await fetch(`${process.env.WORDPRESS_API_URL}/bottles`).then(
		(res) => res.json(),
	);

	return (
		<div>
			{bottles?.map(
				(bottle: {
					content: any;
					acf: any;
					id: Key | null | undefined;
					title: {
						rendered?: string;
					};
				}) => (
					<div key={bottle.id} className='mb-16 mt-2'>
						<h1 className='flex items-end justify-start flex-wrap gap-4'>
							{bottle.title.rendered && (
								<span
									dangerouslySetInnerHTML={{ __html: bottle.title.rendered }}
									className='font-bold  text-blue-900  text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl 7xl:text-10xl 8xl:textxxl'
								></span>
							)}
							<span>{bottle.acf.capacity}</span>
						</h1>
						<div
							dangerouslySetInnerHTML={{ __html: bottle.content.rendered }}
							className='text-justify'
						/>
					</div>
				),
			)}
		</div>
	);
};

export default Bottles;
