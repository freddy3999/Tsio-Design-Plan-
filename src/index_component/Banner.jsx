import { useState, useEffect, useCallback } from 'react'
import image1 from '../assets/banner_one.jpg'
import image2 from '../assets/banner_two.png'

// 左欄圖片陣列 — 未來擴充只需在此新增圖片
const leftImages = [image1, image2]
// 右欄圖片陣列 — 未來擴充只需在此新增圖片
const rightImages = [image2, image1]

const INTERVAL = 4000       // 切換間隔 (ms)
const DURATION = 700        // 動畫時長 (ms)

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const nextIndex = useCallback(
        (arr) => (currentIndex + 1) % arr.length,
        [currentIndex]
    )

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true)

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % Math.max(leftImages.length, rightImages.length))
                setIsTransitioning(false)
            }, DURATION)
        }, INTERVAL)

        return () => clearInterval(timer)
    }, [])

    /* ---- 共用 style ---- */
    const panelBase = {
        position: 'relative',
        overflow: 'hidden',
    }

    const imgLayer = {
        position: 'absolute',
        inset: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    /* ---- 左欄（新圖從底部往上揭露） ---- */
    const leftCurrent = {
        ...imgLayer,
        backgroundImage: `url(${leftImages[currentIndex % leftImages.length]})`,
    }

    const leftNext = {
        ...imgLayer,
        backgroundImage: `url(${leftImages[nextIndex(leftImages)]})`,
        clipPath: isTransitioning ? 'inset(0%)' : 'inset(100% 0 0 0)',
        transition: isTransitioning ? `clip-path ${DURATION}ms ease-in-out` : 'none',
        zIndex: 1,
    }

    /* ---- 右欄（新圖從頂部往下揭露） ---- */
    const rightCurrent = {
        ...imgLayer,
        backgroundImage: `url(${rightImages[currentIndex % rightImages.length]})`,
    }

    const rightNext = {
        ...imgLayer,
        backgroundImage: `url(${rightImages[nextIndex(rightImages)]})`,
        clipPath: isTransitioning ? 'inset(0%)' : 'inset(0 0 100% 0)',
        transition: isTransitioning ? `clip-path ${DURATION}ms ease-in-out` : 'none',
        zIndex: 1,
    }

    return (
        <section className="h-screen w-full lg:flex flex-row">
            {/* 左欄 */}
            <div
                className="h-1/2 w-full lg:h-full basis-1/2"
                style={panelBase}
            >
                <div style={leftCurrent} />
                <div style={leftNext} />
            </div>

            {/* 右欄 */}
            <div
                className="h-1/2 w-full lg:h-full basis-1/2"
                style={panelBase}
            >
                <div style={rightCurrent} />
                <div style={rightNext} />
            </div>
        </section>
    )
}