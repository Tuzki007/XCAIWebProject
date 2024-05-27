
// 放大倍数
// export const MAGNIFICATION_TIMES_OPTIONS = {
    
//     'original size': '原始尺寸',
    
//     'double zoom': 'x2',
    
//     'triple zoom': 'x3',
    
//     'fourfold zoom': 'x4',  
// }


// 尺寸配置
export const MAGNIFICATION_TIMES_OPTIONS = [
    {
        titleLabel: '原始尺寸',
        value: 1,
    },
    {
        titleLabel: 'x2',
        value: 2,
    },
    {
        label: 'x3',
        value: 3,
    },
    {
        label: 'x4',
        value: 4,
    },
]

// 颜色配置
export const XC_SELECT_COLOR_OPTIONS = [
    {
        titleLabel: '白色',
        value: 1,
    },
    {
        titleLabel: '紫色',
        value: 2,
    }
]

// 整体Setting页 Config
// export const SETTING_CONFIG_OPTIONS = [
//     {
//         titleLabel: '倍数',
//         contentValue: MAGNIFICATION_TIMES_OPTIONS
//     },
//     {
//         titleLabel: '颜色',
//         contentValue: XC_SELECT_COLOR_OPTIONS
//     }
// ]

export const SETTING_CONFIG_OPTIONS = [
    {
        titleLabel: '倍数',
        contentValue: [
            { titleLabel: '原始尺寸', value: 1 },
            { titleLabel: 'x2', value: 2 },
            { titleLabel: 'x3', value: 3 },
            { titleLabel: 'x4', value: 4 },
        ]
    },
    {
        titleLabel: '颜色',
        contentValue: [
            { titleLabel: '白色', value: 1 },
            { titleLabel: '紫色', value: 2 },
        ]
    }
  ];

