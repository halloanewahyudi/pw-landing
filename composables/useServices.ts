export const useServices = () => {
    return useState('sevices', () => [
        {
            website:{
                title:'Website',
                sub_title:'',
                content:'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quibusdam officia, ducimus optio quisquam et blanditiis corrupti doloremque laudantium!</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, alias error incidunt voluptates porro dolorem.</p>'
            },
            ecommerce:{
                title:'Ecommerce',
                sub_title:'',
                content:'<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem reprehenderit soluta deserunt eos dolores non voluptate? Vero illo fuga ea rem provident consequatur atque!</p>'
            },
            odoo:{
                title:'Odoo ERP',
                sub_title:'',
                content:'<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos incidunt alias magni iste. Possimus illo in nisi adipisci blanditiis porro, autem ipsa cum rerum inventore, quasi voluptas quibusdam dignissimos officiis.</p>'
            }
        }
        ]
    )
}

