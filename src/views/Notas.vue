<template>
    <div class="container">
        <h1>Notas</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Notas</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in notas" :key="index">
                    <th scope="row">{{item._id}}</th>
                    <td>{{item.nombre}}</td>
                    <td>{{item.descripcion}}</td>
                    <td>@fat</td>
                </tr>
               
            </tbody>
        </table>

   </div>
</template>

<script>

export default {
    data(){
        return{

            notas:[]


        }
        
    },
    created() {

        this.listarNotas();
    },

      
    methods: {

          listarNotas(){

            this.axios.get('/nota')
            .then(res=>{
                console.log(res.data)
                this.notas=res.data;
                
                })
                .catch(e=>{

                    console.log(e.response)
                })   

        }

    }


}
</script>
