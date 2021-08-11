import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
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
							<p className='cursor-pointer text-2xl animate-bounce'>📌</p>
						</Marker>
					</div>
				);
			})}
		</ReactMapGL>
	);
};

export default Map;
