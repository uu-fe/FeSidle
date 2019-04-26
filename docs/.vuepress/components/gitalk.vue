<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
  import 'gitalk/dist/gitalk.css'
  import Gitalk from 'gitalk'
  export default {
    name: 'gitalk',
    data() {
      return {};
    },
    mounted() {
      const gitalk = new Gitalk({
        clientID: '1b55b3c86a38eceef98c',
        clientSecret: 'c1d4977d8ccd8001a0123e482f806e2fff9ba8ee',
        repo: 'Fesidle',
        owner: 'fewalksideways',
        admin: ['fewalksideways'],
        id: location.pathname, // Ensure uniqueness and length less than 50
        distractionFreeMode: false // Facebook-like distraction free mode
      })
      gitalk.render('gitalk-container')
    },
  };
</script>