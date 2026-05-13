import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './TechBackground.css';

function TechBackground() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Check for reduced motion preference (with fallback for test environments)
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    // Create renderer first — bail out before allocating other Three.js resources
    // if WebGL is unavailable, to avoid leaking a Scene reference.
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Cap pixel ratio at 2x to avoid rendering at 3x DPR on phones
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      currentMount.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (error) {
      // WebGL not available (test environment or unsupported browser)
      console.warn('WebGL not available for TechBackground');
      return () => {}; // Return a no-op cleanup; no Three.js resources were allocated
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Mutable particle state — rebuilt whenever the mobile/desktop threshold is crossed on resize
    let particles = [];
    let velocities = [];
    let particleGeometry = null;
    let particleMaterial = null;
    let particleSystem = null;

    const buildParticles = (count) => {
      // Dispose and remove previous particle system if it exists
      if (particleSystem) {
        scene.remove(particleSystem);
        particleGeometry.dispose();
        particleMaterial.dispose();
      }

      particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      particles = [];
      velocities = [];

      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 10;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        particles.push(new THREE.Vector3(x, y, z));
        velocities.push({
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.005
        });
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      particleMaterial = new THREE.PointsMaterial({
        color: 0x00ffff,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);
    };

    // Build initial particle system; count is based on current viewport width
    let isMobile = window.innerWidth < 768;
    buildParticles(isMobile ? 75 : 150);

    // Create connecting lines (optimized using LineSegments)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });

    const maxConnections = 1000; // Limit max lines for performance
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(maxConnections * 2 * 3); // 2 points per line, 3 coords per point
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // Track visibility state for performance
    let isVisible = !document.hidden;

    // Animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Skip animation if document is hidden (performance optimization)
      if (!isVisible) {
        return;
      }

      // If reduced motion is preferred, render once and stop
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
        return;
      }

      // Update particle positions (reads current particles/velocities after any rebuild)
      const count = particles.length;
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Boundary check and bounce
        if (Math.abs(positions[i * 3]) > 10) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i].z *= -1;

        particles[i].set(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2]
        );
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update connecting lines
      let lineIdx = 0;
      const maxDistance = 2.5;
      const linePosArray = lineGeometry.attributes.position.array;

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          if (lineIdx >= maxConnections) break;

          const distance = particles[i].distanceTo(particles[j]);
          if (distance < maxDistance) {
            linePosArray[lineIdx * 6] = particles[i].x;
            linePosArray[lineIdx * 6 + 1] = particles[i].y;
            linePosArray[lineIdx * 6 + 2] = particles[i].z;
            linePosArray[lineIdx * 6 + 3] = particles[j].x;
            linePosArray[lineIdx * 6 + 4] = particles[j].y;
            linePosArray[lineIdx * 6 + 5] = particles[j].z;
            lineIdx++;
          }
        }
        if (lineIdx >= maxConnections) break;
      }
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIdx * 2);

      // Rotate scene slightly for depth
      particleSystem.rotation.y += 0.0005;
      lineSegments.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize — also regenerates particles if mobile/desktop threshold is crossed
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        buildParticles(isMobile ? 75 : 150);
      }
    };

    // Handle visibility change to pause animation when tab is hidden
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion && !animationIdRef.current) {
        animate();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      // Guard removeChild to prevent NotFoundError in React Strict Mode
      if (renderer.domElement && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      if (particleGeometry) particleGeometry.dispose();
      if (particleMaterial) particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="tech-background" />;
}

export default TechBackground;

