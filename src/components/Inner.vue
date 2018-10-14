<template>
  <div>    
    
    <p>{{ value }}</p>
    <button @click="change">to David</button>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";

export default {
    name: 'Inner',
    components: {        
        'VueFormGenerator': VueFormGenerator.component                      
    },
    props: ['value'],
    data () {
        return {            
          schema: {
            fields: [{
              type: "input",
              inputType: "text",
              label: "ID (disabled text field)",
              model: "id",
              readonly: true,
              disabled: true
            },{
              type: "checkbox",
              label: "Status",
              model: "status",
              default: true
            }]
          },
          formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
          }          
        }
    },    
    methods: {        
        LoadForm() {
            console.log('button clicked')   
        },
        change() {
          this.value.status = { test: "now an obj"}
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
