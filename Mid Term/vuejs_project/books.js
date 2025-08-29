const books = Vue.createApp({

    data(){
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Claire Mangacu',
            year: 2008
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
}
);
books.mount('#books')