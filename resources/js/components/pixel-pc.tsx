import React from 'react';

type PixelPcProps = {
	className?: string;
	size?: 'sm' | 'md' | 'lg';
};

const sizeToScale: Record<NonNullable<PixelPcProps['size']>, number> = {
	sm: 0.8,
	md: 1,
	lg: 1.3,
};

export default function PixelPc({ className = '', size = 'md' }: PixelPcProps) {
	const scale = sizeToScale[size] ?? 1;
	return (
		<div
			className={`pixel-pc ${className}`}
			style={{
				transform: `scale(${scale})`,
				transformOrigin: 'top center',
			}}
		>
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


