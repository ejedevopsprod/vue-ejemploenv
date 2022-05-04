<template>
  <div>Hola insecto!!!</div>
  <div id="MyTitle">  
    {{VUE_APP_TITLE}}
  </div>
</template>

<script>
export default {
  name: "MyTitle",
  data() {
    return {
      VUE_APP_TITLE: process.env.VUE_APP_TITLE
    };
  }
};
</script>