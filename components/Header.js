import React, { useState } from 'react';
import Image from 'next/image';
import {
	GlobeAltIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = ({ placeholder }) => {
	const [searchInput, setSearchInput] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [noOfGuests, setNoOfGuests] = useState(1);
	const router = useRouter();

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};
	const handleSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noOfGuests,
			},
		});
	};
	const selectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};
	const resetInput = () => {
		setSearchInput('');
	};
	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
			{/* left */}
			<div
				onClick={() => router.push('/')}
				className='relative flex items-center h-10 cursor-pointer my-auto'
			>
				<Image
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
				/>
			</div>

			{/* middle */}
			<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
				<input
					type='text'
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 '
					placeholder={placeholder || 'start your search'}
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>

			{/* right */}

			<div className='flex items-center space-x-4 justify-end text-gray-500'>
				<p className='hidden cursor-pointer  md:inline'>become a host</p>
				<GlobeAltIcon className='h-6 cursor-pointer' />
				<div className='flex items-center space-x-2 border-2 padding-2 rounded-full'>
					<MenuIcon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>
			{searchInput && (
				<div className='flex flex-col col-span-3 mx-auto mt-2'>
					{/* <DateRangePicker
						className='sm:hidden inline'
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/> */}
					<DateRange
						className=' sm:inline md:hidden lg:hidden xl:hidden 2xl:hidden'
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>
					<div className='flex items-center border-b mb-4'>
						<h2 className='text-2xl font-semibold flex-grow'>
							Number of guests
						</h2>
						<UsersIcon className='h-6 pr-3' />
						<input
							type='number'
							onChange={(e) => setNoOfGuests(e.target.value)}
							min={1}
							className='w-12 pl-2 bg-gray-200 text-lg outline-none text-red-400'
						/>
					</div>
					<div className='flex'>
						<button
							className='flex-grow text-gray-500 shadow-md rounded-md py-2'
							onClick={resetInput}
						>
							Cancel
						</button>
						<button
							onClick={handleSearch}
							className='flex-grow text-red-500 shadow-md rounded-md py-2'
						>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
