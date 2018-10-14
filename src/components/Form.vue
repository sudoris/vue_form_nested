<template>
  <div>
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    
    <p>{{ model }}</p>
    <button @click="change">Click me</button>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator"
import Inner from "./Inner"
// import { FieldObject } from "vfg-field-object";

export default {
    name: 'Form',
    components: {        
        'VueFormGenerator': VueFormGenerator.component,
        'Inner': Inner,
        // 'field-object': FieldObject                      
    },
    data () {
        return {                     
          model: {
            object: {
              field: "value1"
            }
          },
          schema: {
    fields: [
      {
        type: "object",
        label: "Object field",
        model: "object",
        schema: {
          fields: [
            {
              type: "input",
              inputType: "number",
              label: "Label",
              model: "number"
            },
            {
              type: "input",
              inputType: "text",
              label: "Field",
              model: "field"
            }
          ]
        }
      }
    ]
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
          this.model.object = { test: "test object success" }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
