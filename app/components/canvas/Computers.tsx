"use client";
import CanvasLoader from "@/app/components/Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
const isWebGLSupported = () => {
	if (!window.WebGLRenderingContext) return false;
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	return !!context;
  };
const Computers = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF("/old_computers/scene.gltf");
	return (
		<mesh>
			<mesh>
				<hemisphereLight intensity={1} groundColor="white" />
				<pointLight intensity={5} />
				<spotLight
					position={[-20, 50, 10]}
					angle={1}
					penumbra={1}
					intensity={1}
					castShadow
					shadow-mapSize={1024}
				/>
				<primitive
					object={computer.scene}
					scale={isMobile ? 1 : 1}
					position={isMobile ? [0, -3, -2.2] : [3, -4.5, 1]}
					rotation={[0, 1, 0]}
				/>
			</mesh>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	const [webGLSupported, setWebGLSupported] = useState(false);

	useEffect(() => {
	  setWebGLSupported(isWebGLSupported());
	}, []);
  
	if (!webGLSupported) {
	  return null; // Or an alternative component like <div>WebGL not supported</div>
	}

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
