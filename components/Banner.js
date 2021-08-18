import React from 'react';
import Image from 'next/image';

const Banner = () => {
	return (
		<div className='relative h-[250px] sm:h-[300px] md:h-[340px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]'>
			<Image src='https://links.papareact.com/0fm' layout='fill' objectFit='cover' />
			<div className='absolute top-1/2 w-full text-center'>
				<p className='text-sm sm:text-lg text-gray-600 font-semibold'>
					Not sure where to go? Perfect
				</p>
				<button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-8 hover:shadow-xl active:scale-90 transition duration-150'>
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
