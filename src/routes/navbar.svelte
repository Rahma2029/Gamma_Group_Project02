<script>
    export let kangLogoSrc = "Kangan_logo.png";
    export let vicLogoSrc = "tafe_vic.png";
</script>
  
<style>
    .navbar {
      background-color: #f6bc10;
      overflow: hidden;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      padding: 1.25rem;
      display: flex;
      align-items: center;
    }
  
    .navbar img {
      height: auto;
      max-height: 3rem;
      width: auto;
      margin-right: 1rem;
    }
</style>
  
  <div class="navbar">
    <img id="kangLogo" src={kangLogoSrc} alt="Kangan Logo">
    <img id="vicLogo" src={vicLogoSrc} alt="Tafe Victoria Logo">
  </div>
  