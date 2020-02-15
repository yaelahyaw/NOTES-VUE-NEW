<template>
 <div class="formNotes">
    
    <form @submit="submitNote">
    <div class="menu">
        <button type="button" class="bg-danger btn btn-delete">Delete</button>
        <button type="submit" class="bg-success btn">Save</button>
    </div>

    <div class="content">
        <input type="text" class="text" placeholder="Title" v-model="title">
        <textarea class="text textarea" placeholder="Tuliskan rencana kamu...." v-model="description"></textarea>
    </div>
    </form>

 </div>
</template>

<script type="text/javascript">

 export default {
     name: 'formNotes',
     props: {
         propSaveNote : {
             type: Function
         }
     },
     data: function () {
         return{
             title: '',
             description: ''
         }
     },
     methods: {
         submitNote(e){
          e.preventDefault();
          this.propSaveNote(this.title, this.description);
         }
     }
 }

</script>
<style scoped>
.menu{
     background: #f7f7f7;
     padding:10px 25px;
     margin-bottom: 25px;
     text-align:right;
     border-bottom: 1px solid #e8e6e6;
}
.btn-delete{ margin-right:10px; }
.content{
     padding: 0px 25px;
}
.text{
     display: block;
     width: 100%;
     padding: 0px;
     font-size: 20px;
     font-weight: bold;
     color: #2c3e50;
     border: none;
     margin-bottom: 10px;
     box-sizing: border-box;
     outline: none;
}
.textarea{
     min-height: 350px;
     font-size: 15px;
     font-weight: lighter;
     line-height: 30px;
}
.loader{
     vertical-align: middle;
}
</style>