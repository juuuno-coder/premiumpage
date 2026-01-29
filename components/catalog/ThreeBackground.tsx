'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeBackgroundProps {
    className?: string
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(renderer.domElement)

        const sphereGeo = new THREE.IcosahedronGeometry(9, 2)
        const sphereMat = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            wireframe: true,
            transparent: true,
            opacity: 0.05
        })
        const mainSphere = new THREE.Mesh(sphereGeo, sphereMat)
        scene.add(mainSphere)

        const pGeo = new THREE.BufferGeometry()
        const pCount = 800
        const pArr = new Float32Array(pCount * 3)
        for (let i = 0; i < pCount * 3; i++) pArr[i] = (Math.random() - 0.5) * 100
        pGeo.setAttribute('position', new THREE.BufferAttribute(pArr, 3))

        const pMat = new THREE.PointsMaterial({
            size: 0.1,
            color: 0x00ffff,
            transparent: true,
            opacity: 0.3
        })
        const stars = new THREE.Points(pGeo, pMat)
        scene.add(stars)

        camera.position.z = 22

        let mouseX = 0
        let mouseY = 0

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('mousemove', handleMouseMove)

        const animate = () => {
            requestAnimationFrame(animate)

            mainSphere.rotation.y += 0.0003
            mainSphere.rotation.x += 0.0001
            stars.rotation.y -= 0.0001

            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.03
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.03
            camera.lookAt(scene.position)

            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            if (!container) return
            camera.aspect = container.clientWidth / container.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(container.clientWidth, container.clientHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
            container.removeChild(renderer.domElement)
            renderer.dispose()
        }
    }, [])

    return <div ref={containerRef} className={className} />
}
