const path=require('path')
module.exports={
  helpers:{
    toLowercase:function(name) {
      return name.toLocaleLowerCase();
    }
  },
  page: {
    output: path.join(__dirname,'views'),
    templates: [
      {
        name:'PageReducer',
        src:path.join(__dirname,'templates/views/PageReducer'),
        prompts:[]
      },
      {
        name:'PageSample',
        src:path.join(__dirname,'templates/views/PageSample'),
        prompts:[]
      }
    ]
  },
  component: {
    output: path.join(__dirname,'components'),
    templates: [
      {
        name:'ComSample',
        src:path.join(__dirname,'templates/components/ComSample'),
        prompts:[]
      }
    ]
  }
}