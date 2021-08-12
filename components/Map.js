import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
	const [selectedLocation, setSelectedLocation] = useState({});
	//transform the object
	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));
	const center = getCenter(coordinates);
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/shourav006/cks5wkps84hhf17p5w8kjmuu7'
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
		>
			{searchResults?.map((results) => {
				return (
					<div>
						<Marker
							longitude={results.long}
							latitude={results.lat}
							offsetLeft={-20}
							offsetTop={-10}
						>
							<p
								onClick={() => setSelectedLocation(results)}
								className='cursor-pointer text-2xl animate-bounce'
								aria-label='push-pin'
							>
								📌
							</p>
						</Marker>
						{selectedLocation.long === results.long ? (
							<Popup
								onClose={() => setSelectedLocation({})}
								closeOnClick={true}
								latitude={results.lat}
								longitude={results.long}
							>
								{results.title}
							</Popup>
						) : (
							false
						)}
					</div>
				);
			})}
		</ReactMapGL>
	);
};

export default Map;
