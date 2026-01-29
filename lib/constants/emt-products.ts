export interface Product {
    id: string;
    name: string;
    nameKo?: string;
    category: 'sensors' | 'modules' | 'systems' | 'actuators' | 'controllers';
    description: string;
    descriptionKo?: string;
    specs: {
        label: string;
        value: string;
    }[];
    imageUrl: string;
    details?: string;
}

export const EMT_PRODUCTS: Product[] = [
    {
        id: 'ptc-heater',
        name: 'PTC Heater',
        nameKo: 'PTC 히터',
        category: 'sensors',
        description: 'A self regulating electric heater for rapid heating and energy efficiency.',
        descriptionKo: '자기 제어형 세라믹 반도체를 이용한 고효율 급속 가열 히터입니다.',
        imageUrl: '/assets/19.png',
        specs: [
            { label: 'Op. Temp', value: '-30°C ~ +85°C' },
            { label: 'Voltage', value: '8V ~ 16V' },
            { label: 'IP', value: 'IP50' }
        ]
    },
    {
        id: 'resolver',
        name: 'Resolver Sensor',
        nameKo: '레졸버 센서',
        category: 'sensors',
        description: 'Analog angle-detection sensor using electromagnetic induction.',
        descriptionKo: '전자기 유도 방식을 이용한 고밀도 아날로그 회전각 검출 센서입니다.',
        imageUrl: '/assets/2.png',
        specs: [
            { label: 'Accuracy', value: '±20 arc sec' },
            { label: 'Temp', value: '-40°C ~ +125°C' },
            { label: 'Signal', value: 'EMF' }
        ]
    },
    {
        id: 'limit-sensor',
        name: 'Limit Sensor',
        nameKo: '리미트 센서',
        category: 'sensors',
        description: 'Precision detection sensor for mechanical device operating ranges.',
        descriptionKo: '기계적 가동 범위를 감지하여 신호를 출력하는 정밀 검출 센서입니다.',
        imageUrl: '/assets/11.png',
        specs: [
            { label: 'Type', value: 'Mechanical' },
            { label: 'Accuracy', value: 'High' },
            { label: 'Temp', value: '-40°C ~ +150°C' }
        ]
    },
    {
        id: 'pos-indicator',
        name: 'Position Indicator Switch',
        nameKo: '포지션 인디케이터 스위치',
        category: 'sensors',
        description: 'Detects drive modes (2H, 4H, 4L) in transfer cases.',
        descriptionKo: '트랜스퍼 케이스의 구동 모드를 감지하여 ECU에 신호를 전달합니다.',
        imageUrl: '/assets/5.png',
        specs: [
            { label: 'Op. Temp', value: '-40°C ~ +135°C' },
            { label: 'IP Rating', value: 'IP67+' },
            { label: 'Voltage', value: 'DC 5V' }
        ]
    },
    {
        id: 'torque-sensor',
        name: 'Torque Sensor',
        nameKo: '토크 센서',
        category: 'sensors',
        description: 'Detects torsional deformation applied to a rotating shaft.',
        descriptionKo: '회전축에 가해지는 비틀림 변형을 감지하여 전기 신호로 변환합니다.',
        imageUrl: '/assets/15.png',
        specs: [
            { label: 'Accuracy', value: '±1% F.S.' },
            { label: 'Resp. Time', value: '≤ 1ms' },
            { label: 'IP Rating', value: 'IP67' }
        ]
    },
    {
        id: 'pressure-sensor',
        name: 'Pressure Sensor',
        nameKo: '압력 센서',
        category: 'sensors',
        description: 'Converts pressure into electrical signals using piezoelectric effects.',
        descriptionKo: '압전 효과를 이용하여 압력을 전기 신호로 변화하는 센서입니다.',
        imageUrl: '/assets/1.png',
        specs: [
            { label: 'Range', value: '0 ~ 600 bar' },
            { label: 'Temp', value: '-40°C ~ +125°C' },
            { label: 'IP Rating', value: 'IP67+' }
        ]
    },
    {
        id: 'tpms-sensor',
        name: 'TPMS Sensor',
        nameKo: 'TPMS 센서',
        category: 'sensors',
        description: 'Real-time tire pressure and temperature monitoring sensor.',
        descriptionKo: '타이어의 공기압과 온도를 실시간으로 감지하여 운전자에게 전달합니다.',
        imageUrl: '/assets/16.png',
        specs: [
            { label: 'Comm.', value: 'RF Wireless' },
            { label: 'Pressure', value: '0 ~ 800 kPa' },
            { label: 'Temp', value: '-40°C ~ +135°C' }
        ]
    },
    {
        id: 'aps-sensor',
        name: 'Electronic APS',
        nameKo: '전자식 가속 페달 센서',
        category: 'sensors',
        description: 'Converts pedal angle into electrical signals for speed control.',
        descriptionKo: '페달의 각도를 전기 신호로 변환하여 차량 속도를 제어합니다.',
        imageUrl: '/assets/3.png',
        specs: [
            { label: 'Resp. Time', value: '≤ 5ms' },
            { label: 'Temp', value: '-40°C ~ +125°C' },
            { label: 'Voltage', value: 'DC 5V' }
        ]
    },
    {
        id: 'speed-sensor',
        name: 'Speed Sensor',
        nameKo: '속도 센서',
        category: 'sensors',
        description: 'Measures driving speed for engine and transmission control.',
        descriptionKo: '엔진 및 변속기 제어를 위해 차량의 주행 속도를 측정합니다.',
        imageUrl: '/assets/18.png',
        specs: [
            { label: 'Range', value: '0 ~ 15000 rpm' },
            { label: 'Resp. Time', value: '≤ 1ms' },
            { label: 'IP Rating', value: 'IP67' }
        ]
    },
    {
        id: 'hidden-door-handle',
        name: 'Hidden Door Handle',
        nameKo: '히든 도어 핸들',
        category: 'actuators',
        description: 'Aerodynamic flush handle that protrudes automatically.',
        descriptionKo: '공기 저항을 줄이고 보안성을 높인 자동 돌출형 플러시 도어 핸들입니다.',
        imageUrl: '/assets/hidden_door_handle.png',
        specs: [
            { label: 'IP Rating', value: 'IP67' },
            { label: 'Resp. Time', value: '≤ 500ms' },
            { label: 'Temp', value: '-40°C ~ +85°C' }
        ]
    },
    {
        id: 'bldc-motor',
        name: 'BLDC Motor',
        nameKo: 'BLDC 모터',
        category: 'actuators',
        description: 'High-efficiency brushless DC motor for precise control.',
        descriptionKo: '브러시가 없는 구조로 마찰 손실을 최소화한 고효율 정밀 제어 모터입니다.',
        imageUrl: '/assets/25.png',
        specs: [
            { label: 'Efficiency', value: '≥85%' },
            { label: 'Voltage', value: '12V / 24V / 48V' },
            { label: 'IP', value: 'IP65+' }
        ]
    },
    {
        id: 'flush-handle-ctrl',
        name: 'Flush Handle CU',
        nameKo: '플러시 핸들 컨트롤러',
        category: 'controllers',
        description: 'Control unit for automatic door handle deployment.',
        descriptionKo: '스마트키 신호를 바탕으로 도어 핸들의 전개와 수납을 제어하는 유닛입니다.',
        imageUrl: '/assets/29.png',
        specs: [
            { label: 'Interface', value: 'CAN / LIN / UART' },
            { label: 'Voltage', value: '12V ±10%' },
            { label: 'IP', value: 'IP67' }
        ]
    },
    {
        id: 'tcu',
        name: 'Transmission CU',
        nameKo: '변속기 제어 유닛',
        category: 'controllers',
        description: 'Transmission Control Unit for optimal power distribution.',
        descriptionKo: 'EV 변속 시스템의 최적 동력 배분과 주행 안정성을 위한 제어 모듈입니다.',
        imageUrl: '/assets/28.png',
        specs: [
            { label: 'Processor', value: '32-bit MCU' },
            { label: 'Temp', value: '-40°C ~ +125°C' },
            { label: 'Connector', value: '20~30 pin' }
        ]
    }
];
