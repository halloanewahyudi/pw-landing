
export const useHome = () => {
    return useState('home', () => [
        {
            cover: {
                title: 'A digital agency focused on web',
                sub_title: 'PROWEB INDONESIA',
                description:'We are a creative team of designers, developers, strategists, and producers building elevated websites in the heart of Silicon Valley.'
            },
            potfolio:{
                title:'Featured Work',
                sub_title: 'Explore some of our latest website projects.',
                items:[
                    {
                        name:'Omnicom',
                        deacription:'loremipsum doloretsitamet',
                        image:'https://images.pexels.com/photos/28407210/pexels-photo-28407210/free-photo-of-mug-kopi-genggam-di-beachfront-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        link:''
                    },
                    {
                        name:'Sahid Group',
                        deacription:'loremipsum doloretsitamet',
                        image:'https://images.pexels.com/photos/27643474/pexels-photo-27643474/free-photo-of-tomate-verte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        link:''
                    },
                    {
                        name:'UInited Tractor',
                        deacription:'loremipsum doloretsitamet',
                        image:'https://images.pexels.com/photos/21837220/pexels-photo-21837220/free-photo-of-laut-liburan-orang-orang-masyarakat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        link:''
                    },
                    {
                        name:'Sany Perkasa',
                        deacription:'loremipsum doloretsitamet',
                        image:'https://images.pexels.com/photos/21837220/pexels-photo-21837220/free-photo-of-laut-liburan-orang-orang-masyarakat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        link:''
                    },
                    {
                        name:'Kawasan Industrri Dumai ',
                        deacription:'loremipsum doloretsitamet',
                        image:'https://images.pexels.com/photos/14280471/pexels-photo-14280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        link:''
                    },
                    {
                        name:'Smev moto',
                        deacription:'loremipsum doloretsitamet',
                        image:'https://images.pexels.com/photos/10778385/pexels-photo-10778385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        link:''
                    }
                ]
            }
        }
    ])
}