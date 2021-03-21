const data = [
    {
    id: 1,
    name: 'Análise',
    identificator: 'analysis',
    subSections:[
        {
            name: 'Análise de contas',
            identificator: 'analysis',
        },
        {
            name: 'Análise de Transações',
            identificator: 'analysis',
        },
    ]
    },
    {
        id: 2,
        name: 'Contas',
        identificator: 'accounts',
        subSections:[
            {
                name: 'Cliente',
                identificator: 'accounts',
            },
            {
                name: 'Transações',
                identificator: 'accounts',
            },
            {
                name: 'Contas Digitais',
                identificator: 'accounts',
            },
        ]
    },
    {
        id: 3,
        name: 'Customização',
        identificator: 'customization',
        subSections:[
            {
                name: 'Limites e Horários',
                identificator: 'customization',
            },
            {
                name: 'Tarifas',
                identificator: 'customization',
            },
            {
                name: 'Tarifas Personalizadas',
                identificator: 'customization',
            },
        ]
    },
]

export default data;