"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

// Register custom Three.js shader geometry & material in R3F
extend({ MeshLineGeometry, MeshLineMaterial });

// Create procedural lanyard strap texture with woven pattern and "MERUGU SRIKANTH"
function createLanyardTexture() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Dark woven fabric background
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, 512, 128);

  // Subtle weave texture lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 512; x += 4) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 128);
    ctx.stroke();
  }

  // Woven White Text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("MERUGU SRIKANTH  ★  FULL STACK", 256, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Create procedural ID Badge front texture (2048x2880 Ultra HD) - Black Luxury Edition
function createBadgeTexture(onUpdate?: () => void) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 2880;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  const renderCard = (userImg?: HTMLImageElement) => {
    // 1. Sleek Deep Obsidian Black Card Surface
    ctx.fillStyle = "#0c0c0e";
    ctx.fillRect(0, 0, 2048, 2880);

    // 2. High-Tech Edge Framing & Metallic Borders
    ctx.strokeStyle = "#27272a";
    ctx.lineWidth = 28;
    ctx.strokeRect(40, 40, 1968, 2800);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 6;
    ctx.strokeRect(76, 76, 1896, 2728);

    // 3. Top Header Section: "● DEVELOPER ID" & "PASS #MS-HYD-2026"
    // Status Green Dot
    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.arc(160, 200, 28, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 76px monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("DEVELOPER ID", 220, 224);

    ctx.fillStyle = "#a1a1aa";
    ctx.font = "bold 64px monospace";
    ctx.textAlign = "right";
    ctx.fillText("PASS #MS-HYD-2026", 1880, 224);

    // Header Divider
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(120, 310);
    ctx.lineTo(1928, 310);
    ctx.stroke();

    // 4. Portrait Card Frame (Clean Circular Rounded Avatar)
    const avatarCenterX = 1024;
    const avatarCenterY = 880;
    const avatarRadius = 460;

    // Dark circular container background
    ctx.fillStyle = "#18181b";
    ctx.beginPath();
    ctx.arc(avatarCenterX, avatarCenterY, avatarRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarCenterX, avatarCenterY, avatarRadius, 0, Math.PI * 2);
    ctx.clip();

    if (userImg && userImg.complete && userImg.naturalWidth > 0) {
      const drawSize = avatarRadius * 2;
      const drawX = avatarCenterX - avatarRadius;
      const drawY = avatarCenterY - avatarRadius;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(userImg, drawX, drawY, drawSize, drawSize);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 150px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("MS", avatarCenterX, avatarCenterY);
    }
    ctx.restore();

    // Sleek Dual Circular Outer Ring Borders
    ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(avatarCenterX, avatarCenterY, avatarRadius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(avatarCenterX, avatarCenterY, avatarRadius + 14, 0, Math.PI * 2);
    ctx.stroke();

    // Badge Status Pill Tag (Positioned right below circular avatar)
    ctx.fillStyle = "rgba(0, 0, 0, 0.92)";
    ctx.beginPath();
    ctx.roundRect(684, 1370, 680, 76, 20);
    ctx.fill();
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#22c55e";
    ctx.font = "bold 40px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("● ENGINEERING ID • VERIFIED", 1024, 1408);

    // 5. Name & Title (Crisp Ultra-Bold Pure White)
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 124px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Merugu Srikanth", 1024, 1600);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 72px sans-serif";
    ctx.fillText("Full-Stack Developer", 1024, 1705);

    // 6. Meta Grid Table (Crisp White Values on Dark Background)
    const rowY = [1940, 2120, 2300];

    // Separator lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(160, 1820);
    ctx.lineTo(1888, 1820);
    ctx.moveTo(160, 2030);
    ctx.lineTo(1888, 2030);
    ctx.moveTo(160, 2210);
    ctx.lineTo(1888, 2210);
    ctx.moveTo(160, 2390);
    ctx.lineTo(1888, 2390);
    ctx.stroke();

    // Row 1: DEPT
    ctx.textAlign = "left";
    ctx.font = "bold 68px monospace";
    ctx.fillStyle = "#71717a";
    ctx.fillText("DEPT", 180, rowY[0]);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 76px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("Full Stack Eng.", 1860, rowY[0]);

    // Row 2: STATUS
    ctx.textAlign = "left";
    ctx.font = "bold 68px monospace";
    ctx.fillStyle = "#71717a";
    ctx.fillText("STATUS", 180, rowY[1]);
    ctx.fillStyle = "#22c55e";
    ctx.font = "bold 76px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("Active • 4+ Yrs", 1860, rowY[1]);

    // Row 3: VALID TILL
    ctx.textAlign = "left";
    ctx.font = "bold 68px monospace";
    ctx.fillStyle = "#71717a";
    ctx.fillText("VALID TILL", 180, rowY[2]);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 76px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("2026+", 1860, rowY[2]);

    // 7. Security Barcode & Hologram Seal (Crisp White)
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 8;
    for (let x = 160; x < 1200; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x, 2520);
      ctx.lineTo(x, 2680);
      ctx.stroke();
    }

    // Metallic Hologram Stamp
    ctx.fillStyle = "#18181b";
    ctx.beginPath();
    ctx.arc(1740, 2600, 100, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 44px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SEC ★ 26", 1740, 2600);

    texture.needsUpdate = true;
    onUpdate?.();
  };

  renderCard();

  const photoImg = new Image();
  photoImg.crossOrigin = "anonymous";
  photoImg.src = "/sreephoto.jpeg";
  photoImg.onload = () => {
    renderCard(photoImg);
  };

  return texture;
}

function Band({
  maxSpeed = 50,
  minSpeed = 10,
  onDragChange,
}: {
  maxSpeed?: number;
  minSpeed?: number;
  onDragChange?: (dragging: boolean) => void;
}) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);
  const cardMeshRef = useRef<THREE.Group>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse = useMemo(() => new THREE.Vector2(), []);

  const segmentProps = useMemo(
    () => ({
      type: "dynamic" as const,
      canSleep: true,
      colliders: false as const,
      angularDamping: 2.4,
      linearDamping: 2.4,
    }),
    []
  );

  const lanyardTexture = useMemo(() => createLanyardTexture(), []);
  const badgeTexture = useMemo(() => createBadgeTexture(), []);

  const { width, height, camera } = useThree((state) => ({
    width: state.size.width,
    height: state.size.height,
    camera: state.camera,
  }));

  // Dynamically scale camera distance so the ID badge is smaller and proportionate on mobile
  useEffect(() => {
    const targetZ = width < 480 ? 12.8 : width < 768 ? 10.8 : 8.5;
    if (Math.abs(camera.position.z - targetZ) > 0.05) {
      camera.position.z = targetZ;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
    }
  }, [width, camera]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const dragOffset = useRef<THREE.Vector3 | null>(null);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const targetWorldPos = useRef<THREE.Vector3>(new THREE.Vector3());

  // Dynamic Anchor tracking so fixed joint matches #lanyard-anchor-box in real time
  useFrame(() => {
    if (typeof document === "undefined") return;
    const anchorEl = document.getElementById("lanyard-anchor-box");
    if (!anchorEl || !fixed.current) return;

    const rect = anchorEl.getBoundingClientRect();
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;

    // Center of anchor box in screen pixels
    const anchorCenterX = rect.left + rect.width / 2;
    const anchorTopY = rect.top + 15; // Top clasp point right at top of container

    // Convert pixel offset to 3D world units at camera distance (Z = 0)
    const fovRad = ((camera as THREE.PerspectiveCamera).fov * Math.PI) / 180;
    const worldHeight = 2 * camera.position.z * Math.tan(fovRad / 2);
    const pixelToWorld = worldHeight / window.innerHeight;

    const target3DX = (anchorCenterX - screenCenterX) * pixelToWorld;
    const target3DY = -(anchorTopY - screenCenterY) * pixelToWorld;

    const curPos = fixed.current.translation();
    if (Math.abs(curPos.x - target3DX) > 0.001 || Math.abs(curPos.y - target3DY) > 0.001) {
      fixed.current.setTranslation({ x: target3DX, y: target3DY, z: 0 });
    }
  });

  // Rope Constraints - compact & elegant lanyard hang
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.18]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.18]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.18]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.15, 0]]);

  // Convert screen clientX, clientY to 3D plane position
  const screenToWorld = useCallback(
    (clientX: number, clientY: number, targetZ: number = 0) => {
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;

      const p = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);
      const d = p.clone().sub(camera.position).normalize();
      const dist = (targetZ - camera.position.z) / d.z;
      return camera.position.clone().add(d.multiplyScalar(dist));
    },
    [camera, mouse]
  );

  // Global Pointer Event Listeners for Full Viewport Dragging without clipping
  useEffect(() => {
    const handleWindowPointerDown = (e: PointerEvent) => {
      if (!cardMeshRef.current || !card.current) return;

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(cardMeshRef.current, true);
      if (intersects.length > 0) {
        const hitPoint = intersects[0].point;
        const cardTranslation = card.current.translation();
        const cardPos = new THREE.Vector3(cardTranslation.x, cardTranslation.y, cardTranslation.z);

        dragOffset.current = hitPoint.clone().sub(cardPos);
        setIsDraggingState(true);
        onDragChange?.(true);

        const currentWorld = screenToWorld(e.clientX, e.clientY, cardPos.z);
        targetWorldPos.current.copy(currentWorld.sub(dragOffset.current));

        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
      }
    };

    const handleWindowPointerMove = (e: PointerEvent) => {
      if (dragOffset.current && card.current) {
        const cardTranslation = card.current.translation();
        const currentWorld = screenToWorld(e.clientX, e.clientY, cardTranslation.z || 0);
        targetWorldPos.current.copy(currentWorld.sub(dragOffset.current));
      } else if (cardMeshRef.current) {
        // Hover state check
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(cardMeshRef.current, true);
        if (intersects.length > 0) {
          document.body.style.cursor = "grab";
        } else if (document.body.style.cursor === "grab") {
          document.body.style.cursor = "auto";
        }
      }
    };

    const handleWindowPointerUp = () => {
      if (dragOffset.current) {
        dragOffset.current = null;
        setIsDraggingState(false);
        onDragChange?.(false);
        document.body.style.userSelect = "";
        document.body.style.cursor = "auto";
      }
    };

    window.addEventListener("pointerdown", handleWindowPointerDown, { passive: false });
    window.addEventListener("pointermove", handleWindowPointerMove, { passive: true });
    window.addEventListener("pointerup", handleWindowPointerUp);
    window.addEventListener("pointercancel", handleWindowPointerUp);

    return () => {
      window.removeEventListener("pointerdown", handleWindowPointerDown);
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerUp);
      window.removeEventListener("pointercancel", handleWindowPointerUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "auto";
    };
  }, [camera, raycaster, mouse, onDragChange, screenToWorld]);

  useFrame((_, delta) => {
    if (dragOffset.current && card.current) {
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: targetWorldPos.current.x,
        y: targetWorldPos.current.y,
        z: targetWorldPos.current.z,
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped || j2.current.translation());
      curve.points[2].copy(j1.current.lerped || j1.current.translation());
      curve.points[3].copy(fixed.current.translation());

      if (band.current.geometry) {
        band.current.geometry.setPoints(curve.getPoints(32));
      }

      // Smoothly tilt card towards camera view
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.28, z: ang.z });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[0, 1.5, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.15, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.07]} />
        </RigidBody>
        <RigidBody position={[0.3, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.07]} />
        </RigidBody>
        <RigidBody position={[0.45, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.07]} />
        </RigidBody>

        <RigidBody
          position={[0.6, 0, 0]}
          ref={card}
          {...segmentProps}
          type={isDraggingState ? "kinematicPosition" : "dynamic"}
        >
          {/* Card Physics Collider */}
          <CuboidCollider args={[0.85, 1.19, 0.02]} />
          <group ref={cardMeshRef} position={[0, -0.1, 0]}>
            {/* Metallic Clip Clamp */}
            <mesh position={[0, 1.25, 0]}>
              <boxGeometry args={[0.22, 0.15, 0.06]} />
              <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, 1.37, 0]}>
              <torusGeometry args={[0.075, 0.016, 16, 32]} />
              <meshStandardMaterial color="#777777" metalness={0.95} roughness={0.15} />
            </mesh>

            {/* Main ID Card Body */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.7, 2.38, 0.035]} />
              {badgeTexture ? (
                <meshPhysicalMaterial
                  map={badgeTexture}
                  clearcoat={1.0}
                  clearcoatRoughness={0.1}
                  roughness={0.18}
                  metalness={0.08}
                />
              ) : (
                <meshStandardMaterial color="#ffffff" />
              )}
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* Physics Hanging Mesh Ribbon Band */}
      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial
          color="#1a1a1a"
          depthTest={false}
          resolution={[width, height]}
          useMap={Boolean(lanyardTexture)}
          map={lanyardTexture || undefined}
          repeat={[-2.5, 1]}
          lineWidth={0.16}
        />
      </mesh>
    </>
  );
}

export function Lanyard3D({ onDragChange }: { onDragChange?: (dragging: boolean) => void }) {
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragChange = useCallback(
    (dragging: boolean) => {
      setIsDragging(dragging);
      onDragChange?.(dragging);
    },
    [onDragChange]
  );

  useEffect(() => {
    setMounted(true);

    const anchorEl = document.getElementById("lanyard-anchor-box") || document.getElementById("about");
    if (!anchorEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0.05 }
    );

    observer.observe(anchorEl);
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[520px] flex items-center justify-center bg-white/40 rounded-3xl border border-black/5 animate-pulse">
        <span className="font-mono text-xs text-[#77756f]">Loading 3D ID Badge...</span>
      </div>
    );
  }

  // Only show the 3D canvas when the About section is in view or actively being dragged!
  const shouldShow = isInView || isDragging;

  return createPortal(
    <div
      className={`fixed inset-0 pointer-events-none z-40 overflow-hidden select-none transition-opacity duration-300 ${
        shouldShow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      style={{
        width: "100vw",
        height: "100vh",
        display: shouldShow ? "block" : "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 28 }}
        gl={{ alpha: true, antialias: true }}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ambientLight intensity={1.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.6} />
        <directionalLight position={[-5, -5, 5]} intensity={0.6} />
        <Physics interpolate gravity={[0, -32, 0]} timeStep={1 / 60}>
          <Band onDragChange={handleDragChange} />
        </Physics>
      </Canvas>
    </div>,
    document.body
  );
}
