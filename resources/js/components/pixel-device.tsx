import React, { useEffect, useMemo, useState } from 'react';

type DeviceKind = 'pc' | 'laptop' | 'phone';

type PixelDeviceProps = {
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	autoCycleMs?: number;
	devices?: DeviceKind[];
};

const sizeToScale: Record<NonNullable<PixelDeviceProps['size']>, number> = {
	sm: 0.8,
	md: 1,
	lg: 1.3,
};

export default function PixelDevice({
	className = '',
	size = 'md',
	autoCycleMs = 5000,
	devices = ['pc', 'laptop', 'phone'],
}: PixelDeviceProps) {
	const scale = sizeToScale[size] ?? 1;
	const deviceList = useMemo(() => (devices.length ? devices : ['pc']), [devices]);
	const [index, setIndex] = useState(0);
	const current: DeviceKind = deviceList[index % deviceList.length] as DeviceKind;

	useEffect(() => {
		if (deviceList.length <= 1) return;
		const id = setInterval(() => setIndex((i) => (i + 1) % deviceList.length), autoCycleMs);
		return () => clearInterval(id);
	}, [deviceList, autoCycleMs]);

	return (
		<div className={`pixel-frame ${className}`}>
			<div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
				{current === 'pc' && <Pc />}
				{current === 'laptop' && <Laptop />}
				{current === 'phone' && <Phone />}
			</div>
		</div>
	);
}

function Pc() {
	return (
		<div className="pixel-pc">
			<div className="pc-body">
				<div className="pc-bezel">
					<div className="pc-screen">
						<div className="pc-scanlines" />
						<div className="pc-error">ERROR</div>
					</div>
				</div>
				<div className="pc-stand" />
				<div className="pc-base" />
			</div>
		</div>
	);
}

function Laptop() {
	return (
		<div className="pixel-laptop">
			<div className="lap-lid">
				<div className="lap-screen">
					<div className="lap-scanlines" />
					<div className="lap-error">ERROR</div>
				</div>
			</div>
			<div className="lap-base">
				<div className="lap-track" />
				<div className="lap-keys" />
			</div>
		</div>
	);
}

function Phone() {
	return (
		<div className="pixel-phone">
			<div className="phone-body">
				<div className="phone-notch" />
				<div className="phone-screen">
					<div className="phone-scanlines" />
					<div className="phone-error">ERROR</div>
				</div>
				<div className="phone-btn" />
			</div>
		</div>
	);
}


