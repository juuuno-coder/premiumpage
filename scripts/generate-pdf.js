/**
 * 전자카탈로그 PDF 생성 스크립트
 *
 * 사용법:
 *   node scripts/generate-pdf.js hstech
 *   node scripts/generate-pdf.js hangseong
 *   node scripts/generate-pdf.js all
 */

const { chromium } = require('playwright')
const { PDFDocument } = require('pdf-lib')
const fs = require('fs')
const path = require('path')

// ──────────────────────────────────────
// 카탈로그별 페이지 정의
// ──────────────────────────────────────

const HS_TECH_BASE = 'https://hstech.premiumpage.kr/templates/hs-tech'
const HS_TECH_PAGES = [
    { tab: 'cover',                       label: '01 · HOME' },
    { tab: 'about',                       label: '02 · ABOUT US' },
    { tab: 'business',                    label: '03 · BUSINESS' },
    { tab: 'products',                    label: '04 · BRANDS' },
    { tab: 'vaisala',                     label: '05 · VAISALA' },
    { tab: 'vaisala_applications',        label: '06 · VAISALA APPLICATIONS' },
    { tab: 'humidity',                    label: '07 · HUMIDITY' },
    { tab: 'dewpoint',                    label: '08 · DEWPOINT' },
    { tab: 'co2',                         label: '09 · CO₂' },
    { tab: 'oil',                         label: '10 · MOISTURE IN OIL' },
    { tab: 'barometer',                   label: '11 · BAROMETER' },
    { tab: 'weather',                     label: '12 · WEATHER' },
    { tab: 'h2o2',                        label: '13 · H₂O₂' },
    { tab: 'cms',                         label: '14 · CMS' },
    { tab: 'setra',                       label: '15 · SETRA' },
    { tab: 'setra_applications_sensor',   label: '16 · SETRA APP SENSOR' },
    { tab: 'setra_applications_solution', label: '17 · SETRA APP SOLUTION' },
    { tab: 'setra_visual',                label: '18 · DP VISUAL' },
    { tab: 'setra_sensor',                label: '19 · DP SENSOR' },
    { tab: 'setra_ind',                   label: '20 · IND PRESSURE' },
    { tab: 'jumo',                        label: '21 · JUMO' },
    { tab: 'jumo_applications',           label: '22 · JUMO APPLICATIONS' },
    { tab: 'jumo_temp',                   label: '23 · TEMPERATURE' },
    { tab: 'jumo_liquid',                 label: '24 · LIQUID ANALYSIS' },
    { tab: 'jumo_control',                label: '25 · CTRL & RECORDING' },
    { tab: 'contact',                     label: '26 · CONTACT' },
]

const HANGSEONG_BASE = 'https://hangseong.premiumpage.kr/templates/hangseong'
const HANGSEONG_PAGES = [
    { url: '?tab=cover',                              label: '01 · HOME' },
    { url: '?category=about&tab=greeting',            label: '02 · CEO Message' },
    { url: '?category=about&tab=history',             label: '03 · History' },
    { url: '?category=about&tab=summary',             label: '04 · Summary' },
    { url: '?category=about&tab=organization',        label: '05 · Organization' },
    { url: '?category=about&tab=vision',              label: '06 · Vision' },
    { url: '?category=about&tab=location',            label: '07 · Directions' },
    { url: '?tab=products',                           label: '08 · Products Overview' },
    { url: '?category=products&tab=hvac',             label: '09 · HVAC Blower Motors' },
    { url: '?category=products&tab=all_in_one',       label: '10 · All-in-one Motors' },
    { url: '?category=products&tab=other_press',      label: '11 · Other Press Products' },
    { url: '?category=qm&tab=quality_mgmt',           label: '12 · Quality Management' },
    { url: '?category=equipment&tab=equipment_status',label: '13 · Equipment Status' },
    { url: '?category=reliability&tab=process_chart', label: '14 · Process Chart' },
    { url: '?category=reliability&tab=certification', label: '15 · Certification' },
    { url: '?category=support&tab=contact',           label: '16 · Contact Us' },
]

// ──────────────────────────────────────
// 핵심 함수
// ──────────────────────────────────────

async function captureScreenshot(page, url, label) {
    console.log(`  📸 ${label}`)
    try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
        // 애니메이션 대기
        await page.waitForTimeout(1500)
        // 이미지 로드 대기
        await page.evaluate(() => {
            return Promise.all(
                Array.from(document.images)
                    .filter(img => !img.complete)
                    .map(img => new Promise(resolve => {
                        img.onload = img.onerror = resolve
                    }))
            )
        })
        await page.waitForTimeout(500)
        return await page.screenshot({ type: 'png' })
    } catch (err) {
        console.warn(`  ⚠️  실패: ${label} — ${err.message}`)
        return null
    }
}

async function screenshotsToPDF(screenshots, outputPath) {
    const pdfDoc = await PDFDocument.create()
    pdfDoc.setTitle(path.basename(outputPath, '.pdf'))
    pdfDoc.setCreator('PremiumPage Catalog Generator')

    let added = 0
    for (const { data, label } of screenshots) {
        if (!data) continue
        try {
            const pngImage = await pdfDoc.embedPng(data)
            const { width, height } = pngImage.size()
            const pdfPage = pdfDoc.addPage([width, height])
            pdfPage.drawImage(pngImage, { x: 0, y: 0, width, height })
            added++
        } catch (err) {
            console.warn(`  ⚠️  PDF 추가 실패: ${label}`)
        }
    }

    const pdfBytes = await pdfDoc.save()
    fs.writeFileSync(outputPath, pdfBytes)
    return added
}

async function generateHSTechPDF() {
    const outDir = path.join(__dirname, '..', 'public', 'report')
    fs.mkdirSync(outDir, { recursive: true })
    const outputPath = path.join(outDir, 'HS-TECH_Catalog.pdf')

    console.log('\n🚀 HS-TECH 카탈로그 PDF 생성 시작')
    console.log(`   총 ${HS_TECH_PAGES.length}페이지 캡처 예정\n`)

    const browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewportSize({ width: 1440, height: 900 })

    // 다크모드 비활성화 (라이트 모드로 캡처)
    await page.emulateMedia({ colorScheme: 'light' })

    const screenshots = []
    for (const { tab, label } of HS_TECH_PAGES) {
        const url = `${HS_TECH_BASE}?tab=${tab}`
        const data = await captureScreenshot(page, url, label)
        screenshots.push({ data, label })
    }

    await browser.close()

    console.log('\n📄 PDF 생성 중...')
    const pageCount = await screenshotsToPDF(screenshots, outputPath)

    const sizeKB = Math.round(fs.statSync(outputPath).size / 1024)
    console.log(`✅ 완료: ${outputPath}`)
    console.log(`   ${pageCount}페이지 / ${sizeKB}KB\n`)
    return outputPath
}

async function generateHangseongPDF() {
    const outDir = path.join(__dirname, '..', 'public', 'report')
    fs.mkdirSync(outDir, { recursive: true })
    const outputPath = path.join(outDir, 'Hangseong_Catalog.pdf')

    console.log('\n🚀 항성산업사 카탈로그 PDF 생성 시작')
    console.log(`   총 ${HANGSEONG_PAGES.length}페이지 캡처 예정\n`)

    const browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.emulateMedia({ colorScheme: 'dark' })

    const screenshots = []
    for (const { url, label } of HANGSEONG_PAGES) {
        const fullUrl = `${HANGSEONG_BASE}${url}`
        const data = await captureScreenshot(page, fullUrl, label)
        screenshots.push({ data, label })
    }

    await browser.close()

    console.log('\n📄 PDF 생성 중...')
    const pageCount = await screenshotsToPDF(screenshots, outputPath)

    const sizeKB = Math.round(fs.statSync(outputPath).size / 1024)
    console.log(`✅ 완료: ${outputPath}`)
    console.log(`   ${pageCount}페이지 / ${sizeKB}KB\n`)
    return outputPath
}

// ──────────────────────────────────────
// 실행
// ──────────────────────────────────────

async function main() {
    const target = process.argv[2] || 'all'

    if (!['hstech', 'hangseong', 'all'].includes(target)) {
        console.error('사용법: node scripts/generate-pdf.js [hstech|hangseong|all]')
        process.exit(1)
    }

    const start = Date.now()

    if (target === 'hstech' || target === 'all') {
        await generateHSTechPDF()
    }
    if (target === 'hangseong' || target === 'all') {
        await generateHangseongPDF()
    }

    const elapsed = Math.round((Date.now() - start) / 1000)
    console.log(`\n⏱️  전체 소요 시간: ${elapsed}초`)
    console.log('📂 저장 위치: public/report/\n')
}

main().catch(err => {
    console.error('❌ 오류:', err)
    process.exit(1)
})
