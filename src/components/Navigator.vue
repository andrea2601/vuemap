<template>
  <nav
    class="navbar navbar-dark"
    style="
      background-color: #60377c !important;
      border-bottom-right-radius: 0.55rem !important;
      border-bottom-left-radius: 0.55rem !important;
      width: 99.94%;
    "
  >
    <a class="navbar-brand d-flex flex-row border-0" href="#" id="logo"
      ><span class="full">vue</span>
      <h1>M</h1>
      <span class="full">app</span></a
    >
    <div class="align-bottom">
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item active p-3">
          <a class="nav-link text-light" href="#">
            <span class="short">H</span>
            <span class="full">Home (current)</span>
          </a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" href="#"><span class="short">A</span>
            <span class="full">Auto</span></a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" href="#"><span class="short">C</span>
            <span class="full">Contatti</span></a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" href="#"><span class="short">L</span>
            <span class="full">Login</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style>

.short {
  display: none;
}
nav {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
}

@media only screen and (orientation: portrait) {
  .short {
    display: inline-block;
  }
  .full {
    display: none;
  }

  h1{
    font-size: 40px !important;
  }
 
}
@media (max-width:350px) {
  ul{
    font-size: 20px !important;
  }
   nav {
    padding-right: 1rem !important;
    padding-left: 3rem !important;
}
}
@media (max-width:300px) {
  ul{
    font-size: 20px !important;
  }
   nav {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
}
}
@media (min-width:1366px) {
  ul{
    font-size: 20px !important;
  }
   nav {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
}
 #logo{
    font-size: 25px !important;
  }
 h1{
    font-size: 50px !important;
  }
}
@media (min-width:1920px) {
  ul{
    font-size: 30px !important;
  }
   nav {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
}
 #logo{
    font-size: 40px !important;
  }
 h1{
    font-size: 60px !important;
  }
}
</style>


