const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        gyms: [],
        nuevoGym: '',
    },
    methods:{
        agregarGym(){
            this.gyms.push({
                nombre: this.nuevoGym,
                estado: false
            })
            this.nuevoGym = "";
            localStorage.setItem('gym', JSON.stringify(this.gyms));
        },
        estado(id){
            this.gyms[id].estado = true
            localStorage.setItem('gym', JSON.stringify(this.gyms));
        },
        eliminar(id){
            this.gyms.splice(id,1)
            localStorage.setItem('gym', JSON.stringify(this.gyms));
        }
    },
    created(){
        let datosStorage = JSON.parse(localStorage.getItem('gym'));
        if (datosStorage === null) {
            this.gyms = [];
        }else{
            this.gyms = datosStorage;
        }
    }
})