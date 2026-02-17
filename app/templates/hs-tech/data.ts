
export interface SubMenuItem {
    id: string;
    label: string;
    href: string;
    subs?: SubMenuItem[];
}

export interface MenuItem {
    id: string;
    label: string;
    href: string;
    subs?: SubMenuItem[];
}

export interface BrandItem {
    brand: string;
    href: string;
    items: MenuItem[];
}

export const ABOUT_IMG = '' // Updated
export const ABOUT_IMG_2 = '' // Updated

// Brand Structure Definition for Top-Level Navigation
export const BRANDS = {
    vaisala: {
        label: 'VAISALA',
        desc: 'World leader in environmental and industrial measurement.',
        categories: ['humidity', 'dewpoint', 'co2', 'oil', 'barometer', 'weather', 'h2o2', 'cms'],
        logo: '/templates/hs-tech/images/brands/vaisala.svg'
    },
    setra: {
        label: 'SETRA',
        desc: 'Premium pressure transducers and current switches.',
        categories: ['setra'],
        logo: '/templates/hs-tech/images/brands/setra.svg'
    },
    jumo: {
        label: 'JUMO',
        desc: 'Innovative sensors and automation solutions.',
        categories: ['jumo'],
        logo: '/templates/hs-tech/images/brands/jumo.svg'
    },
    knick: {
        label: 'KNICK',
        desc: 'High-quality interface and process analysis.',
        categories: ['knick'],
        logo: '/templates/hs-tech/images/brands/knick.svg'
    }
}

// Category Information - Updated with existing images
export const CATEGORY_INFO: Record<string, any> = {
    humidity: { title: "Humidity", desc: "Best-in-class humidity instruments.", images: ['/templates/hs-tech/images/products/hmt330_v1.jpg', '/templates/hs-tech/images/products/hmp1_9_v1.png'] },
    dewpoint: { title: "Dewpoint", desc: "Reliable dewpoint measurement.", images: ['/templates/hs-tech/images/products/38af1f4961a7a.png', '/templates/hs-tech/images/products/50e31ebdea359.png'] },
    co2: { title: "Carbon Dioxide", desc: "Accurate CO2 monitoring.", images: ['/templates/hs-tech/images/products/6251932a0e954.png', '/templates/hs-tech/images/products/eb130aca3df08.png'] },
    oil: { title: "Moisture in Oil", desc: "Transformer oil monitoring.", images: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg', '/templates/hs-tech/images/products/5980bfb1851a8.png'] },
    barometer: { title: "Barometric Pressure", desc: "Digital barometers.", images: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg'] },
    weather: { title: "Weather", desc: "Meteorological sensors.", images: ['/templates/hs-tech/images/products/2c2344f8b46d5.jpg', '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'] },
    h2o2: { title: "H2O2", desc: "Bio-decontamination monitoring.", images: ['/templates/hs-tech/images/products/47e994f808c6a.png'] },

    // Brands
    setra: { title: "SETRA Systems", desc: "Differential & Industrial Pressure.", images: ['/templates/hs-tech/images/products/0173971661ad2.png', '/templates/hs-tech/images/products/849fee28dfdc5.png'] },
    jumo: { title: "JUMO", desc: "Liquid Analysis & Control.", images: ['/templates/hs-tech/images/products/94259b4509a1f.png', '/templates/hs-tech/images/products/85b44cdd77766.png'] },
    knick: { title: "KNICK", desc: "Process Analysis.", images: ['/templates/hs-tech/images/products/322e267fafb41.png'] },
    cms: { title: "Data Logger / CMS", desc: "Continuous monitoring systems and wireless data loggers.", images: [] }
}

// Sub-Category Definitions
export const SUB_CATEGORIES: Record<string, any[]> = {
    // === VAISALA ===
    humidity: [
        {
            id: 'handheld', title: 'Hand-held Instrument', desc: 'HM70, Indigo80',
            items: [
                { id: 'indigo80_hmp80', label: 'Indigo80+HMP80' },
                { id: 'hm70', label: 'HM70' },
                { id: 'hm40', label: 'HM40' },
                { id: 'shm40', label: 'SHM40' },
                { id: 'hmk15', label: 'HMK15' }
            ]
        },
        {
            id: 'industrial', title: 'Industrial Transmitter', desc: 'HMT330, HMT310',
            items: [
                { id: 'hmt330', label: 'HMT330' },
                { id: 'hmt310', label: 'HMT310' },
                { id: 'hmt120', label: 'HMT120/130' },
                { id: 'hmt370ex', label: 'HMT370EX' },
                { id: 'hmt360', label: 'HMT360' }
            ]
        },
        {
            id: 'hvac', title: 'HVAC Transmitter', desc: 'HMD60, HMW90',
            items: [
                { id: 'hmd60', label: 'HMD60' },
                { id: 'hmw90', label: 'HMW90' },
                { id: 'hmdw110', label: 'HMDW110' },
                { id: 'hmdw80', label: 'HMDW80' }
            ]
        },
        {
            id: 'probe', title: 'Module/OEM', desc: 'HMP series',
            items: [
                { id: 'hmp1_9', label: 'HMP1-9' },
                { id: 'hmm170', label: 'HMM170' },
                { id: 'hmp155', label: 'HMP155' },
                { id: 'hmp60', label: 'HMP60' }
            ]
        },
        {
            // Typo fix: removed duplicate key logic by ensuring uniqueness in structure
            id: 'dewpoint_handheld', title: 'Portable Instrument', desc: 'DM70',
            items: [
                { id: 'indigo80_dmp80', label: 'Indigo80+DMP80' },
                { id: 'dm70', label: 'DM70' },
                { id: 'dss70a', label: 'DSS70A' }
            ]
        }
    ],
    dewpoint: [
        {
            id: 'portable', title: 'Portable Instrument', desc: 'DM70',
            items: [
                { id: 'indigo80_dmp80', label: 'Indigo80+DMP80' },
                { id: 'dm70', label: 'DM70' },
                { id: 'dss70a', label: 'DSS70A' }
            ]
        },
        {
            id: 'fixed', title: 'Fixed installed type', desc: 'DMT340, DMT345',
            items: [
                { id: 'dmt340', label: 'DMT340' },
                { id: 'dmt345', label: 'DMT345/346' },
                { id: 'dmp1', label: 'DMP1-8' }
            ]
        },
        {
            id: 'module', title: 'Module/OEM', desc: 'DMT132, DMT143, DMT152',
            items: [
                { id: 'dmt132', label: 'DMT132' },
                { id: 'dmt152', label: 'DMT152' },
                { id: 'dmt143', label: 'DMT143' },
                { id: 'dmt143l', label: 'DMT143L' },
                { id: 'dpt146', label: 'DPT146' },
                { id: 'dpt145', label: 'DPT145' }
            ]
        }
    ],
    co2: [
        {
            id: 'transmitter', title: 'Transmitter', desc: 'GMW90, GMD110',
            items: [
                { id: 'gmw90', label: 'GMW90' },
                { id: 'gmw80', label: 'GMW80' },
                { id: 'gmd110', label: 'GMD110' }
            ]
        },
        {
            id: 'probe', title: 'Probe', desc: 'GMP series',
            items: [
                { id: 'gmp343', label: 'GMP343' },
                { id: 'gmp251', label: 'GMP251' },
                { id: 'gmp231', label: 'GMP231' },
            ]
        },
        {
            id: 'handheld', title: 'Hand-held Meter', desc: 'GMP252',
            items: [
                { id: 'indigo80_gmp252', label: 'Indigo80+GMP252' }
            ]
        }
    ],
    oil: [
        {
            id: 'transformer', title: 'Transformer Monitor', desc: 'MHT410',
            items: [
                { id: 'mht410', label: 'MHT410' }
            ]
        },
        {
            id: 'fixed', title: 'Oil Moisture Transmitter', desc: 'MMT330',
            items: [
                { id: 'mmt330', label: 'MMT330' },
                { id: 'mmt310', label: 'MMT310' }
            ]
        },
        {
            id: 'handheld', title: 'Hand-held measurement', desc: 'MM70',
            items: [
                { id: 'mm70', label: 'MM70' }
            ]
        },
        {
            id: 'oil_module', title: 'Module/OEM', desc: 'MMT162',
            items: [
                { id: 'mmt162', label: 'MMT162' }
            ]
        }
    ],
    barometer: [
        {
            id: 'barometer', title: 'Digital Barometer', desc: 'PTB series',
            items: [
                { id: 'ptb330', label: 'PTB330' },
                { id: 'ptb210', label: 'PTB210' },
                { id: 'ptb110', label: 'PTB110' },
                { id: 'ptu300', label: 'PTU300 (Combined)' }
            ]
        }
    ],
    weather: [
        {
            id: 'trans', title: 'Weather Transmitter', desc: 'WXT530, HMP155',
            items: [
                { id: 'wxt530', label: 'WXT530' },
                { id: 'hmp155_w', label: 'HMP155' },
                { id: 'hmt337', label: 'HMT337' },
                { id: 'ptu307', label: 'PTU307' }
            ]
        },
        {
            id: 'hvac_weather', title: 'HVAC Weather Sensor', desc: 'HMS110, HMS80',
            items: [
                { id: 'hms110', label: 'HMS110' },
                { id: 'hms80', label: 'HMS80' }
            ]
        }
    ],
    h2o2: [
        {
            id: 'sensor', title: 'H2O2 Sensor', desc: 'HPP series',
            items: [
                { id: 'hpp271', label: 'HPP271/272' }
            ]
        }
    ],

    // === SETRA ===
    setra: [
        {
            id: 'diff_ind', title: 'Differential Pressure (Visual)', desc: 'Setra Lite',
            items: [
                { id: 'setra_lite', label: 'Setra Lite' },
                { id: 'setra_flex', label: 'Setra Flex' }
            ]
        },
        {
            id: 'diff_sen', title: 'Differential Pressure (Sensor)', desc: 'HVAC & Filter monitoring',
            items: [
                { id: 'model_mrc', label: 'Model MRC' },
                { id: 'model_mrg', label: 'Model MRG' },
                { id: 'model_264', label: 'Model 264' },
                { id: 'pdt101', label: 'PDT101' },
                { id: 'pdt102', label: 'PDT102' }
            ]
        },
        {
            id: 'industrial', title: 'Industrial Pressure', desc: 'High performance transducers',
            items: [
                { id: 'model_axd', label: 'Model AXD' },
                { id: 'model_206', label: 'Model 206' },
                { id: 'model_209', label: 'Model 209' }
            ]
        }
    ],

    // === JUMO ===
    jumo: [
        {
            id: 'liquid', title: 'Liquid Analysis', desc: 'pH, Conductivity',
            items: [
                { id: 'ph_sensor', label: 'tecline pH' },
                { id: 'ph_trans', label: 'ecoTRANS pH 03' },
                { id: 'dtrans_ph02', label: 'dTRANS pH 02' },
                { id: 'cond_trans', label: 'ecoTRANS Lf 03' }
            ]
        },
        {
            id: 'control', title: 'Control & Recording', desc: 'Recorders, Controllers',
            items: [
                { id: 'recording', label: 'LOGOSCREEN 600' },
                { id: 'dtron_300', label: 'dTRON 300' }
            ]
        }
    ],

    // === KNICK ===
    knick: [
        {
            id: 'analysis', title: 'Process Analysis', desc: 'High-end interface',
            items: [
                { id: 'stratos', label: 'Stratos Pro' }
            ]
        }
    ],

    // === CMS (Data Logger / Continuous Monitoring System) ===
    cms: [
        {
            id: 'data_logger', title: 'Data Logger', desc: 'DL2000, DL4000, DL1700',
            items: [
                { id: 'dl2000', label: 'DL2000' },
                { id: 'dl4000', label: 'DL4000' },
                { id: 'dl1700', label: 'DL1700' }
            ]
        },
        {
            id: 'network_logger', title: 'Network Data Logger', desc: 'DL1000/1400, DL1016/1416, vNET',
            items: [
                { id: 'dl1000_1400', label: 'DL1000/1400' },
                { id: 'dl1016_1416', label: 'DL1016/1416' },
                { id: 'vnet_wireless', label: 'Wireless vNET' },
                { id: 'poe_logger', label: 'POE' }
            ]
        },
        {
            id: 'cms_software', title: 'Monitoring Software', desc: 'CMS Software',
            items: [
                { id: 'cms_sw', label: 'CMS Software' }
            ]
        }
    ]
}

// Product Database - Mapped to Real Scraped Images
export const DB: Record<string, any[]> = {
    // VAISALA
    humidity: [
        {
            id: 'hmp1_9',
            title: 'Indigo Smart Probes',
            subtitle: 'HMP1-HMP9 SERIES',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp1_9_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp1_9_v1.png"],
            desc: 'Intelligent, interchangeable probes for the Vaisala Indigo family.',
            specs: [
                { label: 'Application', value: 'Various industrial processes' },
                { label: 'Models', value: 'HMP1, HMP3, HMP4, HMP5, HMP7, HMP8, HMP9' },
                { label: 'Features', value: '• Indigo compatible\n• RS-485 Modbus RTU' },
                { label: 'Accuracy', value: '±0.8 %RH (at 23 °C)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP1-9-Datasheet-B211706EN.pdf'
        },
        {
            id: 'hmm170',
            title: 'HMM170',
            subtitle: 'HIGH TEMP MODULE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmm170_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmm170_v1.png"],
            desc: 'Robust humidity module for high temperature applications.',
            specs: [
                { label: 'Application', value: 'Food processing, Baking, Drying' },
                { label: 'Temp', value: '-70 ... +180 °C' },
                { label: 'Sensor', value: 'HUMICAP R2' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMM170-Datasheet-B211698EN.pdf'
        },
        {
            id: 'hmp155',
            title: 'HMP155',
            subtitle: 'METEOROLOGICAL PROBE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp155_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp155_v1.png"],
            desc: 'Premium humidity and temperature probe for meteorological applications.',
            specs: [
                { label: 'Application', value: 'Meteorology, Aviation, Roads' },
                { label: 'Range', value: '0 ... 100 %RH\n-80 ... +60 °C' },
                { label: 'Accuracy', value: '±1.0 %RH' },
                { label: 'Protection', value: 'IP66' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP155-Datasheet-B210993EN.pdf'
        },
        {
            id: 'hmp60',
            title: 'HMP60 / HMP110',
            subtitle: 'COMPACT PROBE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp60_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp60_v1.png"],
            desc: 'Miniature and compact probes for volume applications.',
            specs: [
                { label: 'Application', value: 'OEM, Volume applications' },
                { label: 'Models', value: 'HMP60 (Intercap), HMP110 (Humicap)' },
                { label: 'Accuracy', value: '±3 %RH (HMP60)\n±1.5 %RH (HMP110)' },
                { label: 'Housing', value: 'Stainless steel (IP65)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP60-Datasheet-B210973EN.pdf'
        },
        {
            id: 'hmt370ex',
            title: 'HMT370EX Series',
            subtitle: 'EXPLOSION PROOF TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt370ex_v1.png',
            gallery: [],
            desc: 'Designed for hazardous areas. Ideal for fuel storage, chemicals, and pharmaceutical manufacturing.',
            specs: [
                { label: 'Application', value: 'Hazardous areas (Zone 0, 1, 2, 20, 21, 22)\nFuel storage, Biogas, Paint booths' },
                { label: 'Features', value: '• KTL KCS Explosion Proof Certification\n• ATEX, IECEx, FM, CSA, TIIS, EAC certified' },
                { label: 'Accuracy', value: '±0.8 %RH (0...90 %RH)\n±0.1 °C @ 23 °C' },
                { label: 'Output', value: '2-Wire Current (4...20 mA)' },
                { label: 'Protection', value: 'IP66 (NEMA4)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT370EX-Datasheet-B211738EN.pdf'
        },
        {
            id: 'hmt360',
            title: 'HMT360 Series',
            subtitle: 'INTRINSICALLY SAFE TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt360_v1.png',
            gallery: [],
            desc: 'Intrinsically safe humidity and temperature transmitter for hazardous environments.',
            specs: [
                { label: 'Application', value: 'Explosion-risk areas (Zone 0)\nHydrogen, Solvents, etc.' },
                { label: 'Features', value: '• Entire transmitter can be installed in Zone 0\n• Measures Td, x, a, Tw' },
                { label: 'Accuracy', value: '±1 %RH (0...90 %RH)' },
                { label: 'Output', value: '2-Wire Current (4...20 mA)' },
                { label: 'Protection', value: 'IP66 (NEMA4)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT360-Datasheet-B211737EN.pdf'
        },
        {
            id: 'hmd60',
            title: 'HMD60 Series',
            subtitle: 'HVAC TRANSMITTER (DUCT)',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmd60_v1.png',
            gallery: [],
            desc: 'All-metal body transmitter optimized for building automation and industrial HVAC.',
            specs: [
                { label: 'Application', value: 'Building automation, Industrial HVAC' },
                { label: 'Features', value: '• Robust metal body\n• Vaisala HUMICAP® R2 sensor' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C' },
                { label: 'Accuracy', value: '±1.5 %RH\n±0.1 °C' },
                { label: 'Output', value: '4...20 mA' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMD60-Datasheet-B211704EN.pdf'
        },
        {
            id: 'hmw90',
            title: 'HMW90 Series',
            subtitle: 'HVAC TRANSMITTER (WALL)',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmw90_v1.png',
            gallery: [],
            desc: 'Indoor humidity and temperature transmitter for high-end environments.',
            specs: [
                { label: 'Application', value: 'Museums, Laboratories, Data centers' },
                { label: 'Features', value: '• Slide-down cover for easy calibration\n• User exchangeable Intercap sensor' },
                { label: 'Range', value: '0 ... 100 %RH\n-5 ... +55 °C' },
                { label: 'Accuracy', value: '±1.7 %RH\n±0.2 °C' },
                { label: 'Output', value: '4...20 mA, 0...5V, 0...10V (Configurable)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMW90-Datasheet-B211703EN.pdf'
        },
        {
            id: 'hmdw110',
            title: 'HMDW110 Series',
            subtitle: 'IP65 HVAC TRANSMITTER',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmdw110_v1.png',
            gallery: [],
            desc: 'Versatile transmitter for duct, wall, and outdoor applications with IP65 protection.',
            specs: [
                { label: 'Application', value: 'Outdoor, Wash-down areas, Wet environments' },
                { label: 'Features', value: '• IP65 Protection\n• Radiation shield option for outdoor use' },
                { label: 'Accuracy', value: '±2 %RH\n±0.2 °C' },
                { label: 'Output', value: '4...20 mA (HMD110), 0...10V (HMD112)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMDW110-Datasheet-B211705EN.pdf'
        },
        {
            id: 'hmdw80',
            title: 'HMDW80 Series',
            subtitle: 'VERSATILE HVAC TRANSMITTER',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmdw80_v1.png',
            gallery: [],
            desc: 'Versatile wall and duct mounting for standard HVAC applications.',
            specs: [
                { label: 'Application', value: 'Standard HVAC building automation' },
                { label: 'Range', value: '0 ... 100 %RH\n-5 ... +55 °C' },
                { label: 'Accuracy', value: '±3 %RH\n±0.5 °C' },
                { label: 'Output', value: '4...20 mA, 0...10V' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMDW80-Datasheet-B211603EN.pdf'
        },
        {
            id: 'indigo80_hmp80',
            title: 'Indigo80',
            subtitle: 'HANDHELD INDICATOR',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/indigo80_hmp80_v1.jpg',
            gallery: [],
            desc: 'High-end handheld indicator and probe.',
            specs: [
                { label: 'Application', value: 'Industrial spot-checking, Calibration' },
                { label: 'Range', value: '0 ... 100 %RH\n-20 ... +50 °C' },
                { label: 'Logging', value: '5.5M values' },
                { label: 'Display', value: 'Color' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
        {
            id: 'hm70',
            title: 'HM70',
            subtitle: 'HANDHELD METER',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hm70_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hm70_v1.jpg"],
            desc: 'Professional handheld humidity and temperature meter.',
            specs: [
                { label: 'Application', value: 'Demanding industrial spot-checking' },
                { label: 'Features', value: '• MI70 Indicator + HMP7x Probe\n• Multilingual user interface' },
                { label: 'Accuracy', value: 'High accuracy' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HM70-Datasheet-B210974EN.pdf'
        },
        {
            id: 'hm40',
            title: 'HM40',
            subtitle: 'COMPACT HANDHELD',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hm40_v1.png',
            gallery: ["/templates/hs-tech/images/products/hm40_v1.png"],
            desc: 'Compact and easy-to-use handheld meter.',
            specs: [
                { label: 'Application', value: 'Quick spot-checking' },
                { label: 'Models', value: 'HM41, HM42, HM45, HM46' },
                { label: 'Accuracy', value: '±1.5 %RH (0...90 %RH)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HM40-Datasheet-B210975EN.pdf'
        },
        {
            id: 'shm40',
            title: 'SHM40',
            subtitle: 'CONCRETE MOISTURE',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/shm40_v1.jpg',
            gallery: [],
            desc: 'Specialized for structural humidity measurement (concrete).',
            specs: [
                { label: 'Application', value: 'Construction sites, Concrete flooring' },
                { label: 'Probe', value: 'HMP40S' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C' }
            ]
        },
        {
            id: 'hmk15',
            title: 'HMK15',
            subtitle: 'HUMIDITY CALIBRATOR',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hmk15_v1.png',
            gallery: [],
            desc: 'Saturated salt calibrator for on-site humidity probe calibration.',
            specs: [
                { label: 'Type', value: 'Saturated salt solution' },
                { label: 'Safety', value: 'Complies with ASTM E104-02' },
                { label: 'Features', value: '• No external power required\n• Portable case' }
            ]
        },
        {
            id: 'hmt330',
            title: 'HMT330 Series',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTERS',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt330_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hmt330_v1.jpg"],
            desc: 'Designed for demanding industrial applications. Six models available for various installation needs.',
            specs: [
                { label: 'Application', value: 'Demanding industrial applications\nCleanrooms, Pharmaceutical processes' },
                { label: 'Models', value: 'HMT331 (Wall), HMT333 (Duct), HMT334 (High Pressure)\nHMT335 (High Temp), HMT337 (High Humidity), HMT338 (Pipeline)' },
                { label: 'Features', value: '• Excellent stability & extensive customization\n• Six models for various installation needs\n• Optional integrated data logging and graphical display' },
                { label: 'Measurement Range', value: '0 ... 100 %RH\n-70 ... +180 °C (Model dependent)' },
                { label: 'Output', value: 'RH, T, Td, Tdf, a, x, Tw, ppm, pw, pws, h, dT' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT330-Datasheet-B211735EN.pdf'
        },
        {
            id: 'hmt310',
            title: 'HMT310',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt310_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hmt310_v1.jpg"],
            desc: 'Compact transmitter with excellent stability for demanding industrial applications.',
            specs: [
                { label: 'Application', value: 'Industrial applications where compact size is needed' },
                { label: 'Features', value: '• Latest generation VAISALA HUMICAP® sensor\n• Small size for easy installation\n• High accuracy & excellent long-term stability' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C (up to +120 °C)' },
                { label: 'Accuracy', value: '±1 %RH (0...90 %RH)' },
                { label: 'Output', value: 'Analog outputs, RS232/RS485' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT310-Datasheet-B211734EN.pdf'
        },
        {
            id: 'hmt120',
            title: 'HMT120 / HMT130',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTERS',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt120_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hmt120_v1.jpg"],
            desc: 'Optimized for cleanrooms and light industrial applications with interchangeable probes.',
            specs: [
                { label: 'Application', value: 'Cleanrooms, Light industrial applications' },
                { label: 'Features', value: '• Interchangeable probes (HMP110)\n• Resistant to dust and most chemicals\n• Display option available' },
                { label: 'Models', value: 'HMT120: Loop powered (2-wire)\nHMT130: Voltage powered (3-wire)' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C' },
                { label: 'Output', value: '4...20 mA (HMT120)\n0...1V / 0...5V / 0...10V (HMT130)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT120-Datasheet-B211733EN.pdf'
        },
    ],
    dewpoint: [
        { id: 'dmp1', title: 'DMP1-8', subtitle: 'DEWPOINT PROBE SERIES', category: 'fixed', image: '/templates/hs-tech/images/products/38af1f4961a7a.png', gallery: ['/templates/hs-tech/images/products/38af1f4961a7a.png'], desc: 'Intelligent dewpoint probes for compressed air and industrial drying.', specs: [{ label: 'Range', value: '-60...+60 °Ctd' }, { label: 'Application', value: 'Dryers, Cleanrooms, Compressed air' }] },
        { id: 'dmt340', title: 'DMT340', subtitle: 'DEWPOINT TRANSMITTER', category: 'fixed', image: '/templates/hs-tech/images/products/50e31ebdea359.png', gallery: ['/templates/hs-tech/images/products/50e31ebdea359.png'], desc: 'Dewpoint transmitter for condensing environments.', specs: [{ label: 'Application', value: 'Condensing environments' }, { label: 'Features', value: 'Heated sensor head' }] },
        { id: 'dmt345', title: 'DMT345/346', subtitle: 'HIGH TEMP DEWPOINT', category: 'fixed', image: '/templates/hs-tech/images/products/5cf3bcd453c32.png', gallery: ['/templates/hs-tech/images/products/5cf3bcd453c32.png'], desc: 'High temperature dewpoint transmitter for demanding applications.', specs: [{ label: 'Temp', value: 'Up to +180 °C' }, { label: 'Application', value: 'Plastic dryers, Industrial ovens' }] },
        { id: 'dmt132', title: 'DMT132', subtitle: 'DEWPOINT HUMIDITY MODULE', category: 'module', image: '/templates/hs-tech/images/products/2d44fea596554.png', gallery: [], desc: 'OEM dewpoint and humidity module for integration into instruments and systems.', specs: [{ label: 'Type', value: 'OEM Module' }, { label: 'Range', value: '-60...+60 °Ctd' }, { label: 'Output', value: 'Analog / Digital' }, { label: 'Application', value: 'OEM integration, Instruments' }] },
        { id: 'dmt152', title: 'DMT152', subtitle: 'LOW DEWPOINT MODULE', category: 'module', image: '/templates/hs-tech/images/products/2d44fea596554.png', gallery: ['/templates/hs-tech/images/products/2d44fea596554.png'], desc: 'OEM module for low dewpoint measurement.', specs: [{ label: 'Range', value: 'Down to -80 °Ctd' }, { label: 'Application', value: 'OEM, Dry air systems' }] },
        { id: 'dmt143', title: 'DMT143', subtitle: 'COMPACT OEM MODULE', category: 'module', image: '/templates/hs-tech/images/products/6d596692e24f1.png', gallery: ['/templates/hs-tech/images/products/6d596692e24f1.png'], desc: 'Compact dewpoint module for OEM applications.', specs: [{ label: 'Size', value: 'Ultra-compact' }, { label: 'Output', value: 'Analog & Digital' }] },
        { id: 'dmt143l', title: 'DMT143L', subtitle: 'EXTENDED PROBE', category: 'module', image: '/templates/hs-tech/images/products/289587707561d.png', gallery: ['/templates/hs-tech/images/products/289587707561d.png'], desc: 'DMT143 with extended probe length.', specs: [{ label: 'Probe', value: 'Extended length' }, { label: 'Application', value: 'Deep installations' }] },
        { id: 'dpt146', title: 'DPT146', subtitle: 'DEWPOINT & PRESSURE', category: 'module', image: '/templates/hs-tech/images/products/f038c293907b8.png', gallery: ['/templates/hs-tech/images/products/f038c293907b8.png'], desc: 'Combined dewpoint and pressure measurement.', specs: [{ label: 'Dual', value: 'Td + P measurement' }, { label: 'Application', value: 'Compressed air systems' }] },
        { id: 'dpt145', title: 'DPT145', subtitle: 'SF6 GAS MONITOR', category: 'module', image: '/templates/hs-tech/images/products/04ad79c254fa2.png', gallery: ['/templates/hs-tech/images/products/04ad79c254fa2.png'], desc: 'Dewpoint measurement in SF6 gas systems.', specs: [{ label: 'Gas', value: 'SF6 compatible' }, { label: 'Application', value: 'High voltage switchgear' }] },
        { id: 'indigo80_dmp80', title: 'Indigo80+DMP80', subtitle: 'PORTABLE DEWPOINT', category: 'portable', image: '/templates/hs-tech/images/products/1388fffe59c2e.png', gallery: ['/templates/hs-tech/images/products/1388fffe59c2e.png'], desc: 'Portable dewpoint measurement system with Indigo indicator.', specs: [{ label: 'System', value: 'Indicator + Probe' }, { label: 'Application', value: 'Spot-checking, Calibration' }] },
        { id: 'dm70', title: 'DM70', subtitle: 'HANDHELD DEWPOINT', category: 'portable', image: '/templates/hs-tech/images/products/fc840485431f5.png', gallery: ['/templates/hs-tech/images/products/fc840485431f5.png'], desc: 'Professional handheld dewpoint meter.', specs: [{ label: 'Accuracy', value: '±2 °Ctd' }, { label: 'Application', value: 'Field measurement' }] },
        { id: 'dss70a', title: 'DSS70A', subtitle: 'SAMPLING SYSTEM', category: 'portable', image: '/templates/hs-tech/images/products/96ddd2e578412.png', gallery: ['/templates/hs-tech/images/products/96ddd2e578412.png'], desc: 'Sampling cell for use with DM70.', specs: [{ label: 'Use with', value: 'DM70 meter' }, { label: 'Application', value: 'Pressurized gas sampling' }] }
    ],
    co2: [
        { id: 'gmw90', title: 'GMW90', subtitle: 'WALL TRANSMITTER', category: 'transmitter', image: '/templates/hs-tech/images/products/6251932a0e954.png', gallery: ['/templates/hs-tech/images/products/6251932a0e954.png'], desc: 'CO2, temperature and humidity transmitter for indoor environments.', specs: [{ label: 'Parameters', value: 'CO2 + T + RH' }, { label: 'Application', value: 'HVAC, Building automation' }] },
        { id: 'gmw80', title: 'GMW80', subtitle: 'BASIC CO2 TRANSMITTER', category: 'transmitter', image: '/templates/hs-tech/images/products/cfd2828db31bd.png', gallery: ['/templates/hs-tech/images/products/cfd2828db31bd.png'], desc: 'Economical CO2 transmitter for standard applications.', specs: [{ label: 'Parameter', value: 'CO2 only' }, { label: 'Range', value: '0...2000 ppm' }] },
        { id: 'gmd110', title: 'GMD110', subtitle: 'DUCT TRANSMITTER', category: 'transmitter', image: '/templates/hs-tech/images/products/c846ecca3733c.png', gallery: ['/templates/hs-tech/images/products/c846ecca3733c.png'], desc: 'CO2 transmitter for duct mounting in HVAC systems.', specs: [{ label: 'Installation', value: 'Duct mount' }, { label: 'Application', value: 'Demand control ventilation' }] },
        { id: 'gmp343', title: 'GMP343', subtitle: 'INDUSTRIAL CO2 PROBE', category: 'probe', image: '/templates/hs-tech/images/products/eb130aca3df08.png', gallery: ['/templates/hs-tech/images/products/eb130aca3df08.png'], desc: 'Robust CO2 probe for industrial processes.', specs: [{ label: 'Flow', value: 'Flow-through design' }, { label: 'Range', value: '0...10000 ppm' }] },
        { id: 'gmp251', title: 'GMP251', subtitle: 'HIGH RANGE CO2 PROBE', category: 'probe', image: '/templates/hs-tech/images/products/f6933d55699f3.png', gallery: ['/templates/hs-tech/images/products/f6933d55699f3.png'], desc: 'CO2 probe for percent-level measurement.', specs: [{ label: 'Range', value: '0...30 %vol' }, { label: 'Application', value: 'Incubators, Controlled atmosphere' }] },
        { id: 'gmp231', title: 'GMP231', subtitle: 'INCUBATOR PROBE', category: 'probe', image: '/templates/hs-tech/images/products/8b82ea8dea629.png', gallery: ['/templates/hs-tech/images/products/8b82ea8dea629.png'], desc: 'CO2 probe specially designed for incubators.', specs: [{ label: 'Temp', value: 'Up to +180 °C' }, { label: 'Application', value: 'Life science incubators' }] },
        { id: 'indigo80_gmp252', title: 'Indigo80+GMP252', subtitle: 'PORTABLE CO2 METER', category: 'handheld', image: '/templates/hs-tech/images/products/41a5c8353e901.png', gallery: ['/templates/hs-tech/images/products/41a5c8353e901.png'], desc: 'Portable CO2 measurement system with percent-level accuracy.', specs: [{ label: 'Range', value: '0...30 %vol (ppm available)' }, { label: 'Application', value: 'Spot-checking, Calibration' }] }
    ],
    oil: [
        { id: 'mht410', title: 'MHT410', subtitle: 'TRANSFORMER MONITOR', category: 'transformer', image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg'], desc: 'Online monitoring of moisture and hydrogen in transformer oil.', specs: [{ label: 'Parameters', value: 'H2O + H2' }, { label: 'Application', value: 'Power transformers' }] },
        { id: 'mmt330', title: 'MMT330', subtitle: 'OIL TRANSMITTER', category: 'fixed', image: '/templates/hs-tech/images/products/5980bfb1851a8.png', gallery: ['/templates/hs-tech/images/products/5980bfb1851a8.png'], desc: 'Online moisture measurement in insulating oils.', specs: [{ label: 'Oil types', value: 'Mineral, Synthetic, Ester' }, { label: 'Application', value: 'Transformer monitoring' }] },
        { id: 'mmt310', title: 'MMT310', subtitle: 'COMPACT OIL TRANSMITTER', category: 'fixed', image: '/templates/hs-tech/images/products/3ca83569b6d00.jpg', gallery: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg'], desc: 'Compact transmitter for oil moisture measurement.', specs: [{ label: 'Size', value: 'Compact design' }, { label: 'Application', value: 'Small transformers, OEM' }] },
        { id: 'mm70', title: 'MM70', subtitle: 'HANDHELD OIL METER', category: 'handheld', image: '/templates/hs-tech/images/products/a39c6508f2ff2.png', gallery: ['/templates/hs-tech/images/products/a39c6508f2ff2.png'], desc: 'Portable instrument for spot-checking oil moisture.', specs: [{ label: 'Application', value: 'Field measurement' }, { label: 'Feature', value: 'Fast response' }] },
        { id: 'mmt162', title: 'MMT162', subtitle: 'OEM OIL MOISTURE MODULE', category: 'oil_module', image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: [], desc: 'Compact OEM module for continuous oil moisture measurement in transformers and industrial machinery.', specs: [{ label: 'Type', value: 'OEM / Module' }, { label: 'Application', value: 'Transformers, Hydraulic systems, Industrial oil' }, { label: 'Output', value: '4...20 mA, Modbus' }] }
    ],
    barometer: [
        { id: 'ptb330', title: 'PTB330', subtitle: 'CLASS A BAROMETER', category: 'barometer', image: '/templates/hs-tech/images/products/3ca83569b6d00.jpg', gallery: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg', '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'], desc: 'High-accuracy Class A digital barometer.', specs: [{ label: 'Accuracy Class', value: 'A (±0.3 hPa)' }, { label: 'Application', value: 'Meteorology, Aviation' }] },
        { id: 'ptb210', title: 'PTB210', subtitle: 'CLASS B BAROMETER', category: 'barometer', image: '/templates/hs-tech/images/products/2e8820b69ea2b.jpg', gallery: ['/templates/hs-tech/images/products/2e8820b69ea2b.jpg'], desc: 'Industrial Class B digital barometer.', specs: [{ label: 'Accuracy Class', value: 'B (±0.5 hPa)' }, { label: 'Application', value: 'Industrial, HVAC' }] },
        { id: 'ptb110', title: 'PTB110', subtitle: 'ANALOG BAROMETER', category: 'barometer', image: '/templates/hs-tech/images/products/b2209059580dc.jpg', gallery: ['/templates/hs-tech/images/products/b2209059580dc.jpg'], desc: 'Barometric pressure transmitter with analog output.', specs: [{ label: 'Output', value: '0-1V, 0-5V, 0-10V' }, { label: 'Application', value: 'Building automation' }] },
        { id: 'ptu300', title: 'PTU300', subtitle: 'COMBINED TRANSMITTER', category: 'barometer', image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg', '/templates/hs-tech/images/products/2e8820b69ea2b.jpg'], desc: 'Combined pressure, temperature, and humidity transmitter.', specs: [{ label: 'Parameters', value: 'P + T + RH' }, { label: 'Application', value: 'Meteorology, Environmental monitoring' }] }
    ],
    weather: [
        { id: 'wxt530', title: 'WXT530', subtitle: 'WEATHER STATION', category: 'trans', image: '/templates/hs-tech/images/products/2c2344f8b46d5.jpg', gallery: ['/templates/hs-tech/images/products/2c2344f8b46d5.jpg'], desc: 'All-in-one multi-parameter weather sensor measuring wind, rain, pressure, temperature, and humidity.', specs: [{ label: 'Parameters', value: 'Wind speed/direction, Rain, Pressure, T, RH' }, { label: 'Output', value: 'SDI-12, RS-232, RS-485, Modbus' }, { label: 'Application', value: 'Weather monitoring, Aviation, Marine' }], datasheet: 'https://www.vaisala.com/sites/default/files/documents/WXT530-Datasheet-B211961EN.pdf' },
        { id: 'hmp155_w', title: 'HMP155', subtitle: 'WEATHER PROBE', category: 'trans', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: ['/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'], desc: 'High-accuracy humidity and temperature probe for meteorological applications.', specs: [{ label: 'Range', value: '0...100 %RH / -80...+60 °C' }, { label: 'Accuracy', value: '±1.0 %RH' }, { label: 'Application', value: 'Meteorology, Roads, Aviation' }, { label: 'Protection', value: 'IP66' }] },
        { id: 'hmt337', title: 'HMT337', subtitle: 'OUTDOOR TRANSMITTER', category: 'trans', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Humidity and temperature transmitter for outdoor and challenging environments.', specs: [{ label: 'Range', value: '0...100 %RH / -40...+60 °C' }, { label: 'Accuracy', value: '±1 %RH' }, { label: 'Output', value: '4...20 mA, RS-485' }, { label: 'Protection', value: 'IP65' }] },
        { id: 'ptu307', title: 'PTU307', subtitle: 'COMBINED WEATHER TRANSMITTER', category: 'trans', image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: [], desc: 'Combined pressure, humidity, and temperature transmitter for weather applications.', specs: [{ label: 'Parameters', value: 'P + T + RH' }, { label: 'Pressure range', value: '500...1100 hPa' }, { label: 'Application', value: 'Meteorology, Environmental monitoring' }] },
        { id: 'hms110', title: 'HMS110', subtitle: 'WALL/DUCT HVAC SENSOR', category: 'hvac_weather', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Combined humidity and temperature transmitter for wall/duct mounting in HVAC applications.', specs: [{ label: 'Range', value: '0...100 %RH / -40...+80 °C' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Building automation' }] },
        { id: 'hms80', title: 'HMS80', subtitle: 'COMPACT HVAC SENSOR', category: 'hvac_weather', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Compact humidity and temperature transmitter for building automation and HVAC.', specs: [{ label: 'Range', value: '0...100 %RH' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Building automation, Energy management' }] }
    ],
    h2o2: [
        { id: 'hpp271', title: 'HPP271/272', subtitle: 'H2O2 VAPOR PROBE', category: 'sensor', image: '/templates/hs-tech/images/products/47e994f808c6a.png', gallery: ['/templates/hs-tech/images/products/47e994f808c6a.png'], desc: 'Vaporized hydrogen peroxide measurement for bio-decontamination.', specs: [{ label: 'Gas', value: 'H2O2 vapor' }, { label: 'Application', value: 'Bio-decontamination, Sterilization' }] }
    ],

    // SETRA
    setra: [
        { id: 'setra_lite', title: 'Setra Lite', subtitle: 'VISUAL PRESSURE INDICATOR', category: 'diff_ind', image: '/templates/hs-tech/images/products/849fee28dfdc5.png', gallery: ['/templates/hs-tech/images/products/849fee28dfdc5.png'], desc: 'Visual differential pressure indicator with LED lights.', specs: [{ label: 'Display', value: 'LED light indicators' }, { label: 'Application', value: 'Cleanrooms, Operating rooms' }] },
        { id: 'setra_flex', title: 'Setra Flex', subtitle: 'ROOM PRESSURE MONITOR', category: 'diff_ind', image: '/templates/hs-tech/images/products/f038c293907b8.png', gallery: ['/templates/hs-tech/images/products/f038c293907b8.png'], desc: 'Touchscreen room pressure monitor for critical environments.', specs: [{ label: 'Display', value: 'Touchscreen' }, { label: 'Application', value: 'Isolation rooms, Cleanrooms' }] },
        { id: 'model_mrc', title: 'Model MRC', subtitle: 'MULTI-RANGE SENSOR', category: 'diff_sen', image: '/templates/hs-tech/images/products/0173971661ad2.png', gallery: ["/templates/hs-tech/images/products/0173971661ad2.png", "/templates/hs-tech/images/products/0b98ec3d71c52.png", "/templates/hs-tech/images/products/866d1ed724ffa.png", "/templates/hs-tech/images/products/ba117fd1862c9.png", "/templates/hs-tech/images/products/20542e1ba6c31.png"], desc: 'Differential pressure sensor with adjustable range.', specs: [{ label: 'Range', value: 'Field adjustable' }, { label: 'Application', value: 'HVAC, Filter monitoring' }] },
        { id: 'model_mrg', title: 'Model MRG', subtitle: 'GENERAL PURPOSE SENSOR', category: 'diff_sen', image: '/templates/hs-tech/images/products/0b98ec3d71c52.png', gallery: ["/templates/hs-tech/images/products/0b98ec3d71c52.png", "/templates/hs-tech/images/products/866d1ed724ffa.png"], desc: 'Cost-effective differential pressure sensor.', specs: [{ label: 'Type', value: 'General purpose' }, { label: 'Application', value: 'Building automation' }] },
        { id: 'model_264', title: 'Model 264', subtitle: 'HVAC TRANSDUCER', category: 'diff_sen', image: '/templates/hs-tech/images/products/866d1ed724ffa.png', gallery: ["/templates/hs-tech/images/products/866d1ed724ffa.png", "/templates/hs-tech/images/products/ba117fd1862c9.png"], desc: 'Standard differential pressure transducer for HVAC.', specs: [{ label: 'Type', value: 'Standard HVAC' }, { label: 'Output', value: '4-20mA, 0-5V, 0-10V' }] },
        { id: 'pdt101', title: 'PDT101', subtitle: 'FILTER MONITOR', category: 'diff_sen', image: '/templates/hs-tech/images/products/20542e1ba6c31.png', gallery: ["/templates/hs-tech/images/products/20542e1ba6c31.png"], desc: 'Compact OEM differential pressure sensor for filter monitoring.', specs: [{ label: 'Type', value: 'OEM sensor' }, { label: 'Application', value: 'Filter condition monitoring' }] },
        { id: 'pdt102', title: 'PDT102', subtitle: 'DIFFERENTIAL PRESSURE TRANSMITTER', category: 'diff_sen', image: '/templates/hs-tech/images/products/20542e1ba6c31.png', gallery: [], desc: 'High-accuracy differential pressure transmitter for HVAC and filter condition monitoring.', specs: [{ label: 'Type', value: 'Differential pressure transmitter' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Cleanrooms, Filter monitoring' }] },
        { id: 'model_axd', title: 'Model AXD', subtitle: 'HIGH PERFORMANCE TRANSDUCER', category: 'industrial', image: '/templates/hs-tech/images/products/af2c3e1c0d3d0.png', gallery: ['/templates/hs-tech/images/products/af2c3e1c0d3d0.png'], desc: 'High accuracy industrial pressure transducer.', specs: [{ label: 'Accuracy', value: 'High precision' }, { label: 'Application', value: 'Industrial processes' }] },
        { id: 'model_206', title: 'Model 206', subtitle: 'RUGGED TRANSDUCER', category: 'industrial', image: '/templates/hs-tech/images/products/5175822708f3a.png', gallery: ['/templates/hs-tech/images/products/5175822708f3a.png'], desc: 'Rugged industrial pressure transducer with stainless steel construction.', specs: [{ label: 'Housing', value: 'Stainless steel' }, { label: 'Application', value: 'Harsh environments' }] },
        { id: 'model_209', title: 'Model 209', subtitle: 'OEM PRESSURE SENSOR', category: 'industrial', image: '/templates/hs-tech/images/products/a153aa767ba86.png', gallery: ['/templates/hs-tech/images/products/a153aa767ba86.png'], desc: 'Compact OEM pressure sensor for industrial applications.', specs: [{ label: 'Type', value: 'OEM compact' }, { label: 'Application', value: 'OEM integration' }] }
    ],

    // JUMO
    jumo: [
        { id: 'ph_sensor', title: 'tecline pH', subtitle: 'PH ELECTRODE', category: 'liquid', image: '/templates/hs-tech/images/products/1c2022c06d474.png', gallery: ['/templates/hs-tech/images/products/1c2022c06d474.png'], desc: 'High-quality pH electrode for liquid analysis.', specs: [{ label: 'Material', value: 'Glass body' }, { label: 'Application', value: 'Water treatment, Process' }] },
        { id: 'ph_trans', title: 'ecoTRANS pH 03', subtitle: 'PH TRANSMITTER', category: 'liquid', image: '/templates/hs-tech/images/products/94259b4509a1f.png', gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'], desc: 'Compact pH transmitter with DIN rail mounting.', specs: [{ label: 'Mounting', value: 'DIN rail' }, { label: 'Output', value: '4-20mA, Relay' }] },
        { id: 'dtrans_ph02', title: 'dTRANS pH 02', subtitle: 'PROCESS PH TRANSMITTER', category: 'liquid', image: '/templates/hs-tech/images/products/8d15ded8da6eb.png', gallery: ['/templates/hs-tech/images/products/8d15ded8da6eb.png'], desc: 'Industrial pH transmitter with IP65 protection.', specs: [{ label: 'Protection', value: 'IP65' }, { label: 'Application', value: 'Industrial processes' }] },
        { id: 'cond_trans', title: 'ecoTRANS Lf 03', subtitle: 'CONDUCTIVITY TRANSMITTER', category: 'liquid', image: '/templates/hs-tech/images/products/75b212a123a21.png', gallery: ['/templates/hs-tech/images/products/75b212a123a21.png'], desc: 'Conductivity transmitter for water quality monitoring.', specs: [{ label: 'Output', value: '4-20 mA' }, { label: 'Application', value: 'Water treatment' }] },
        { id: 'recording', title: 'LOGOSCREEN 600', subtitle: 'PAPERLESS RECORDER', category: 'control', image: '/templates/hs-tech/images/products/85b44cdd77766.png', gallery: ['/templates/hs-tech/images/products/85b44cdd77766.png'], desc: 'Touchscreen paperless recorder for data logging.', specs: [{ label: 'Display', value: 'Touch LCD' }, { label: 'Channels', value: 'Multi-channel' }] },
        { id: 'dtron_300', title: 'dTRON 300', subtitle: 'TEMPERATURE CONTROLLER', category: 'control', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: ['/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'], desc: 'Compact PID controller for temperature control.', specs: [{ label: 'Control', value: 'PID algorithm' }, { label: 'Application', value: 'Temperature processes' }] }
    ],

    // KNICK
    knick: [
        { id: 'stratos', title: 'Stratos Pro', subtitle: 'PROCESS ANALYZER', category: 'analysis', image: '/templates/hs-tech/images/products/322e267fafb41.png', gallery: ['/templates/hs-tech/images/products/322e267fafb41.png'], desc: 'High-end process analysis system with intrinsic safety.', specs: [{ label: 'Safety', value: 'Ex Zone 1 approved' }, { label: 'Application', value: 'Chemical, Pharmaceutical' }] }
    ],

    // CMS (Data Logger / Continuous Monitoring System)
    cms: [
        { id: 'dl2000', title: 'DL2000', subtitle: 'ADVANCED DATA LOGGER', category: 'data_logger', image: '', gallery: [], desc: 'Advanced standalone data logger for multi-channel environmental monitoring with display.', specs: [{ label: 'Channels', value: 'Multi-channel inputs' }, { label: 'Display', value: 'Built-in LCD' }, { label: 'Application', value: 'Cleanrooms, Labs, Warehouses' }, { label: 'Communication', value: 'LAN, USB' }] },
        { id: 'dl4000', title: 'DL4000', subtitle: 'HIGH CHANNEL LOGGER', category: 'data_logger', image: '', gallery: [], desc: 'High-density data logger for large-scale continuous monitoring systems.', specs: [{ label: 'Channels', value: 'High density (up to 32+)' }, { label: 'Application', value: 'Industrial CMS, Large facilities' }, { label: 'Communication', value: 'LAN, RS-485, Modbus' }] },
        { id: 'dl1700', title: 'DL1700', subtitle: 'COMPACT DATA LOGGER', category: 'data_logger', image: '', gallery: [], desc: 'Compact data logger for small to medium scale environmental monitoring.', specs: [{ label: 'Size', value: 'Compact DIN rail' }, { label: 'Application', value: 'Pharmaceutical, Food storage' }, { label: 'Communication', value: 'LAN, USB' }] },
        { id: 'dl1000_1400', title: 'DL1000/1400', subtitle: 'NETWORK LOGGER SERIES', category: 'network_logger', image: '', gallery: [], desc: 'Network-enabled data loggers for distributed monitoring across facilities.', specs: [{ label: 'Network', value: 'LAN / PoE' }, { label: 'Application', value: 'Distributed monitoring, GxP' }, { label: 'Certification', value: '21 CFR Part 11 compliant' }] },
        { id: 'dl1016_1416', title: 'DL1016/1416', subtitle: 'MULTI-INPUT LOGGER', category: 'network_logger', image: '', gallery: [], desc: 'Multi-input network logger supporting various sensor types for comprehensive monitoring.', specs: [{ label: 'Inputs', value: 'Up to 16 channels' }, { label: 'Sensors', value: 'T, RH, Pressure, CO2 compatible' }, { label: 'Network', value: 'LAN, Modbus TCP' }] },
        { id: 'vnet_wireless', title: 'Wireless vNET', subtitle: 'WIRELESS LOGGER NETWORK', category: 'network_logger', image: '', gallery: [], desc: 'Wireless monitoring network for flexible deployment in areas where cabling is impractical.', specs: [{ label: 'Wireless', value: 'IEEE 802.15.4 (mesh)' }, { label: 'Application', value: 'Retrofits, Temporary monitoring' }, { label: 'Battery', value: 'Long-life battery option' }] },
        { id: 'poe_logger', title: 'POE Logger', subtitle: 'POWER OVER ETHERNET', category: 'network_logger', image: '', gallery: [], desc: 'Data logger powered and connected via a single Ethernet cable using Power over Ethernet.', specs: [{ label: 'Power', value: 'IEEE 802.3af PoE' }, { label: 'Application', value: 'Easy installation, No power outlet needed' }] },
        { id: 'cms_sw', title: 'CMS Software', subtitle: 'MONITORING PLATFORM', category: 'cms_software', image: '', gallery: [], desc: 'Centralized software platform for real-time monitoring, alarm management, and compliance reporting.', specs: [{ label: 'Platform', value: 'Windows Server / Web browser' }, { label: 'Features', value: 'Real-time alarms, Reports, Audit trail' }, { label: 'Compliance', value: 'GMP/GxP, FDA 21 CFR Part 11' }] }
    ]
}
