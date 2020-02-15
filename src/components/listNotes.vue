<template>
 <div class="listNotes">
    <li v-for=" (row, index) in propNotes" :key="index"> 
        <button class="btn-note" @click="idNote(row.id)">
            <label> {{row.title}}</label>
            <span> {{row.description}}</span>
            
     </button>
    </li>
 </div>
</template>

<script type="text/javascript">

 export default {
     name: 'listNotes',
     data: function () {
         return{
         }
     },
         props: {
         propNotes : {
             type: Array
         },
         methods: {
             idNote(id){
                 console.log(id);
             }
         }
      },
     }

</script>
<style>
ul {
     list-style-type: none;
     padding: 0;
     margin:0px;
}
.btn-note {
     text-align: left;
     border: none;
     border-bottom: 1px solid gainsboro;
     padding: 0px 15px;
     cursor: pointer;
     outline: none;
     background: #f7f7f7;
     height: 150px;
     width: 100%;
}
.btn-note:hover {
     background:#eaeaea;
}
.btn-note label{
     display:block;
     color: #444444;
     font-size: 1.5em;
     margin-bottom: 15px;
}
.btn-note span{
    color: #545454;
}
</style>