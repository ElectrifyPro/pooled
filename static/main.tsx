import * as React from 'react';
import {useState} from 'react';
import {createRoot} from 'react-dom/client';

import arrow from './assets/arrow.svg';

function App() {
	return <div>
		<div id="header">
			<div id="header-text">
				<h2>Hi, my name is</h2>
				<h1>POOLED</h1>
			</div>
			<div id="header-text-delay">
				<p>I make interactive web experiences.</p>
			</div>
		</div>
		<div id="scroll-down">
			<img id="scroll-down-icon" src={arrow} alt="Scroll down"/>
		</div>
	</div>;
}

const root = createRoot(document.getElementById('ui')!);
root.render(<App/>);
