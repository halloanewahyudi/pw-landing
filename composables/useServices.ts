export const useServices = () => {
    return useState('sevices', () => [
        {
            website:{
                title:'Website',
                sub_title:'',
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem consectetur voluptate, rerum atque!'
            },
            ecommerce:{
                title:'Ecommerce',
                sub_title:'',
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem consectetur voluptate, rerum atque!'
            },
            odoo:{
                title:'Odoo ERP',
                sub_title:'',
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem consectetur voluptate, rerum atque!'
            }
        }
        ]
    )
}

