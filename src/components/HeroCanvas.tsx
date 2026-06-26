import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function CosmicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor1: { value: new THREE.Color('#7c5cff') },
          uColor2: { value: new THREE.Color('#22d3ee') },
          uColor3: { value: new THREE.Color('#fb7185') },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float uTime;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            vec3 pos = position;
            pos += normal * sin(pos.y * 3.0 + uTime * 0.4) * 0.05;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          void main() {
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
            vec3 color = mix(uColor1, uColor2, sin(vPosition.y * 2.0 + uTime * 0.3) * 0.5 + 0.5);
            color = mix(color, uColor3, sin(vPosition.x * 2.0 + uTime * 0.2) * 0.5 + 0.5);
            float alpha = fresnel * 0.35 + 0.02;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (material.uniforms.uTime) {
      material.uniforms.uTime.value = clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} material={material} scale={2.5}>
      <icosahedronGeometry args={[1, 12]} />
    </mesh>
  );
}

function StarField() {
  return <Stars radius={100} depth={80} count={3000} factor={4} saturation={0.2} fade speed={0.5} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <StarField />
      <CosmicSphere />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
