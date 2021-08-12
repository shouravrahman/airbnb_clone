import React from 'react';
import Image from 'next/image';
import { HeartIcon, StarIcon } from '@heroicons/react/solid';
const InfoCard = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) => {
	return (
		<div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 easse-out first:border-t'>
			<div className='relative h-24 w-40 md:w-52 md:h-80 flex-shrink-0'>
				<Image
					src={img}
					objectFit='cover'
					layout='fill'
					className='rounded-2xl'
				/>
			</div>
			<div className='flex flex-col flex-grow pl-5'>
				<div className='flex justify-between'>
					<p>{location}</p>
					<HeartIcon className='h-7 cursor-pointer' />
				</div>
				<h4 className='text-xl'>{title}</h4>
				<div className='border-b w-10 pt-2'></div>
				<p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
				<div className='flex justify-between items-end pt-5'>
					<p className='flex items-center'>
						<StarIcon className='h-5 text-red-400' />
						{star}
					</p>
					<div>
						<p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
						<p className='font-extralight text-right'>{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
